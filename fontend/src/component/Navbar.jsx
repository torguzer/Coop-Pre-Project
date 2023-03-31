import React, { useState} from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd'

const { SubMenu } = Menu;


function Navbar() {
  return (
    <div className="Navbar">
      <Menu mode="horizontal">
         
        <Menu.Item key="home"><a href='/'>Home</a></Menu.Item>

        <Menu.Item key="shoping"><a href='/shoppingPage'>Shoping</a></Menu.Item>

        <SubMenu key="product" title="Product">
          <Menu.Item key="product:addProduct"><a href='/productCreate'>ADD Product</a></Menu.Item>
        </SubMenu>

        <Menu.Item key="cart">Cart</Menu.Item>

      </Menu>
    </div>
  );
}

export default Navbar;