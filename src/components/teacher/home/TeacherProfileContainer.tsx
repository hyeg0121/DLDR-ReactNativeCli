import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../styles/colors.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducer.ts';
import {useEffect, useState} from 'react';
import axios from 'axios';

function TeacherProfileContainer() {
  const userId = useSelector((state: RootState) => state.user.id);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
    console.log(user);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection} />
      <View style={styles.bottomSection}>
        <Image
          style={styles.image}
          source={{uri: `http://localhost:3000/${user?.profile_img}`}}
        />
        <View style={styles.info}>
          <Text>{user?.name}</Text>
          <Text>
            Beginner’s Math is designed to take you from the basics to the
            advanced level.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 18,
    marginHorizontal: 36,
    marginBottom: 35,
    borderRadius: 10,
  },
  topSection: {
    height: 35,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: colors.secondary1,
  },
  bottomSection: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 18,
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    width: '20%',
    objectFit: 'contain',
  },
  info: {
    width: '70%',
    gap: 10,
  },
});

export default TeacherProfileContainer;
