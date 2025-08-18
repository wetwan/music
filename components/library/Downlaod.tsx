import { musics } from "@/constants/music";
import { useMusicCreation } from "@/context/musicContext";
import { MusicProp } from "@/types/types";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MuiscList from "../ux/MuiscList";

const Downlaod = () => {
  const [musicList, setmusicList] = useState<MusicProp[]>([]);
  const { setPlaylist } = useMusicCreation();

  useEffect(() => {
    setPlaylist(musics);
    setmusicList(musics);
  }, []);
  return (
    <View>
      {musicList.map((item, index) => (
        <MuiscList index={index} item={item} key={index} />
      ))}
    </View>
  );
};

export default Downlaod;

const styles = StyleSheet.create({});
