
import { Menu } from "antd";
import { DatabaseFilled, 
EditFilled, 
FileTwoTone,
FolderAddFilled, 
HomeOutlined, 
IdcardFilled, 
SmileFilled,
} from "@ant-design/icons";
import { Link } from 'react-router-dom';

const MenuList = ({ darkTheme }) => {
    return (
        <Menu
            theme={darkTheme ? 'dark' : 'light'}
            mode="inline"
            className="menu-bar"
        >
            <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link  to="/admin/dashboard">  Home </Link>
            </Menu.Item>
            <Menu.Item key="editar" icon={<FolderAddFilled />}>
            <Link to="/admin/">   Editar Preguntas </Link>
            </Menu.Item>
            <Menu.Item key="crear" icon={<EditFilled />}>
            <Link to="/admin/">   Crear Preguntas </Link>
            </Menu.Item>
            <Menu.Item key="categoria" icon={<DatabaseFilled />}>
            <Link to="/admin/categorias">   Categorías </Link>
            </Menu.Item>
            <Menu.Item key="configuracion" icon={<IdcardFilled />}>
            <Link to="/admin/configuracion">    Configuración </Link>
            </Menu.Item>
            <Menu.Item key="salir" icon={<SmileFilled />}>
            <Link to="/">   Salir </Link>
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;