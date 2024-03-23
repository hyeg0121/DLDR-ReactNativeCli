import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors.tsx';

function SectionTitle(props: any) {
  const {title} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginBottom: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.black,
  },
});
export default SectionTitle;
