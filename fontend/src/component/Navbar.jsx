import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;

function Navbar() {
  return (
    <div className="Navbar">
      <Menu mode="horizontal">

        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="shoping">
          <Link to="/shoppingPage">Shopping</Link>
        </Menu.Item>

        <Menu.Item key="cart">
          <Link to="/cart">Cart</Link>
        </Menu.Item>

        <SubMenu key="product" title="Product">

          <Menu.Item key="product:addProduct">
            <Link to="/productCreate">ADD Product</Link>
          </Menu.Item>

          <Menu.Item key="product:editProduct">
            <Link to="/">Edit Product</Link>
          </Menu.Item>

          <Menu.Item key="product:removeProduct">
            <Link to="/">Remove Product</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="login" title="Login/Signin" style={{ float: 'right' }}>

          <Menu.Item key="login">
            <Link to="/">Login</Link>
          </Menu.Item>

          <Menu.Item key="Signin">
            <Link to="/">Signin</Link>
          </Menu.Item>

        </SubMenu>

      </Menu>
    </div>
  );
}

export default Navbar;
