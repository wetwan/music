import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, TextInput } from "react-native";
import { ThemedView } from "../ThemedView";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const Search = (props: Props) => {
  return (
    <ThemedView
      lightColor="#FFf"
      darkColor="#000"
      style={{
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#fff",
        borderWidth: 1,
        width: "90%",
        borderRadius: 300,
        gap: 10,
        paddingHorizontal: 20,
        marginInline: "auto",
        marginTop: 20,
      }}
    >
      <MaterialIcons name="search" size={20} />
      <TextInput
        placeholder="Search"
        style={{ padding: 16, flex: 1, outlineWidth: 0, fontFamily: "outfit" }}
        placeholderTextColor={"gray"}
      />
      <Pressable>
        <AntDesign
          name="close"
          size={24}
          color="#4a4a4a"
          style={{ marginRight: 10 }}
        />
      </Pressable>
    </ThemedView>
  );
};

export default Search;
