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

  const value = useState(new Animated.ValueXY({x:0, y:0}))[0]

  function moveBall() {
    Animated.timing(value, {
      toValue: {x:100, y:100},
      duration: 1000,
      useNativeDriver: false
    }).start()
  }
  
  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <View style={{
          width: 100,
          height: 100,
          borderRadius: 100/2,
          backgroundColor: 'red'
        }}/>
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Hey Click me!!!</Text>
        </TouchableOpacity>
    </View>
  );
};


export default App;
