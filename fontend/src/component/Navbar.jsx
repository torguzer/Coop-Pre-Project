import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import Logo from './Logo/Logo.png';

const { SubMenu } = Menu;

function Navbar() {
  
  const navigate = useNavigate();

  const goPath = (path) => {
    navigate(path);
  };

  return (
    <div className='Navbar' style={{ justifyContent: 'left' }}>
      <Menu mode="horizontal" style={{ backgroundColor: 'black' }}>

        <img
          src={Logo}
          alt="Logo"
          width={160}
          height={45}
          style={{ marginLeft: '10px' }}
        />

        <Menu.Item onClick={() => goPath('/')} key="home" style={{ color: '#ffffff' }}>
          Home
        </Menu.Item>

        <Menu.Item onClick={() => goPath('/shoppingPage')} key="shopping" style={{ color: '#ffffff' }}>
          Shopping
        </Menu.Item>

        <SubMenu key="product" title="Product" style={{ color: '#ffffff' }}>
          <Menu.Item onClick={() => goPath('/productCreate')} key="addProduct">
            Add Product
          </Menu.Item>

          <Menu.Item onClick={() => goPath('/')} key="editProduct">
            Edit Product
          </Menu.Item>

          <Menu.Item onClick={() => goPath('/')} key="removeProduct">
            Remove Product
          </Menu.Item>
        </SubMenu>

        <Menu.Item onClick={() => goPath('/productApiTest')} key="productApiTest" style={{ color: '#ffffff' }}>
          Api Test
        </Menu.Item>

        {/* <SubMenu key="login" title="Login/Signin" style={{ color: '#ffffff' }}>
          <Menu.Item onClick={() => goPath('/')} key="login">
            Login
          </Menu.Item>

          <Menu.Item onClick={() => goPath('/')} key="signin">
            Signin
          </Menu.Item>
        </SubMenu> */}
      </Menu>
    </div>
  );
}

export default Navbar;
