import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: any; // React Native uses require() for images, so type is 'any'
}
  
interface CartState {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            
            state.totalItems += 1;
            state.totalPrice += action.payload.price;
        },
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;