import { ThemedText } from "@/components/ThemedText";
import { PopularNightClubProp } from "@/types/types";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
  item: PopularNightClubProp;
}

const Club = ({ item }: Props) => {
  return (
        <TouchableOpacity style={styles.container}>
          <Image source={item.image} style={styles.image} />
    
          <ThemedText
            style={[
              styles.text,
              {
                fontFamily: "outfit-bold",
                fontSize: 16,
                position: "absolute",
                bottom: 20,
                alignSelf: "center",
                alignContent: "center",
                textAlign: 'center'
              },
            ]}
          >
            {item.name}
          </ThemedText>
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
    height: 160,
    width: 150,
    borderRadius: 20,
  },
});

