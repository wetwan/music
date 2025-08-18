import { Colors } from "@/constants/Colors";
import { MusicProp } from "@/types/types";
import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import { Alert, Pressable } from "react-native";
import { ThemedText } from "../ThemedText";

interface Props {
  setTracks: React.Dispatch<React.SetStateAction<MusicProp[]>>;
  setPlaylist: React.Dispatch<React.SetStateAction<MusicProp[]>>;
}

const PhonePicker = ({ setTracks, setPlaylist }: Props) => {
  const [isPicking, setIsPicking] = useState(false);

  const pickAudio = async () => {
    setIsPicking(true);
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "audio/*",
        multiple: true,
      });

      if (result.assets && result.assets.length > 0) {
        const pickedTracks: MusicProp[] = result.assets.map((asset, index) => ({
          id: asset.uri || `track-${index}`,
          name: asset.name || "Unknown",
          artist: ["Unknown Artist"], // ✅ must be array
          image: require("../../assets/images/music.png"), // placeholder
          file: asset.uri,
          mix: [], // ✅ must be array
          type: "audio",
        }));

        setTracks(pickedTracks);
        setPlaylist(pickedTracks);
      }
    } catch (error) {
      Alert.alert(
        "Error Selecting Media",
        "An error occurred. Please try again."
      );
      console.error("DocumentPicker error:", error);
    } finally {
      setIsPicking(false);
    }
  };

  return (
    <Pressable
      onPress={pickAudio}
      disabled={isPicking}
      style={{
        backgroundColor: !isPicking ? Colors.navyBlue : Colors.orange,
        padding: 10,
        width: "50%",
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 20,
      }}
    >
      <ThemedText style={{ fontFamily: "outfit" }}>
        {isPicking ? "Picking..." : "Get Music"}
      </ThemedText>
    </Pressable>
  );
};

export default PhonePicker;
