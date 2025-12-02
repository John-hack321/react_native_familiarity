import { CreateUserParamas, GetMenuParams, SignInParams } from "@/type";
import { Account, Avatars, Client, Databases, ID, Query, Storage } from "react-native-appwrite";

export const appWriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    platform: "com.react_learning.react_cont",
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: '692aae89000254303515',
    bucketId: '692e105300066e46469d',
    userCollectionId: "user", 
    categoriesCollectionId: "categories", 
    menuCollectionId:"menu",
    customizationsCollectionId: "customizations",
    menuCustomizationsCollectionId: "menu_customizations",
}

const client = new Client()

client
    .setEndpoint(appWriteConfig.endpoint!)
    .setProject(appWriteConfig.projectId!) // FIXED: Was using platform instead of projectId
    .setPlatform(appWriteConfig.platform)

export const account = new Account(client)
export const databases = new Databases(client)
export const avatars = new Avatars(client)
export const storage= new Storage(client)

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

        await signIn({email, password}) // we will create this functionn

        const avatarUrl= avatars.getInitialsURL(name)

        const newUser = await databases.createDocument({
            databaseId: appWriteConfig.databaseId,
            collectionId: appWriteConfig.userCollectionId,
            documentId: ID.unique(),
            data: { email, name, accountId: newAccount.$id, avatar: avatarUrl},

        })

        return newUser
        
    } catch (error: any) {
        console.error("Error creating user:", error);
        throw new Error(error.message || "Failed to create user");
    }
}


export const signIn= async ({email, password}: SignInParams)=> {
    // create a user session on sigin

    const session= await account.createEmailPasswordSession({email, password})
}


export const getCurrentUser= async ()=> {
    try {
        const currentAccount = await account.get()
        if (!currentAccount) {
            throw new Error('No account found')
        }

        const currentUser = await databases.listDocuments(
            appWriteConfig.databaseId,
            appWriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        return currentUser.documents[0]

    } catch (e) {
        console.log(`an error occurred: ${e}`)
        throw new Error(e as string)
    }
}


// and that is we define a function for getting data from the appwrite database
export const getMenu= async ({category, query}: GetMenuParams)=> {
    try {
        const queries: string[] = []

        if (category) queries.push(Query.equal('categories', category))
        if (query) queries.push(Query.equal('name', query))

        const menus= await databases.listDocuments(
            appWriteConfig.databaseId,
            appWriteConfig.menuCollectionId,
            queries,
        )

        return menus.documents;

    } catch (error) {
        throw new Error(error as string)
    }
}

export const getCategories= async ()=> {
    try {
        const categories= await databases.listDocuments(
            appWriteConfig.databaseId,
            appWriteConfig.categoriesCollectionId,
        ) 

        return categories.documents;
    } catch (error) {
        throw new Error(error as string)
    }
}