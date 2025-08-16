import { useMusicCreation } from "@/context/musicContext";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Svg, { Rect } from "react-native-svg";

const screenWidth = Dimensions.get("window").width;
const waveformData = Array.from(
  { length: 500 },
  () => Math.floor(Math.random() * 25) + 5
);
const SoundWave = () => {
  const { position, duration, handleSeek } = useMusicCreation();
  const width = screenWidth * 0.9; // Adjusted width
  const barWidth = width / waveformData.length;

  const tapGesture = Gesture.Tap().onEnd((event) => {
    const tappedBarIndex = Math.floor(event.x / barWidth);
    const newPosition = (tappedBarIndex / waveformData.length) * duration;
    handleSeek(newPosition);
  });

  return (
    <GestureDetector gesture={tapGesture}>
      <View style={[styles.container, { width: width }]}>
        <Svg height={50} width={width}>
          {waveformData.map((barHeight, i) => {
            const isPlayed = i / waveformData.length <= position / duration;
            return (
              <Rect
                key={i}
                x={i * barWidth}
                y={(50 - barHeight) / 2}
                width={barWidth * 0.6}
                height={barHeight}
                fill={isPlayed ? "#007AFF" : "#888"}
                rx={2}
              />
            );
          })}
        </Svg>
      </View>
    </GestureDetector>
  );
};

export default SoundWave;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingVertical: 10,
    alignSelf: "center",
  },
});
