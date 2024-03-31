import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../styles/colors.tsx';

function VerifyCode() {
  const [codes, setCodes] = useState<string[]>(['', '', '', '', '', '']);
  const [isInputsFilled, setIsInputsFilled] = useState<boolean>(false);
  const codeInputs = useRef<TextInput[]>([]);

  const handleCodeChange = (index: number, value: string) => {
    const updatedCodes = [...codes];
    updatedCodes[index] = value;
    setCodes(updatedCodes);

    // 하나의 input에 값이 입력되면 다음 칸으로 이동함
    if (value.length === 1 && index < codes.length - 1) {
      codeInputs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    setIsInputsFilled(codes.every(code => code.length === 1));
  }, [codes]);

  const navigation = useNavigation();

  const handleVerify = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter log in code</Text>
      <View style={styles.codeContainer}>
        {codes.map((code, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            value={code}
            onChangeText={text => handleCodeChange(index, text)}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => (codeInputs.current[index] = ref!)}
            onSubmitEditing={() => {
              if (index < codes.length - 1) {
                codeInputs.current[index + 1].focus();
              }
            }}
          />
        ))}
      </View>
      <TouchableOpacity
        style={[styles.buttonBox, isInputsFilled && styles.buttonBoxFilled]}
        disabled={!isInputsFilled}
        onPress={handleVerify}>
        <Text style={[styles.verify, isInputsFilled && styles.verifyFilled]}>
          Verify
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: colors.primary,
  },
  codeContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  codeInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: colors.lighten3,
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 20,
  },
  buttonBox: {
    borderWidth: 1,
    borderColor: colors.primary,
    marginTop: 54,
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 12,
  },
  buttonBoxFilled: {
    backgroundColor: colors.primary,
  },
  verify: {
    color: colors.primary,
  },
  verifyFilled: {
    color: colors.white,
  },
});

export default VerifyCode;
