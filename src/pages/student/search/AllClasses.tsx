import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BasicHeader from '../../../components/util/BasicHeader.tsx';
import {SearchBar} from 'react-native-screens';
import SectionTitle from '../../../components/util/SectionTitle.tsx';
import SubjectSlider from '../../../components/student/search/SubjectSlider.tsx';
import SectionTitleWithSorting from '../../../components/util/SectionTitleWithSorting.tsx';
import ClassList from '../../../components/student/search/ClassList.tsx';
import SearchFiled from '../../../components/student/search/SearchFiled.tsx';
import {colors} from '../../../styles/colors.tsx';

function AllClasses() {
  // TODO: 모든 클래스 불러오기

  // TODO: 검색 기능 구현
  const handleSearch = (searchText: string) => {
    console.log('Searching for:', searchText);
  };

  return (
    <>
      <BasicHeader title="Search" />
      <ScrollView style={styles.container}>
        <SearchFiled placeholder="Search keyword" onSearch={handleSearch} />
        <SectionTitle title="Subjects" />
        <SubjectSlider />
        <SectionTitleWithSorting title="Classes" />
        <ClassList sorting={null} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 18,
  },
});
export default AllClasses;
