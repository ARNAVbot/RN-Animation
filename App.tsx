/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, type PropsWithChildren} from 'react';
import { Animated, Text, TouchableOpacity, View} from 'react-native';

const App = () => {

  const opacity = useState(new Animated.Value(0))[0]

  function fadeinBall() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  function fadeoutBall() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }
  
  return (
    <View
      style={{flex: 1}}>
      <View style ={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100/2,
            opacity,
            backgroundColor: 'red',
        }}
        />
        <TouchableOpacity onPress={fadeinBall}>
          <Text> Fade in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fadeoutBall}>
          <Text> Fade out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default App;
