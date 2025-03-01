import { StyleSheet, Image, Platform, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/header";
import SearchInput from "@/components/SearchInput";
import Buyer from "@/components/cart/Buyer";
import List from "@/components/cart/List";

export default function CartScreen() {
  return (
    <View style={styles.appContainer}>
      <Header />
      <SearchInput />

      {/* 구매자 지정 */}
      <Buyer />

      {/* 구매 항목 */}
      <List />
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
