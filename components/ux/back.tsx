import { useMusicCreation } from "@/context/musicContext";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import { ThemedView } from "../ThemedView";

const Back = () => {
  const { router } = useMusicCreation();
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
          left: 20,
          borderRadius: 30,
        }}
        onPress={() => router.back()}
      >
        <MaterialIcons name="chevron-left" size={25} color={"white"} />
      </Pressable>
    </ThemedView>
  );
};

export default Back;
