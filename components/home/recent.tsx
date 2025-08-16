import { useMusicCreation } from "@/context/musicContext";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

const Recent = () => {
  const { playSound, setCurrentSongIndex, recent } = useMusicCreation();

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <ThemedText style={{ fontFamily: "outfit-bold", fontSize: 16 }}>
        Recent
      </ThemedText>
      <FlatList
        data={recent}
        horizontal
        contentContainerStyle={{ paddingRight: 20 }}
        keyExtractor={(item, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              margin: 10,
              borderRadius: 20,
              position: "relative",
              overflow: "hidden",
              height: 180,
              padding: 5,
              width: 120,
              backgroundColor: "#4a4a4a",
              alignItems: "center",
            }}
            onPress={() => {
              playSound(index);
              setCurrentSongIndex(index);
              router.push("/music");
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                marginTop: 5,
                alignSelf: "center",
              }}
            />
            <ThemedText
              style={[
                styels.text,
                { marginTop: 10, fontFamily: "outfit-bold" },
              ]}
            >
              {item.name.length > 10
                ? `${item.name.slice(0, 10)}...`
                : item.name}
            </ThemedText>
            <ThemedText
              style={[
                styels.text,
                { textTransform: "capitalize", color: "#aaa" },
              ]}
            >
              {item.artist.length > 10
                ? `${item.artist.slice(0, 10)}...`
                : item.artist}
            </ThemedText>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Recent;

const styels = StyleSheet.create({
  text: {
    fontFamily: "outfit",
    textTransform: "capitalize",
    margin: 1,
    textAlign: "center",
  },
});
