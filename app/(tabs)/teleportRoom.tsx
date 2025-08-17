import PopularClub from "@/components/teleport/popularclub";
import PopularCountry from "@/components/teleport/popularcountry";
import Recent from "@/components/teleport/recent/recent";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TeleportRoom = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <ThemedView
          style={[styles.container]}
          lightColor="#fff"
          darkColor="#000"
        >
          <SafeAreaView>
            <View style={styles.view}>
              <MaterialCommunityIcons
                name="passport-biometric"
                size={24}
                    color={Colors.light.accent}
              />
              <ThemedText style={styles.text}>Teleport Room</ThemedText>
            </View>
            <PopularClub />
            <PopularCountry />
            <Recent />
          </SafeAreaView>
        </ThemedView>
      </ScrollView>
    </>
  );
};

export default TeleportRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "outfit-bold",
  },
  view: { flexDirection: "row", gap: 5, alignItems: "center" },
});
