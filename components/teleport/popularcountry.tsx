import { popularCountry } from "@/constants/teleport";
import { PopularCountryProp } from "@/types/types";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import Country from "./country";

const PopularCountry = () => {
  const [country, setCountry] = useState<PopularCountryProp[]>([]);
  const getCountry = async () => {
    setCountry(popularCountry);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <View style={styles.container}>
      <ThemedText style={styles.text}>Popular Country</ThemedText>
      <FlatList
        data={country}
        horizontal
        contentContainerStyle={{ paddingRight: 20 }}
        keyExtractor={(item, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Country item={item} />}
      />
    </View>
  );
};

export default PopularCountry;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: "outfit-bold",
  },
});
