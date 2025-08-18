import { useMusicCreation } from "@/context/musicContext";
import { AlbumProp } from "@/types/types";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

interface Props {
  item: AlbumProp;
  index: number;
}

const Albums = ({ item, index }: Props) => {
  const { truncateText, router } = useMusicCreation();
  return (
    <TouchableOpacity
      key={index}
      style={styles.map}
      onPress={() => {
        router.push({
          pathname: "/pages/album/[albumId]",
          params: { albumId: item.name },
        });
      }}
    >
      <Image source={item.image} style={styles.image} />
      <View>
        <ThemedText
          style={[styles.text, { fontFamily: "outfit-medium", fontSize: 16 }]}
        >
          {item.name}
        </ThemedText>

        <ThemedText
          style={[styles.text, { fontFamily: "outfit", fontSize: 12 }]}
        >
          {truncateText(
            item.artist.length > 1 ? item.artist.concat(" , ") : item.artist,
            14
          )}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default Albums;

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
