import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducer.ts';
import BasicHeader from '../../../components/util/BasicHeader.tsx';
import ChatRoomItem from '../../../components/student/chatting/ChatRoomItem.tsx';
import {colors} from '../../../styles/colors.tsx';

interface ChatRoom {
  id: number;
  teacher: {
    profile_img: string;
    name: string;
  };
  class: {
    name: string;
  };
  recent_message: {
    message: string;
    createdAt: string;
  } | null;
}

function ChatRoomList() {
  const {id} = useSelector((state: RootState) => state.user);
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ChatRoom[]>(
          `http://localhost:3000/users/${id}/chatrooms`,
        );
        setChatRooms(response.data);
      } catch (error) {
        console.error('Error fetching chat rooms:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BasicHeader title="Chatting" />
      <ScrollView style={styles.listContainer}>
        {chatRooms.map(room => (
          <ChatRoomItem
            key={room.id}
            id={room.id}
            profileImg={room.teacher.profile_img}
            teacherName={room.teacher.name}
            className={room.class.name}
            resentMessage={
              room.recent_message ? room.recent_message.message : ' '
            }
            resentTime={
              room.recent_message
                ? room.recent_message.createdAt.split('T')[0]
                : ' '
            }
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.white,
  },
});

export default ChatRoomList;
