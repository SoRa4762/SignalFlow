import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import CustomButton from "@/components/custom/button";
import CustomModal from "@/components/custom/modal";

const profile = () => {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 25, left: 15 }}>
        <Text style={{ fontSize: 24, fontWeight: "900" }}>
          <Text style={{ color: "#02BF38" }}>Signal</Text>
          <Text>Flow</Text>
        </Text>
      </View>
      <Image source={require("@/assets/images/PP.png")} style={styles.img} />
      <Text style={{ fontSize: 26, fontWeight: "500", margin: 12 }}>
        John Doe
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "#757575",
        }}
      >
        0410909989
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "#757575",
          // marginBottom: 80,
        }}
      >
        nerajanhero@gmail.com
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#B3B3B3",
          }}
        />
      </View>

      <CustomButton
        style={styles.btn}
        title="Personal Details"
        textStyle={styles.btnText}
        onPress={() => console.log("Change Password!")}
        iconName="chevron-right"
        iconColor="black"
      />
      <CustomButton
        style={styles.btn}
        title="Profile Picture"
        textStyle={styles.btnText}
        onPress={() => console.log("Change Password!")}
        iconName="chevron-right"
        iconColor="black"
      />
      <CustomButton
        style={styles.btn}
        title="Change Email"
        textStyle={styles.btnText}
        onPress={() => console.log("Change Password!")}
        iconName="chevron-right"
        iconColor="black"
      />
      <CustomButton
        style={styles.btn}
        title="Change Phone Number"
        textStyle={styles.btnText}
        onPress={() => console.log("Change Password!")}
        iconName="chevron-right"
        iconColor="black"
      />
      <CustomButton
        style={styles.btn}
        title="Change Password"
        textStyle={styles.btnText}
        onPress={() => console.log("Change Password!")}
        iconName="chevron-right"
        iconColor="black"
      />
      <CustomButton
        style={styles.btn}
        title="Vehicle Details"
        textStyle={styles.btnText}
        onPress={() => console.log("Change Password!")}
        iconName="chevron-right"
        iconColor="black"
      />
      <CustomButton
        style={styles.btn}
        title="Log Out"
        textStyle={styles.btnText}
        onPress={() => console.log("Change Password!")}
        iconName="chevron-right"
        iconColor="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: 1500,
  },

  btn: {
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },

  btnText: {
    color: "black",
    fontWeight: "light",
    fontSize: 18,
  },
});

export default profile;
