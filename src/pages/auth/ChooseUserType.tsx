import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BasicHeader from '../../components/util/BasicHeader.tsx';
import {colors} from '../../styles/colors.tsx';

interface ChooseUserTypeProps {
  navigation: any;
}

const ChooseUserType: React.FC<ChooseUserTypeProps> = ({navigation}) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null,
  );

  const usertypes: string[] = ['student', 'teacher'];
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);

  const navigateToVerifyRegion = () => {
    if (selectedUserType) {
      navigation.navigate('SignUp', {usertype: selectedUserType});
    }
  };

  const handleButtonPress = (index: number) => {
    setSelectedButtonIndex(index);
    setSelectedUserType(usertypes[index]);
  };

  return (
    <View style={styles.container}>
      <BasicHeader title={'Sign up'} />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButtonIndex === 0 && {
              borderColor: colors.primary,
              borderWidth: 2,
              backgroundColor: colors.lighten5,
            },
          ]}
          onPress={() => handleButtonPress(0)}>
          <View style={styles.imageWrap}>
            <Image
              source={require('../../assets/icons/student.png')}
              style={styles.image}
            />
          </View>
          <Text
            style={[
              styles.type,
              selectedButtonIndex === 0 && {color: colors.primary},
            ]}>
            STUDENT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButtonIndex === 1 && {
              borderColor: colors.primary,
              borderWidth: 2,
              backgroundColor: colors.lighten5,
            },
          ]}
          onPress={() => handleButtonPress(1)}>
          <View style={styles.imageWrap2}>
            <Image
              source={require('../../assets/icons/teacher.png')}
              style={styles.image}
            />
          </View>
          <Text
            style={[
              styles.type,
              selectedButtonIndex === 1 && {color: colors.primary},
            ]}>
            TEACHER
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.mainButtonBox}
        onPress={navigateToVerifyRegion}>
        <Text style={styles.mainButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  buttons: {
    flexDirection: 'row',
    gap: 22,
    paddingHorizontal: 18,
    marginTop: 180,
  },
  button: {
    height: 180,
    width: '47%',
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: colors.gray1,
    borderRadius: 16,
    alignItems: 'center',
  },
  imageWrap: {
    position: 'relative',
    width: '70%',
    height: 100,
    overflow: 'hidden',
  },
  imageWrap2: {
    position: 'relative',
    width: '90%',
    height: 100,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  type: {
    marginTop: 20,
    fontSize: 17,
    fontWeight: '500',
  },
  mainButtonBox: {
    borderRadius: 5,
    width: '100%',
    height: 46,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginHorizontal: 18,
    width: null,
    marginTop: 34,
  },
  mainButtonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '400',
  },
});

export default ChooseUserType;
