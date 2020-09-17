// In App.js in a new project
import * as React from "react";
import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./Screens/SearchScreen";
import ResultScreen from "./Screens/ResultScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Image } from "react-native";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UnFake"
          component={HomeScreen}
          options={{
            headerTitle: "",
            headerLeft: () => (
              <Image
                source={require("./assets/unfake.png")}
                style={{ height: 80, width: 100 }}
              />
            ),
          }}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
