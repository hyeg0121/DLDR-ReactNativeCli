// import {RootStackParamList} from '../../../App.tsx';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../styles/colors.tsx';

// type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleLabel}>Log in</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="E-mail"
            importantForAutofill="yes" // 페이스 아이디 사용
            autoComplete="email"
            textContentType="emailAddress"
            returnKeyType="next"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            importantForAutofill="yes"
            secureTextEntry
            autoComplete="password"
            textContentType="password"
          />
        </View>
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 29,
  },
  titleLabel: {
    fontSize: 33,
    fontWeight: '600',
    color: colors.primary,
  },
  formContainer: {
    width: '100%',
    gap: 16,
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lighten4,
    borderRadius: 5,
  },
  textInput: {
    width: '100%',
    height: 50,
    padding: 16,
  },
});

export default SignIn;
