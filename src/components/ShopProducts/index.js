import s from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {updateCart} from "../../store/slices/userSlice";

const ShopProducts = () =>{
const dispatch = useDispatch()
    const products = useSelector(state => state.products.listOfItem)


    const addToCart = (id, price) =>{
        dispatch(updateCart({id: id, price: price}))



    }
    console.log(products?.product)
    return(<div className={s.conteiner}>
        {products?.product.map((e, i)=>{
            return(<div key={i} className={s.item}>
                <h5>{e.title}</h5>
                {/*<p>{e.description}</p>*/}
                <img src={e.img}/>
                <p>{e.price}</p>

                <button onClick={() => addToCart(e.id, e.price)} >add to cart</button>
            </div>)
        })}
    </div>)

}


export default ShopProducts