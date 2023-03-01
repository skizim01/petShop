import {useEffect, useState} from "react";
import {purpuleColor} from "../../components/styles";
import {login, updateCart} from '../../store/slices/userSlice';
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile, set, ref, database, push
} from '../../config/firebaseConfig';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const cart = useSelector(state => state.user.cart)
    console.log(cart)
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState(null)
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const buttonStyle = {
        marginTop: "50px",
        borderRadius: "15px",
        width: "100px",
        height: "30px",
        backgroundColor: purpuleColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff"
    }
    const singIn = () => {
        setMessage(null)
        signInWithEmailAndPassword(auth, email, password).then((userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName
                })
            )
            navigate('/')
        }).catch((error) => {
            setMessage(error.message)
        })
    }



    const singUp = () => {
        setMessage(null)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user, {
                    displayName: name
                }).then(
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                    }))
                ).catch((error) => {
                    setMessage(error.message)

                    console.error(error)
                })
                const cartRef = ref(database, 'carts/'+  "/cart"+userAuth.user.uid)
                const newCart = push(cartRef)
                set(newCart, {
                    totalCount:0,
                    totalPrice:0,
                    products:[]})



            }).catch((error) => {
            setMessage(error.message)
            console.error(error)
        })

    }


    return (
        <div style={{width: "1170px", margin: "0 auto"}}>
            <div>
                <h3>LOGIN</h3>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
                <h3>PASSWORD</h3>
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <h3>NAME</h3>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            {message && <div style={{fontSize: "30px", color: 'red'}}>{message}</div>}


            <button onClick={singIn}
                    style={buttonStyle}>
                login
            </button>
            <button onClick={singUp}
                    style={buttonStyle}>
                register
            </button>

        </div>

    )
}

export default LoginPage