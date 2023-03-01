import s from './style.module.css'
import logo from '../../images/logo.webp'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import {NavLink} from "react-router-dom";
import {navLinkStyle} from "../styles";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/slices/userSlice";
import {ImExit} from "react-icons/im";
import {auth, signOut} from "../../config/firebaseConfig";

const Header = () => {
    const user = useSelector(state => state.user.user)
    const cart = useSelector(state => state.user.cart?.totalCount)
    const dispatch = useDispatch()
    const interfaceItems = [{icon: <AiOutlineShoppingCart size={'26'}/>, name: '', index: true},
        {icon: <AiOutlineSearch size={'26'}/>, name: "cart", index:false}]
    const navItems = [{name: "Home", url: "/"},
        {name: "Shop", url: "/shop/"},
        {name: "Features", url: "/features/"},
        {name: "Blog", url: "/blog/"},
        {name: "About", url: "/about/"},]

    const logOut = () => {
        signOut(auth).then(dispatch(logout))

    }
    return (
        <header className={s.header}>
            <div className={s.rightSide}>
                <div className={s.logo}><img src={logo} alt={'Логотип'}/></div>
                <div className={s.navItems}>
                    {navItems.map(item =>
                        <NavLink
                            style={({isActive}) =>
                                !isActive ? navLinkStyle : {...navLinkStyle, color: "#6c7ae0"}}
                            to={item.url} key={item.url}>
                            {item.name}
                        </NavLink>)}
                </div>
            </div>
            <div className={s.interfaceContainer}>

                {user && interfaceItems.map((item, index) =>
                    <div className={s.interfaceItem} key={index}>{item.icon}
                        {item.index&&<div className={s.interfaceCounter}>{cart}</div>}
                    </div>
                )}
                {user && <div onClick={logOut}><ImExit/></div>}
                {!user && <NavLink style={navLinkStyle} to={'/login/'} >Зайти</NavLink>}

            </div>
        </header>
    )
}

export default Header
