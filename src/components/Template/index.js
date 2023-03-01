import Header from "../Header";
import {Outlet} from "react-router";
import FOOTER from "../FOOTER";

const Template = () =>{
    return(
        <>
            <Header/>
            <Outlet/>
            <FOOTER/>
        </>
    )

}

export default Template