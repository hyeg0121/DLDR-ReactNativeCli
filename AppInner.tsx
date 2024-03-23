import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './src/pages/auth/SignIn';
import SignUp from './src/pages/auth/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import StudentHome from './src/pages/auth/student/StudentHome.tsx';
import SearchClasses from './src/pages/auth/student/SearchClasses.tsx';
import MyClasses from './src/pages/auth/student/MyClasses.tsx';
import StudentChatting from './src/pages/auth/student/StudentChatting.tsx';
import StudentSetting from './src/pages/auth/student/StudentSetting.tsx';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@reduxjs/toolkit/query';

// 로그인이 안 된 경우
export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type LoggedInStudentParamList = {
  StudentHome: undefined;
  SearchClasses: undefined;
  MyClasses: undefined;
  StudentChatting: undefined;
  StudentSetting: undefined;
};

export type LoggedInTeacherParamList = {
  TeacherHome: undefined;
  EditClasses: undefined;
  TeacherChatting: undefined;
  TeacherChatroom: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  const userType = useSelector((state: RootState) => state.user.userType);

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
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
      ) : userType === 'student' ? (
        <Tab.Navigator>
          <Tab.Screen
            name="StudentHome"
            component={StudentHome}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused, color}) => (
                <Image
                  source={require('./src/assets/tabbar/home.png')}
                  style={{width: 21, height: 21}}
                  resizeMode="contain"
                  tintColor={focused ? '#1638D8' : '#B0BCF3'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="SearchClasses"
            component={SearchClasses}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused, color}) => (
                <Image
                  source={require('./src/assets/tabbar/search.png')}
                  style={{width: 21, height: 21}}
                  resizeMode="contain"
                  tintColor={focused ? '#1638D8' : '#B0BCF3'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="MyClasses"
            component={MyClasses}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused, color}) => (
                <Image
                  source={require('./src/assets/tabbar/classes.png')}
                  style={{width: 21, height: 21}}
                  resizeMode="contain"
                  tintColor={focused ? '#1638D8' : '#B0BCF3'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="StudentChatting"
            component={StudentChatting}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused, color}) => (
                <Image
                  source={require('./src/assets/tabbar/chatting.png')}
                  style={{width: 21, height: 21}}
                  resizeMode="contain"
                  tintColor={focused ? '#1638D8' : '#B0BCF3'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="StudentSetting"
            component={StudentSetting}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('./src/assets/tabbar/setting.png')}
                  style={{width: 21, height: 21}}
                  resizeMode="contain"
                  tintColor={focused ? '#1638D8' : '#B0BCF3'}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="StudentHome" component={StudentHome} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;
