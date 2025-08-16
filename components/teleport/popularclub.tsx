import { popularNightClub } from "@/constants/teleport";
import { PopularNightClubProp } from "@/types/types";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import Club from "./club";

const PopularClub = () => {
  const [club, setClub] = useState<PopularNightClubProp[]>([]);
  const getClub = async () => {
    setClub(popularNightClub);
  };

  useEffect(() => {
    getClub();
  }, []);

  return (
    <View style={styles.container}>
      <ThemedText style={styles.text}>Popular Night Club</ThemedText>
      <FlatList
        data={club}
        horizontal
        contentContainerStyle={{ paddingRight: 20 }}
        keyExtractor={(item, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Club item={item} />}
      />
    </View>
  );
};

export default PopularClub;
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
