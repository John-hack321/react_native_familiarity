import CustomButton from "@/constants/CustomButton";
import CustomInput from "@/constants/CustomInput";
import { createUser } from "@/lib/appWrite";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignUp= ()=> {

    const [isSubmitting, setIsSubmitting]= useState<boolean>(false)
    const [form, setForm]= useState({name: '',email: '', password: ''})

    const submit= async () => {
        
            if (!form.name || !form.email || !form.password) return Alert.alert("Error", 'please enter a valid email address')

            setIsSubmitting(true)

            try {

                await createUser({
                    name: form.name,
                    email: form.email,
                    password: form.password,
                })

                router.replace('/');
            } catch ( error : any) {
               Alert.alert("Error", error.message)
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

            <View className="flex-row items-center justify-center mt-5 flex-wrap gap-2">
                <Text className="text-gray-700 ">
                    Already have an account?{' '}
                </Text>
                <Link
                    className="text-orange-500 font-semibold "
                    href="/sign-in">
                    Sign in
                </Link>
            </View>

        </View>
    )
}

export default SignUp;