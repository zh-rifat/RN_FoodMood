import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/theme';
import { useDispatch } from 'react-redux';
import authScreenSlice, { setLoggedIn, setScreenType } from '../../utils/redux/slices/authScreenSlice';
import { TouchableOpacity } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { showErrorMsg, showSuccessMsg } from '@/utils/utilities';
import { useNavigation } from '@react-navigation/native';

const LoginFragment = () => {

  const dispatch=useDispatch();
  const navigation:any=useNavigation();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin=()=>{
    console.log("login in progress...");
    if(!email||!password){
      showErrorMsg("Please fill out all required fields.");
      return;
    }
    showSuccessMsg("Login Successful.");
    dispatch(setLoggedIn(true));
    navigation.navigate("Home");
  }
  
  return (
    <View className='container p-8 mx-4 flex flex-col items-center justify-center min-h-screen'>
      <Text className='text-2xl font-bold mb-10'>Login</Text>
      <TextInput
        className="w-full mb-5 bg-green-900 rounded-md p-2"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(txt)=>setEmail(txt)}
      />
      <TextInput
        className="w-full mb-5 bg-green-900 rounded-md p-2"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(txt)=>setPassword(txt)}
      />
      <View className='w-full '>
        <Button  title="Login" color={colors.button} onPress={() => {handleLogin()} } />
      </View>
      <View className="text-center mt-5 flex flex-row items-center justify-center">
        <Text>Forgot Password? </Text>
      
        <TouchableOpacity onPress={()=>{dispatch(setScreenType('RESET'))}}> 
            <Text className='text-indigo-900 underline'> Reset Password </Text>
          </TouchableOpacity>
      </View>
      
      <View className=" mt-1 text-center  flex flex-row items-center justify-center">
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={()=>{dispatch(setScreenType("REGISTRATION"))}}> 
          <Text className='text-indigo-900 underline'> Register </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default LoginFragment
