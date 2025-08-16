import Button from "@/components/ux/Button";
import { OnboadingData } from "@/constants/onboarding";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from "react-native-reanimated";

const Onboading = () => {
  const router = useRouter();
  const { width } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleNext = async () => {
    if (currentIndex < OnboadingData.length - 1) {
      flatlistRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      await AsyncStorage.setItem("onboardingComplete", "true");
      router.replace("/(auth)");
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem("onboardingComplete", "true");
    router.replace("/(auth)");
  };

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={{ flex: 1, backgroundColor: "#000", paddingTop: 20 }}>
      <FlatList
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        data={OnboadingData}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={flatlistRef}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const imageScale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
            extrapolate: "clamp",
          });

          return (
            <View
              style={{
                width,
                alignItems: "center",
                padding: 20,
                paddingTop: 5,
                backgroundColor: "#000",
              }}
            >
              {currentIndex < OnboadingData.length - 1 && (
                <AnimatedTouchableOpacity
                  onPress={() => {
                    scale.value = withSequence(withSpring(0.95), withSpring(1));
                    handleSkip();
                  }}
                  style={[
                    {
                      backgroundColor: "#1a2238",
                      alignSelf: "flex-end",
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: 50,
                      paddingVertical: 6,
                      paddingHorizontal: 10,
                    },
                    animatedStyle,
                  ]}
                >
                  <Text style={{ color: "#4a4a4a4" }}>Skip</Text>
                  <AntDesign name="right" size={20} color="black" />
                </AnimatedTouchableOpacity>
              )}

              <Animated.View style={{ transform: [{ scale: imageScale }] }}>
                <Image
                  source={require("../../assets/images/logo_with_name.png")}
                  style={{ width: width * 0.8, height: 400 }}
                  contentFit="contain"
                />
              </Animated.View>
              <Animated.Text
                style={{
                  fontSize: 16,
                  color: "#FFf",
                  textAlign: "center",
                  fontFamily: "sofiaPro-medium",
                  width: width * 0.7,
                  marginTop: 15,
                  lineHeight: 22,
                  opacity,
                  textTransform: "capitalize",
                }}
              >
                {item.text}
              </Animated.Text>

              <Button
                style={{
                  marginTop: 100,
                  marginBottom: 50,
                  width: width * 0.8,
                  alignSelf: "center",
                  padding: 20,
                  backgroundColor: "blue",
                  borderRadius: 6,
                }}
                textStyle={{ fontFamily: "opensan-bold", fontSize: 20 }}
                title={
                  currentIndex === OnboadingData.length - 1
                    ? "Get Started"
                    : "Next"
                }
                onPress={handleNext}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                {OnboadingData.map((_, i) => {
                  const inputRange = [
                    (i - 1) * width,
                    i * width,
                    (i + 1) * width,
                  ];

                  const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [8, 8, 8],
                    extrapolate: "clamp",
                  });

                  const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ["gray", "white", "gray"],
                    extrapolate: "clamp",
                  });

                  return (
                    <Animated.View
                      key={i}
                      style={{
                        height: 8,
                        borderRadius: 4,
                        marginHorizontal: 5,
                        width: dotWidth,
                        backgroundColor,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Onboading;
