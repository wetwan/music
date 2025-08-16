import { ThemedText } from "@/components/ThemedText";
import { popularNightClub } from "@/constants/teleport";
import { PopularNightClubProp } from "@/types/types";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Club from "./club";

const Recent = () => {
  const [club, setClub] = useState<PopularNightClubProp[]>([]);
  const getClub = async () => {
    setClub(popularNightClub);
  };

  useEffect(() => {
    getClub();
  }, []);

  return (
    <View style={styles.container}>
      <ThemedText style={styles.text}>Recent Night Club</ThemedText>
      <FlatList
        data={club}
        numColumns={2}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        columnWrapperStyle={{
          justifyContent: "center",
        }}
        keyExtractor={(item, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Club item={item} />}
      />
    </View>
  );
};

export default Recent;
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
