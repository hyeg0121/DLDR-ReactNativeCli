import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {colors} from '../../../styles/colors.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducer.ts';
import PopularClassItem from '../../student/home/PopularClassItem.tsx';

interface ClassData {
  name: string;
  teacher: any;
  introduction: string;
  thumbnail: string;
}

function TeachersAllClassesContainer() {
  const [classesData, setClassesData] = useState<ClassData[]>([]);
  const userId = useSelector((state: RootState) => state.user.id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ClassData[]>(
          `http://localhost:3000/users/${userId}/classes`,
        );
        setClassesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // const handleViewMore = () => {
  //   navigation.navigate('Search');
  // };

  return (
    <View style={styles.container}>
      {classesData.map((classItem, index) => (
        <PopularClassItem
          key={index}
          name={classItem.name}
          teacher={classItem.teacher.name}
          introduction={classItem.introduction}
          thumbnail={classItem.thumbnail}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  viewmore: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 19,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  viewmoreText: {
    color: colors.primary,
  },
  viewmoreImage: {
    width: 16,
    height: 16,
  },
});

export default TeachersAllClassesContainer;
