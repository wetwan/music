import SocialLogin from "@/components/auth/socialLogin";
import Button from "@/components/ux/Button";
import Input from "@/components/ux/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Login = () => {
  const [isChecked, setIschecked] = useState(false);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/name white.png")}
        style={{
          width: 200,
          height: 200,
          marginHorizontal: "auto",
          marginTop: 50,
          marginBottom: 30,
        }}
      />
      <KeyboardAvoidingView>
        <Text
          style={[
            styles.text,
            { fontSize: 25, marginLeft: 30, fontFamily: "outfit-bold" },
          ]}
        >
          Welcome back!
        </Text>
        <Input
          placeholder="Enter your email"
          containerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          keyboardType="email-address"
          iconType="MaterialIcons"
          iconName="email"
        />
        <Input
          placeholder="Enter yout email"
          containerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          secureTextEntry
          keyboardType="default"
          iconType="AntDesign"
          iconName="lock"
        />
      </KeyboardAvoidingView>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 9,
          }}
        >
          <Pressable onPress={() => setIschecked(!isChecked)}>
            {isChecked ? (
              <MaterialIcons name="check-box" color="blue" size={20} />
            ) : (
              <MaterialIcons
                name="check-box-outline-blank"
                color="gray"
                size={20}
              />
            )}
          </Pressable>
          <Text
            style={[styles.text, { fontFamily: "outfit-bold", fontSize: 12 }]}
          >
            Remember me?
          </Text>
        </View>
        <Text
          style={[
            styles.text,
            {
              fontFamily: "outfit-bold",
              fontSize: 12,
              textTransform: "capitalize",
              color: "red",
            },
          ]}
        >
          forget password
        </Text>
      </View>
      <Button
        title="Login"
        onPress={() => router.replace("/(tabs)")}
        style={{
          width: "80%",
          marginInline: "auto",
          marginTop: 20,
          borderRadius: 50,
          padding: 17,
        }}
      />
      <SocialLogin name="Login" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  text: { color: "#aaa", fontFamily: "outfit", fontSize: 15 },
  containerStyle: {
    borderWidth: 1,
    width: "90%",
    marginInline: "auto",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    gap: 20,
  },
  inputStyle: { padding: 10, color: "#aaa" },
});
