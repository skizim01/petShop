import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {child, get, ref} from "firebase/database";
import {database} from "../../config/firebaseConfig";

const CartPage = () =>{
    const cart = useSelector(state => state.user.cart)
    const [cartItems, setCartItems] = useState(null)
    useEffect(()=>{
        const getCartItems =   ()=>{
            if(cart){
                const dbRef = ref(database)
                 return  cart.products.map(async (number, index) =>  {
                    const data2 = await get(child(dbRef, "/product/product/"+index))
                    console.log(data2.val())
                    const prepareData = await data2.val()
                    return await {title:prepareData.title, price:prepareData.price, img:prepareData.img}
                })

            }

        }
        setCartItems(getCartItems())
    }, [cart])
    console.log(cart)
    return(
        <div >

            Cart:
            {cartItems&&cartItems.map((element, index)=>{
                console.log(element)
                return(<div style={{display:"flex", gap:"10px", height:"60px", alignItems:"center", }}>
                    <div>{element.title}</div>
                    <img src={element.img} style={{height:"50px"}}/>
                    <div>Ціна за штуку {element.price}</div>
                    <div>Кількість товару = {cart.products[index]}</div>
                </div>)
            })}
        </div>
    )
}
export default CartPage