import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors.tsx';

function SectionTitle({title}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.black,
  },
});
export default SectionTitle;
