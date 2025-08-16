import { PopularNightClubProp } from "@/types/types";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

interface Props {
  item: PopularNightClubProp;
}

const Club = ({ item }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View>
        <ThemedText
          style={[styles.text, { fontFamily: "outfit-bold", fontSize: 16 }]}
        >
          {item.name}
        </ThemedText>
        <ThemedText style={[styles.text]}>
          ({item.city}, {""} {item.country})
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default Club;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontFamily: "outfit",
    width: 100,
    textTransform: "capitalize",
  },
  image: {
    height: 120,
    width: 100,
    borderRadius: 20,
  },
});
