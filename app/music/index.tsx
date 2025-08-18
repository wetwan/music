import Control from "@/components/music/control";
import SoundWave from "@/components/music/soundwave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useMusicCreation } from "@/context/musicContext";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import TextTicker from "react-native-text-ticker";

const { width, height } = Dimensions.get("screen");
const Music = () => {
  const { currentSong, isPlaying, position, duration } = useMusicCreation();

  const formatTime = (mills: number) => {
    const minutes = Math.floor(mills / 60000);
    const seconds = Math.floor((mills % 60000) / 1000);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <ThemedView style={{ flex: 1 }} lightColor="#fff" darkColor="#000">
      <ThemedView>
        <ImageBackground style={styles.imagepart} source={currentSong.image}>
          <Pressable
            style={{
              backgroundColor: "black",
              position: "absolute",
              width: 30,
              height: 30,
              top: 20,
              justifyContent: "center",
              alignItems: "center",
              left: 20,
              borderRadius: 30,
            }}
            onPress={() => router.replace("/(tabs)")}
          >
            <MaterialIcons name="chevron-left" size={25} color={"white"} />
          </Pressable>
          <View
            style={{
              position: "absolute",
              flexDirection: "row",
              bottom: 20,
              left: 0,
              right: 0,
              width: width,
              justifyContent: "space-between",
              padding: 10,
              zIndex: 4,
              alignItems: "center",
            }}
          >
            <View>
              <TextTicker
                style={{
                  color: "white",
                  textTransform: "capitalize",
                  fontFamily: "outfit-bold",
                  fontSize: 25,
                  width: 200,
                }}
                duration={5000}
                loop
                animationType="scroll"
                bounce={false}
                repeatSpacer={50}
                marqueeDelay={1000}
              >
                {currentSong.name || ""}
              </TextTicker>

              <TextTicker
                style={{
                  color: "white",
                  fontFamily: "outfit",
                  textTransform: "capitalize",
                  fontSize: 15,
                  marginTop: 10,
                  width: width * 0.5,
                }}
                duration={5000}
                loop
                bounce={false}
                animationType="scroll"
                repeatSpacer={50}
                marqueeDelay={100}
              >
                {currentSong.artist.length > 1
                  ? currentSong.artist.join(" ft ")
                  : currentSong.artist}
              </TextTicker>
            </View>
            <Pressable
              style={{
                paddingInline: 20,
                padding: 6,
                borderWidth: 1,
                borderColor: isPlaying ? Colors.blue : "white",
                borderRadius: 50,
                backgroundColor: isPlaying ? Colors.blue : "transparent",
              }}
            >
              {isPlaying ? (
                <AntDesign name="pausecircleo" size={24} color="white" />
              ) : (
                <AntDesign name="playcircleo" size={24} color="white" />
              )}
            </Pressable>
          </View>
        </ImageBackground>
      </ThemedView>

      <View>
        <View
          style={{
            flexDirection: "row",
            width: width * 0.9,
            justifyContent: "space-between",
            padding: 10,
            alignItems: "center",
            marginTop: 60,
            marginHorizontal: 20,
          }}
        >
          <View>
            <TextTicker
              style={{
                color: "white",
                textTransform: "capitalize",
                fontFamily: "outfit-bold",
                fontSize: 25,
                width: 200,
              }}
              duration={5000}
              loop
              animationType="scroll"
              bounce={false}
              repeatSpacer={50}
              marqueeDelay={1000}
            >
              {currentSong.name || ""}
            </TextTicker>
            <TextTicker
              style={{
                color: "white",
                fontFamily: "outfit",
                textTransform: "capitalize",
                fontSize: 15,
                marginTop: 10,
                width: width * 0.5,
              }}
              duration={5000}
              loop
              bounce={false}
              animationType="scroll"
              repeatSpacer={50}
              marqueeDelay={100}
            >
              {currentSong.artist.length > 1
                ? currentSong.artist.join(" ft ")
                : currentSong.artist}
            </TextTicker>
          </View>
          <Pressable style={{}}>
            <Entypo name="dots-three-horizontal" size={16} color="white" />
          </Pressable>
        </View>
        <View style={{ marginTop: 70 }}>
          <SoundWave />
          <View
            style={{
              flexDirection: "row",
              width: width * 0.87,
              justifyContent: "space-between",
              padding: 3,
              alignItems: "center",
              marginHorizontal: "auto",
              marginTop: -10,
            }}
          >
            <ThemedText
              style={{
                fontFamily: "outfit",
                textTransform: "capitalize",
                fontSize: 12,
                color: Colors.secondary,
              }}
            >
              {formatTime(position)}
            </ThemedText>
            <ThemedText
              style={{
                fontFamily: "outfit",
                textTransform: "capitalize",
                fontSize: 12,
                color: Colors.secondary,
              }}
            >
              {formatTime(duration)}
            </ThemedText>
          </View>
        </View>
        <Control />
      </View>
    </ThemedView>
  );
};

export default Music;

const styles = StyleSheet.create({
  imagepart: {
    height: height * 0.5,
    position: "relative",
    width: width,
    zIndex: -1,
  },
});
