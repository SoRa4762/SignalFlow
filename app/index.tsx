import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/custom/button";
import React from "react";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Picture1.png")}
        style={styles.img}
      />
      <Text>
        <Text style={styles.text1}>Smart</Text>
        <Text style={styles.text2}>Traffic</Text>
      </Text>
      <Text style={styles.text2}>Flow</Text>
      <Text style={styles.text3}>Clearing the way for the emergencies</Text>
      <View style={styles.link}>
        <Link href="/screens/landing/landing1">
          {/* <CustomButton
          title="Let's Get Started"
          iconName="arrow-right"
          onPress={() => console.log("Next!")}
          /> */}
          <Text style={styles.buttonText}>Let's Get Started</Text>
          <Feather name="arrow-right" size={18} color="white" />
        </Link>
      </View>
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
    // fontWeight: "900",
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
