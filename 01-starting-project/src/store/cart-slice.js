import { createSlice } from '@reduxjs/toolkit';

createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        //totalAmount: 0,

    },
        reducers: {
            addItemToCart(state, action) {
const newItem = action.payload;
const exsistingItem = state.items.find(item => item.id === newItem.id);
if (!exsistingItem) {
    state.items.push({item.id: newItem.id, price: newItem.price, quantity: 1, totalPrice:  newItem.price});
};
            },
            removeItemFromCart(state, action) {
        }  
    } 
});
