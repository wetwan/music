import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TeleportRoom = () => {
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <ThemedView style={[styles.container]}></ThemedView>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default TeleportRoom;

// <MaterialCommunityIcons
//               name="passport-biometric"
//               size={24}
//               color={focused ? "#1e90ff" : "gray"}
//             />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#000",
  },
  text: {
    fontSize: 20,
    color: "#aaa",
    fontFamily: "outfit",
  },
});
