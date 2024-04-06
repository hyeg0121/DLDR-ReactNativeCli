import React, {useCallback} from 'react';
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
import {useNavigation} from '@react-navigation/native';

const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

function ClassDetailHeader({title}) {
  const navigation = useNavigation();

  const backToAllClasses = useCallback(() => {
    navigation.navigate('AllClasses');
  }, []);
  return (
    <View style={[styles.header, {height: statusBarHeight + 102}]}>
      <TouchableOpacity onPress={backToAllClasses}>
        <Image
          source={require('../../../assets/icons/whitebackarrow.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {/* TODO: 좋아요 토글 구현하기 */}
      <Image
        source={require('../../../assets/icons/navihear.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 18,
    paddingHorizontal: 18,
  },
  title: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 18,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default ClassDetailHeader;
