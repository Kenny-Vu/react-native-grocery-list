import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { v4 as uuidv4 } from "uuid";

const ItemAdder = ({ setItems }) => {
  const [input, setInput] = useState("");

  const onChangeInput = (textValue) => {
    setInput(textValue);
  };

  const addItem = (text) => {
    if (!input) {
      return;
    }
    setItems((prev) => {
      return [...prev, { id: uuidv4(), text }];
    });
    setInput("");
  };

  return (
    <View>
      <TextInput
        value={input}
        onChangeText={onChangeInput}
        style={styles.input}
        placeholder="Add Item..."
      />
      <TouchableOpacity onPress={() => addItem(input)} style={styles.btn}>
        <Text style={styles.btnText}>Add</Text>
        <AntDesign name="pluscircle" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 18,
  },
  btn: {
    backgroundColor: "rgba(255,215,0,0.3)",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});

export default ItemAdder;
