import React, { useState } from "react";
import { View, Image, StyleSheet, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/chatbot.png")} style={styles.stretch} />
      <Button title="Get Started" onPress={() => navigation.push("Search")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
  },
  stretch: {
    width: 350,
    height: 350,
  },
});

export default HomeScreen;
