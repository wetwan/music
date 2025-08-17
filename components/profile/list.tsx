import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

interface listedProp {
  name: string;
  icon: React.JSX.Element;
  id: string;
  path: string;
}

const List = () => {
  const iconColor = useThemeColor({}, "icon");

  const list: listedProp[] = [
    {
      name: "Add Account",
      icon: <Ionicons name="add-circle-outline" size={22} color={iconColor} />,
      id: "1",
      path: "",
    },
    {
      name: "whats new",
      icon: <Ionicons name="paper-plane-outline" size={22} color={iconColor} />,
      id: "3",
      path: "",
    },
    {
      name: "records",
      icon: <MaterialIcons name="update" size={22} color={iconColor} />,
      id: "4",
      path: "",
    },
    {
      name: "settings",
      icon: <Ionicons name="settings-outline" size={22} color={iconColor} />,
      id: "5",
      path: "",
    },
    {
      name: "privacy",
      icon: <Ionicons name="eye-off-outline" size={22} color={iconColor} />,
      id: "6",
      path: "",
    },
    {
      name: "premuim",
      icon: (
        <MaterialIcons name="workspace-premium" size={22} color={iconColor} />
      ),
      id: "7",
      path: "",
    },
    {
      name: "tarck your feelings",
      icon: (
        <MaterialIcons name="ssid-chart" size={22} color={iconColor} />
      ),
      id: "7",
      path: "",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <View style={styles.icon}>{item.icon}</View>
            <ThemedText lightColor="#000" darkColor="#fff" style={styles.text}>
              {item.name}
            </ThemedText>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  icon: {
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: "outfit",
    textTransform: "capitalize",
    flex: 1,
  },
});
