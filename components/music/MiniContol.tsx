import { Colors } from "@/constants/Colors";
import { useMusicCreation } from "@/context/musicContext";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import TextTicker from "react-native-text-ticker";

import React from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import SoundWave from "./soundwave";

const MiniContol = () => {
  const {
    handlePlayPause,
    isPlaying,
    handleNextSong,
    handlePrevSong,
    router,
    currentSong,
    truncateText,
  } = useMusicCreation();
  return (
    <Pressable
      onPress={() => router.push("/music")}
      style={{
        position: "absolute",
        bottom: 40,
        left: 30,
        right: 30,
        zIndex: 1000,
        padding: 5,
        borderRadius: 12,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
      }}
    >
      <View style={[styles.view, { marginBottom: 5, marginTop: 5 }]}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Image
            source={currentSong.image}
            style={{ width: 30, height: 30, borderRadius: 50 }}
          />
          <TextTicker
            style={{
              textTransform: "capitalize",
              fontFamily: "outfit-bold",
              fontSize: 14, // match your original style
              color: "white",
            }}
            duration={5000}
            loop
            bounce={false}
            repeatSpacer={50}
            marqueeDelay={1000}
          >
            {currentSong.name || ""}
          </TextTicker>
        </View>

        <ThemedText
          style={{ textTransform: "capitalize", fontFamily: "outfit" }}
        >
          {truncateText(
            currentSong.artist.length > 1
              ? currentSong.artist.join(" ft ")
              : currentSong.artist,
            10
          )}
        </ThemedText>
      </View>
      <View style={[styles.view, { marginTop: 0 }]}>
        <TouchableOpacity onPress={() => handlePrevSong()}>
          <Feather name="skip-back" color={"white"} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handlePlayPause();
          }}
        >
          {!isPlaying ? (
            <AntDesign name="playcircleo" color={"white"} size={20} />
          ) : (
            <AntDesign name="pausecircleo" color={Colors.blue} size={20} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNextSong()}>
          <Feather name="skip-forward" color={"white"} size={20} />
        </TouchableOpacity>
      </View>
      <SoundWave />
    </Pressable>
  );
};

export default MiniContol;
const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginHorizontal: "auto",
  },
});
