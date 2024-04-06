import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {colors} from '../../../styles/colors';

interface Props {
  subTitle: string;
  introduction: string;
}

const ClassIntroduction: React.FC<Props> = ({subTitle, introduction}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topIntro}>{subTitle}</Text>
      <Text style={styles.introduction}>{introduction}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderTopLeftRadius: 101,
    paddingVertical: 30,
    paddingHorizontal: 18,
    width: '100%',
    backgroundColor: colors.lighten4,
  },
  topIntro: {
    paddingHorizontal: 60,
    textAlign: 'center',
    fontSize: 27,
    fontWeight: '600',
  },
  videoContainer: {
    marginTop: 23,
    height: 220,
    width: '100%',
    backgroundColor: colors.black,
    position: 'relative',
    borderRadius: 8,
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.gray2,
  },
  introduction: {
    // paddingHorizontal: 18,
    marginTop: 30,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: '#525151',
    lineHeight: 24,
  },
});

export default ClassIntroduction;
