import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import MapView, { Marker } from "react-native-maps";

const index = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      {/* <Text>index</Text> */}
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 33.8523,
          longitude: 121.2108,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 33.8523, longitude: 121.2108 }}
          title="Harbour Bridge"
          description="Sydney Harbour Bridge is a bridge in Sydney, New South Wales, Australia, spanning the Sydney Harbour. Named after the Harbour Bridge, it connects the harbour to the city by passing over the Sydney Harbour Bridge Tunnel."
        />
      </MapView>
      <View style={styles.input}>
        <Feather
          name="search"
          size={18}
          color="black"
          // style={styles.icon}
        />
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => setSearch(text)}
          value={search}
          placeholder="Search Location"
        />
        <Feather
          name="map-pin"
          size={18}
          color="green"
          // style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },

  input: {
    position: "absolute",
    top: 20,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#D9D9D9",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginTop: 15,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 8,
  },

  inputText: {
    fontSize: 18,
    width: "90%",
    padding: 5,
  },
});

export default index;
