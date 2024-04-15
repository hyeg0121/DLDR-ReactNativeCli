import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducer.ts';
import {colors} from 'react-native-elements';
import ChatRoomHeader from '../../../components/student/chatting/ChatRoomHeader.tsx';
import ChattingTextField from '../../../components/student/chatting/ChattingTextField.tsx';

function ChatRoom(props: any) {
  const {id, profileImg, className, teacherName} = props.route.params;
  const userId = useSelector((state: RootState) => state.user.id);

  const sendMessage = async (message: any) => {
    try {
      await axios.post('http://localhost:3000/messages', {
        message,
        user_id: userId,
        chatroom_id: id,
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <ChatRoomHeader
        profileImg={profileImg}
        teacherName={teacherName}
        className={className}
      />
      <ScrollView style={styles.listContainer} />
      <ChattingTextField onSendMessage={sendMessage} />
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.white,
  },
});

export default ChatRoom;
