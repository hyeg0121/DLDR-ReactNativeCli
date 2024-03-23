import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import PopularClassItem from './PopularClassItem.tsx';
import {colors} from '../../../styles/colors.tsx';

interface ClassData {
  name: string;
  teacher: any;
  introduction: string;
  thumbnail: string;
}

function PopularClassesContainer() {
  const [classesData, setClassesData] = useState<ClassData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ClassData[]>(
          'http://localhost:3000/classes',
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
      <TouchableOpacity style={styles.viewmore}>
        <Text style={styles.viewmoreText}>View more</Text>
        <Image
          style={styles.viewmoreImage}
          source={require('../../../assets/icons/iconamoon_arrow-down-2-light.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
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

export default PopularClassesContainer;
