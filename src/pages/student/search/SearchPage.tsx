import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllClasses from './AllClasses.tsx';

const Stack = createNativeStackNavigator();

function SearchPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'AllClasses'}
        component={AllClasses}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ClassDetail'}
        component={AllClasses}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SearchPage;
