import { mood } from "@/constants/music";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

const TopMoodSong = () => {
  const [topMoodSong, setTopMoodSong] = useState<any[]>([]);
  const router = useRouter();

  const fetchMood = () => {
    setTopMoodSong(mood);
  };

  useEffect(() => {
    fetchMood();
  }, []);
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <ThemedText style={{ fontFamily: "outfit-bold", fontSize: 16 }}>
        Top recommendation
      </ThemedText>
      <FlatList
        data={topMoodSong}
        horizontal
        contentContainerStyle={{ paddingRight: 20 }}
        keyExtractor={(item, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: "/pages/mood/[moodId]",
                params: { moodId: item.name },
              });
            }}
            style={{
              margin: 10,
              borderRadius: 20,
              position: "relative",
              overflow: "hidden",
              height: 160,
            }}
          >
            <Image
              accessibilityLabel={item.name}
              source={item.image}
              style={{ width: 120, height: 160, objectFit: "cover" }}
            />
            <ThemedText
              style={{
                position: "absolute",
                fontFamily: "outfit-bold",
                bottom: 10,
                right: 10,
                textTransform: "capitalize",
                margin: 1,
                textAlign: "center",
              }}
            >
              {item.name.slice(0, 10)}
            </ThemedText>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopMoodSong;
