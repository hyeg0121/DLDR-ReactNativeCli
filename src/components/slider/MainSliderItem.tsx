import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/colors.tsx';

interface Props {
  name: string;
  teacher: string;
  introduction: string;
  thumbnail: string;
}

const RecentClassItem: React.FC<Props> = ({
  name,
  teacher,
  introduction,
  thumbnail,
}) => {
  const truncatedIntroduction =
    introduction.length > 50 ? `${introduction.slice(0, 50)}...` : introduction;

  return (
    <View style={styles.card}>
      <View style={styles.thumbnailWrap}>
        <Image
          source={{uri: `http://localhost:3000/${thumbnail}`}}
          style={styles.image}
        />
      </View>
      <View style={styles.textInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.teacher}>{teacher}</Text>
        <Text style={styles.introduction}>{truncatedIntroduction}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 120,
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginHorizontal: 16,
    marginTop: 3,
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.gray1,
    borderRadius: 8,
  },
  thumbnailWrap: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: colors.lighten2,
    marginRight: 30,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.primary,
    marginBottom: 4,
  },
  teacher: {
    fontSize: 8,
    fontWeight: '400',
    color: colors.lighten3,
    marginBottom: 8,
  },
  introduction: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.gray4,
    width: 170,
  },
});

export default RecentClassItem;
