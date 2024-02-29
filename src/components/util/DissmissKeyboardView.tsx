import React from "react";
import { Keyboard, TouchableOpacity } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const DismissKeyboardView = ({children, ...props}) => (
  <TouchableOpacity onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={{props.style}}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableOpacity>
);

export default DismissKeyboardView;
