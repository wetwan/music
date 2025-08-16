import { MusicProp } from "@/types/types";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { ThemedText } from "../ThemedText";
import MuiscList from "../ux/MuiscList";

type Props = {
  playlist: MusicProp[];
};

const Songs = ({ playlist }: Props) => {
  return (
    <View style={styles.container}>
      <ThemedText style={[styles.text]}>Songs</ThemedText>
      <FlatList
        data={playlist}
        renderItem={({ item, index }) => (
          <MuiscList item={item} index={index} />
        )}
      />
    </View>
  );
};

export default Songs;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },
  images: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  Pressable: {
    padding: 5,
    flexDirection: "row",
  },
  View: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
  text: {
    fontFamily: "outfit",
    textTransform: "capitalize",
  },
});
