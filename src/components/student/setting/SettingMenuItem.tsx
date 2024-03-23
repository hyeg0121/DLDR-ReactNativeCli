import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../styles/colors.tsx';

import edit from '../../../assets/icons/profile/ri_edit-line.png';
import announcement from '../../../assets/icons/profile/mingcute_announcement-line.png';
import preference from '../../../assets/icons/profile/uil_setting.png';
import favorite from '../../../assets/icons/profile/mdi_heart-outline.png';

function SettingMenuItem({name, imageName, isLastItem}) {
  const getSource = () => {
    switch (imageName) {
      case 'edit':
        return edit;

      case 'announcement':
        return announcement;

      case 'preference':
        return preference;

      case 'favorite':
        return favorite;

      default:
        return null;
    }
  };
  return (
    <View
      style={
        isLastItem
          ? StyleSheet.compose(styles.container, {
              borderBottomWidth: 1,
              borderBottomColor: colors.gray1,
            })
          : styles.container
      }>
      <Image style={styles.imageIcon} source={getSource()} />
      <Text style={styles.menuText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 18,
    alignItems: 'center',
    gap: 18,
    borderTopWidth: 1,
    borderTopColor: colors.gray1,
    paddingVertical: 17,
  },
  menuText: {
    color: colors.gray5,
    fontSize: 15,
  },
  menuBottomContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1,
  },
  imageIcon: {
    width: 24,
    height: 24,
  },
});

export default SettingMenuItem;
