import {configureStore} from "@reduxjs/toolkit"
import cartslice from "../slice/cartslice"
import Productslice from "../slice/Productslice"

export const store = configureStore({
    reducer: {
        allcart: cartslice,
        allproducts: Productslice,
    }
})