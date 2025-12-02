import { appWriteConfig } from "@/lib/appWrite";
import { MenuItem } from "@/type";
import { Image, Text, TouchableOpacity } from "react-native";

const MenuCard= ({item: {image_url, name, price}}: {item: MenuItem})=> {

    const imageUrl= `${image_url}project=${appWriteConfig.projectId}`;
    return (
        <TouchableOpacity>
            <Image 
            source={require('../assets/images/tortilas.png')}
            className="size-32 absolute -top-10"
            />
            <Text className="text-center base-bold text-dark-100 mb-2" >tortilas</Text>
            <Text className="text-gray-200 mb-4">From $100</Text>
            <TouchableOpacity>
                <Text className="text-orange-500">add to cart</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default MenuCard;