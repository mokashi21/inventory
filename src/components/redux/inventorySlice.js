import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
    name : "inventory",
    initialState :  {
        items : [],
        suppliers : []
    },
    reducers : {
        addItem : (state, action) => {
            state.items.push(action.payload)
        },
        addSupplier  : (state, action) => {
            state.suppliers.push(action.payload)
        }
    }
})

export const { addItem, addSupplier } = inventorySlice.actions;
export default inventorySlice.reducer