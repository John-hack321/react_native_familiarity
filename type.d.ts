
export interface customInputProps {
    placeholder?: string;
    value?: string;
    onChangeText: (text: string)=> void;
    label: string;
    secureTextEntry?: boolean;
    keyboardType: "default" | "email-address" | "numeric" | "phone-pad";
    classValues: string;

}


export interface CustomButtonProps {
    onPress: () => {};
    title: string;
    style: string;
    textStyle: string;
    leftIcon: string;
    isLoading: boolean;
}