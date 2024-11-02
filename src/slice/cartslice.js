import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    carts : [],
    count: 0,
}

 const cartslice = createSlice({
    name:"cartslice",
    initialState,
    reducers : {
        addtocart:(state,action) =>{
            const itemidex = state.carts.findIndex((item)=> item.id === action.payload.id);
            console.log(itemidex)
            
            if(itemidex >=0){
                state.carts[itemidex].qnty += 1;
            }else{
                const temp = {...action.payload , qnty:1}
                state.carts = [...state.carts , temp]
            }

        },
        removeitem: (state,action) => {
            state.carts = state.carts.filter((item)=> item.id !== action.payload);
        },
        setcounts: (state,action) =>{
            const itemidex = state.carts.findIndex((item)=> item.id === action.payload.id);
           
            if(action.payload.type === "increment") {
                state.carts[itemidex].qnty += 1;
            }else if (action.payload.type === "decrement") {
                state.carts[itemidex].qnty -= 1;
            }

        },

        decrementone: (state,action) =>{
            const itemindex_dec = state.carts.findIndex((item)=> item.id === action.payload.id)

            if(state.carts[itemindex_dec].qnty >=1 ){
                state.carts[itemindex_dec].qnty -= 1 ;
            }
        }
    }
})

export const {addtocart , removeitem , setcounts , decrementone} = cartslice.actions;
export default cartslice.reducer;