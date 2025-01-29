import { View, Text, Image, StyleSheet } from "react-native";
import NextBtn from "@/components/custom/nextbtn";
import SkipBtn from "@/components/custom/skipbtn";
import React from "react";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";

const index = () => {
  return (
    <View style={styles.container}>
      <SkipBtn />
      <Image
        source={require("@/assets/images/Picture3.png")}
        style={styles.img}
      />
      <Text style={styles.text2}>Real-Time Navigation</Text>
      <Text style={styles.text3}>
        Enable location and let us guide you through the fastest, traffic-free
        routes every time.
      </Text>
      <NextBtn link="/screens/auth/login/login" text="Next" />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    width: "100%",
    height: 250,
    objectFit: "contain",
  },

  text1: {
    fontSize: 32,
    fontWeight: "900",
    color: "#02BF38",
  },

  text2: {
    fontSize: 32,
    fontWeight: "900",
    color: "#3D3B3B",
  },

  text3: {
    fontSize: 16,
    textAlign: "center",

    color: "#757575",
    marginTop: 12,
  },

  //   btn: {
  //     backgroundColor: "#019A2C",
  //     color: "#fff",
  //     width: 200,
  //     height: 50,
  //     borderRadius: 12,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginTop: 20,
  //   },

  link: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#019A2C",
    padding: 12,
    borderRadius: 6,
    flex: 1,
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
