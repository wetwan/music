import Downlaod from "@/components/album/donwload";
import Header from "@/components/album/header";
import { ThemedView } from "@/components/ThemedView";
import Back from "@/components/ux/back";
import MuiscList from "@/components/ux/MuiscList";
import { albums, musics } from "@/constants/music";

import { useMusicCreation } from "@/context/musicContext";
import { AlbumProp, MusicProp } from "@/types/types";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

const AlbumId = () => {
  const { albumId } = useLocalSearchParams();

  const { setPlaylist, isPlaying } = useMusicCreation();

  const [album, setalbum] = useState<AlbumProp | undefined>(undefined);
  const [musicList, setmusicList] = useState<MusicProp[]>([]);

  useEffect(() => {
    if (typeof albumId === "string") {
      const musicList = musics.filter((t) => t.album === albumId);
      const getAlbum = albums.find((d) => d.name === albumId);
      setPlaylist(musicList);
      setmusicList(musicList);

      setalbum(getAlbum);
    } else {
      console.error("albumId is missing or not a valid string");
    }
  }, [albumId]);
  return (
    <ThemedView style={[styles.container]}>
      <Back />
      <Downlaod />
      <Header album={album} musicList={musicList} />
      <FlatList
        data={musicList}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item, index }) => (
          <MuiscList item={item} index={index} />
        )}
      />
    </ThemedView>
  );
};

export default AlbumId;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
