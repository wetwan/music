import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";

const Header = () => {
  const [isnotification, setNotification] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,

        width: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          gap: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/logo beatbox.png")}
          style={{
            height: 40,
            width: 40,
            borderColor: "#fff",
            borderRadius: 60,
          }}
        />
        <ThemedText>hello, ridwan!</ThemedText>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          gap: 10,
          alignItems: "center",
        }}
      >
        <Pressable>
          <MaterialCommunityIcons name="heart-pulse" size={24} color="red" />
        </Pressable>
        <Pressable onPress={() => setNotification(!isnotification)}>
          {isnotification ? (
            <MaterialCommunityIcons name="bell-badge" size={24} color="red" />
          ) : (
            <MaterialCommunityIcons name="bell" size={24} color="white" />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
