import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyLecture from './MyLecture.tsx';
import MyLectureList from './MyLectureList.tsx';

const Stack = createNativeStackNavigator();

function MyLectureListPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'MyLectureList'}
        component={MyLectureList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'MyLecture'}
        component={MyLecture}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyLectureListPage;
