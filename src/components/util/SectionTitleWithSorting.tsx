import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../styles/colors.tsx';

function SectionTitleWithSorting(props: any) {
  const {title} = props;
  const [sortingOption, setSortingOption] = useState<'latest' | 'popular'>(
    'latest',
  );

  const toggleSortingOption = () => {
    setSortingOption(sortingOption === 'latest' ? 'popular' : 'latest');
    // 여기서 선택된 정렬 옵션에 따라서 API 요청을 보내거나 다른 작업을 수행할 수 있습니다.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={[styles.toggleButton]}
        onPress={toggleSortingOption}>
        <Text style={styles.buttonText}>
          {sortingOption === 'latest' ? 'Latest' : 'Popular'}
        </Text>
        <Image source={require('../../assets/icons/sortIcon.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.black,
    marginBottom: 5,
  },
  toggleButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.lighten2,
    marginRight: 10,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 11,
    fontWeight: '500',
    color: colors.lighten2,
  },
});

export default SectionTitleWithSorting;
