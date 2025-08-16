/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/ux/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {};

const Index = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    const checkOnboarding = async () => {
      const onboardingStatus = await AsyncStorage.getItem("onboardingComplete");
      if (onboardingStatus !== "true") {
        router.replace("/(auth)/Onboading");
      }
    };
    checkOnboarding();
  }, []);

  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: "Add Account",
  //     headerTitleAlign: "center",
  //     // HeaderTitle: "add account",
  //     headerTitleStyle: {
  //       color: "#fff",
  //     },
  //     headerShown: true,
  //     headerStyle: {
  //       backgroundColor: "#000",
  //       borderBottomWidth: 0,
  //       shadowOpacity: 0,
  //       elevation: 0,
  //     },
  //     headerRight: () => headerRight(),
  //     headerShadowVisible: false,
  //   });
  // }, []);
  const HeaderRight = () => {
    return (
      <Pressable style={{ alignSelf: "flex-end" }}>
        <AntDesign
          name="close"
          size={24}
          color="#4a4a4a"
          style={{ marginRight: 10 }}
        />
      </Pressable>
    );
  };

  return (
    <ThemedView style={styles.container} lightColor="#fff" darkColor="#000">
      {/* <Stack.Screen
        options={{
          headerShown: true,

          headerTitle: "Add Account",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#fff" },
          headerStyle: { backgroundColor: "#000" },
          headerShadowVisible: false,
          headerRight: () => headerRight(),
        }}
      /> */}

      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 40,
          paddingHorizontal: 16,
          backgroundColor: "#000",
        }}
      >
        <View />
        <ThemedText
          style={[
            styles.basictext,
            {
              alignItems: "center",
              alignSelf: "center",
              alignContent: "center",
              fontFamily: "outfit-bold",
              fontSize: 18,
            },
          ]}
          lightColor="#fff"
          darkColor="#000"
        >
          Add Account
        </ThemedText>
        <HeaderRight />
      </View>
      <View style={{ marginTop: 200 }}>
        <Image
          source={require("../../assets/images/name white.png")}
          style={styles.image}
        />
        <ThemedText
          style={[styles.basictext, { marginBottom: 100 }]}
          lightColor="#fff"
          darkColor="#000"
        >
          Millions of songs free on BeatBox
        </ThemedText>
      </View>
      <View>
        <Button
          title="Sign up free"
          onPress={() => router.replace("/(auth)/SignUp")}
          style={{
            width: "80%",
            marginHorizontal: "auto",
            paddingBlock: 20,
            borderRadius: 200,
          }}
          variant="block"
        />
        <Button
          title="Login"
          onPress={() => router.replace("/(auth)/Login")}
          variant="ghost"
          style={{ borderWidth: 0, marginBottom: 160 }}
        />
      </View>
      <Text style={[styles.basictext]}>
        Your beat your box, unlimited music no ads
      </Text>
    </ThemedView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#000",
  },
  basictext: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "outfit",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 5,
    marginInline: "auto",
  },
});
