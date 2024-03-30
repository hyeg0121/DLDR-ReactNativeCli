import React, {useState, FC} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../styles/colors.tsx';

interface Props {
  onSendMessage: (message: string) => void;
}

const ChattingTextField: FC<Props> = ({onSendMessage}) => {
  const [message, setMessage] = useState<string>('');

  const handleSend = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleChangeText = (text: string) => {
    setMessage(text);
  };

  const handleSubmitEditing = () => {
    handleSend();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={message}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Image source={require('../../../assets/icons/send.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    flexDirection: 'row',
    height: 87,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: colors.gray1,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  sendButton: {
    position: 'absolute',
    marginLeft: 8,
    right: 33,
    top: 28,
  },
});

export default ChattingTextField;
