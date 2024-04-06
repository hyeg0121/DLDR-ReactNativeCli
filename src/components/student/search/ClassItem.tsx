import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/colors.tsx';

interface Props {
  id: string;
  thumbnail: string;
  name: string;
  teacher: string;
  starCount: number;
  isFavorite: boolean;
}

function ClassListItemComponent({
  id,
  thumbnail,
  name,
  teacher,
  isFavorite,
}: Props) {
  const navigation = useNavigation();

  const [isHearted, setIsHearted] = useState<boolean>(false);

  const handlePress = () => {
    navigation.navigate('ClassDetail', {id});
  };

  const toggleHeart = () => {
    setIsHearted(!isHearted);
  };

  return (
    <TouchableOpacity
      key={id}
      style={styles.classContainer}
      onPress={handlePress}>
      <View style={styles.thumbnailWrap}>
        <Image
          source={{uri: `http://localhost:3000/${thumbnail}`}}
          style={styles.image}
        />
      </View>

      <View style={styles.textInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.teacher}>{teacher}</Text>
        <View style={styles.stars}>
          <Image source={require('../../../assets/icons/star.png')} />
          <Image source={require('../../../assets/icons/star.png')} />
          <Image source={require('../../../assets/icons/star.png')} />
          <Image source={require('../../../assets/icons/star.png')} />
          <Image source={require('../../../assets/icons/star.png')} />
        </View>
      </View>
      <TouchableOpacity style={styles.heart} onPress={toggleHeart}>
        <Image
          source={
            isFavorite
              ? require('../../../assets/icons/selectedHeart.png')
              : require('../../../assets/icons/emptyHeart.png')
          }
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  thumbnailWrap: {
    width: 65,
    height: 65,
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
    height: 92,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 13,
    paddingHorizontal: 11,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: colors.gray1,
  },
  textInfo: {
    width: 185,
    margin: 16,
  },
  name: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 4,
  },
  teacher: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray4,
    marginBottom: 7,
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
  },
  heart: {
    height: '100%',
    justifyContent: 'center',
    marginRight: 12,
  },
});

export default ClassListItemComponent;
