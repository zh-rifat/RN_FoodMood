import { useRef } from "react";
import { Animated } from "react-native";

export const logoAnimation=useRef(new Animated.Value(0)).current;
export const containerAnimation=useRef(new Animated.Value(0)).current;

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
