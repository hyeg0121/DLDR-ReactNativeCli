import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './src/pages/auth/SignIn';
import SignUp from './src/pages/auth/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StudentHome from './src/pages/student/StudentHome.tsx';
import SearchPage from './src/pages/student/search/SearchPage.tsx';
import MyLectureListPage from './src/pages/student/myclasses/MyLectureListPage.tsx';
import StudentChattingPage from './src/pages/student/chatroom/StudentChattingPage.tsx';
import StudentSettingPage from './src/pages/student/setting/StudentSettingPage.tsx';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@reduxjs/toolkit/query';
import ChooseUserType from './src/pages/auth/ChooseUserType.tsx';
import VerifyCode from './src/pages/auth/VerifyCode.tsx';
import VerifyLocation from './src/pages/auth/VerifyLocation.tsx';

// 로그인이 안 된 경우
export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ChooseUserType: undefined;
  VerifyCode: undefined;
  VerifyLocation: undefined;
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
          <Stack.Screen
            name="ChooseUserType"
            component={ChooseUserType}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VerifyCode"
            component={VerifyCode}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VerifyLocation"
            component={VerifyLocation}
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
              tabBarIcon: ({focused}) => (
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
            component={SearchPage}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}) => (
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
            component={MyLectureListPage}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}) => (
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
            component={StudentChattingPage}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}) => (
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
            component={StudentSettingPage}
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
