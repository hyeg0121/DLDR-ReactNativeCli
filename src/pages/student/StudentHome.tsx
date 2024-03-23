import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import BasicHeader from '../../components/util/BasicHeader.tsx';
import {colors} from '../../styles/colors.tsx';
import WeeklyStudyRecord from '../../components/student/home/WeeklyStudyRecord.tsx';
import SectionTitle from '../../components/util/SectionTitle.tsx';
import PopularClassesContainer from '../../components/student/home/PopularClassesContainer.tsx';
import RecentClassesSlider from '../../components/student/home/RecentClassesSlider.tsx';

const {width} = Dimensions.get('window');

function StudentHome() {
  return (
    <>
      <BasicHeader title={null} />
      <ScrollView style={styles.container}>
        <Text style={styles.welcomeTitle}>Welcome!</Text>
        <Text style={styles.subTitle}>User's Weekly Study</Text>
        {/*위클리*/}
        <WeeklyStudyRecord />
        <View style={styles.bottomSection}>
          <SectionTitle title="Recent Classes" />
          <RecentClassesSlider />
          <View style={styles.marginHeight30} />
          <SectionTitle title="Popular Classes" />
          <PopularClassesContainer />
        </View>
      </ScrollView>
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
});

export default StudentHome;
