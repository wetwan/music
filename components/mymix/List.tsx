import { useMusicCreation } from "@/context/musicContext";
import { MusicProp } from "@/types/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

type Props = {
  item: MusicProp;
  index: number;
};

const List = ({ item, index }: Props) => {
  const { playSound, setIsPlaying } = useMusicCreation();
  return (
    <TouchableOpacity
      onPress={() => {
        playSound(index);
        setIsPlaying(true);
      }}
      style={{
        flexDirection: "row",
        gap: 10,
        marginBottom: 20,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,

          alignItems: "center",
        }}
      >
        <Image
          source={item.image}
          style={{ height: 60, width: 60, borderRadius: 10 }}
        />
        <View>
          <ThemedText style={{ color: "white" }}>{item.name}</ThemedText>
          <ThemedText style={{ color: "white" }}>{item.artist}</ThemedText>
        </View>
      </View>
      <Pressable>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="gray" />
      </Pressable>
    </TouchableOpacity>
  );
};

export default List;
