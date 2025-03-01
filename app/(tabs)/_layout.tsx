import { Tabs } from "expo-router";
import React from "react";
import { Platform, View, ViewStyle } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const iconWrapperStyle: ViewStyle = {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
  };

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            paddingTop: 10,
            borderTopWidth: 0,
          },
          default: {
            paddingTop: 10,
            height: 70,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Fridge",
          tabBarIcon: ({ color }) => (
            <View style={iconWrapperStyle}>
              <MaterialCommunityIcons size={28} name="fridge" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <View style={iconWrapperStyle}>
              <FontAwesome name="shopping-cart" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu", // Change this to whatever you want the tab title to be
          tabBarIcon: ({ color }) => (
            <View style={iconWrapperStyle}>
              <MaterialIcons name="dining" size={28} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings", // Change this to whatever you want the tab title to be
          tabBarIcon: ({ color }) => (
            <View style={iconWrapperStyle}>
              <MaterialIcons size={28} name="settings" color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
