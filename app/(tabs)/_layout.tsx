import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Image, Platform, StyleSheet, Switch, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="location.fill" color={color} />
          ),
        }}
      />
      {/* Toggle Tab */}
      <Tabs.Screen
        name="toggle"
        // This is a dummy screen that won't be used
        listeners={{
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
            toggleSwitch();
          },
        }}
        options={{
          title: "Emergency Mode",
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: "center" }}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#007AFF" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          // Network image example (e.g., user profile photo)
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabIconContainer,
                focused && styles.tabIconContainerActive,
              ]}
            >
              <Image
                // source={
                //   // uri: "https://your-image-url.com/profile.jpg",
                //   require("@/assets/images/PP.png"),
                // }
                source={require("@/assets/images/PP.png")}
                style={styles.profilePhoto}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    padding: 2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "transparent",
  },
  tabIconContainerActive: {
    borderColor: "#007AFF",
  },
  profilePhoto: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});
