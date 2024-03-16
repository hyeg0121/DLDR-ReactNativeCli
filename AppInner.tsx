import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './src/pages/auth/SignIn';
import SignUp from './src/pages/auth/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './App.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
function AppInner() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;
