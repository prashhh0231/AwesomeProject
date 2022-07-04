import {Modal, View, StyleSheet, Text} from 'react-native';
import React from 'react';

const ParentModal = ({showModal, children}) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.viewWrapper}>{children}</View>
      </Modal>
    </View>
  );
};

export default ParentModal;

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
