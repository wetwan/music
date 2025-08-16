import { AlbumProp } from "@/types/types";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

type Props = {
  albumList: AlbumProp[];
};

const Album = ({ albumList }: Props) => {
  return (
    <View style={{flex: 1}} >
      <ThemedText style={[styles.text, { marginTop: 20, padding: 10 }]}>
        list of artist album{" "}
      </ThemedText>
      <View style={styles.container}>
        {albumList.map((item) => (
          <TouchableOpacity key={item.id} style={styles.Pressable}>
            <Image source={item.image} style={styles.image} />
            <ThemedText style={[styles.text, {textAlign: 'center' , marginTop: 5}]}>{item.name}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Album;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    alignItems: "center",
  },
  text: { fontFamily: "outfit", textTransform: "capitalize" },
  image: {
    width: 100,
    height: 150,

    alignSelf: "center",
    borderRadius: 5,
  },
  Pressable: {
    width: 120,
    padding: 5,
    elevation: 7,

    backgroundColor: "rgba(0,0,0,0.9)",
    borderRadius: 5,
  },
});
