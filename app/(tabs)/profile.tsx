import ProfileCard from "@/components/profile/ProfileCard";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const Profile = (props: Props) => {
  return (
    <>
      <ThemedView style={[styles.container]} lightColor="#fff" darkColor="#000">
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <SafeAreaView>
            <ProfileCard />
          </SafeAreaView>
        </ScrollView>
      </ThemedView>
    </>
  );
};

export default Profile;

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
