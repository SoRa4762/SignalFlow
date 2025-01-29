import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";

type typeLink = {
  link: any;
  style?: any;
  text: string;
  textStyle?: any;
  iconSize?: number;
  iconColor?: string;
  iconName?: any;
};

const NextBtn = ({
  link,
  style,
  text,
  textStyle,
  iconSize = 18,
  iconColor = "#019A2C",
  iconName = "arrow-right",
}: typeLink) => {
  return (
    <View style={[styles.link, style]}>
      <Link href={link}>
        <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        <Feather name={iconName} size={iconSize} color={iconColor} />
      </Link>
    </View>
  );
};

export default NextBtn;

const styles = StyleSheet.create({
  link: {
    position: "absolute",
    bottom: 30,
    padding: 12,
    borderRadius: 6,
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    width: "100%",
  },
  textStyle: {
    color: "#019A2C",
    fontSize: 16,
    fontWeight: "500",
  },
  icon: {
    marginLeft: 8,
    fontSize: 2,
    // paddingLeft: 12,
    // fontWeight: "bold",
  },
});
