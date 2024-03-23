import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors.tsx';

interface Props {
  key: number | string;
  name: string;
  introduction: string;
  thumbnail: string;
}

const PopularClassItem: React.FunctionComponent<Props> = ({
  name,
  introduction,
  thumbnail,
}) => {
  const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <View style={styles.container}>
      <View style={styles.thumbnailWrap}>
        <Image
          source={{uri: `http://localhost:3000/${thumbnail}`}}
          style={styles.image}
        />
      </View>
      <View style={styles.textInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.introduction}>
          {truncateText(introduction, 40)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: '48%',
    backgroundColor: colors.gray4,
    justifyContent: 'flex-end',
    marginBottom: 16,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 7,
  },
  thumbnailWrap: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 7,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    objectFit: 'cover',
  },
  textInfo: {
    width: '100%',
    minHeight: 68,
    backgroundColor: colors.white,
    padding: 8,
    borderBottomStartRadius: 7,
    borderBottomEndRadius: 7,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 7,
  },
  introduction: {
    fontSize: 11,
    color: colors.gray4,
  },
  viewmore: {
    alignSelf: 'center',
    marginTop: 19,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  viewmoreText: {
    color: colors.primary,
  },
});

export default PopularClassItem;
