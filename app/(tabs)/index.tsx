import { Image, StyleSheet, View } from "react-native";

import CategoryList from "@/components/fridge/CategoryList";
import Header from "@/components/header";
import SearchInput from "@/components/SearchInput";

export default function FridgeScreen() {
  return (
    <View style={styles.appContainer}>
      <Header />
      <SearchInput />
      <CategoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#000",
  },
});
