// data.ts - Complete dummy data for food delivery app

export interface Category {
    $id: string;
    name: string;
    image_url: string;
  }
  
  export interface Customization {
    $id: string;
    name: string;
    price: number;
  }
  
  export interface MenuItem {
    $id: string;
    name: string;
    description: string;
    image_url: string;
    price: number;
    rating: number;
    calories: number;
    protein: number;
    category_name: string;
    customizations: string[]; // Array of customization names
  }
  
  export interface DummyData {
    categories: Category[];
    customizations: Customization[];
    menu: MenuItem[];
  }
  
  const dummyData: DummyData = {
    categories: [
      {
        $id: "cat_1",
        name: "Burgers",
        image_url: "https://static.vecteezy.com/system/resources/previews/044/844/600/large_2x/homemade-cheeseburger-on-transparent-background-png.png"
      },
      {
        $id: "cat_2",
        name: "Pizza",
        image_url: "https://static.vecteezy.com/system/resources/previews/023/742/417/large_2x/pepperoni-pizza-on-transparent-background-png.png"
      },
      {
        $id: "cat_3",
        name: "Burritos",
        image_url: "https://static.vecteezy.com/system/resources/previews/055/133/581/large_2x/delicious-burrito-on-transparent-background-png.png"
      },
      {
        $id: "cat_4",
        name: "Sides",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/321/large_2x/french-fries-on-transparent-background-png.png"
      },
      {
        $id: "cat_5",
        name: "Drinks",
        image_url: "https://static.vecteezy.com/system/resources/previews/036/135/806/large_2x/cola-with-ice-on-transparent-background-png.png"
      },
      {
        $id: "cat_6",
        name: "Desserts",
        image_url: "https://static.vecteezy.com/system/resources/previews/024/558/874/large_2x/ice-cream-cone-on-transparent-background-png.png"
      }
    ],
  
    customizations: [
      // Burger customizations
      { $id: "cust_1", name: "Extra Cheese", price: 1.50 },
      { $id: "cust_2", name: "Bacon", price: 2.00 },
      { $id: "cust_3", name: "Avocado", price: 2.50 },
      { $id: "cust_4", name: "Fried Egg", price: 1.50 },
      { $id: "cust_5", name: "Mushrooms", price: 1.00 },
      { $id: "cust_6", name: "Onions", price: 0.50 },
      { $id: "cust_7", name: "Pickles", price: 0.50 },
      { $id: "cust_8", name: "Lettuce", price: 0.50 },
      { $id: "cust_9", name: "Tomato", price: 0.50 },
      
      // Pizza customizations
      { $id: "cust_10", name: "Extra Pepperoni", price: 2.50 },
      { $id: "cust_11", name: "Olives", price: 1.50 },
      { $id: "cust_12", name: "Bell Peppers", price: 1.50 },
      { $id: "cust_13", name: "Sausage", price: 2.00 },
      { $id: "cust_14", name: "Pineapple", price: 1.50 },
      
      // Burrito customizations
      { $id: "cust_15", name: "Guacamole", price: 2.00 },
      { $id: "cust_16", name: "Sour Cream", price: 1.00 },
      { $id: "cust_17", name: "Jalapeños", price: 0.75 },
      { $id: "cust_18", name: "Black Beans", price: 1.00 },
      { $id: "cust_19", name: "Pinto Beans", price: 1.00 },
      { $id: "cust_20", name: "Corn", price: 0.75 },
      
      // Sides customizations
      { $id: "cust_21", name: "Cheese Sauce", price: 1.50 },
      { $id: "cust_22", name: "Ranch Dip", price: 0.75 },
      { $id: "cust_23", name: "BBQ Sauce", price: 0.75 },
      { $id: "cust_24", name: "Garlic Aioli", price: 1.00 },
      
      // Drinks customizations
      { $id: "cust_25", name: "Extra Ice", price: 0.00 },
      { $id: "cust_26", name: "No Ice", price: 0.00 },
      { $id: "cust_27", name: "Lemon", price: 0.25 },
      
      // Dessert customizations
      { $id: "cust_28", name: "Chocolate Drizzle", price: 1.00 },
      { $id: "cust_29", name: "Caramel Drizzle", price: 1.00 },
      { $id: "cust_30", name: "Whipped Cream", price: 0.75 },
      { $id: "cust_31", name: "Sprinkles", price: 0.50 }
    ],
  
    menu: [
      // Burgers
      {
        $id: "menu_1",
        name: "Classic Cheeseburger",
        description: "Beef patty, cheese, lettuce, tomato",
        image_url: "https://static.vecteezy.com/system/resources/previews/044/844/600/large_2x/homemade-cheeseburger-on-transparent-background-png.png",
        price: 25.99,
        rating: 4.5,
        calories: 550,
        protein: 25,
        category_name: "Burgers",
        customizations: ["Extra Cheese", "Bacon", "Avocado", "Onions", "Pickles"]
      },
      {
        $id: "menu_2",
        name: "BBQ Bacon Burger",
        description: "Smoky BBQ sauce, crispy bacon, cheddar",
        image_url: "https://static.vecteezy.com/system/resources/previews/060/236/245/large_2x/a-large-burger-on-transparent-background-png.png",
        price: 27.50,
        rating: 4.7,
        calories: 680,
        protein: 32,
        category_name: "Burgers",
        customizations: ["Extra Cheese", "Bacon", "Fried Egg", "Mushrooms", "Onions"]
      },
      {
        $id: "menu_3",
        name: "Veggie Burger",
        description: "Plant-based patty with fresh veggies",
        image_url: "https://static.vecteezy.com/system/resources/previews/046/526/808/large_2x/tasty-burger-on-transparent-background-png.png",
        price: 23.99,
        rating: 4.3,
        calories: 420,
        protein: 18,
        category_name: "Burgers",
        customizations: ["Avocado", "Mushrooms", "Lettuce", "Tomato", "Onions"]
      },
      {
        $id: "menu_4",
        name: "Double Deluxe",
        description: "Two beef patties, double cheese, special sauce",
        image_url: "https://static.vecteezy.com/system/resources/previews/022/825/651/large_2x/cheeseburger-on-transparent-background-png.png",
        price: 32.99,
        rating: 4.8,
        calories: 820,
        protein: 45,
        category_name: "Burgers",
        customizations: ["Extra Cheese", "Bacon", "Fried Egg", "Pickles", "Onions"]
      },
  
      // Pizza
      {
        $id: "menu_5",
        name: "Pepperoni Pizza",
        description: "Loaded with cheese and pepperoni slices",
        image_url: "https://static.vecteezy.com/system/resources/previews/023/742/417/large_2x/pepperoni-pizza-on-transparent-background-png.png",
        price: 30.99,
        rating: 4.7,
        calories: 280,
        protein: 12,
        category_name: "Pizza",
        customizations: ["Extra Pepperoni", "Extra Cheese", "Mushrooms", "Olives", "Bell Peppers"]
      },
      {
        $id: "menu_6",
        name: "Margherita Pizza",
        description: "Classic tomato, mozzarella, basil",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/572/large_2x/pizza-on-transparent-background-png.png",
        price: 28.99,
        rating: 4.6,
        calories: 250,
        protein: 11,
        category_name: "Pizza",
        customizations: ["Extra Cheese", "Olives", "Bell Peppers", "Mushrooms"]
      },
      {
        $id: "menu_7",
        name: "Hawaiian Pizza",
        description: "Ham, pineapple, cheese",
        image_url: "https://static.vecteezy.com/system/resources/previews/021/665/896/large_2x/pizza-on-transparent-background-png.png",
        price: 29.99,
        rating: 4.2,
        calories: 270,
        protein: 13,
        category_name: "Pizza",
        customizations: ["Extra Cheese", "Pineapple", "Bacon", "Olives"]
      },
      {
        $id: "menu_8",
        name: "Meat Lovers Pizza",
        description: "Pepperoni, sausage, bacon, ham",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/585/large_2x/pizza-on-transparent-background-png.png",
        price: 33.99,
        rating: 4.8,
        calories: 350,
        protein: 18,
        category_name: "Pizza",
        customizations: ["Extra Pepperoni", "Sausage", "Bacon", "Extra Cheese"]
      },
  
      // Burritos
      {
        $id: "menu_9",
        name: "Bean Burrito",
        description: "Stuffed with beans, rice, salsa",
        image_url: "https://static.vecteezy.com/system/resources/previews/055/133/581/large_2x/delicious-burrito-on-transparent-background-png.png",
        price: 20.99,
        rating: 4.2,
        calories: 480,
        protein: 18,
        category_name: "Burritos",
        customizations: ["Guacamole", "Sour Cream", "Jalapeños", "Black Beans", "Corn"]
      },
      {
        $id: "menu_10",
        name: "Chicken Burrito",
        description: "Grilled chicken, rice, beans, cheese",
        image_url: "https://static.vecteezy.com/system/resources/previews/046/560/345/large_2x/burrito-on-transparent-background-png.png",
        price: 24.99,
        rating: 4.6,
        calories: 520,
        protein: 28,
        category_name: "Burritos",
        customizations: ["Guacamole", "Sour Cream", "Jalapeños", "Pinto Beans", "Cheese Sauce"]
      },
      {
        $id: "menu_11",
        name: "Steak Burrito",
        description: "Tender steak, peppers, onions, rice",
        image_url: "https://static.vecteezy.com/system/resources/previews/047/210/095/large_2x/tasty-burrito-on-transparent-background-png.png",
        price: 26.99,
        rating: 4.7,
        calories: 580,
        protein: 32,
        category_name: "Burritos",
        customizations: ["Guacamole", "Sour Cream", "Jalapeños", "Extra Cheese", "Corn"]
      },
      {
        $id: "menu_12",
        name: "Veggie Burrito",
        description: "Black beans, rice, peppers, corn, salsa",
        image_url: "https://static.vecteezy.com/system/resources/previews/024/109/806/large_2x/burrito-on-transparent-background-png.png",
        price: 19.99,
        rating: 4.4,
        calories: 450,
        protein: 15,
        category_name: "Burritos",
        customizations: ["Guacamole", "Sour Cream", "Black Beans", "Corn", "Pinto Beans"]
      },
  
      // Sides
      {
        $id: "menu_13",
        name: "French Fries",
        description: "Crispy golden fries",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/321/large_2x/french-fries-on-transparent-background-png.png",
        price: 8.99,
        rating: 4.5,
        calories: 365,
        protein: 4,
        category_name: "Sides",
        customizations: ["Cheese Sauce", "Ranch Dip", "BBQ Sauce", "Garlic Aioli"]
      },
      {
        $id: "menu_14",
        name: "Onion Rings",
        description: "Crispy battered onion rings",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/439/large_2x/onion-rings-on-transparent-background-png.png",
        price: 9.99,
        rating: 4.3,
        calories: 320,
        protein: 5,
        category_name: "Sides",
        customizations: ["Ranch Dip", "BBQ Sauce", "Garlic Aioli"]
      },
      {
        $id: "menu_15",
        name: "Mozzarella Sticks",
        description: "Breaded mozzarella with marinara",
        image_url: "https://static.vecteezy.com/system/resources/previews/024/109/834/large_2x/mozzarella-sticks-on-transparent-background-png.png",
        price: 11.99,
        rating: 4.6,
        calories: 280,
        protein: 14,
        category_name: "Sides",
        customizations: ["Ranch Dip", "Garlic Aioli"]
      },
      {
        $id: "menu_16",
        name: "Chicken Wings",
        description: "Spicy buffalo wings",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/293/large_2x/chicken-wings-on-transparent-background-png.png",
        price: 15.99,
        rating: 4.7,
        calories: 540,
        protein: 32,
        category_name: "Sides",
        customizations: ["Ranch Dip", "BBQ Sauce", "Extra Sauce"]
      },
  
      // Drinks
      {
        $id: "menu_17",
        name: "Cola",
        description: "Ice-cold cola",
        image_url: "https://static.vecteezy.com/system/resources/previews/036/135/806/large_2x/cola-with-ice-on-transparent-background-png.png",
        price: 4.99,
        rating: 4.4,
        calories: 150,
        protein: 0,
        category_name: "Drinks",
        customizations: ["Extra Ice", "No Ice", "Lemon"]
      },
      {
        $id: "menu_18",
        name: "Lemonade",
        description: "Fresh squeezed lemonade",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/351/large_2x/lemonade-on-transparent-background-png.png",
        price: 5.99,
        rating: 4.5,
        calories: 120,
        protein: 0,
        category_name: "Drinks",
        customizations: ["Extra Ice", "No Ice", "Lemon"]
      },
      {
        $id: "menu_19",
        name: "Iced Tea",
        description: "Refreshing iced tea",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/378/large_2x/iced-tea-on-transparent-background-png.png",
        price: 4.99,
        rating: 4.3,
        calories: 90,
        protein: 0,
        category_name: "Drinks",
        customizations: ["Extra Ice", "No Ice", "Lemon"]
      },
      {
        $id: "menu_20",
        name: "Milkshake",
        description: "Creamy vanilla milkshake",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/405/large_2x/milkshake-on-transparent-background-png.png",
        price: 8.99,
        rating: 4.8,
        calories: 450,
        protein: 12,
        category_name: "Drinks",
        customizations: ["Whipped Cream", "Chocolate Drizzle", "Caramel Drizzle"]
      },
  
      // Desserts
      {
        $id: "menu_21",
        name: "Ice Cream Cone",
        description: "Vanilla ice cream in waffle cone",
        image_url: "https://static.vecteezy.com/system/resources/previews/024/558/874/large_2x/ice-cream-cone-on-transparent-background-png.png",
        price: 6.99,
        rating: 4.6,
        calories: 280,
        protein: 5,
        category_name: "Desserts",
        customizations: ["Chocolate Drizzle", "Caramel Drizzle", "Sprinkles"]
      },
      {
        $id: "menu_22",
        name: "Chocolate Brownie",
        description: "Warm chocolate brownie with ice cream",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/481/large_2x/brownie-on-transparent-background-png.png",
        price: 9.99,
        rating: 4.7,
        calories: 420,
        protein: 6,
        category_name: "Desserts",
        customizations: ["Whipped Cream", "Chocolate Drizzle", "Caramel Drizzle"]
      },
      {
        $id: "menu_23",
        name: "Apple Pie",
        description: "Classic apple pie with cinnamon",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/512/large_2x/apple-pie-on-transparent-background-png.png",
        price: 8.99,
        rating: 4.5,
        calories: 320,
        protein: 4,
        category_name: "Desserts",
        customizations: ["Whipped Cream", "Caramel Drizzle"]
      },
      {
        $id: "menu_24",
        name: "Cheesecake",
        description: "New York style cheesecake",
        image_url: "https://static.vecteezy.com/system/resources/previews/027/144/534/large_2x/cheesecake-on-transparent-background-png.png",
        price: 10.99,
        rating: 4.8,
        calories: 380,
        protein: 7,
        category_name: "Desserts",
        customizations: ["Chocolate Drizzle", "Caramel Drizzle", "Whipped Cream"]
      }
    ]
  };
  
  export default dummyData;