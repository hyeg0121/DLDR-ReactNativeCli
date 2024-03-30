import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../styles/colors.tsx';
import {useNavigation} from '@react-navigation/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import React from 'react';

const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

function MyLectureHeader({title}) {
  const navigation = useNavigation();

  const toList = () => {
    navigation.navigate('MyLectureList');
  };

  return (
    <View style={[styles.header, {height: statusBarHeight + 102}]}>
      <TouchableOpacity onPress={toList}>
        <Image source={require('../../../assets/icons/back.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
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
  title: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 18,
  },
});
export default MyLectureHeader;
