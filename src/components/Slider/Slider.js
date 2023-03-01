import slide1 from '../../images/forSlider/slide-01.jpg.webp'
import slide2 from '../../images/forSlider/slide-02.jpg.webp'
import slide3 from '../../images/forSlider/slide-03.jpg.webp'
import {useEffect, useState} from "react";

import s from './style.module.css'
import {NavLink} from "react-router-dom";
import {buttonStyle} from "../styles";



const SliderItem = ({collection, title, background}) =>{
    const [style, setStyle]= useState(buttonStyle)
    return(
        <div style={{backgroundImage:`url(${background})`, backgroundSize:"cover", transition:"0.8s"}}>
            <div  className={s.container}>
                <div className={s.collection}>{collection}</div>
                <div className={s.title}>{title}</div>
                <NavLink to={'/'}
                         onMouseEnter={()=>(
                             console.log("enter"),
                             setStyle( {...style, backgroundColor: "#333"}))}
                         onMouseLeave={()=>(
                             console.log("enter"),
                                 setStyle( buttonStyle))}
                         style={style}>Shop now</NavLink>
            </div>

        </div>
    )
}

const Sliders = () => {

    const [index, setIndex] = useState(0)
    const data = [
        {collection:"Women Collection 2023",
            title: "NEW SEASON",
            img: slide1
        },
        {collection:"Men Collection 2023",
            title: "NEW ARRIVALS",
            img: slide2
        },
        {collection:"Men Collection 2023",
            title: "JACKETS & COATS",
            img: slide3
        },
    ]

    useEffect(()=>{
        setTimeout(()=>{

            if(index===data.length-1)setIndex(0)
            else setIndex(index+1)
        },100000)
    }, [index, data.length])






    return <div>
        {<SliderItem title={data[index].title}  background={data[index].img} collection={data[index].collection }/> }
        </div>

}

export default Sliders



