import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {colors} from '../../../styles/colors.tsx';
import SubjectSliderItem from './SubjectSliderItem.tsx';

interface SubjectData {
  name: string;
  classCount: number;
}

function SubjectSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [data, setData] = useState<SubjectData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<SubjectData[]>(
          'http://localhost:3000/subjects',
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {data.map(
          (_, index) =>
            index % 3 === 0 && (
              <TouchableOpacity
                key={index}
                style={[
                  styles.paginationDot,
                  index % 2 === currentIndex && styles.activeDot,
                ]}
                onPress={() => setCurrentIndex(index)}
              />
            ),
        )}
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
        {data.map(item => (
          <SubjectSliderItem
            name={item.name}
            count={item.classCount}
            onPress={() => 1}
          />
        ))}
      </ScrollView>
      {renderPagination()}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: 20,
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
  },
  inactiveItem: {
    position: 'relative',
  },
});

export default SubjectSlider;
