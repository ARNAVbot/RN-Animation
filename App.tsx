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

  const leftValue = useState(new Animated.Value(0))[0]

  // How is the animation actually played on the screen ?

  // 1. Computation = JS thread; Animation by Native OS
  // 1.a compute
  // 1.b serialize
  // 1.c Transfer it over the bridge to host OS
  // 1.d Deserialize
  // 1.e Run the frame

  // 2. Everything by Native OS
  // 2.a Before ur animation starts -> serialize the whole animation thing
  // 2.b Native OS would deserialze it
  // 2.c WIN!!!!

    // Advantages of above
    // 1 . No more bridge transfers
    // 2. JS thread is now free for other stuff
    // 3. Smoother animations

  function moveBall() {
    Animated.timing(leftValue, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: true
    }).start()

    // setTimeout(() => {
    //   for(let i=0;i<300000000;i++) {

    //   }
    // }, 1000);
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
            transform: [{translateX: leftValue}],
            backgroundColor: 'red',
        }}
        />
        <TouchableOpacity onPress={moveBall}>
          <Text> Move me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default App;
