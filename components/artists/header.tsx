import { AlbumProp, MusicProp } from "@/types/types";
import { Image, ImageBackground } from "expo-image";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { ThemedText } from "../ThemedText";
import Back from "../ux/back";

interface Props {
  playlist: MusicProp[];
  artistList:
    | {
        name: string;
        image: string;
      }
    | undefined;

  albumList: AlbumProp[];
}

const { width } = Dimensions.get("screen");

const Header = ({ playlist, artistList, albumList }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={artistList?.image}
        blurRadius={10}
      >
        <Image source={artistList?.image} style={[styles.BackgroundImage]} />
        <Back />
        <ThemedText
          style={[styles.text, { fontFamily: "outfit-bold", marginTop: 4 }]}
        >
          {artistList?.name}
        </ThemedText>
        <View style={styles.view}>
          <ThemedText style={[styles.text, { textTransform: "capitalize" }]}>
            {albumList.length} {playlist.length > 1 ? "album" : "albums"}
          </ThemedText>
          {
            <ThemedText style={[styles.text, { textTransform: "capitalize" }]}>
              {playlist.length} {playlist.length <= 1 ? "song" : "songs"}
            </ThemedText>
          }
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { width: width, height: width * 0.8 },
  text: { fontFamily: "outfit", textTransform: "uppercase" },
  ImageBackground: {
    width: width,
    height: width * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  BackgroundImage: {
    width: width / 2,
    height: width / 2,
    borderRadius: width,
  },
  view: {
    marginTop: 10,
    width: width * 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
