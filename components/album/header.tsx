import { AlbumProp, MusicProp } from "@/types/types";
import { Image, ImageBackground } from "expo-image";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

interface Props {
  album: AlbumProp | undefined;
  musicList: MusicProp[];
}
const { width } = Dimensions.get("screen");

const Header = ({ album, musicList }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={album?.image}
        blurRadius={10}
      >
        <Image source={album?.image} style={[styles.BackgroundImage]} />

        <ThemedText
          style={[styles.text, { fontFamily: "outfit-bold", marginTop: 4 }]}
        >
          {album?.name}
        </ThemedText>
        <View style={styles.view}>
          <ThemedText style={[styles.text, { textTransform: "capitalize" }]}>
            {
              album?.artist
              // .length > 1 ? album.artist.concat(" , ") : album.artist,
              //  .length > 1 ? "album" : "albums"
            }
          </ThemedText>

          {
            <ThemedText style={[styles.text, { textTransform: "capitalize" }]}>
              {musicList.length} {musicList.length <= 1 ? "song" : "songs"}
            </ThemedText>
          }
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { width: width, height: width * 0.8, zIndex: -1 },
  text: { fontFamily: "outfit", textTransform: "uppercase" },
  ImageBackground: {
    width: width,
    height: width * 0.8,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  BackgroundImage: {
    width: width / 2,
    height: width / 2,
    borderRadius: width,
  },
  view: {
    marginTop: 10,
    width: width * 0.4,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
