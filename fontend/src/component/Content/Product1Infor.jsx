import React from 'react';
import { Row, Col, Image, Card, Space } from 'antd'

//Product Pic
import Phone7 from './pic/ProductPic/Phone7.png'
import blue_print_1 from './pic/ProductPic/blue_print_1.jpg'
import blue_print_2 from './pic/ProductPic/blue_print_2.jpg'

//icon
import Desige from './pic/Icon/Desige.png'
import Video from './pic/Icon/Video.png'
import Camera from './pic/Icon/Camera.png'
import Screen from './pic/Icon/Screen.png'


function Product1Infor() {

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
            <Row justify="center" gutter={[30, 30]}>
                <Col span={5} align="middle">
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

                <Col span={5}>
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

                <Col span={5}>
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

                <Col span={5}>
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
            <div style={{ marginTop: '50px' }}>
                <hr style={{ borderTop: '1px solid gray', width: '95%' }} />
            </div>
            <Row style={{ marginTop: '50px' }}>
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
                <Col span={5} style={{ textAlign: 'left', marginLeft: 100 }} s>
                    <Space direction="vertical" size={15}>
                        <div style={{ display: 'flex' }}>
                            <h1 style={{ fontFamily: 'Nunito' }}>
                                Display
                            </h1>
                        </div>
                        <p style={{ fontFamily: 'Nunito', fontSize: '16px' }}>
                            Display TFT-LCD 24-bit (16 million colors)
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
            </Row>
        </div>
    );
}


export default Product1Infor