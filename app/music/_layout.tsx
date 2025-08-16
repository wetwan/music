import { Stack } from "expo-router";
import React from "react";

const MuiscLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="playlist" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MuiscLayout;
