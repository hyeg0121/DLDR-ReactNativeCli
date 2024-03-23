import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatRoomList from './ChatRoomList.tsx';

const Stack = createNativeStackNavigator();
function StudentChatting() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'ChatRoomList'}
        component={ChatRoomList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default StudentChatting;
