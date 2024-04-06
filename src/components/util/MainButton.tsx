import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../styles/colors.tsx';

interface Props {
  label: string;
  handleOnClcik: object;
}
function MainButton({label, handleOnPress}: Props) {
  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.mainButton}>
      <Text style={styles.mainButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainButton: {
    marginVertical: 9,
    marginHorizontal: 18,
    borderRadius: 5,
    height: 46,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  mainButtonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '400',
  },
});

export default MainButton;
