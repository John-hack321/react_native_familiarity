import { CreateUserParamas } from "@/type";
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appWriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    platform: "com.react_learning.react_cont",
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: '692aae89000254303515',
    userCollectionId: "user",
}

const client = new Client()

client
    .setEndpoint(appWriteConfig.endpoint!)
    .setProject(appWriteConfig.projectId!) // FIXED: Was using platform instead of projectId
    .setPlatform(appWriteConfig.platform)

export const account = new Account(client)
export const databases = new Databases(client)
export const avatars = new Avatars(client)

// User creation function
export const createUser = async ({ name, email, password }: CreateUserParamas) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            name
        )
        
        if (!newAccount) throw new Error("Failed to create account");
        
        // You might want to create a session here too
        // await account.createEmailPasswordSession(email, password);
        
        return newAccount;
        
    } catch (error: any) {
        console.error("Error creating user:", error);
        throw new Error(error.message || "Failed to create user");
    }
}