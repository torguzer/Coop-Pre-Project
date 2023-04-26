import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import Logo from './Logo/Logo.png';

const { SubMenu } = Menu;

function Navbar() {

  const navigate = useNavigate();

  const goPath = (path) => {
    navigate(path);
  };

  const toggleHam = (element) => {
    element.classList.toggle("change");
  }



  return (
    <div className='Navbar'>
      <img
        src={Logo}
        alt="Logo"
        width={160}
        height={45}
        style={{ marginLeft: '10px' }}
      />
      <div className='all-menu'>
        <div className='menubar' >
          <Menu
            mode='horizontal'
            className='Menu'>
            <Menu.Item onClick={() => goPath('/')} key="home">
              Home
            </Menu.Item>

            <Menu.Item onClick={() => goPath('/shoppingPage')} key="shopping">
              Shopping
            </Menu.Item>

            <SubMenu key="product" title="Product">
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

            <Menu.Item onClick={() => goPath('/productApiTest')} key="productApiTest">
              Api Test
            </Menu.Item>

            <Menu.Item onClick={() => goPath('/webResPon')} key="webResPon">
              WebResPon
            </Menu.Item>

          </Menu>
        </div>
        <div className="Ham-bar" onClick={(e) => toggleHam(e.currentTarget)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

