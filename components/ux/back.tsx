import { useMusicCreation } from "@/context/musicContext";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";

const Back = () => {
  const { router } = useMusicCreation();
  return (
    <Pressable
      style={{
        padding: 7,
        backgroundColor: "white",
        position: "absolute",
        width: 30,
        height: 30,
        top: 20,
        justifyContent: "center",
        alignItems: "center",
        left: 20,
        borderRadius: 30,
      }}
      onPress={() => router.back()}
    >
      <MaterialIcons name="chevron-left" size={25} color={"black"} />
    </Pressable>
  );
};

export default Back;
