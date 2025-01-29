import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SkipBtn = () => {
  return (
    <View style={style.container}>
      <Link href="/screens/auth/login/login">
        <Text style={style.text}>Skip</Text>
      </Link>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    right: 25,
  },
  text: {
    fontSize: 16,
  },

  link: {},
});

export default SkipBtn;
