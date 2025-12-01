import CustomButton from "@/constants/CustomButton";
import CustomInput from "@/constants/CustomInput";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";

const SignUp= ()=> {

    const [isSubmitting, setIsSubmitting]= useState<boolean>(false)
    const [form, setForm]= useState({name: '',email: '', password: ''})

    const submit= async () => {
        
            // if (!name || !form.email || !form.password) return Alert.alert(title:"Error", message: 'please enter a valid email address')
            // call the appwrite signup function

            setIsSubmitting(true)
            try {
               //  Alert.alert(title:'success', message: 'user signed in successfulu')
                router.replace('/');
            } catch ( error : any) {
               //  Alert.alert(title="Error", message: error.message)
            }finally {
                setIsSubmitting(false)
            }
    }

    return (
        <View className="bg-white rounded-lg mt-5 p-5">

            <CustomInput   
                placeholder="enter your name"
                value={form.name}
                onChangeText={(text)=> setForm((prev)=> ({...prev, name: text}))}
                label="Full name"
                classValues="mt-4"
            />

            <CustomInput
                placeholder="enter your email"
                value={form.email}
                onChangeText={(text)=> setForm((prev)=> ({...prev, email: text}))}
                label="Email"
                keyboardType="email-address"
                classValues="mt-4"
            />

            <CustomInput
                placeholder="enter your password"
                value={form.password}
                onChangeText={(text)=> setForm((prev)=> ({...prev, password: text}))}
                label="password"
                classValues="mt-4"
                secureTextEntry={true}
            />
             
            <CustomButton
            title="sign up"
            isLoading={isSubmitting}
            onPress={submit}
            />

            <View className="items-center flex flex-row justify-center gap-4 mt-5">
                <Text>Already have an account ?</Text>
                <Link
                 className="text-orange-500"
                 href="/sign-in">Sign in</Link>
            </View>

        </View>
    )
}

export default SignUp;