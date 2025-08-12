import { Stack } from "expo-router";

const AuthLayOut = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Onboading" />
      <Stack.Screen name="Login" />
      <Stack.Screen name="SignUp" />
    </Stack>
  );
};

export default AuthLayOut;
