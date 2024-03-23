import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/colors.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '@reduxjs/toolkit/query';
import SettingMenuItem from './SettingMenuItem.tsx';

interface UserData {
  profile_img: string;
  user_type: string;
  name: string;
}

function UserProfile() {
  const {name, userType, profileImg} = useSelector(
    (state: RootState) => state.user,
  );

  console.log(useSelector((state: RootState) => state.user));

  console.log(`http://localhost:3000/${profileImg}`);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{
            uri: 'http://localhost:3000/uploads/profiles/1705892134231_profile1.jpeg',
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.userType}>{userType}</Text>
      <Text style={styles.userName}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  profile: {
    marginTop: 56,
    width: 102,
    height: 102,
    borderRadius: 51,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  userType: {
    marginTop: 12,
    color: colors.gray2,
    fontSize: 11,
  },
  userName: {
    fontSize: 27,
    fontWeight: '500',
    marginBottom: 52,
  },
});

export default UserProfile;
