/* eslint-disable react-hooks/exhaustive-deps */
import Album from "@/components/artists/ablum";
import Header from "@/components/artists/header";
import Songs from "@/components/artists/songs";
import MiniContol from "@/components/music/MiniContol";
import { ThemedView } from "@/components/ThemedView";
import { albums, artist, musics } from "@/constants/music";
import { useMusicCreation } from "@/context/musicContext";
import { AlbumProp, MusicProp } from "@/types/types";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ArtistId = () => {
  const { artistId } = useLocalSearchParams();
  const { setPlaylist, isPlaying } = useMusicCreation();

  const [artistList, setArtistList] = useState<
    { name: string; image: string } | undefined
  >(undefined);

  const [albumList, setalbumList] = useState<AlbumProp[]>([]);
  const [musicList, setmusicList] = useState<MusicProp[]>([]);

  useEffect(() => {
    if (typeof artistId === "string") {
      const filteredartistList = musics.filter(
        (item) => Array.isArray(item.artist) && item.artist.includes(artistId)
      );
      const filteredalbumList = albums.filter(
        (item) => Array.isArray(item.artist) && item.artist.includes(artistId)
      );
      const playlistDetails = artist.find(
        (item) => item.name === artistId // safer than comparing by name
      );

      const sortMuisc = filteredartistList.sort(
        (a, b) => Number(a.id) - Number(b.id)
      );
      setalbumList(filteredalbumList);
      setPlaylist(filteredartistList);
      setmusicList(sortMuisc);
      setArtistList(playlistDetails);
    } else {
      console.error("artistId is missing or not a valid string");
    }
  }, [artistId]);
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView>
          <ThemedView>
            <Header
              playlist={musicList}
              artistList={artistList}
              albumList={albumList}
            />
            <Album albumList={albumList} />
            <Songs playlist={musicList} />
          </ThemedView>
        </SafeAreaView>
      </ScrollView>
      {isPlaying === true && <MiniContol />}
    </>
  );
};

export default ArtistId;
