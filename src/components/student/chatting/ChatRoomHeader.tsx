import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/colors.tsx';
import {useNavigation} from '@react-navigation/native';

interface Props {
  profileImg: string;
  teacherName: string;
  className: string;
}

function ChatRoomHeader({profileImg, teacherName, className}: Props) {
  const navigation = useNavigation();

  const toList = () => {
    navigation.navigate('ChatRoomList');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toList}>
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
    flexDirection: 'row',
    height: 118,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: 18,
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
    borderRadius: '50%',
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
