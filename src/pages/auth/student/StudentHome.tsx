import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import BasicHeader from '../../../components/util/BasicHeader.tsx';
import {colors} from '../../../styles/colors.tsx';
import WeeklyStudyRecord from '../../../components/student/home/WeeklyStudyRecord.tsx';
import MainSlider from '../../../components/slider/MainSlider.tsx';
import SectionTitle from '../../../components/util/SectionTitle.tsx';
import PopularClassesContainer from '../../../components/student/home/PopularClassesContainer.tsx';

const {width} = Dimensions.get('window');

const radius: number = width / 2; // 가로 길이의 절반
function StudentHome() {
  return (
    <ScrollView style={styles.container}>
      <BasicHeader title={null} />
      <Text style={styles.welcomeTitle}>Welcome!</Text>
      <Text style={styles.subTitle}>User's Weekly Study</Text>
      {/*위클리*/}
      <WeeklyStudyRecord />
      <View style={styles.recentClassesSection}>
        <SectionTitle title="Recent Classes" />
        <MainSlider />
        <View style={styles.marginHeight30} />
        <SectionTitle title="Popular Classes" />
        <PopularClassesContainer />
      </View>
    </ScrollView>
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
  recentClassesSection: {
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
});

export default StudentHome;
