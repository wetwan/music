import { useMusicCreation } from "@/context/musicContext";
import { useThemeColor } from "@/hooks/useThemeColor";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Control = () => {
  const { handlePlayPause, isPlaying, handleNextSong, handlePrevSong, router } =
    useMusicCreation();
  const iconColor = useThemeColor({}, "icon");
  const accentColor = useThemeColor({}, "accent");
  // const router = useRouter();
  return (
    // <View style={styles.view}>
    //   <View>
    //     <MaterialCommunityIcons
    //       name="heart-plus-outline"
    //       color={"white"}
    //       size={18}
    //     />
    //   </View>
    //   <View style={[styles.view, { width: "50%", marginTop: 0 }]}>
    //     <TouchableOpacity onPress={() => handlePrevSong()}>
    //       <Feather name="skip-back" color={"white"} size={30} />
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() => {
    //         handlePlayPause();
    //       }}
    //     >
    //       {!isPlaying ? (
    //         <AntDesign name="playcircleo" color={"white"} size={30} />
    //       ) : (
    //         <AntDesign name="pausecircleo" color={Colors.blue} size={30} />
    //       )}
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => handleNextSong()}>
    //       <Feather name="skip-forward" color={"white"} size={30} />
    //     </TouchableOpacity>
    //   </View>
    //   <TouchableOpacity onPress={() => router.push("/music/playlist")}>
    //     <MaterialCommunityIcons
    //       name="playlist-music"
    //       color={"white"}
    //       size={18}
    //     />
    //   </TouchableOpacity>
    // </View>
    <View style={styles.view}>
      <View>
        <MaterialCommunityIcons
          name="heart-plus-outline"
          color={iconColor}
          size={18}
        />
      </View>

      <View style={[styles.view, { width: "50%", marginTop: 0 }]}>
        <TouchableOpacity onPress={handlePrevSong}>
          <Feather name="skip-back" color={iconColor} size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePlayPause}>
          {!isPlaying ? (
            <AntDesign name="playcircleo" color={iconColor} size={30} />
          ) : (
            <AntDesign name="pausecircleo" color={accentColor} size={30} />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNextSong}>
          <Feather name="skip-forward" color={iconColor} size={30} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push("/music/playlist")}>
        <MaterialCommunityIcons
          name="playlist-music"
          color={iconColor}
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
