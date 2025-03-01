import { View, StyleSheet, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function CategoryList() {
  return (
    // FlatList 로 변경하기
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Vegetable</Text>
          <Text style={styles.countText}>1</Text>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Meat</Text>
          <Text style={styles.countText}>20</Text>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Freezer</Text>
          <Text style={styles.countText}>10</Text>
        </View>
      </View>

      <View style={styles.addContainer}>
        <AntDesign name="pluscircle" size={24} color="#c5c5c5" />
        <Text style={styles.addText}>New Category</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    margin: 6,
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoryBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    margin: 8,
    backgroundColor: "#242424",
    width: "45%",
    height: 70,
    borderRadius: 10,
  },
  categoryText: {
    color: "#c5c5c5",
    fontSize: 16,
    fontWeight: "bold",
  },
  countText: {
    color: "#c5c5c5",
    // fontSize: 12,
  },
  addContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    margin: 14,
    gap: 14,
  },
  addText: {
    color: "#c5c5c5",
    fontSize: 18,
    fontWeight: "bold",
  },
});
