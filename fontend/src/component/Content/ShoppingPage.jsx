import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Col, Row, Image, Button, Space, Card, Rate } from 'antd';

import Phone1 from './pic/ProductPic/Phone1.png';

const items = [
    { img: Phone1, price: '299 $', rating: 4.5, numRatings: 123, name: 'NexGen 1', path: '/product1Infor' },
    { img: Phone1, price: '199 $', rating: 3.0, numRatings: 45, name: 'NexGen 1 Pro', path: '/product2Infor' },
    { img: Phone1, price: '399 $', rating: 4.8, numRatings: 246, name: 'NexGen 1 Edge+', path: '/product3Infor' },
    { img: Phone1, price: '500 $', rating: 4.2, numRatings: 74, name: 'NexGen 1 Flex', path: '/product4Infor' },
    { img: Phone1, price: '600 $', rating: 5.0, numRatings: 9, name: 'NexGen 1', path: '/product5Infor' },
    { img: Phone1, price: '799 $', rating: 3.5, numRatings: 87, name: 'NexGen 1 Pro', path: '/product6Infor' },
    { img: Phone1, price: '899 $', rating: 4.1, numRatings: 145, name: 'NexGen 1 Edge+', path: '/product7Infor' },
    { img: Phone1, price: '999 $', rating: 4.9, numRatings: 321, name: 'NexGen 1 Flex', path: '/product8Infor' },
];

function ShoppingPage() {
    const navigate = useNavigate();

    const goPath = (path) => {
        navigate(path);
    };

    return (
        <div className='shoppingPage'>
            <Row justify="center" style={{ marginTop: '20px' }}>
                {items.map((item, index) => (
                    <Col span={5} align="middle" key={index} style={{ marginBottom: '20px' }}>
                        <Space>
                            <Card
                                title={item.name}
                                hoverable
                                style={{
                                    width: 250,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image
                                        width={102}
                                        height={200}
                                        src={item.img}
                                    />
                                </div>
                                <div>
                                    <p>PRICE {item.price}</p>
                                    <Rate value={item.rating} allowHalf disabled={true} style={{ marginBottom: 20 }} />
                                    <Space wrap>
                                        <Button
                                            type="primary"
                                            style={{ marginRight: '16px', width: '100%' }}
                                            onClick={() => goPath(item.path)}
                                        >
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
