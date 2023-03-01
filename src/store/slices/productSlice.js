import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {child, equalTo, get, orderByChild, query, ref} from "firebase/database";
import {database} from "../../config/firebaseConfig";


export const getProducts = createAsyncThunk("products", async () => {
    const dbRef = ref(database)
    const data = await get(child(dbRef, "/product/"))
    const data2 = await get(child(dbRef, "/product/product/0"))
    console.log(data2.val())
    return await data.val()
})


export const getProductsWithParameters = createAsyncThunk("product", async (gender) => {
    const productRef = ref(database, "/product/product/");
    const queryRef = query(productRef, orderByChild("gender"), equalTo(gender));
    const data = await get(queryRef)
    return await data.val()
})


export


const productSlice = createSlice({
    name: "products", initialState: {
        isLoading: false, isSuccess: true, listOfItem: null, error: null
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isSuccess = false
            state.isLoading = true
        }, [getProducts.fulfilled]: (state, action) => {
            state.isSuccess = true
            state.isLoading = false
            state.listOfItem = action.payload
        }, [getProductsWithParameters.pending]: (state) => {
            state.isSuccess = false
            state.isLoading = true
        }, [getProductsWithParameters.fulfilled]: (state, action) => {
            state.isSuccess = true
            state.isLoading = false
            state.listOfItem = action.payload.filter(item => item)

        }
    }


})

export default productSlice.reducer