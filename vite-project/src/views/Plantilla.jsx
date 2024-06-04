import { Outlet } from "react-router-dom";
import Navbar from "../components/PagNavFooter/Navbar.jsx";
import Footer from "../components/PagNavFooter/Footer.jsx";

const Plantilla = () => {
return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
)
}

export default Plantilla 