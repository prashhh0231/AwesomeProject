import {
  Alert,
  BackHandler,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import ParentModal from '../Components/Modal';
const Game = () => {
  let width = Dimensions.get('window').width;
  let height = Dimensions.get('window').height;
  width = Math.floor(width);
  height = Math.floor(height);

  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    const backAction = () => {
      setIsModal(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={[styles.container]}>
      <WebView
        source={{
          uri: 'https://sudoku.com/',
        }}
        scrollEnabled
      />
      <ParentModal showModal={isModal}>
        <View style={styles.modals}>
          <Text style={styles.msg}>Are you sure to close this app?</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => BackHandler.exitApp()}>
              <Text style={styles.btn}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsModal(false);
              }}>
              <Text style={styles.btn}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ParentModal>
    </View>
  );
};
export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  modals: {
    backgroundColor: 'white',
    marginBottom: '100%',
    padding: 20,
    marginHorizontal: 20,
  },
  msg: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 30,
    marginTop: 20,
  },
  btn: {
    paddingHorizontal: 10,
    fontSize: 18,
    color: 'black',
  },
});
