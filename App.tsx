import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import RootApp from "./screens";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp"

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name= "Home" options={{ headerShown: false }} component={RootApp} />
        <Stack.Screen name= "LogIn" options={{ headerShown: false }} component={LogIn} />
        <Stack.Screen name= "SignUp" options={{ headerShown: false }} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

