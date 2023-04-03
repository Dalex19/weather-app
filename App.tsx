import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import RootApp from "./screens";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name= "Home" options={{ headerShown: false }} component={RootApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

