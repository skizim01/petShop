import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Template from "./components/Template";
import LoginPage from "./pages/LoginPage";
import {useEffect} from "react";
import {auth, onAuthStateChanged} from "./config/firebaseConfig";
import {getCart, login, logout, setCart} from "./store/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "./store/slices/productSlice";
import CartPage from "./pages/CartPage";

function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)

    useEffect(()=>{
        dispatch(getCart(user?.uid))
    }, [user])


    useEffect( () => {
        onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                    }),
                    setCart()
                ) ;
            } else {
                dispatch(logout());
            }
        });
         dispatch(getProducts())


    }, []);


    const router = createBrowserRouter(createRoutesFromElements(
        <Route element={<Template/>} path={'/'}>
            <Route element={<HomePage/>} path={'/'}/>
            <Route element={ <LoginPage/>} path={'/login'}/>
            <Route element={ <CartPage/>} path={'/cart'}/>
        </Route>
))
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
