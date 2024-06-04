
import { Menu } from "antd";
import { DatabaseFilled, 
EditFilled, 
FileTwoTone,
FolderAddFilled, 
HomeOutlined, 
IdcardFilled, 
SmileFilled,
} from "@ant-design/icons";
const MenuList = ({ darkTheme }) => {
  return (
    <Menu 
        theme={darkTheme ? 'dark' : 'light'}
        mode="inline" 
        className="menu-bar"
        >
        <Menu.Item key="home" icon={<HomeOutlined />}>
           Home
        </Menu.Item>
        <Menu.Item key="editar" icon={<FolderAddFilled />}>
           Editar Preguntas
        </Menu.Item>
        <Menu.Item key="crear" icon={<EditFilled />}>
           Crear Preguntas
        </Menu.Item>
        <Menu.Item key="categoria" icon={<DatabaseFilled />}>
           Categorías
        </Menu.Item>
        <Menu.Item key="configuracion" icon={<IdcardFilled />}>
           Configuración
        </Menu.Item>
        <Menu.Item key="salir" icon={<SmileFilled />}>
           Salir
        </Menu.Item>                        
    </Menu>
  );
};

export default MenuList;