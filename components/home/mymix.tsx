import { yourMix } from "@/constants/music";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

const MyMix = () => {
  const [myMix, setMyMix] = useState<any[]>([]);
  const router = useRouter();
  const fetchMyMix = () => {
    setMyMix(yourMix);
  };
  useEffect(() => {
    fetchMyMix();
  }, []);
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <ThemedText style={{ fontFamily: "outfit-bold", fontSize: 16 }}>
        Mixed for you
      </ThemedText>
      <FlatList
        data={myMix}
        horizontal
        contentContainerStyle={{ paddingRight: 20 }}
        keyExtractor={(item, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              margin: 10,
              borderRadius: 20,
              position: "relative",
              overflow: "hidden",
              height: 160,
            }}
            onPress={() => {
              router.push({
                pathname: "/pages/mix/[mixId]",
                params: { mixId: item.name as string },
              });
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

export default MyMix;
