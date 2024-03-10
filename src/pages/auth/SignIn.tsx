import {RootStackParamList} from '../../../App.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useRef, useCallback} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {colors} from '../../styles/colors.tsx';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
function SignIn({navigation}: SignInScreenProps) {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  const onChangeEmail = useCallback(text => {
    setEmail(text.trim());
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text.trim());
  }, []);

  const onSubmit = useCallback(() => {
    if (!email || !email.trim()) {
      return Alert.alert('Notification', 'Please enter the email.');
    }
    if (!password || !password.trim()) {
      return Alert.alert('Notification', 'Please enter the password.');
    }
    Alert.alert('Notification', 'You have successfully logged in!');
  }, [email, password]);

  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/icons/authIcon.png')}
          style={styles.iconImage}
        />
        <Text style={styles.titleLabel}>Log in</Text>
        <View style={styles.formContainer}>
          <View style={{...styles.inputContainer, marginBottom: 16}}>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={onChangeEmail}
              placeholder="E-mail"
              importantForAutofill="yes" // 페이스 아이디 사용
              autoComplete="email"
              textContentType="emailAddress"
              returnKeyType="next"
              clearButtonMode="while-editing"
              ref={emailRef}
              onSubmitEditing={() => passwordRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={{...styles.inputContainer, marginBottom: 16}}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Password"
              importantForAutofill="yes"
              secureTextEntry
              autoComplete="password"
              textContentType="password"
              clearButtonMode="while-editing"
              ref={passwordRef}
              onSubmitEditing={onSubmit}
            />
          </View>
          <View style={styles.submenuContainer}>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                onPress={handleRememberMe}
                style={[styles.checkbox, rememberMe && styles.checkedCheckbox]}
              />
              <Text style={styles.checkboxTitle}>Remember account</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.checkboxTitle}>forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.mainButton} onPress={onSubmit}>
          <Text style={styles.mainButtonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subButton} onPress={toSignUp}>
          <Text style={styles.subButtonText}>Sign up</Text>
        </TouchableOpacity>
        <StatusBar />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 29,
  },
  iconImage: {
    width: 33,
    height: 32,
    marginBottom: 24,
  },
  titleLabel: {
    fontSize: 33,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 24,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lighten4,
    borderRadius: 5,
    marginBottom: 8,
  },
  textInput: {
    width: '100%',
    height: 50,
    padding: 16,
  },
  submenuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxTitle: {
    fontWeight: '400',
    fontSize: 11,
    color: colors.gray2,
  },
  checkedCheckbox: {
    backgroundColor: colors.gray2,
  },
  mainButton: {
    borderRadius: 5,
    width: '100%',
    height: 46,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  mainButtonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '400',
  },
  subButton: {
    borderRadius: 5,
    width: '100%',
    height: 46,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  subButtonText: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '400',
  },
});

export default SignIn;