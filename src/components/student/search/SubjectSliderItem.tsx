import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/colors.tsx';

interface Props {
  name: string;
  count: number;
  onPress: () => void;
}

function SubjectSliderItem({name, count, onPress}: Props) {
  return (
    <TouchableOpacity style={styles.subjectItemContainer} onPress={onPress}>
      <Image
        source={require('../../../assets/exclude.png')}
        style={styles.image}
      />
      <View>
        <Text style={styles.subjectName}>{name}</Text>
        <Text style={styles.subjectCount}>{count}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  subjectItemContainer: {
    width: 120,
    height: 120,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  image: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: -5,
    top: -3,
  },
  subjectName: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.white,
    marginBottom: 8,
  },
  subjectCount: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.secondary1,
    marginBottom: 8,
  },
});

export default SubjectSliderItem;
