import { PopularCountryProp } from "@/types/types";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";

type Props = {
  item: PopularCountryProp;
};

const Country = ({ item }: Props) => {
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
        {item.country}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default Country;

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
