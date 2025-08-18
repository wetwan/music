/* eslint-disable react-hooks/exhaustive-deps */
import { recents } from "@/constants/music";
import { MusicProp } from "@/types/types";
import { Audio, AVPlaybackStatus } from "expo-av";
// import * as Audio from "expo-audio";
import * as MediaLibrary from "expo-media-library";
import { Router, useRouter } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Platform } from "react-native";

type MusicContextType = {
  sound: Audio.Sound | null;
  setSound: React.Dispatch<React.SetStateAction<Audio.Sound | null>>;
  setCurrentSongIndex: React.Dispatch<React.SetStateAction<number | null>>;
  currentSongIndex: number | null;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
  position: number;
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  currentSong: MusicProp;
  router: Router;
  playSound: (index: number) => void;
  handlePlayPause: () => Promise<void>;
  handleNextSong: () => Promise<void>;
  playlist: MusicProp[];
  setPlaylist: React.Dispatch<React.SetStateAction<MusicProp[]>>;
  handlePrevSong: () => Promise<void>;
  handleSeek: (value: number) => Promise<void>;
  getRecent: () => Promise<void>;
  recent: MusicProp[];
  setRecent: React.Dispatch<React.SetStateAction<MusicProp[]>>;
  truncateText(text: string | string[], length: number): string;
  tracks: MusicProp[];
  setTracks: React.Dispatch<React.SetStateAction<MusicProp[]>>;
  permission: boolean;
  setPermission: React.Dispatch<React.SetStateAction<boolean>>;
};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);

  const [playlist, setPlaylist] = useState<MusicProp[]>([]);
  const [recent, setRecent] = useState<MusicProp[]>([]);
  const currentSong: MusicProp =
    playlist[currentSongIndex ?? 0] || ({} as MusicProp);

  const [tracks, setTracks] = useState<MusicProp[]>([]);
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    const fetchMusic = async () => {
      // Handle mobile (iOS/Android) platform
      if (Platform.OS !== "web") {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== "granted") {
          setPermission(false);
          return;
        }
        setPermission(true);

        const media = await MediaLibrary.getAssetsAsync({
          mediaType: MediaLibrary.MediaType.audio,
        });

        const musicAssets = media.assets.map((asset) => ({
          id: asset.id,
          name: asset.filename || "Unknown",
          artist: ["Unknown Artist"],
          image: require("../assets/images/music.png"),
          file: asset.uri,
          duration: asset.duration ?? 0,
          mix: [],
          type: "audio",
        }));

        setTracks(musicAssets);
        setPlaylist(musicAssets);
      }
    };
    fetchMusic();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    let interval: number | null = null;

    if (sound && isPlaying) {
      interval = setInterval(async () => {
        const status = (await sound.getStatusAsync()) as AVPlaybackStatus;
        if (status.isLoaded && !status.didJustFinish) {
          setPosition(status.positionMillis);
          setDuration(status.durationMillis || 1);
        }
      }, 500);
    }
    return () => {
      if (interval !== null) clearInterval(interval);
    };
  }, [sound, isPlaying]);

  const getRecent = async () => {
    // Use recents directly instead of waiting for setState
    setRecent(recents);
    setPlaylist(recents);

    if (!isPlaying && recents.length > 0 && !sound && Platform.OS !== "web") {
      playSoundWithList(recents, 0);
    }
  };

  const playSoundWithList = async (list: any[], index: number) => {
    if (!list[index]?.file) {
      // If no file exists, stop any playback and exit
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }
      return;
    }

    // Check if we are trying to play the same song that is currently paused
    if (sound && currentSongIndex === index && !isPlaying) {
      await sound.playAsync();
      setIsPlaying(true);
      return;
    }

    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: list[index].file },
      { shouldPlay: true } // Start playing as soon as it's ready
    );

    // Set up the event listener for when the song finishes
    newSound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        // Logic to play the next song
        handleNextSong();
      }
    });

    // Update the state with the new sound object and playback status
    setIsPlaying(true);
    setSound(newSound);
    setCurrentSongIndex(index);
  };

  const playSound = (index: number) => {
    playSoundWithList(playlist, index);
  };

  const handlePlayPause = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }

    setIsPlaying(!isPlaying);
  };

  const handleNextSong = async () => {
    const nextIndex = ((currentSongIndex ?? 0) + 1) % playlist.length;
    playSound(nextIndex);
  };

  const handlePrevSong = async () => {
    const prevIndex =
      (currentSongIndex ?? 0) - 1 < 0
        ? playlist.length - 1
        : (currentSongIndex ?? 0) - 1;
    playSound(prevIndex);
  };

  const handleSeek = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value);
      setPosition(value);
    }
  };

  function truncateText(text: string | string[], length: number) {
    const str = Array.isArray(text) ? text.join(" ") : text;
    return str.length > length ? str.substring(0, length) + "..." : str;
  }

  useEffect(() => {
    // Run once when component mounts
    if (!isPlaying && !sound && recents.length > 0) {
      setRecent(recents);
      setPlaylist(recents);
      playSoundWithList(recents, 0); // play first recent immediately
    }
  }, []);

  return (
    <MusicContext.Provider
      value={{
        handleSeek,
        handlePrevSong,
        handlePlayPause,
        router,
        sound,
        setSound,
        setCurrentSongIndex,
        currentSong,
        currentSongIndex,
        setDuration,
        setIsPlaying,
        setPosition,
        isPlaying,
        position,
        duration,
        playSound,
        handleNextSong,
        playlist,
        setPlaylist,
        getRecent,
        setRecent,
        recent,
        truncateText,
        tracks,
        setPermission,
        setTracks,
        permission,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusicCreation() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusicCreation must be used within a MusicProvider");
  }
  return context;
}
