import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Item, Input } from "native-base";

function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <Item rounded style={styles.textBox}>
        <Input
          onChangeText={(text) => setQuery(text)}
          placeholder="Copy Your Text Here..."
        />
      </Item>
      <View style={styles.ButtoonGroupStyle}>
        <Button
          color="red"
          style={styles.clearButton}
          title="Clear"
          onPress={() => navigation.push("Search")}
        />
        <Button
          color="black"
          style={styles.checkButton}
          title="Check"
          onPress={() =>
            navigation.push("Result", {
              query,
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#E5E5E5",
  },
  textBox: {
    backgroundColor: "white",
    height: 90,
    width: 320,
    position: "relative",
    left: 19,
  },
  ButtoonGroupStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  clearButton: {
    padding: 10,
  },
  checkButton: {
    padding: 10,
  },
});

export default SearchScreen;
