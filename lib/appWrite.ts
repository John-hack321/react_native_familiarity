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
    .setProject(appWriteConfig.platform)
    .setPlatform(appWriteConfig.platform)

export const account= new Account(client)
export const databases= new Databases(client)
const avatars= new Avatars(client)

// user creation function itself

export const createUser= async ({name, email, password} : CreateUserParamas) => {
    try {
            const newAccount= await  account.create(ID.unique(), email= email, password= password, name= name )
    } catch (e) {
        throw new Error(e as string)
    }
}