import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, TextInput, View } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const Search = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",

        alignItems: "center",
        flex: 1,
        backgroundColor: "#fff",
        width: "90%",
        borderRadius: 300,
        gap: 10,
        paddingHorizontal: 20,
        marginInline: "auto",
      }}
    >
      <MaterialIcons name="search" size={20} />
      <TextInput
        placeholder="Search"
        style={{ padding: 14, flex: 1, outlineWidth: 0 }}
      />
      <Pressable>
        <AntDesign
          name="close"
          size={24}
          color="#4a4a4a"
          style={{ marginRight: 10 }}
        />
      </Pressable>
    </View>
  );
};

export default Search;
