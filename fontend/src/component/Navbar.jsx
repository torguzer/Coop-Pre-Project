import { Menu } from 'antd';

const { SubMenu } = Menu;

function Navbar() {
  return (
    <div className="Navbar">
      <Menu mode="horizontal">
        <Menu.Item key="home">Home</Menu.Item>

        <SubMenu key="shop" title="Shop">
          <Menu.Item key="shop:men">Men</Menu.Item>
          <Menu.Item key="shop:women">Women</Menu.Item>
          <Menu.Item key="shop:kids">Kids</Menu.Item>
        </SubMenu>

        <SubMenu key="product" title="Add Product">
          <Menu.Item key="product:addProduct">Add product</Menu.Item>
          <Menu.Item key="product:updateProduct">Update product</Menu.Item>
          <Menu.Item key="product:deleteProduct">Delete product</Menu.Item>
        </SubMenu>

        <Menu.Item key="cart">Cart</Menu.Item>

        <SubMenu key="login" title="Login/Register" style={{float: 'right'}}>
          <Menu.Item key="product:addProduct">Login</Menu.Item>
          <Menu.Item key="product:updateProduct">Register</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default Navbar;