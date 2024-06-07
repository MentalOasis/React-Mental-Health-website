
import { Outlet } from "react-router-dom";
import Navbar from "/src/components/PagNavFooter/Navbar.jsx"; 
import Sidebar from "/src/components/admin/categorias/Sidebar.jsx"
import './Cat.css'

const PlantillaAdmin = () => {
return (
    <>
        <Navbar />
        <div className="contenedor">
            <Sidebar />
            <Outlet />
        </div>
    </>
)
}

export default PlantillaAdmin