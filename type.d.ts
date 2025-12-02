export interface customInputProps {
    placeholder?: string;
    value?: string;
    onChangeText: (text: string)=> void;
    label: string;
    secureTextEntry?: boolean;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    classValues: string;

}


export interface CustomButtonProps {
    onPress?: () => {};
    title?: string;
    style?: string;
    textStyle?: string;
    leftIcon?: string;
    isLoading?: boolean;
}

export interface CreateUserParamas {
    name: string;
    email: string;
    password: string;
}

export interface SignInParams {
    email: string;
    password: string;
}

export interface TabBarIconProps {
    focused: boolean,
    title: string,
    icon: 
        | "home"
        | "search"
        | "settings"
        | "notifications"
        | "person"
        | "cart"
;
}

export interface GetMenuParams {
    category: string;
    query: string;
}