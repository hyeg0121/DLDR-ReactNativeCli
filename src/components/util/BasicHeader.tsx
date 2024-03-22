import React from 'react';
import {Image, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/colors.tsx';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

function BasicHeader({title}) {
  return (
    <View style={[styles.header, {height: statusBarHeight + 102}]}>
      {title ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        <Image
          source={require('../../assets/icons/headerlogo.png')}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: 18,
  },
  title: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 18,
  },
  image: {
    width: 30,
    height: 40,
    marginLeft: 19,
  },
});

export default BasicHeader;
