import {TestScheduler} from '@jest/core';
import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const App = () => {
  const playSound = sound => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound');
      }
    });
    setTimeout(() => {
      soundVar.play();
    }, 100);

    // soundVar.play();
    soundVar.release();
  };

  return (
    <>
      <StatusBar backgroundColor="#03203C" />
      <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <View style={styles.gridContainer}>
          {soundList.map(sound => (
            <TouchableOpacity
              key={sound}
              style={styles.box}
              onPress={() => {
                playSound(sound);
              }}>
              <Text style={styles.text}>{sound}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03203C',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row', //for making data how we want
    flexWrap: 'wrap',
    alignItems: 'flex-start', //always use flex start
    justifyContent: 'space-around', //gives automatic space to left right all
  },
  text: {
    fontSize: 50,
    color: '#E6425E',
  },

  box: {
    borderRadius: 5,
    marginVertical: 5,
    width: '40%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f4c75',
    shadowColor: '#393e46',
    elevation: 5,
  },
});
