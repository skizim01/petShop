import s from './style.module.css'
import male from '../../images/male.webp'
import famele from '../../images/famele.webp'
import accessory from '../../images/accessory.webp'
import {useState} from "react";
import {purpuleColor} from "../styles";

const ChooseCategoryItem = ({name, title, img}) => {
    const [isActive, setIsActive] = useState(false)
    const hoverStyle = {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        backgroundColor: purpuleColor,
        opacity: '0.5',
        transition: "2.5s",



    }
    return (
        <div style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            margin: "0px 10px 30px",
            minWidth: "368px",
            height: 248 + 'px',
            width: 368 + 'px',
            display: "flex",

            border: "#666666 solid 1px",
            position: "relative",
        }}
             onMouseEnter={() => setIsActive(true)}
             onMouseLeave={() => setIsActive(false)}>

            <div style={{width: 100 + '%', height: 100 + "%", padding: '34px 38px'}}>
                <div style={{fontWeight: "bold", fontSize: "28px"}}>{name}</div>
                <div style={s.title}>{title}</div>
            </div>
            {isActive && <div style={hoverStyle}>
                <div style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyItems: "flex-end",
                    width: "100%",
                    height: "100%",


                }}>
                    <div style={{color: "#fff",padding: '34px 38px', fontSize:"18px"
                    }}>SHOP NOW</div>

                </div>

            </div>}

        </div>
    )
}


const ChooseCategory = () => {
    const data = [{name: "Man", title: "Spring 2023", img: male},
        {name: "Woman", title: "Spring 2023", img: famele},
        {name: "Accessory", title: "New Trend", img: accessory},]

    return (<div style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "80px 0px 50px",
        justifyContent: "center",
        alignItems: "center"
    }}>
        {data.map((e,i) => <div key={i}><ChooseCategoryItem  name={e.name} title={e.title} img={e.img}/></div>)}
    </div>)
}

export default ChooseCategory