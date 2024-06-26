import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BasicHeader from '../../components/util/BasicHeader.tsx';
import {colors} from '../../styles/colors.tsx';
import SectionTitle from '../../components/util/SectionTitle.tsx';
import Modal from 'react-native-modal';
import TeachersAllClassesContainer from '../../components/teacher/home/TeachersAllClassesContainer.tsx';
import TeacherProfileContainer from '../../components/teacher/home/TeacherProfileContainer.tsx';
import ModalContainer from '../../components/teacher/home/ModalContainer.tsx';

const {width} = Dimensions.get('window');

function TeacherHome() {
  return (
    <>
      <BasicHeader title={null} />
      <ScrollView style={styles.container}>
        <Text style={styles.welcomeTitle}>Welcome!</Text>
        <TeacherProfileContainer />
        <View style={styles.bottomSection}>
          <SectionTitle title="My Classes" />
          <TeachersAllClassesContainer />
        </View>
      </ScrollView>
      <ModalContainer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  halfCircle: {
    width: width,
    height: width / 2,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  welcomeTitle: {
    marginTop: 10,
    paddingHorizontal: 18,
    color: colors.secondary1,
    fontSize: 23,
    fontWeight: '600',
    backgroundColor: colors.primary,
  },
  subTitle: {
    marginBottom: 18,
    paddingHorizontal: 18,
    color: colors.white,
    fontSize: 17,
    fontWeight: '500',
    backgroundColor: colors.primary,
  },
  bottomSection: {
    height: '100%',
    paddingHorizontal: 18,
    marginTop: 30,
    paddingTop: 43,
    paddingBottom: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.white,
  },
  marginHeight30: {
    height: 30,
    backgroundColor: colors.white,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 18,
    right: 18,
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 22,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TeacherHome;
