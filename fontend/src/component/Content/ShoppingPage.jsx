import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Col, Row, Image, Button, Space, Card } from 'antd';

import phone1 from './pic/phone1.png';

const items = [
    { img: phone1, price: '9999 $', description: 'Product Description', name: 'NexGen 1' , path: '/product1Infor'},
    { img: phone1, price: '9999 $', description: 'Product Description', name: 'NexGen 1 Pro'},
    { img: phone1, price: '9999 $', description: 'Product Description', name: 'NexGen 1 Edge+'}, 
    { img: phone1, price: '9999 $', description: 'Product Description', name: 'NexGen 1 Flex' },
    { img: phone1, price: '9999 $', description: 'Product Description', name: 'NexGen 1' },
    { img: phone1, price: '9999 $', description: 'Product Description', name: 'NexGen 1 Pro' },
    { img: phone1, price: '9999 $', description: 'Product Description', name: 'NexGen 1 Edge+' },
    { img: phone1, price: '9999 $', description: 'Product Description', name: 'NexGen 1 Flex' },
];

function ShoppingPage() {

    const navigate = useNavigate();

    const goPath = (path) => {
        navigate(path);
    };

    return (
        <div>
            <Row justify="center" style={{ marginTop: '20px' }}>
                {items.map((item, index) => (
                    <Col span={5} align="middle" key={index} style={{ marginBottom: '20px' }}>
                        <Space>
                            <Card
                                title={item.name}
                                style={{
                                    width: 250,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image
                                        width={102}
                                        height={200}
                                        src={item.img}

                                    />
                                </div>
                                <div>
                                    <p>{item.description}</p>
                                    <p>PRICE {item.price}</p>
                                    <Space wrap>
                                        <Button
                                            type="primary"
                                            style={{ marginRight: '16px', width: '100%' }}
                                            onClick={() => goPath(item.path)}>
                                            View Details
                                        </Button> 
                                    </Space>
                                </div>
                            </Card>
                        </Space>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ShoppingPage;