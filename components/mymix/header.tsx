import { useMusicCreation } from "@/context/musicContext";
import { Playlist } from "@/types/types";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";

interface HeaderProps {
  playlist: Playlist | undefined;
}

const Header = ({ playlist }: HeaderProps) => {
  const { isPlaying, handlePlayPause } = useMusicCreation();

  return (
    <View style={{ padding: 5 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "gray",
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            borderRadius: 30,
          }}
          onPress={() => router.back()}
        >
          <MaterialIcons name="chevron-left" size={25} color={"white"} />
        </Pressable>

        <Pressable onPress={() => null}>
          <Entypo name="dots-three-vertical" size={24} color="#4a4a4a" />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={playlist?.image}
            style={{ height: 60, width: 60, borderRadius: 60 }}
          />
          <ThemedText
            style={{
              fontFamily: "outfit-medium",
              textTransform: "capitalize",
            }}
          >
            {playlist?.name}
          </ThemedText>
        </View>
        <Pressable
          style={{
            width: 60,
            height: 60,
            borderWidth: 1,
            borderColor: "#ddd",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          }}
          onPress={handlePlayPause}
        >
          {!isPlaying ? (
            <Ionicons name="play" size={30} color="gray" />
          ) : (
            <Ionicons name="pause" size={30} color="gray" />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
