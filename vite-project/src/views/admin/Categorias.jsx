import Botones from "../../components/admin/categorias/Botones";
import Sidebar from "../../components/admin/categorias/Sidebar";
import Navbar from "../../components/PagNavFooter/Navbar";
import './Cat.css'

const Categorias = () => {
    return(
        <>
        <Navbar/>
        <div className="contenedor">
            <Sidebar />
            <Botones />
        </div>
        </>
    );
}

export default Categorias;