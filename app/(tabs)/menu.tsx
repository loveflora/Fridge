import { StyleSheet, Image, Platform, View } from "react-native";

import Header from "@/components/header";
import SearchInput from "@/components/SearchInput";

export default function MenuScreen() {
  return (
    <View style={styles.appContainer}>
      <Header />
      <SearchInput />
      {/* <CategoryList /> */}
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
