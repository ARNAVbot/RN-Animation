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
import { Animated, PanResponder, Text, TouchableOpacity, View} from 'react-native';

const App = () => {

  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      // onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        for(let i=0;i<100000000;i++) {

        }
        console.log('PANd responder was granted');
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  )[0];

  console.log(panResponder.panHandlers)
  console.log(pan.getLayout());
  
  return (
    <View
      style={{flex: 1}}>
        <Animated.View
          style={[
            {
            width: 100,
            height: 100,
            borderRadius: 100/2,
            backgroundColor: 'red',
        }, 
        pan.getLayout()
      ]}
        {...panResponder.panHandlers}
        />
    </View>
  );
};


export default App;
