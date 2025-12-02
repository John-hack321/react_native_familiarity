import CustomButton from "@/constants/CustomButton";
import CustomInput from "@/constants/CustomInput";
import { signIn } from "@/lib/appWrite";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignIn= ()=> {

    const [isSubmitting, setIsSubmitting]= useState<boolean>(false)
    const [form, setForm]= useState({email: '', password: ''})

    const submit = async () => {

        const {email, password}= form;

        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password');
            return;
        }

        setIsSubmitting(true);
        try {

            await signIn({email, password}) // just for testig purposes as we donot still have internet
            
            router.replace('/');
        } catch (error: any) {
            Alert.alert('Error', error.message || 'An error occurred during sign in');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <View className="bg-white rounded-lg mt-5 p-5">

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
            title="sign in"
            isLoading={isSubmitting}
            onPress={submit}
            />

            <View className="flex-row items-center justify-center mt-5 flex-wrap gap-2 ">
                <Text>Don't have an account ?</Text>
                <Link
                 className="text-orange-500 font-semibold"
                 href="/sign-up">Sign up</Link>
            </View>

        </View>
    )
}

export default SignIn;