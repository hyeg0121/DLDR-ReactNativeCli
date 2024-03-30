import React, {useCallback} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../styles/colors.tsx';

interface MyClassItemProps {
  id: number;
  thumbnail: string;
  name: string;
  teacher: string;
  introduction: string;
}

function MyLectureItem({id, thumbnail, name, teacher, introduction}) {
  const navigation = useNavigation();
  const truncatedIntroduction =
    introduction.length > 55
      ? `${introduction.substring(0, 55)}...`
      : introduction;

  const toLectureDetail = useCallback(() => {
    navigation.navigate('MyLecture', {id});
  }, [navigation]);

  return (
    <TouchableOpacity onPress={toLectureDetail}>
      <View style={styles.classContainer}>
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
        <View style={styles.iconContainer}>
          <Image
            style={styles.iconImage}
            source={require('../../../assets/icons/iconamoon_arrow-right_black.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  thumbnailWrap: {
    width: 65,
    height: 82,
    backgroundColor: colors.gray1,
    marginRight: 16,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  classContainer: {
    height: 108,
    flexDirection: 'row',
    marginBottom: 16,
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: colors.gray1,
  },
  textInfo: {
    width: 185,
    marginRight: 35,
  },
  name: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 7,
    color: colors.primary,
  },
  teacher: {
    fontSize: 8,
    fontWeight: '400',
    color: colors.gray4,
    marginBottom: 12,
  },
  introduction: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.gray5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
});

export default MyLectureItem;
