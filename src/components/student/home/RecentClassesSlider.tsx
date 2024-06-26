import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/colors.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducer.ts';
import RecentClassItem from './RecentClassSliderItem.tsx';

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

function RecentClassSliderComponent() {
  const [currentIndex, setCurrentIndex] = useState<number>(1); // 시작 인덱스를 1로 변경
  const [data, setData] = useState<ClassData[]>([]);

  const {id} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ClassData[]>(
          `http://localhost:3000/users/${id}/watch_histories`,
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
            <RecentClassItem
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
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
