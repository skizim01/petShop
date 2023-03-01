import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {child, get, ref} from "firebase/database";
import {database} from "../../config/firebaseConfig";

const CartPage = () =>{
    const cart = useSelector(state => state.user.cart)
    const [cartItems, setCartItems] = useState(null)
    useEffect(()=>{
        const getCartItems = () => {
            if (cart) {
                const dbRef = ref(database)
                const arr = cart.products.map(async (number, index) => {
                    const data = await get(child(dbRef, "/product/product/" + index))
                    return data.val()
                })
                Promise.all(arr).then(result => {
                    setCartItems(result)
                })
            }

        }
        getCartItems()
    }, [cart])
    return (<>{cart ?
            <div>
                Cart:
                {cartItems && cartItems.map((element, index) => {
                    return (<div style={{display: "flex", gap: "10px", height: "60px", alignItems: "center",}}>
                        <div style={{width: "350px"}}>{element.title}</div>
                        <img src={element.img} style={{height: "50px"}}/>
                        <div>Ціна за штуку {element.price}</div>
                        <div>Кількість товару = {cart.products[index]}</div>
                    </div>)
                })}
                <div>Cума корзини - {cart?.totalPrice}</div>
                <button onClick={() => console.log("тут при вдалому запиті повинна очищатися корзина " +
                    "та обнулятися в redux")}>
                    Купити
                </button>
            </div>:<div>зайдіть або зареєструйтеся</div>}</>
    )
}
export default CartPage