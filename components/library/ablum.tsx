/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { albums } from "@/constants/music";
import { useMusicCreation } from "@/context/musicContext";
import { AlbumProp } from "@/types/types";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import Albums from "../ux/albums";

const Ablum = () => {
  const [ablum, setAblum] = useState<AlbumProp[]>([]);
  const { truncateText } = useMusicCreation();
  useEffect(() => {
    if (albums) {
      const myAlbum = albums.filter((d) => d.is === true);
      setAblum(myAlbum);
    }
  }, [albums]);

  return (
    <View style={styles.container}>
      <ThemedText style={[styles.text, { fontFamily: "outfit-bold" }]}>
        my albums
      </ThemedText>
      <View style={styles.mapFlex}>
        {ablum.map((item, index) => (
          <Albums item={item} index={index} key={index} />
        ))}
      </View>
    </View>
  );
};

export default Ablum;

const styles = StyleSheet.create({
  container: { marginTop: 10, padding: 10 },
  text: { fontFamily: "outfit", textTransform: "capitalize" },
  mapFlex: {
    flexDirection: "row",
    gap: 3,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  image: { height: 150, width: 150, borderRadius: 5 },
  map: {
    margin: 5,
    padding: 10,
    // borderWidth: 1,
    // borderColor: "#fff",
    borderRadius: 6,
    backgroundColor: "rgba(233, 199, 199, 0.09)",
    elevation: 6,
  },
});
