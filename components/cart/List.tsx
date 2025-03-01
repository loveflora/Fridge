import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function List() {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");

  return (
    <View style={styles.cotainer}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[styles.checkbox, checked && styles.checkboxChecked]}
          onPress={() => setChecked(!checked)} // 체크 상태 변경
        >
          {checked && <View style={styles.checkmark} />}
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter text"
          value={text}
          onChangeText={setText} // 텍스트 입력 상태 관리
        />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>일괄 Buyer 지정</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>일괄 Buyer 지정</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cotainer: {
    flex: 10,
    margin: 14,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#676767",
    // width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    borderWidth: 1,
  },
  title: {
    color: "#676767",
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    marginLeft: 4,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#676767", // 아이폰의 기본 체크박스 색상
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    borderWidth: 2,
    borderColor: "#007aff",
  },
  checkmark: {
    width: 16,
    height: 16,
    borderRadius: 7,
    backgroundColor: "#007aff",
  },
});
