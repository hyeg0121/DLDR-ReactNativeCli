import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/colors.tsx';

interface Props {
  step: number;
  name: string;
  introduction: number;
}

function CurriculumSliderItem({step, name, introduction}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.topInfo}>
        <Text>{step}</Text>
        <Text>{name}</Text>
        <Image source={require('../../../assets/icons/book.png')} />
      </View>
      <View style={styles.line} />
      <View style={styles.introductionWrap}>
        <Text style={styles.introduction}>{introduction}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    height: 126,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 12,
    marginRight: 16,
    marginTop: 3,
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.lighten2,
    borderRadius: 8,
  },
  topInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    marginTop: 12,
    width: '100%',
    height: 1,
    backgroundColor: colors.lighten2,
  },
  introductionWrap: {
    marginTop: 20,
    paddingHorizontal: 26,
  },
  introduction: {
    textAlign: 'center',
    color: colors.gray4,
    fontWeight: '300',
    fontSize: 11,
  },
});
export default CurriculumSliderItem;
