import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products : [],
    
    filterdata: [],
}

const Productslice = createSlice({
    name:"product",
    initialState,
    reducers : {
        setproducts : (state, action) =>{
            state.products = action.payload;
        },

        setSearchTerm: (state,action) => {

            state.filterdata = state.products.filter((product) => {
              return  product.title.toLowerCase().includes(action.payload.toLowerCase())
                
        });
           
        },
    }
})

export const { setproducts , setSearchTerm } = Productslice.actions;
export default Productslice.reducer;