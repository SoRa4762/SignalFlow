import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const register1 = () => {
  return (
    <View style={style.container}>
      <View style={style.flexRow}>
        <Text style={style.text1}>Registration</Text>
        <Text>
          <Text style={style.text2}>Step</Text>{" "}
          <Text style={{ color: "#019A2C", fontSize: 10 }}>1</Text>{" "}
          <Text style={style.text2}>of 3</Text>
        </Text>
      </View>
      <Text style={{ color: "#757575", marginTop: 16, fontSize: 18 }}>
        Please Provide Us Your Personal Details To Know You Better
      </Text>

      <Text style={style.label}>Name</Text>
      
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    padding: 20,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 20,
  },
  text1: {
    fontSize: 26,
    fontWeight: "600",
  },
  text2: {
    fontSize: 10,
  },
  label: {
    marginTop: 16,
    fontSize: 18,
  },
});

export default register1;
