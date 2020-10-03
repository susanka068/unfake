import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

function ResultScreen({ route, navigation }) {
  const { query, val } = route.params;
  const [truth, setTruth] = useState(false);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#E5E5E5",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    stretch: {
      width: 350,
      height: 350,
    },
    textBackground: {
      width: 140,
      height: 80,
      justifyContent: "space-around",
      backgroundColor: val === "REAL" ? "green" : "red",
    },
    ButtoonGroupStyle: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    textStyle: {
      color: "white",
      fontSize: 40,
      textAlign: "center",
      textAlignVertical: "center",
      textDecorationStyle: "dotted",
      fontWeight: "bold",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.textBackground}>
        <Text style={styles.textStyle}>{val}</Text>
      </View>
      <Button title="back" onPress={() => navigation.navigate("Search")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  stretch: {
    width: 350,
    height: 350,
  },
  textBackground: {
    width: 140,
    height: 80,
    justifyContent: "space-around",
  },
  ButtoonGroupStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textStyle: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationStyle: "dotted",
    fontWeight: "bold",
  },
});

export default ResultScreen;
