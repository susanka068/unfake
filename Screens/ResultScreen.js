import * as React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

function ResultScreen({ route, navigation }) {
  const { query } = route.params;
  return (
    <View style={styles.container}>
      <Text>your string is : </Text>
      <Text>{query}</Text>
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
  },
  stretch: {
    width: 350,
    height: 350,
  },
});

export default ResultScreen;
