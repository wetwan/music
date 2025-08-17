import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

const ProfileCard = () => {
  const [isnotification, setNotification] = useState(false);
  return (
    <>
      <View style={[styles.view, { alignItems: "flex-start", padding: 5 }]}>
        <View style={[styles.view, { gap: 10 }]}>
          <Image
            source={require("../../assets/images/image4.jpeg")}
            style={styles.image}
          />
          <View>
            <ThemedText style={[styles.text, { fontFamily: "outfit-medium" }]}>
              ProfileCard
            </ThemedText>
            <ThemedText style={[styles.text, { color: "gray" }]}>
              View Profile
            </ThemedText>
          </View>
        </View>
        <Pressable onPress={() => setNotification(!isnotification)}>
          {isnotification ? (
            <MaterialCommunityIcons name="bell-badge" size={24} color="red" />
          ) : (
            <MaterialCommunityIcons name="bell" size={24} color="gray" />
          )}
        </Pressable>
      </View>
      <View
        style={{
          borderWidth: 0.3,
          borderColor: "gray",
          marginTop: 20,
          width: "97%",
          alignSelf: "center",
        }}
      />
    </>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "outfit",
    fontSize: 14,
  },
});
