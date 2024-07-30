import { View, Text, TextInput, Button, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors } from '../../utils/theme';
import { useDispatch } from 'react-redux';
import { setScreenType } from '../../utils/redux/slices/authScreenSlice';

import PhoneInput from 'react-native-phone-input';
import { TouchableOpacity } from 'react-native';

const RegisterFragment = () => {
  const dispatch=useDispatch();
  const phoneRef=useRef<PhoneInput>(null);

  const handleLogin=()=>{
    console.log("login in progress...");
  }
  const [phone, setPhone] = useState("");
  const handleChangePhone=(number:string,formattedNumber:string)=>{
    setPhone(number);
    phoneRef.current?.selectCountry('bd');
  }
  
  return (
    <View className='container p-8 mx-4 flex flex-col items-center justify-center min-h-screen'>
      <Text className='text-2xl font-bold mb-10'>Register</Text>
      <TextInput
        className="w-full mb-5 bg-green-900 rounded-md p-2"
        placeholder="Name"
        keyboardType="ascii-capable"
        autoCapitalize="none"
      />
      <TextInput
        className="w-full mb-5 bg-green-900 rounded-md p-2"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View className='w-full mb-5 bg-green-900 rounded-md p-3'>
        
      <PhoneInput
        ref={phoneRef}
        initialCountry="bd"
        onPressFlag={()=>{return null;}}
        onChangePhoneNumber={handleChangePhone}
      />
      </View>

      <TextInput
        className="w-full mb-5 bg-green-900 rounded-md p-2"
        placeholder="Password"
        secureTextEntry={true}
      
      />
      <TextInput
        className="w-full mb-5 bg-green-900 rounded-md p-2"
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <View className='w-full '>
        <Button  title="Sign Up" color={colors.button} onPress={() => {handleLogin()} } />
      </View>
      <View className="text-center mt-5  flex flex-row items-center justify-center">
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={()=>{dispatch(setScreenType("LOGIN"))}}> 
          <Text className='text-indigo-900 underline'> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegisterFragment;
