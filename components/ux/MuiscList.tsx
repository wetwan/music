import { Colors } from "@/constants/Colors";
import { useMusicCreation } from "@/context/musicContext";
import { MusicProp } from "@/types/types";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

type Props = {
  item: MusicProp;
  index: number;
};

const MuiscList = ({ item, index }: Props) => {
  const {
    playSound,
    setCurrentSongIndex,
    currentSongIndex,
    handlePlayPause,
    isPlaying,
    truncateText,
  } = useMusicCreation();

  return (
    <TouchableOpacity
      onPress={() => {
        playSound(index);
        setCurrentSongIndex(index);
      }}
      style={{
        flexDirection: "row",
        padding: 10,
        margin: 5,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor:
          currentSongIndex === index ? Colors.blue : "transparent",
        borderWidth: currentSongIndex === index ? 1 : 0,
        borderRadius: currentSongIndex === index ? 10 : 0,
        borderColor: currentSongIndex === index ? Colors.blue : "transparent",
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          source={item.image}
          style={{ width: 50, height: 50, borderRadius: 30 }}
        />
        <View>
          <ThemedText
            style={{
              fontFamily: "outfit-bold",
              textTransform: "capitalize",
            }}
          >
            {item.name}
          </ThemedText>
          <ThemedText
            style={{
              fontFamily: "outfit",
              textTransform: "capitalize",
              fontSize: 15,
              color: "#4a4a4a",
            }}
          >
            {truncateText(
              item.artist.length > 1 ? item.artist.join(" ft ") : item.artist,
              30
            )}
          </ThemedText>
        </View>
      </View>
      <Pressable
        onPress={async () => {
          await playSound(index);
          handlePlayPause();
        }}
      >
        {isPlaying && currentSongIndex === index ? (
          <AntDesign name="pause" color={Colors.green} size={30} />
        ) : (
          <AntDesign name="play" color={"white"} size={30} />
        )}
      </Pressable>
    </TouchableOpacity>
  );
};

export default MuiscList;
