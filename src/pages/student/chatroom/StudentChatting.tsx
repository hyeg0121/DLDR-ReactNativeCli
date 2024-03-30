import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatRoomList from './ChatRoomList.tsx';
import ChatRoom from './ChatRoom.tsx';

const Stack = createNativeStackNavigator();

export type StudentChattingParamList = {
  ChatRoomList: undefined;
  ChatRoom: undefined;
};

function StudentChatting() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'ChatRoomList'}
        component={ChatRoomList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ChatRoom'}
        component={ChatRoom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default StudentChatting;
