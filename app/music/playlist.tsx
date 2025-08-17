import { ThemedView } from "@/components/ThemedView";
import Back from "@/components/ux/back";
import MuiscList from "@/components/ux/MuiscList";
import { useMusicCreation } from "@/context/musicContext";
import { useThemeColor } from "@/hooks/useThemeColor";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";

const Playlist = () => {
  const { width, height } = Dimensions.get("screen");

  const { currentSong, handlePlayPause, isPlaying, playlist } =
    useMusicCreation();
  const iconColor = useThemeColor({}, "icon");
  const accentColor = useThemeColor({}, "accent");

  return (
    <ThemedView style={{ flex: 1 }} lightColor="#fff" darkColor="#000">
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
        <Back />
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
        <TouchableOpacity onPress={handlePlayPause}>
          {!isPlaying ? (
            <AntDesign name="playcircleo" color={iconColor} size={30} />
          ) : (
            <AntDesign name="pausecircleo" color={accentColor} size={30} />
          )}
        </TouchableOpacity>
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
