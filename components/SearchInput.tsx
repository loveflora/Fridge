import { useState } from "react";
import { TextInput, View, StyleSheet, Keyboard, Pressable } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function SearchInput() {
  const [searchText, setSearchText] = useState("");

  function searchInputHandler(eneteredText: string) {
    setSearchText(eneteredText);
  }

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          onChangeText={searchInputHandler}
          value={searchText}
        />
        <EvilIcons
          name="search"
          size={20}
          color="#8a8a8a"
          style={styles.icon}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textInput: {
    width: "100%",
    padding: 10,
    paddingLeft: 30,
    backgroundColor: "#242424",
    color: "#c5c5c5",
    borderRadius: 6,
  },
  icon: {
    position: "absolute",
    left: 22,
  },
});
