import Ablum from "@/components/library/ablum";
import Songs from "@/components/library/songs";
import MiniContol from "@/components/music/MiniContol";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Library = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <ThemedView
            style={styles.container}
            lightColor="#fff"
            darkColor="#000"
          >
            <ThemedText
              style={{ fontFamily: "outfit", textTransform: "capitalize" }}
            >
              hello guest
            </ThemedText>
            <Ablum />
            <Songs />
          </ThemedView>
        </ScrollView>
        <MiniContol />
      </SafeAreaView>
    </>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});
