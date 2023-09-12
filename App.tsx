import React from "react"

import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RootApp from "./src/screens";
import LogIn from "./src/screens/LogIn";
import SignUp from "./src/screens/SignUp";
import Weather from "./src/screens/Weather";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={RootApp}
          />
          <Stack.Screen
            name="LogIn"
            options={{ headerShown: false }}
            component={LogIn}
          />
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false }}
            component={SignUp}
          />
          <Stack.Screen
            name="Weather"
            options={{
              headerShown: false,
            }}
            component={Weather}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

