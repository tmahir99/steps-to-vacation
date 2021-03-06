import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigation from "./Navigation/DrawerNavigation";
import Login from "./Containers/Login";
import Register from "./Containers/Register";
import Counter from "./Containers/Counter"

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={'Login'} component={Login} />
              <Stack.Screen name={'Register'} component={Register} />
              <Stack.Screen name={'HomeDrawer'} component={DrawerNavigation} />
              <Stack.Screen name={'Counter'} component={Counter} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
