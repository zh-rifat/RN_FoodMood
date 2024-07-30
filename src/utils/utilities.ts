import { Platform, StatusBar } from "react-native"
import Snackbar from "react-native-snackbar";


export const hideNavigationButtons=()=>{
  if(Platform.OS==='android'){
    StatusBar.setHidden(true);
  }
}

export const showErrorMsg=(msg:string)=>{

  Snackbar.show({
    text:msg,
    duration:Snackbar.LENGTH_LONG,
    backgroundColor:'#ad7979',
    textColor:"#911313",
    numberOfLines:1,
  });
}
export const showSuccessMsg=(msg:string)=>{

  Snackbar.show({
    text:msg,
    duration:Snackbar.LENGTH_LONG,
    backgroundColor:'#c0d6a3',
    textColor:"#264004",
    numberOfLines:1,
  });
}
