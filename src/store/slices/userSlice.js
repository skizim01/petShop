import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {child, get, ref} from "firebase/database";
import {database, set} from "../../config/firebaseConfig";


export const getCart = createAsyncThunk("cart", async (userId) => {
    const dbRef = ref(database)
    const data = await get(child(dbRef, "/carts/cart" + userId + '/'))
    return await data.val()
})

export const updateCart = createAsyncThunk('cart', async ({id, price}, {getState, dispatch}) => {
    const currentUid = getState().user.user.uid
    const cart1 = getState().user.cart
    const dbRef =  ref(database, '/carts/cart' + currentUid + "/")
    const data = await get(child(ref(database),'/carts/cart' + currentUid + "/" ))
    const cart = data.val()


    const selfCount = cart.products?.[id] || 0

    const newData = {
        totalPrice: cart.totalPrice + price,
        totalCount: cart.totalCount + 1,
        products: {
            ...cart.products,
            [id]: selfCount + 1
        }
    }
    set(dbRef, newData).then(() => {
        console.log("Data updated successfully!");
    })
        .catch((error) => {
            console.error("Error updating data: ", error);
        });
    return newData
})


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        cart: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.cart = null

        },
        setCart: (state, action) => {
            state.cart = action.payload
        }
    }, extraReducers: {
        [getCart.fulfilled]: (state, action,) => {
            const key = Object.keys(action?.payload)[0]
            state.cart = action.payload[key]
        },
        [updateCart.fulfilled]:(state, action)=>{
            state.cart = action.payload
        }
    }
});

export const {login, logout, setCart} = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;