import s from './style.module.css'
import {useState} from "react";
import Filter from "../Filter";
import Search from "../Serch";


const NavBar = () => {
    const [filterOpen, setFilterOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)


    const [active, setActive] = useState(null)
    const handelClick = (index, name) => {
        setActive(index)

        if (name === "filter") {
            if (filterOpen === true) {
                setActive(null)
                setFilterOpen(false)

            } else setFilterOpen(true)
            setSearchOpen(false)
        } else if (name === "search") {
            if (searchOpen === true) {
                setActive(null)
                setSearchOpen(false)
            } else setSearchOpen(true)
            setFilterOpen(false)
        }
    }

    const buttons = [{name: 'filter', component: <Filter/>, state: filterOpen}, {
        name: 'search',
        component: <Search/>,
        state: searchOpen
    }]


    return (
        <>
            <div className={s.navConteiner}>
                <div className={s.sectionPart}>
                    <div className={s.navItem}>
                        All Products
                    </div>
                    <div className={s.navItem}>
                        Women
                    </div>
                    <div className={s.navItem}>
                        Men
                    </div>
                    <div className={s.navItem}>
                        Bag
                    </div>
                    <div className={s.navItem}>
                        Shoes
                    </div>
                    <div className={s.navItem}>
                        Watches
                    </div>
                </div>
                <div className={s.buttonPart}>
                    {buttons.map((button, i) => {
                        return (
                            <div key={i} onClick={() => handelClick(i, button.name)}
                                 className={active === i ? s.activeButton : s.button}>{button.name}</div>)
                    })}

                </div>


            </div>
            {filterOpen && <div style={{marginBottom: "30px"}}><Filter/></div>}
            {searchOpen && <div style={{marginBottom: "30px"}}><Search/></div>}
        </>
    )

}
export default NavBar