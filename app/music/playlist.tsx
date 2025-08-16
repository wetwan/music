import { ThemedView } from "@/components/ThemedView";
import MuiscList from "@/components/ux/MuiscList";
import { useMusicCreation } from "@/context/musicContext";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";

const Playlist = () => {
  const { width, height } = Dimensions.get("screen");

  const { currentSong, handlePlayPause, isPlaying, playlist } =
    useMusicCreation();

  return (
    <ThemedView style={{ flex: 1}} lightColor="#fff" darkColor="#000">
      <View
        style={{
          width: width * 0.9,
          marginHorizontal: "auto",
          height: height / 2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          style={{
            padding: 7,
            backgroundColor: "white",
            position: "absolute",
            width: 30,
            height: 30,
            top: 20,
            justifyContent: "center",
            alignItems: "center",
            left: 20,
            borderRadius: 30,
          }}
          onPress={() => router.back()}
        >
          <MaterialIcons name="chevron-left" size={25} color={"black"} />
        </Pressable>
        <View>
          <MaterialCommunityIcons name="heart-plus" color={"white"} size={30} />
        </View>
        <TouchableOpacity
          onPress={() => router.replace("/music")}
          style={{
            width: width / 2,
            height: width / 2,
            borderRadius: width / 2,
            // shadowColor: Colors.coral,
            shadowColor: "white",
            shadowRadius: 19,
            elevation: 2,
            overflow: "hidden",
            shadowOpacity: 3,
            shadowOffset: {
              width: 0,
              height: 1,
            },
          }}
        >
          <Image
            source={currentSong.image}
            style={{
              width: width / 2,
              height: width / 2,
            }}
          />
        </TouchableOpacity>
        <Pressable
          onPress={() => {
            // router.push("/music");
            handlePlayPause();
            // playSound(playList[0].file);
          }}
        >
          {!isPlaying ? (
            <AntDesign name="play" color={"white"} size={30} />
          ) : (
            <AntDesign name="pause" color={"white"} size={30} />
          )}
        </Pressable>
      </View>
      <View style={{ width: width * 0.9, marginHorizontal: "auto" }}>
        <FlatList
          data={playlist}
          contentContainerStyle={{ padding: 5 }}
          renderItem={({ item, index }) => (
            <MuiscList item={item} index={index} />
          )}
        />
      </View>
    </ThemedView>
  );
};

export default Playlist;
