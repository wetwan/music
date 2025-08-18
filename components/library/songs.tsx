import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import Downlaod from "./Downlaod";
import Phone from "./phone";

const Songs = () => {
  const [gallery, setGallery] = useState<string>("phone");
  return (
    <View style={styles.container}>
      <View style={styles.mapFlex}>
        <ThemedText
          style={[
            styles.text,
            {
              backgroundColor:
                gallery === "phone" ? Colors.blue : "transparent",
              padding: 5,
              paddingInline: 15,
              borderRadius: 4,
              borderWidth: gallery === "phone" ? 0 : 1,
              borderColor: gallery === "phone" ? "" : Colors.blue,
              color: gallery === "phone" ? "#fff" : Colors.blue,
            },
          ]}
          onPress={() => setGallery("phone")}
        >
          phone
        </ThemedText>
        <ThemedText
          style={[
            styles.text,
            {
              backgroundColor:
                gallery === "download" ? Colors.blue : "transparent",
              padding: 5,
              paddingInline: 15,
              borderRadius: 4,
              borderWidth: gallery === "download" ? 0 : 1,
              borderColor: gallery === "download" ? "" : Colors.blue,
              color: gallery === "download" ? "#fff" : Colors.blue,
            },
          ]}
          onPress={() => setGallery("download")}
        >
          download
        </ThemedText>
      </View>

      <View style={{ marginTop: 20, padding: 5 }}>
        {gallery === "phone" ? <Phone /> : <Downlaod />}
      </View>
    </View>
  );
};

export default Songs;

const styles = StyleSheet.create({
  container: { marginTop: 10, padding: 10 },
  text: { fontFamily: "outfit", textTransform: "capitalize" },
  mapFlex: {
    flexDirection: "row",
    gap: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  image: { height: 150, width: 150, borderRadius: 5 },
  map: {
    margin: 5,
    padding: 10,
    // borderWidth: 1,
    // borderColor: "#fff",
    borderRadius: 6,
    backgroundColor: "rgba(233, 199, 199, 0.09)",
    elevation: 6,
  },
});
