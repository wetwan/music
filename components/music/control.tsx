import { Colors } from "@/constants/Colors";
import { useMusicCreation } from "@/context/musicContext";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  setIsplaying: React.Dispatch<React.SetStateAction<boolean>>;
  isplaying: boolean;
  // index: number
};

const Control = ({ setIsplaying, isplaying }: Props) => {
  const {
    handlePlayPause,

    handleNextSong,
    handlePrevSong,
    router,
  } = useMusicCreation();
  // const router = useRouter();
  return (
    <View style={styles.view}>
      <View>
        <MaterialCommunityIcons
          name="heart-plus-outline"
          color={"white"}
          size={18}
        />
      </View>
      <View style={[styles.view, { width: "50%", marginTop: 0 }]}>
        <TouchableOpacity onPress={() => handlePrevSong()}>
          <Feather name="skip-back" color={"white"} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handlePlayPause();
          }}
        >
          {!isplaying ? (
            <AntDesign name="playcircleo" color={"white"} size={30} />
          ) : (
            <AntDesign name="pausecircleo" color={Colors.blue} size={30} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNextSong()}>
          <Feather name="skip-forward" color={"white"} size={30} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.push("/music/playlist")}>
        <MaterialCommunityIcons
          name="playlist-music"
          color={"white"}
          size={18}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Control;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginHorizontal: "auto",
    marginTop: 100,
  },
});
