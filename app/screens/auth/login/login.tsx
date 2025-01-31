import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/custom/button";
import { Link } from "expo-router";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 34, fontWeight: 800, marginBottom: 5 }}>
        WELCOME
      </Text>
      <Text style={{ fontSize: 18, color: "#808080", textAlign: "center" }}>
        Log in to continue your journey with seamless navigation and real-time
        updates.
      </Text>

      {/* <SafeAreaProvider>
        <SafeAreaView> */}
      <View style={{ width: "100%", marginTop: 50 }}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="johnwalker123@gmail.com"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="********"
          // keyboardType="numeric"
          secureTextEntry={true}
        />
        <View
          style={{
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <CustomButton
            onPress={() => {
              console.log("Logged in");
            }}
            title="Log In"
            style={{ marginTop: 10, marginBottom: 15 }}
          />
          <Text style={{ fontSize: 18, marginBottom: 15 }}>
            Forget Password?
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "#B3B3B3" }} />
          <View>
            <Text
              style={{
                width: 150,
                textAlign: "center",
                color: "#B3B3B3",
                fontSize: 18,
              }}
            >
              Or Continue With
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "#B3B3B3" }} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
            marginTop: 40,
          }}
        >
          <Image
            source={require("@/assets/images/google.png")}
            style={{ height: 40, width: 40, objectFit: "cover" }}
          />
          <Image
            source={require("@/assets/images/apple.png")}
            style={{ height: 40, width: 40, objectFit: "cover" }}
          />
        </View>
        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 50 }}>
          <Text>Not an User? </Text>
          <Link href="/screens/auth/register/step1">
            <Text style={{ color: "#019A2C" }}>Register</Text>
          </Link>
        </Text>
      </View>
      {/* </SafeAreaView>
      </SafeAreaProvider> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },

  label: {
    fontSize: 18,
  },

  //   input: {
  //     height: 40,
  //     width: "100%",
  //     margin: 12,
  //     borderWidth: 2,
  //     padding: 10,
  //     borderColor: "#D9D9D9",
  //   },

  input: {
    borderWidth: 2,
    borderColor: "#D9D9D9",
    padding: 15,
    width: "100%",
    // borderWidth: 2,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 20,
    fontSize: 16,
  },
});

export default login;
