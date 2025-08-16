import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

type Props = {
  name: string;
};

const SocialLogin = ({ name }: Props) => {
  const router = useRouter();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 9,
          width: "85%",
          marginHorizontal: "auto",
          marginBlock: 20,
        }}
      >
        <ThemedView
          style={{
            height: 1,
            borderWidth: 1,
            width: "30%",
            borderColor: "#aaa",
          }}
          lightColor="#fff"
          darkColor="#000"
        />
        <ThemedText style={[styles.text]} lightColor="#fff" darkColor="#000">
          or continue with
        </ThemedText>
        <ThemedView
          style={{
            height: 1,
            borderWidth: 1,
            width: "30%",
            borderColor: "#aaa",
          }}
          lightColor="#fff"
          darkColor="#000"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 9,
          width: "85%",
          marginHorizontal: "auto",
          marginBlock: 20,
        }}
      >
        <Pressable style={styles.box}>
          <Image
            source={require("../../assets/images/google.png")}
            style={styles.image}
          />
        </Pressable>
        <Pressable style={styles.box}>
          <Image
            source={require("../../assets/images/facebook.png")}
            style={styles.image}
          />
        </Pressable>
        <Pressable style={styles.box}>
          <Image
            style={styles.image}
            source={require("../../assets/images/instagram.svg")}
          />
        </Pressable>
      </View>
      {name === "Login" ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 9,
            justifyContent: "center",
            marginHorizontal: "auto",
            marginBlock: 20,
          }}
        >
          <ThemedText lightColor="#fff" darkColor="#000" style={[styles.text]}>
            I don&apos;t have an account?
          </ThemedText>
          <ThemedText
            style={[
              styles.text,
              { color: "#1e90ff", fontFamily: "outfit-bold" },
            ]}
            
            onPress={() => router.replace("/(auth)/SignUp")}
          >
            Create acctount
          </ThemedText>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 9,
            justifyContent: "center",
            marginHorizontal: "auto",
            marginBlock: 20,
          }}
        >
          <Text style={[styles.text]}>Already have an account? </Text>
          <Text
            style={[
              styles.text,
              { color: "#1e90ff", fontFamily: "outfit-bold" },
            ]}
            onPress={() => router.replace("/(auth)/Login")}
          >
            Login
          </Text>
        </View>
      )}
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  text: { color: "#aaa", fontFamily: "outfit", fontSize: 15 },
  image: { width: 30, height: 30 },
  box: {
    width: 40,
    height: 40,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
