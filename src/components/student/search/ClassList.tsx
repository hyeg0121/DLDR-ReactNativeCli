import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducer.ts';
import ClassItem from './ClassItem.tsx';

interface ClassInfo {
  id: number;
  name: string;
  teacher: {
    name: string;
  };
  thumbnail: string;
  isFavorite: boolean;
}

interface Props {
  sorting: string;
}

function ClassList({sorting}: Props) {
  const [classList, setClassList] = useState<ClassInfo[]>([]);

  const userId = useSelector((state: RootState) => state.user.id);

  useEffect(() => {
    const fetchClassList = async () => {
      try {
        const response = await axios.get<ClassInfo[]>(
          `http://localhost:3000/classes?user_id=${userId}&sort=${sorting}`,
        );
        setClassList(response.data);
      } catch (error) {
        console.error('Error fetching class list:', error);
      }
    };

    fetchClassList();
  }, [sorting]);

  console.log(classList);

  return (
    <View>
      <FlatList
        data={classList}
        renderItem={({item}) => (
          <ClassItem
            id={item.id}
            name={item ? item.name : 'Loading'}
            teacher={item ? item.teacher.name : 'Loading'}
            thumbnail={item ? item.thumbnail : 'Loading'}
            isFavorite={item ? item.isFavorite : false}
          />
        )}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.classContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  classContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
});

export default ClassList;
