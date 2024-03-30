import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors} from '../../../styles/colors.tsx';

interface Props {
  profileImg: string;
  teacherName: string;
  className: string;
}

const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

function ChatRoomHeader({profileImg, teacherName, className}: Props) {
  const navigation = useNavigation();

  const goToList = useCallback(() => {
    navigation.navigate('ChatRoomList');
  }, []);

  return (
    <View style={[styles.header, {height: statusBarHeight + 102}]}>
      <TouchableOpacity onPress={goToList}>
        <Image source={require('../../../assets/icons/back.png')} />
      </TouchableOpacity>
      <View style={styles.row}>
        <View style={styles.thumbnailWrap}>
          <Image
            source={{uri: `http://localhost:3000/${profileImg}`}}
            style={styles.profileImg}
          />
        </View>
        <View>
          <Text style={styles.name}>{teacherName}</Text>
          <Text style={styles.className}>{className}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingHorizontal: 18,
    flexDirection: 'row',
    paddingBottom: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '500',
  },
  thumbnailWrap: {
    width: 34,
    height: 34,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 50,
    marginHorizontal: 16,
  },
  profileImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  className: {
    color: colors.lighten3,
    fontSize: 11,
    fontWeight: '400',
  },
});
export default ChatRoomHeader;
