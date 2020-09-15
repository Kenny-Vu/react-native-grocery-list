import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import ListItem from "./components/ListItem";

const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "Milk" },
    { id: uuidv4(), text: "Bread" },
    { id: uuidv4(), text: "Sugar" },
    { id: uuidv4(), text: "Coffee" },
  ]);

  // const removeItem = (id) => {
  //   setItems((prev) => {
  //     return prev.filter((item) => item.id !== id);
  //   });
  // };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
