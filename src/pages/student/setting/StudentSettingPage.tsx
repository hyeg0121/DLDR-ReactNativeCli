import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/colors.tsx';
import BasicHeader from '../../../components/util/BasicHeader.tsx';
import UserProfile from '../../../components/student/setting/UserProfile.tsx';
import SettingMenuItem from '../../../components/student/setting/SettingMenuItem.tsx';

function StudentSettingPage() {
  return (
    <View style={styles.container}>
      <BasicHeader title="Profile" />
      <UserProfile />

      <SettingMenuItem
        name="Edit your Profile"
        imageName="edit"
        isLastItem="false"
      />
      <SettingMenuItem
        name="Announcement"
        imageName="announcement"
        isLastItem="false"
      />
      <SettingMenuItem
        name="Preference"
        imageName="preference"
        isLastItem="false"
      />
      <SettingMenuItem name="Favorite" imageName="favorite" isLastItem="true" />

      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
  },
  mainButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 139,
    alignContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  mainButtonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '400',
  },
});

export default StudentSettingPage;
