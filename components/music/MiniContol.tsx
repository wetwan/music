import { Colors } from "@/constants/Colors";
import { useMusicCreation } from "@/context/musicContext";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import TextTicker from "react-native-text-ticker";

import React from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";
import SoundWave from "./soundwave";

const { width } = Dimensions.get("screen");

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
        position: "fixed",
        bottom: 100,
        width: width * 0.9,
        zIndex: 1000,
        padding: 5,
        marginHorizontal: "auto",
        borderWidth: 1,
        borderColor: "#aaa",
        left: 0,
        right: 0,
        alignContent: "center",
        alignSelf: "center",
        backgroundColor: "rgba(0, 0, 0, 0.70)",
        borderRadius: 10,
        shadowColor: "white",
        shadowRadius: 9,
        elevation: 2,
        overflow: "hidden",
        shadowOpacity: 0.3,
        shadowOffset: {
          width: 0,
          height: 1,
        },
      }}
    >
      <View style={[styles.view, { marginBottom: 10, marginTop: 10 }]}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Image
            source={currentSong.image}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
          <TextTicker
            style={{
              textTransform: "capitalize",
              fontFamily: "outfit-bold",
              fontSize: 16, // match your original style
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
          style={{ textTransform: "capitalize", fontFamily: "outfit-bold" }}
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
          <Feather name="skip-back" color={"white"} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handlePlayPause();
          }}
        >
          {!isPlaying ? (
            <AntDesign name="playcircleo" color={"white"} size={30} />
          ) : (
            <AntDesign name="pausecircleo" color={Colors.blue} size={30} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNextSong()}>
          <Feather name="skip-forward" color={"white"} size={30} />
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
