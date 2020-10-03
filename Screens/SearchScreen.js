import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Item, Input, Button, Text } from "native-base";
import axios from "axios";

function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  //const [render, setRender] = useState("fake");
  return (
    <View style={styles.container}>
      <Item rounded style={styles.textBox}>
        <Input
          ref={(input) => {
            this.textInput = input;
          }}
          onChangeText={(text) => setQuery(text)}
          placeholder="Copy Your Text Here..."
        />
      </Item>
      <View style={styles.ButtoonGroupStyle}>
        <Button
          danger
          style={styles.clearButton}
          onPress={() => {
            this.textInput._root.clear();
          }}
        >
          <Text style={styles.textStyle}>CLEAR</Text>
        </Button>
        <Button
          dark
          style={styles.checkButton}
          onPress={async () => {
            setLoading(true),
              axios
                .post("https://unfake.herokuapp.com/detect", null, {
                  params: { q: query },
                })
                .then((response) => {
                  setLoading(false),
                    navigation.push("Result", {
                      query,
                      val: response.data.msg,
                    });
                })
                .catch((err) => console.warn(err));
          }}
        >
          <Text style={styles.textStyle}>CHECK</Text>
        </Button>
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
    borderBottomEndRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomStartRadius: 10,
  },
  ButtoonGroupStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  clearButton: {
    padding: 10,
    height: 60,
    width: 120,
  },
  checkButton: {
    padding: 10,
    height: 60,
    width: 120,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default SearchScreen;
