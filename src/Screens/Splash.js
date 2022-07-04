import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://chicmic.com.au/wp-content/themes/chicmic/img/sudoku/sudoku_logo.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.txt}>Play & Enjoy :)</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 40,
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
  },
  logo: {
    width: 300,
    height: 100,
  },
});
