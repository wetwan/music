import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { ThemedView } from "../ThemedView";

const Downlaod = () => {
  const router = useRouter();
  return (
    <ThemedView lightColor="#fff" darkColor="#000">
      <Pressable
        style={{
          backgroundColor: "gray",
          position: "absolute",
          width: 30,
          height: 30,
          top: 20,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          right: 20,
          borderRadius: 30,
          zIndex: 5000000000,
          flex: 1,
        }}
        onPress={() => router.back()}
      >
        <MaterialIcons name="download" size={20} color={"white"} />
      </Pressable>
    </ThemedView>
  );
};

export default Downlaod;
