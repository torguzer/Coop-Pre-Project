import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Space, Image, Rate, Button } from 'antd'
import { ArrowLeftOutlined, ShoppingOutlined } from '@ant-design/icons'
//Background


//Product Pic
import Phone1 from './pic/ProductPic/Phone1.png'
import Phone3 from './pic/ProductPic/Phone3.png'
import Phone7 from './pic/ProductPic/Phone7.png'
import Phone5 from './pic/ProductPic/Phone5.png'
import blue_print_1 from './pic/ProductPic/blue_print_1.png'
import blue_print_2 from './pic/ProductPic/blue_print_2.jpg'

//icon
import Desige from './pic/Icon/Desige.png'
import Video from './pic/Icon/Video.png'
import Camera from './pic/Icon/Camera.png'
import Screen from './pic/Icon/Screen.png'


function Product1Infor() {

    const navigate = useNavigate();

    const goPath = (path) => {
      navigate(path);
    };

    const [selectedButton, setSelectedButton] = useState("32GB");
    const [price, setPrice] = useState(299);
    const [GB, setGB] = useState("32");

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        if (buttonName === "32GB") {
            setPrice(299);
            setGB("32");
        } else if (buttonName === "64GB") {
            setPrice(399);
            setGB("64");
        } else {
            setPrice(299);
            setGB("32");
        }
    }

    return (
        <div className='product1Infor'>
            <Row justify='center' style={{ marginTop: '50px' }}>
                <p style={{ fontFamily: 'Nunito', fontSize: 50, fontWeight: 'bolder' }}>
                    NEXGEN 1
                </p>
            </Row>
            <Row justify='left' style={{ marginTop: '50px', marginBottom: '50px' }}>
                <img
                    width={1518}
                    height={632}
                    src={Phone7}
                    style={{ borderRadius: '10px' }}
                    dsable
                />
            </Row>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
                <h1 style={{ fontFamily: 'Nunito' }}>
                    HIGHLIGHTS FEATURES
                </h1>
            </div>
            <Row justify="center">
                <Col span={5} align="middle" style={{ marginRight: 10 }}>
                    <Space direction="vertical" size={15}>
                        <Card style={{ background: '#f5f5f5', height: '120px' }}>
                            <Row>
                                <Col span={5} align="middle">
                                    <img
                                        width={50}
                                        height={50}
                                        src={Desige}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </Col>
                                <Col span={18} align="Left" style={{ marginTop: -20, marginLeft: 10 }}>
                                    <p style={{ fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Awsome Desige</p>
                                    <p style={{ fontFamily: 'Nunito', fontSize: '10px' }}>
                                        Experience the perfect blend of style and functionality with our awesome designed phone
                                    </p>
                                </Col>
                            </Row>
                        </Card>
                    </Space>
                </Col>

                <Col span={5} style={{ marginRight: 5 }}>
                    <Space direction="vertical" size={15}>
                        <Card style={{ background: '#f5f5f5', height: '120px' }}>
                            <Row>
                                <Col span={5} align="middle">
                                    <img
                                        width={50}
                                        height={50}
                                        src={Video}
                                        style={{ borderRadius: '10px', }}
                                    />
                                </Col>
                                <Col span={18} align="Left" style={{ marginTop: -20, marginLeft: 10 }}>
                                    <p style={{ fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Awesome Video</p>
                                    <p style={{ fontFamily: 'Nunito', fontSize: '10px' }}>
                                        Capture your memories in stunning clarity with our advanced video features
                                    </p>
                                </Col>
                            </Row>
                        </Card>
                    </Space>
                </Col>

                <Col span={5} style={{ marginLeft: 5 }}>
                    <Space direction="vertical" size={15}>
                        <Card style={{ background: '#f5f5f5', height: '120px' }}>
                            <Row>
                                <Col span={5} align="middle">
                                    <img
                                        width={50}
                                        height={50}
                                        src={Camera}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </Col>
                                <Col span={18} align="Left" style={{ marginTop: -20, marginLeft: 10 }}>
                                    <p style={{ fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Amazing Camera</p>
                                    <p style={{ fontFamily: 'Nunito', fontSize: '10px' }}>
                                        Take professional-quality photos with ease using our state-of-the-art camera technology
                                    </p>
                                </Col>
                            </Row>
                        </Card>
                    </Space>
                </Col>

                <Col span={5} style={{ marginLeft: 10 }}>
                    <Space direction="vertical" size={15}>
                        <Card style={{ background: '#f5f5f5', height: '120px' }}>
                            <Row>
                                <Col span={5} align="middle">
                                    <img
                                        width={50}
                                        height={50}
                                        src={Screen}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </Col>
                                <Col span={18} align="Left" style={{ marginTop: -20, marginLeft: 10 }}>
                                    <p style={{ fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Stunning Screen</p>
                                    <p style={{ fontFamily: 'Nunito', fontSize: '10px' }}>
                                        Enjoy your favorite content like never before on our crystal-clear display
                                    </p>
                                </Col>
                            </Row>
                        </Card>
                    </Space>
                </Col>
            </Row>

            <div style={{ marginTop: 50, marginBottom: 50 }}>
                <hr style={{ borderTop: '1px solid gray', width: '95%' }} />
            </div>

            <Row>
                <Col span={5} style={{ textAlign: 'left', marginLeft: 130 }}>
                    <img
                        width={333}
                        height={600}
                        src={blue_print_1}
                        style={{ borderRadius: '10px' }}
                    />
                </Col>

                <Col spam={5} style={{ textAlign: 'left', marginLeft: 30 }}>
                    <img
                        width={89}
                        height={600}
                        src={blue_print_2}
                        style={{ borderRadius: '10px' }}
                    />
                </Col>

                <Col span={6} style={{ textAlign: 'left', marginLeft: 104, marginRight: 40 }} s>
                    <Space direction="vertical" size={0}>
                        <div style={{ display: 'flex' }}>
                            <h1 style={{ fontFamily: 'Nunito' }}>
                                Screen & Display
                            </h1>
                        </div>
                        <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                            -Display TFT-LCD 24-bit (16 million colors)
                        </p>
                        <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                            - Borderless screen (Ultra Fullview Display)
                        </p>
                        <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                            - 6.59 inches wide (diagonal)
                        </p>
                        <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                            - Resolution 2340 x 1080 pixels (391 ppi)
                        </p>
                    </Space>
                </Col>

                <Col span={5} style={{ textAlign: 'center', marginTop: 18 }}>
                    <img
                        width={282}
                        height={564}
                        src={Phone5}
                        style={{ borderRadius: '10px' }}
                    />
                </Col>
            </Row>

            <div style={{ marginTop: 50, marginBottom: 50 }}>
                <hr style={{ borderTop: '1px solid gray', width: '95%' }} />
            </div>

            <div>
                <Row >

                    <Col span={5} style={{ textAlign: 'left', marginLeft: 130, marginRight: 25 }}>
                        <Space direction="vertical" size={0}>
                            <div style={{ display: 'flex' }}>
                                <h1 style={{ fontFamily: 'Nunito' }}>
                                    Rear Camera
                                </h1>
                            </div>
                            <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                                - 5MP Digital Camera
                            </p>
                            <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                                - ƒ/1.8 aperture
                            </p>
                            <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                                - LED flash
                            </p>
                            <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                                - AI Camera technology
                            </p>
                            <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                                - Panorama mode
                            </p>
                            <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                                - HDR mode for high dynamic range photos
                            </p>
                        </Space>
                    </Col>

                    <Col span={3} style={{ textAlign: 'Left', marginRight: 82 }}>
                        <img
                            width={250}
                            height={500}
                            src={Phone3}
                            style={{ borderRadius: '10px' }}
                        />
                    </Col>

                    <Col span={3} style={{ textAlign: 'Right', marginLeft: 82 }}>
                        <img
                            width={250}
                            height={500}
                            src={Phone1}
                            style={{ borderRadius: '10px' }}
                        />
                    </Col>

                    <Col span={5} style={{ textAlign: 'left', marginLeft: 95, marginRight: 10 }}>
                        <Space direction="vertical" size={0}>
                            <div style={{ display: 'flex' }}>
                                <h1 style={{ fontFamily: 'Nunito' }}>
                                    Front Camera
                                </h1>
                            </div>
                            <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                                - 5MP
                            </p>
                            <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                                - ƒ/2 aperture
                            </p>
                            <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                                - Front camera with HDR
                            </p>
                            <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                                - Front camera with Portrait mode
                            </p>
                        </Space>
                    </Col>
                </Row>
            </div>

            <div style={{ marginTop: 50, marginBottom: 50 }}>
                <hr style={{ borderTop: '1px solid gray', width: '95%' }} />
            </div>

            <Row>
                <Col span={12} style={{ textAlign: 'right', paddingRight: 50 }}>
                    <Space>
                        <Card
                            title={<div style={{ textAlign: 'center', fontFamily: 'Nunito' }}>NEXGEN 1</div>}
                            headStyle={{ border: 'none' }}
                            style={{
                                width: 500,
                                height: 600,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                marginTop: 25
                            }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Image width={255} height={500} src={Phone1} />
                            </div>
                        </Card>
                    </Space>
                </Col>
                <Col Col span={12} style={{ paddingLeft: '40px', fontFamily: 'Nunito' }}>
                    <h2>NEXGEN 1</h2>
                    <p>NG-D01M03Y2000</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Rate value={4.5} allowHalf disabled={true} style={{ marginBottom: 20, marginRight: 10 }} />
                        <p style={{ marginTop: 0 }}>4.5 (125 reviews)</p>
                    </div>
                    <ul style={{ marginLeft: -20, marginTop: -1 }}>
                        <li>
                            Water and dust resistance with IP67¹ standard
                        </li>
                        <li>
                            5MP OIS  Camera
                        </li>
                        <li>
                            2500mAh battery that lasts long
                        </li>
                        <li>
                            TFT-LCD 24-bit 6.59-inch
                        </li>
                    </ul>
                    <h2>Choose your data storage option.</h2>
                    <div className="">
                        <Button
                            direction="horiz"
                            style={{ width: '25%', height: '15%' }}
                            onClick={() => handleButtonClick("32GB", 299, "32")}
                            type={selectedButton === "32GB" ? "primary" : "default"}
                        >
                            <div style={{ fontFamily: 'Nunito' }}>
                                <h3 style={{ marginTop: 10 }}>32 GB</h3>
                                <p>$299</p>
                            </div>
                        </Button>
                        <Button
                            direction="horiz"
                            style={{ width: '25%', height: '15%', marginLeft: 10 }}
                            onClick={() => handleButtonClick("64GB", 399, "64")}
                            type={selectedButton === "64GB" ? "primary" : "default"}
                        >
                            <div style={{ fontFamily: 'Nunito' }}>
                                <h3 style={{ marginTop: 10 }}>64 GB</h3>
                                <p>$399</p>
                            </div>
                        </Button>
                    </div>
                    <div style={{ backgroundColor: '#F0F0F0', marginTop: 10,marginBottom: 10, width: 370,height: 210, borderRadius: '10px', }}>
                        <div style={{ marginLeft: 10 }}>
                            <h2>NEXGEN</h2>
                            <p style={{ fontSize: 13, marginTop: -15 }}>Black | {GB} GB </p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <hr style={{ width: '90%' }}></hr>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: -20 }}>
                            <p style={{ fontSize: 30 }}>$ {price}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: -40 }}>
                            <p style={{ fontSize: 12 }}>Pre-order now, shipping starts from 01/05/2023 onwards</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                            <Button icon={<ShoppingOutlined />} type="primary" style={{ marginRight: 10}}>
                                Buy
                            </Button>
                            <Button onClick={() => goPath('/shoppingPage')} icon={<ArrowLeftOutlined />} style={{ marginLeft: 10}}>
                                Back
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>

        </div >
    );
}


export default Product1Infor