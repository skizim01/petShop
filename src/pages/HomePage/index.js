import MySlider from "../../components/Slider/Slider";
import ChooseCategory from "../../components/ChooseCategory";
import NavBar from "../../components/NavBar";
import ShopProducts from "../../components/ShopProducts";


const HomePage = () => {

    return (<div>
        <MySlider/>
        <div style={{
            minWidth: "300px", maxWidth: 1170 + "px",
            margin: "0 auto"
        }}>
            <ChooseCategory/>
            <NavBar/>
            <ShopProducts/>
        </div>
    </div>)
}

export default HomePage