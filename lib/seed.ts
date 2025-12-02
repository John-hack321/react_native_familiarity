// seed.ts - Seeding script for Appwrite database
import dummyData from "@/constants/dummyData";
import { ID } from "react-native-appwrite";
import { appWriteConfig, databases, storage } from "./appWrite";

interface Category {
  name: string;
  image_url: string;
}

interface Customization {
  name: string;
  price: number;
}

interface MenuItem {
  name: string;
  description: string;
  image_url: string;
  price: number;
  rating: number;
  calories: number;
  protein: number;
  category_name: string;
  customizations: string[];
}

interface DummyData {
  categories: Category[];
  customizations: Customization[];
  menu: MenuItem[];
}

// Ensure dummyData has correct shape
const data = dummyData as DummyData;

// Clear all documents from a collection
async function clearAll(collectionId: string): Promise<void> {
  const list = await databases.listDocuments(
    appWriteConfig.databaseId,
    collectionId
  );

  await Promise.all(
    list.documents.map((doc) =>
      databases.deleteDocument(
        appWriteConfig.databaseId,
        collectionId,
        doc.$id
      )
    )
  );
}

// Clear storage function (optional - if you want to clean up uploaded files)
async function clearStorage(): Promise<void> {
  try {
    const files = await storage.listFiles(appWriteConfig.bucketId);
    
    await Promise.all(
      files.files.map((file) =>
        storage.deleteFile(appWriteConfig.bucketId, file.$id)
      )
    );
    
    console.log("✅ Storage cleared");
  } catch (error) {
    console.log("Storage clear skipped or failed:", error);
  }
}

async function seed(): Promise<void> {
  try {
    // 1. Clear existing data
    console.log("🧹 Clearing existing data...");
    await clearAll(appWriteConfig.categoriesCollectionId);
    await clearAll(appWriteConfig.customizationsCollectionId);
    await clearAll(appWriteConfig.menuCollectionId);
    await clearAll(appWriteConfig.menuCustomizationsCollectionId);
    // await clearStorage(); // Uncomment if you want to clear storage too
    
    console.log("✅ Existing data cleared");

    // 2. Create Categories
    console.log("📦 Creating categories...");
    const categoryMap: Record<string, string> = {};
    
    for (const cat of data.categories) {
      const categoryDoc = await databases.createDocument(
        appWriteConfig.databaseId,
        appWriteConfig.categoriesCollectionId,
        ID.unique(),
        {
          name: cat.name,
          image_url: cat.image_url,
        }
      );
      categoryMap[cat.name] = categoryDoc.$id;
      console.log(`  ✓ Created category: ${cat.name}`);
    }

    // 3. Create Customizations
    console.log("🎨 Creating customizations...");
    const customizationMap: Record<string, string> = {};
    
    for (const cus of data.customizations) {
      const customizationDoc = await databases.createDocument(
        appWriteConfig.databaseId,
        appWriteConfig.customizationsCollectionId,
        ID.unique(),
        {
          name: cus.name,
          price: cus.price,
        }
      );
      customizationMap[cus.name] = customizationDoc.$id;
      console.log(`  ✓ Created customization: ${cus.name}`);
    }

    // 4. Create Menu Items
    console.log("🍔 Creating menu items...");
    
    for (const item of data.menu) {
      // Create the menu item
      const menuDoc = await databases.createDocument(
        appWriteConfig.databaseId,
        appWriteConfig.menuCollectionId,
        ID.unique(),
        {
          name: item.name,
          description: item.description,
          image_url: item.image_url,
          price: item.price,
          rating: item.rating,
          calories: item.calories,
          protein: item.protein,
          category_name: item.category_name,
        }
      );

      console.log(`  ✓ Created menu item: ${item.name}`);

      // 5. Create Menu-Customization relationships
      for (const customizationName of item.customizations) {
        const customizationId = customizationMap[customizationName];
        
        if (customizationId) {
          await databases.createDocument(
            appWriteConfig.databaseId,
            appWriteConfig.menuCustomizationsCollectionId,
            ID.unique(),
            {
              menu_id: menuDoc.$id,
              customization_id: customizationId,
            }
          );
        }
      }
    }

    console.log("✅ Seeding complete!");
    console.log(`
📊 Summary:
  - ${data.categories.length} categories created
  - ${data.customizations.length} customizations created
  - ${data.menu.length} menu items created
    `);

  } catch (error: any) {
    console.error("❌ Seeding failed:", error);
    throw new Error(error.message || "Failed to seed database");
  }
}

// Export both the seed function and a default export
export default seed;
export { seed };

// If running directly (for testing purposes)
if (require.main === module) {
  seed()
    .then(() => {
      console.log("🎉 Seeding completed successfully!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("💥 Seeding failed:", error);
      process.exit(1);
    });
}