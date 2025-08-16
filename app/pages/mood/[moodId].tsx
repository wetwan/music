
import MiniContol from "@/components/music/MiniContol";
import Header from "@/components/mymix/header";
import { ThemedView } from "@/components/ThemedView";
import MuiscList from "@/components/ux/MuiscList";
import { mood, musics } from "@/constants/music";
import { useMusicCreation } from "@/context/musicContext";
import { MusicProp, Playlist } from "@/types/types";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MoodId = () => {
  const { moodId } = useLocalSearchParams();
  const { setPlaylist } = useMusicCreation();

  const [musicList, setMusicList] = useState<Playlist | undefined>(undefined);
  const [musicLists, setmusicLists] = useState<MusicProp[]>([]);
  useEffect(() => {
    if (typeof moodId === "string" && moodId.trim()) {
      const filteredMusicList = musics.filter((item) => item.type === moodId);

      const playlistDetails = mood.find((item) => item.name === moodId);
      setPlaylist(filteredMusicList);
      setmusicLists(filteredMusicList);
      setMusicList(playlistDetails);
    } else {
      console.error("moodid is missing or not a valid string");
    }
  }, [moodId, setPlaylist]);

  return (
    <>
      <ThemedView style={styles.container}>
        <SafeAreaView>
          <Header playlist={musicList} />
          <FlatList
            contentContainerStyle={{ padding: 20 }}
            keyExtractor={(item) => item.id}
            data={musicLists}
            renderItem={({ item, index }) => (
              <MuiscList item={item} index={index} />
            )}
          />
        </SafeAreaView>
      </ThemedView>
      <MiniContol />
    </>
  );
};

export default MoodId;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#000" },
});
