import SocialLogin from "@/components/auth/socialLogin";
import Button from "@/components/ux/Button";
import Input from "@/components/ux/Input";
import { Image } from "expo-image";
import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";

const SignUp = () => {
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
          Create your free account
        </Text>
        <Input
          placeholder="Your full name"
          containerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          keyboardType="default"
        />
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
          keyboardType="email-address"
          iconType="AntDesign"
          iconName="lock"
        />
      </KeyboardAvoidingView>

      <Button
        title="create account"
        onPress={() => null}
        style={{
          width: "80%",
          marginInline: "auto",
          marginTop: 20,
          borderRadius: 50,
          padding: 17,
        }}
      />
      <SocialLogin name="Lgin" />
    </View>
  );
};

export default SignUp;
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
