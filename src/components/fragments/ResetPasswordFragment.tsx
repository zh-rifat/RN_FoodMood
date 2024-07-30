import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/theme';
import { useDispatch } from 'react-redux';
import { setScreenType } from '../../utils/redux/slices/authScreenSlice';
import { TouchableOpacity } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { showErrorMsg, showSuccessMsg } from '@/utils/utilities';

const ResetPasswordFragment = () => {

  const dispatch=useDispatch();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin=()=>{
    console.log("login in progress...");
    if(!email||!password){
      showErrorMsg("Please fill out all required fields.");
      return;
    }
    showSuccessMsg("Login Successful.")
  }
  
  return (
    <View className='container p-8 mx-4 flex flex-col items-center justify-center min-h-screen'>
      <Text className='text-2xl font-bold mb-10'>Reset Password</Text>
      <TextInput
        className="w-full mb-5 bg-green-900 rounded-md p-2"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(txt)=>setEmail(txt)}
      />
      <TextInput
        className="w-full mb-5 bg-green-900 rounded-md p-2 hidden"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(txt)=>setPassword(txt)}
      />
      <View className='w-full '>
        <Button  title="Send Code" color={colors.button} onPress={() => {handleLogin()} } />
      </View>
      <View className=" mt-5 text-center  flex flex-row items-center justify-center">
        <TouchableOpacity onPress={()=>{dispatch(setScreenType("LOGIN"))}}> 
          <Text className='text-indigo-900 underline'>Back to Login </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default ResetPasswordFragment;
