import React, {useState, useRef, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../../styles/colors.tsx';
import BasicHeader from '../../components/util/BasicHeader.tsx';
import DissmissKeyboardView from '../../components/util/DissmissKeyboardView.tsx';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const checkPasswordRef = useRef<TextInput | null>(null);

  const onChangeEmail = useCallback(text => {
    setEmail(text.trim());
  }, []);

  const onChangePassword = useCallback(text => {
    setPassword(text.trim());
  }, []);

  const onChangeCheckPassword = useCallback(text => {
    setCheckPassword(text.trim());
  }, []);

  return (
    <DissmissKeyboardView>
      <View style={styles.container}>
        <BasicHeader title="Sign Up" />
        <View style={{...styles.inputContainer, marginTop: 20}}>
          <Text style={styles.inputLabel}>Name</Text>
          <View style={styles.inputWrap}>
            <TextInput style={styles.textInput} />
            <TouchableOpacity>
              <Image source={require('../../assets/icons/x_icon.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={onChangeEmail}
              importantForAutofill="yes" // 페이스 아이디 사용
              autoComplete="email"
              textContentType="emailAddress"
              returnKeyType="next"
              clearButtonMode="while-editing"
              ref={emailRef}
              onSubmitEditing={() => passwordRef.current?.focus()}
              blurOnSubmit={false}
            />
            <TouchableOpacity>
              <Image source={require('../../assets/icons/x_icon.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangePassword}
              value={password}
              importantForAutofill="no"
              secureTextEntry
              textContentType="password"
              ref={passwordRef}
              onSubmitEditing={() => checkPasswordRef.current?.focus()}
              blurOnSubmit={false}
            />
            <TouchableOpacity>
              <Image source={require('../../assets/icons/eye.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeCheckPassword}
              value={checkPassword}
              importantForAutofill="no"
              secureTextEntry
              autoComplete="password"
              textContentType="password"
              ref={checkPasswordRef}
            />
            <TouchableOpacity>
              <Image source={require('../../assets/icons/eye.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Birth</Text>
          <View style={styles.comboBoxes}>
            <View style={styles.comboWrap}>
              <TextInput placeholder="MM" style={styles.comboBox} />
              <TouchableOpacity>
                <Image source={require('../../assets/icons/down_arrow.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.comboWrap}>
              <TextInput placeholder="DD" style={styles.comboBox} />
              <TouchableOpacity>
                <Image source={require('../../assets/icons/down_arrow.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.comboWrap}>
              <TextInput placeholder="YY" style={styles.comboBox} />
              <TouchableOpacity>
                <Image source={require('../../assets/icons/down_arrow.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <TouchableOpacity style={styles.subButton}>
            <Text style={styles.subButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DissmissKeyboardView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  inputContainer: {
    paddingHorizontal: 18,
    width: '100%',
    gap: 8,
    marginVertical: 8,
  },
  inputWrap: {
    borderWidth: 1,
    borderColor: colors.lighten4,
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  textInput: {
    width: '90%',
    height: '100%',
    flexDirection: 'row',
    paddingHorizontal: 14,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.black,
  },
  comboBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comboWrap: {
    borderWidth: 1,
    borderColor: colors.lighten4,
    width: '30%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  comboBox: {
    paddingLeft: 14,
    width: '70%',
  },
  buttonWrap: {
    paddingHorizontal: 18,
    marginTop: 34,
    marginBottom: 300,
    width: '100%',
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
export default SignUp;
