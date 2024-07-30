import { useRef } from "react";
import { Animated } from "react-native";
import { SharedTransition, withSpring, withTiming } from "react-native-reanimated";

export const logoAnimation=useRef(new Animated.Value(0)).current;
export const containerAnimation=useRef(new Animated.Value(0)).current;


export const logoTransition = SharedTransition.custom((values) => {
  'worklet';
  const animationDuration = 500;
  return { // Adjust the duration as needed

  // ...
  
  width: withTiming(values.targetWidth, { duration: animationDuration }),
  originX: withTiming(values.targetOriginX, { duration: animationDuration }),
  height: withTiming(values.targetHeight, { duration: animationDuration }),
  originY: withTiming(values.targetOriginY, { duration: animationDuration }),
  borderRadius: withTiming(9999, { duration: 100 }),
  };
});

export const logoAnimationStyles={
  transform:[
      {
        translateY:logoAnimation.interpolate({
          inputRange:[0,1],
          outputRange:[0,0]
        }),

      },
      {
        scale:logoAnimation.interpolate({
          inputRange:[0,1],
          outputRange:[1,.3]

        }),
        
      },
  ],
  borderRadius:logoAnimation.interpolate({
    inputRange:[0,1],
    outputRange:[0,9999]
  }),
}

export const containerAnimationStyles=
{
  backgroundColor:containerAnimation.interpolate({
    inputRange:[0,1],
    outputRange:["#facc15ff","#facc1500"]
  })
}
