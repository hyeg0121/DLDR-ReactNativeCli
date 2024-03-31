import React, {useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../../styles/colors.tsx';

interface Props {
  placeholder: string;
  onSearch: (searchText: string) => void;
}

function SearchFiled({placeholder, onSearch}: Props) {
  const [searchText, setSearchText] = useState<string>('');
  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
      <Image source={require('../../../assets/icons/search.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default SearchFiled;
