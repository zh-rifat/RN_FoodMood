import { Platform, StatusBar } from "react-native"


export const hideNavigationButtons=()=>{
  if(Platform.OS==='android'){
    StatusBar.setHidden(true);
  }
}
