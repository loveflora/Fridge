import { View, StyleSheet, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Buyer() {
  return (
    <View style={styles.cotainer}>
      <View style={styles.wrapper}>
        <FontAwesome5 name="money-bill" size={24} color="#676767" />
        <Text style={styles.title}>일괄 Buyer 지정</Text>
        <MaterialIcons name="arrow-drop-down" size={20} color="#676767" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cotainer: {
    marginHorizontal: 18,
    // paddingHorizontal: 16,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#676767",
    marginLeft: 10,
  },
});
