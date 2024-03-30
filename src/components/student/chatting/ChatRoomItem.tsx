import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../styles/colors.tsx';

interface Props {
  id: number;
  profileImg: string;
  teacherName: string;
  className: string;
  resentMessage: string;
  resentTime: string;
}

function ChatRoomItem({
  id,
  profileImg,
  teacherName,
  className,
  resentMessage,
  resentTime,
}: Props) {
  const navigation = useNavigation();

  const goToChatRoom = useCallback(() => {
    navigation.navigate('ChatRoom', {id, profileImg, teacherName, className});
  }, []);

  return (
    <TouchableOpacity style={styles.chatRoomContainer} onPress={goToChatRoom}>
      <View style={styles.leftContainer}>
        <View style={styles.thumbnailWrap}>
          <Image
            source={{uri: `http://localhost:3000/${profileImg}`}}
            style={styles.profileImg}
          />
        </View>
        <View style={styles.textInfoContainer}>
          <View style={styles.teacherInfo}>
            <Text style={styles.teacherName}>{teacherName}</Text>
            <Text style={styles.className}>{className}</Text>
          </View>
          <Text style={styles.resentMessage}>{resentMessage}</Text>
        </View>
      </View>

      <Text style={styles.resentTime}>{resentTime}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chatRoomContainer: {
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    position: 'relative',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  textInfoContainer: {
    gap: 8,
  },
  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  thumbnailWrap: {
    width: 47,
    height: 47,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 25,
    marginRight: 16,
  },
  profileImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  teacherName: {
    fontSize: 17,
    fontWeight: '500',
  },
  className: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.lighten4,
  },
  resentMessage: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.gray4,
  },
  resentTime: {
    position: 'absolute',
    right: 23,
    top: 16,
    color: colors.gray4,
    fontSize: 11,
    fontWeight: '400',
  },
});

export default ChatRoomItem;
