import { myArtist } from "@/constants/music";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

const MyArtist = () => {
  const [myArtists, setMyArtists] = useState<any[]>([]);
  const router = useRouter();
  const fetchMyArtist = () => {
    setMyArtists(myArtist);
  };
  useEffect(() => {
    fetchMyArtist();
  }, []);
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <ThemedText style={{ fontFamily: "outfit-bold", fontSize: 16 }}>
        Artists you like
      </ThemedText>
      <FlatList
        data={myArtists}
        horizontal
        contentContainerStyle={{ paddingRight: 20 }}
        keyExtractor={(item, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: "/pages/artist/[artistId]",
                params: { artistId: item.name },
              });
            }}
          >
            <View style={{ alignItems: "center", margin: 15, gap: 10 }}>
              <View
                style={{
                  borderRadius: 90,
                  width: 60,
                  height: 60,
                  overflow: "hidden",
                  alignContent: "center",
                }}
              >
                <Image
                  accessibilityLabel={item.name}
                  source={item.image}
                  style={{ width: 60, height: 60 }}
                />
              </View>
              <ThemedText
                style={{
                  fontFamily: "outfit-bold",

                  textTransform: "capitalize",
                  margin: 1,
                }}
              >
                {item.name.slice(0, 10)}
              </ThemedText>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MyArtist;
