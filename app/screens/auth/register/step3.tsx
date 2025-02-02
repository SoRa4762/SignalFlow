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
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function StepOne() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // interface IFormData {
  //   cardNumber: Number;
  //   issuedDate: Date;
  //   drivingLicencePhoto: String;
  //   profilePhoto: String;
  // }

  const [formData, setFormData] = useState<any>({
    cardNumber: "",
    issuedDate: "",
    drivingLicencePhoto: "",
    profilePhoto: "",
  });
  const [date, setDate] = useState(new Date());

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
      pathname: "/screens/auth/register/step2",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documents Details</Text>
      <Text style={{ fontSize: 18, color: "#808080", marginBottom: 25 }}>
        Please Provide Us Your driving lisence and other details
      </Text>

      <Text style={styles.label}>Driving Licence Card</Text>
      <Text style={styles.label2}>Card Number</Text>
      <TextInput
        style={styles.input}
        placeholder="2345678901"
        value={formData.cardNumber}
        keyboardType="phone-pad"
        onChangeText={(text) => setFormData({ ...formData, cardNumber: text })}
      />

      <Text style={styles.label2}>Issued Date</Text>
      {/* <TextInput
        style={styles.input}
        placeholder="car"
        value={formData.vehicleType}
        onChangeText={(text) => setFormData({ ...formData, vehicleType: text })}
      /> */}
      {/* <DatePicker
        mode="date"
        date={new Date()}
        // onStateChange={(text) => setFormData({ ...formData, issuedDate: text })}
        // date={new Date()}
        // onDateChange={(date) => {
        //   setFormData({ ...formData, issuedDate: date });
        // }}
      /> */}
      {/* <DatePicker date={date} onDateChange={setDate} /> */}
      {/* <RNDateTimePicker
        // dateFormat="day month year"
        value={new Date()}
        mode="date"
        // onChange={setDate}
      /> */}

      <Text style={{ marginBottom: 30 }}>Should be a date picker here</Text>

      <Text style={styles.label}>Profile Photo</Text>
      <Text style={{ fontSize: 12, color: "#808080", marginBottom: 25 }}>
        Please provide us with a clear potrait picture of yourself. It should
        contain your face only.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="BG 3456 CB"
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
  label2: {
    fontSize: 12,
    marginBottom: 10,
  },
});
