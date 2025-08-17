import { useColorScheme } from "@/hooks/useColorScheme";
import {
  EvilIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const TabIcon = ({ focused, Icon, title }: any) => {
    if (focused) {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Icon}
          <Text
            style={{
              color: "#1e90ff",
              fontSize: 10,
              textAlign: "center",
              fontFamily: "outfit-bold",
              marginTop: 5,
            width: '505%'
            }}
          >
            {title}
          </Text>
        </View>
      );
    }
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {Icon}
        <Text
          style={{
            color: "#888",
            fontSize: 10,
            textAlign: "center",
            fontFamily: "outfit",
            marginTop: 5,
          width: '505%'
          }}
        >
          {title}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
          height: 70,
          padding: 10,
        },
        tabBarActiveTintColor: "#1e90ff",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Home"
              Icon={
                <View
                  style={{
                    height: 28,
                    width: 28,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="home"
                    size={24}
                    color={focused ? "#1e90ff" : "gray"}
                  />
                </View>
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="teleportRoom"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Teleport Room"
              Icon={
                <View
                  style={{
                    height: 28,
                    width: 28,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="passport-biometric"
                    size={24}
                    color={focused ? "#1e90ff" : "gray"}
                  />
                </View>
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Library"
              Icon={
                <View
                  style={{
                    height: 28,
                    width: 28,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="my-library-music"
                    size={24}
                    color={focused ? "#1e90ff" : "gray"}
                  />
                </View>
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Profile"
              Icon={
                <View
                  style={{
                    height: 28,
                    width: 28,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EvilIcons
                    name="user"
                    size={24}
                    color={focused ? "#1e90ff" : "gray"}
                  />
                </View>
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
