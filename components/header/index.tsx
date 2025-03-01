import React from "react";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.left}>
        <Ionicons name="person-add" size={24} color="#838383" />
        <View style={styles.memberList}>
          <Ionicons name="person-add" size={24} color="#838383" />
          <Ionicons name="person-add" size={24} color="#838383" />
          <Ionicons name="person-add" size={24} color="#838383" />
        </View>
      </View>
      <View>
        <MaterialCommunityIcons name="bell" size={24} color="#838383" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: { flexDirection: "row" },
  memberList: {
    marginLeft: 10,
    flexDirection: "row",
    gap: 2,
  },
});
