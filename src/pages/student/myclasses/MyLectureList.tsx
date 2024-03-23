import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducer.ts';
import {colors} from '../../../styles/colors.tsx';
import MyLectureItem from '../../../components/student/myclasses/MyLectureItem.tsx';
import BasicHeader from '../../../components/util/BasicHeader.tsx';
import SectionTitle from '../../../components/util/SectionTitle.tsx';

interface CategoryProps {
  id: number;
  name: string;
  onSelect: (id: number) => void;
  isSelected: boolean;
}

function Category({id, name, onSelect, isSelected}: CategoryProps) {
  return (
    <TouchableOpacity
      style={[styles.categoryItem, isSelected && styles.selectedCategoryItem]}
      onPress={() => onSelect(id)}>
      <Text
        style={[
          styles.categoryName,
          isSelected && styles.selectedCategoryName,
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const MyLectureList: React.FC = () => {
  const {id} = useSelector((state: RootState) => state.user);
  const [categories, setCategories] = useState([]);
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );

  const fetchEnrolledClasses = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/${id}/enrolled_class`,
        {
          params: {
            subject_id: selectedCategoryId,
          },
        },
      );
      setEnrolledClasses(response.data);
    } catch (error) {
      console.error('Error fetching enrolled classes:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/subjects');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchEnrolledClasses();
    fetchCategories();
  }, [selectedCategoryId]);

  const handleCategorySelect = (categoryId: number) => {
    if (selectedCategoryId) {
      setSelectedCategoryId(null);
    } else {
      setSelectedCategoryId(categoryId);
    }
  };

  const getFilteredClasses = () => {
    if (selectedCategoryId) {
      return enrolledClasses.filter(
        (enrolledClass: any) => enrolledClass.subject_id === selectedCategoryId,
      );
    }
    return enrolledClasses;
  };

  return (
    <>
      <BasicHeader title="Classes" />
      <View style={styles.container}>
        <SectionTitle title="My Classes" />
        <ScrollView>
          <View style={styles.categoryContainer}>
            {categories.map((category: any) => (
              <Category
                key={category.id}
                id={category.id}
                name={category.name}
                onSelect={handleCategorySelect}
                isSelected={selectedCategoryId === category.id}
              />
            ))}
          </View>
          {getFilteredClasses().map((enrolledClass: any) => (
            <MyLectureItem
              key={enrolledClass.id}
              id={enrolledClass.id}
              name={enrolledClass.name}
              teacher={enrolledClass.teacher.name}
              introduction={enrolledClass.introduction}
              thumbnail={enrolledClass.thumbnail}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 18,
    backgroundColor: colors.white,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 20,
  },
  categoryItem: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 16,
    marginRight: 16,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  selectedCategoryItem: {
    backgroundColor: colors.primary,
  },
  categoryName: {
    fontWeight: '400',
    fontSize: 15,
    color: colors.primary,
  },
  selectedCategoryName: {
    color: colors.white,
  },
});

export default MyLectureList;
