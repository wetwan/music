import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

import React, { useState } from "react";
import {
  Platform,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface InputProps extends TextInputProps {
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  label?: string;
  labelStye?: TextStyle;
  iconType?: "Feather" | "MaterialIcons" | "AntDesign"; // choose icon set
  iconName?: string; // choose icon name
  iconColor?: string;
  iconSize?: number;
}

const Input = ({
  inputStyle,
  containerStyle,
  label,
  value,
  onFocus,
  secureTextEntry,
  labelStye,
  iconType = "Feather",
  iconName = "user",
  iconColor = "gray",
  iconSize = 24,
  ...prop
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const renderIcon = () => {
    switch (iconType) {
      case "MaterialIcons":
        return (
          <MaterialIcons
            name={iconName as any}
            size={iconSize}
            color={iconColor}
          />
        );
      case "AntDesign":
        return (
          <AntDesign name={iconName as any} size={iconSize} color={iconColor} />
        );
      default:
        return (
          <Feather name={iconName as any} size={iconSize} color={iconColor} />
        );
    }
  };

  return (
    <View style={{ paddingTop: 10, marginTop: 10 }}>
      {label && (
        <Text
          style={[
            labelStye,
            {
              textTransform: "capitalize",
              fontFamily: "outfit",
            },
          ]}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          containerStyle,
          {
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#aaa",
          },
        ]}
      >
        {renderIcon()}

        <TextInput
          style={[
            { flex: 1 },
            inputStyle,
            {
              outline: Platform.OS === "web" ? "none" : undefined,
              fontFamily: "outfit",
              color: "#aaa",
              outlineWidth: 0,
            },
          ]}
          onFocus={handleFocus}
          secureTextEntry={secureTextEntry && !showPassword}
          {...prop}
          placeholderTextColor="gray"
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setShowPassword((prev) => !prev)}
            style={{ marginLeft: 8 }}
          >
            {showPassword ? (
              <Feather name="eye-off" size={15} color={"gray"} />
            ) : (
              <Feather name="eye" size={15} color={"gray"} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
