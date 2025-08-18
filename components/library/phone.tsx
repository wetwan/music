import { useMusicCreation } from "@/context/musicContext";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import MuiscList from "../ux/MuiscList";
import PhonePicker from "./phonePicker";

const Phone = () => {
  const { setPlaylist, tracks, permission, setTracks } = useMusicCreation();

  return (
    <View style={styles.container}>
      {!permission && Platform.OS !== "web" && (
        <ThemedText>Permission not granted</ThemedText>
      )}

      {Platform.OS === "web" && (
        <PhonePicker setTracks={setTracks} setPlaylist={setPlaylist} />
      )}
      <View style={{}}>
        {tracks.map((item, index) => (
          <MuiscList index={index} item={item} key={index} />
        ))}
      </View>
    </View>
  );
};

export default Phone;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
