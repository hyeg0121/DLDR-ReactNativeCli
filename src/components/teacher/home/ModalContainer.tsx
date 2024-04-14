import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';
import {colors} from '../../../styles/colors.tsx';

const {width} = Dimensions.get('window');

function ModalContainer() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <TouchableOpacity style={styles.floatingButton} onPress={toggleModal}>
        <Image source={require('../../../assets/icons/book.png')} />
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.modalItem}>
            <Image source={require('../../../assets/icons/book.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalItem}>
            <Image source={require('../../../assets/icons/book.png')} />
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 18,
    right: 18,
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  modalContent: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 10,
  },
  modalItem: {
    backgroundColor: colors.white,
    padding: 22,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalContainer;
