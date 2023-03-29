import { Menu } from 'antd';

function Navbar() {
    return (
        <div className="Navbar">
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    Home
                </Menu.Item>

                <Menu.Item key="shop">
                    Shop
                </Menu.Item>

                <Menu.Item key="cart">
                    Cart
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default Navbar
