// app/register/StepOne.js
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function StepOne() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [formData, setFormData] = useState({
    modelName: "",
    vehicleType: "",
    plateNumber: "",
    address: "",
  });

  const handleNext = () => {
    // Add validation here
    router.push({
      pathname: "/screens/auth/register/step3",
      params: { ...params, ...formData },
    });
  };

  const handleBack = () => {
    // Add validation here
    router.push({
      pathname: "/screens/auth/register/step1",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicle Details</Text>
      <Text style={{ fontSize: 18, color: "#808080", marginBottom: 25 }}>
        Please Provide Us Your Vehicle Details for Paper Agreements.
      </Text>

      <Text style={styles.label}>Model Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Model Name"
        value={formData.modelName}
        onChangeText={(text) => setFormData({ ...formData, modelName: text })}
      />

      <Text style={styles.label}>Vehicle Type</Text>
      <TextInput
        style={styles.input}
        placeholder="car"
        value={formData.vehicleType}
        // keyboardType="email-address"
        onChangeText={(text) => setFormData({ ...formData, vehicleType: text })}
      />

      <Text style={styles.label}>Plate Number</Text>
      <TextInput
        style={styles.input}
        placeholder="BG 3456 CB"
        // keyboardType="phone-pad"
        value={formData.plateNumber}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="36 China Town"
        // keyboardType="phone-pad"
        value={formData.plateNumber}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "transparent",
          padding: 15,
          borderRadius: 6,
          borderWidth: 2,
          borderColor: "#019A2C",
          marginBottom: 20,
        }}
        onPress={handleBack}
      >
        <Text
          style={{
            color: "#019A2C",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// Shared styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20,
    // textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#019A2C",
    padding: 15,
    borderRadius: 6,
    marginBottom: 20,
    // flex: 0.48,
  },
  buttonBack: {
    backgroundColor: "#6c757d",
  },
  buttonDisabled: {
    backgroundColor: "#cccccc",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  placeholderImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "dashed",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});
