import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/colors.tsx';

function WeeklyStudyRecord() {
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <View style={styles.container}>
      {/*top section*/}
      <View style={styles.topSection}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/ep_arrow-left.png')}
          />
        </TouchableOpacity>
        <Text style={styles.topSectionText}>Third Week of June, 2024</Text>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/ep_arrow-right.png')}
          />
        </TouchableOpacity>
      </View>

      {/* bottom section */}
      <View style={styles.bottomSection}>
        {weekDays.map(day => (
          <View style={styles.dayItem}>
            <View style={styles.circle} />
            <Text>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 140,
    marginHorizontal: 18,
    borderRadius: 11,
  },
  topSection: {
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.lighten3,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
  },
  topSectionText: {
    color: colors.primary,
  },
  icon: {
    width: 16,
    height: 16,
  },
  bottomSection: {
    height: 100,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 27,
  },
  dayItem: {
    width: 20,
    gap: 4,
    alignItems: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
});
export default WeeklyStudyRecord;
