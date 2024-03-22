import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import MainSliderItem from './MainSliderItem.tsx';
import {colors} from '../../styles/colors.tsx';

interface ClassData {
  class: {
    name: string;
    introduction: string;
    thumbnail: string;
  };
  teacher: {
    name: string;
  };
}

const RecentClassSliderComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1); // 시작 인덱스를 1로 변경
  const [data, setData] = useState<ClassData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ClassData[]>(
          'http://localhost:3000/users/1/watch_histories',
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardPress = (index: number) => {
    console.log(`Card ${index + 1} pressed`);
  };

  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.activeDot,
            ]}
            onPress={() => setCurrentIndex(index)}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        onMomentumScrollEnd={event => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width,
          );
          setCurrentIndex(newIndex);
        }}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleCardPress(index)}>
            <MainSliderItem
              name={item.class.name}
              teacher={item.teacher.name}
              introduction={item.class.introduction}
              thumbnail={item.class.thumbnail}
              style={
                index === currentIndex ? styles.activeItem : styles.inactiveItem
              }
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 18,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  paginationDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.gray1,
    margin: 2,
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 20,
  },
  activeItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1, // 겹침 효과를 위한 z-index 설정
  },
  inactiveItem: {
    position: 'relative',
  },
});

export default RecentClassSliderComponent;
