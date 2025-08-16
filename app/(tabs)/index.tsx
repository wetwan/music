import Header from "@/components/home/header";
import MyArtist from "@/components/home/myartist";
import MyMix from "@/components/home/mymix";
import Recent from "@/components/home/recent";
import Search from "@/components/home/search";
import TopArtist from "@/components/home/topartist";
import TopMoodSong from "@/components/home/topsong";
import MiniContol from "@/components/music/MiniContol";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <>
      <ThemedView style={[styles.container]} lightColor="#fff" darkColor="#000">
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <SafeAreaView>
            <Header />
            <Search />
            <MyMix />
            <TopMoodSong />
            <MyArtist />
            <TopArtist />
            <Recent />
          </SafeAreaView>
        </ScrollView>
      </ThemedView>
      <MiniContol />
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  text: {
    fontSize: 20,
    color: "#aaa",
    fontFamily: "outfit",
  },
});
