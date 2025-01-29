import { TouchableOpacity, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

type buttonInterface = {
  title: string;
  onPress: () => void;
  iconName?: any;
  iconSize?: number;
  iconColor?: string;
  style?: any;
  textStyle?: any;
};

export default function CustomButton({
  title,
  onPress,
  iconName,
  iconSize = 24,
  iconColor = "white",
  style,
  textStyle,
}: buttonInterface) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      {iconName && (
        <Feather
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#019A2C",
    padding: 13,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  icon: {
    marginLeft: 8,
    fontSize: 18,
    // fontWeight: "bold",
  },
});

// Usage:
// <CustomButton
//   title="Press Me"
//   iconName="arrow-right"
//   onPress={() => console.log('Pressed!')}
// />
