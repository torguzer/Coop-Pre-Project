import { Col, Row, Image, Button, Space, Card } from 'antd';

import tor01 from './pic/tor01.jpg';
import tor02 from './pic/tor02.jpg';
import tor03 from './pic/tor03.jpg';
import tor04 from './pic/tor04.jpg';
import tor05 from './pic/tor05.jpg';
import tor06 from './pic/tor06.jpg';
import tor07 from './pic/tor07.jpg';
import tor08 from './pic/tor08.jpg';

const items = [
    { img: tor01, price: '9999 $', description: 'Product Description', name: 'Product Name' },
    { img: tor02, price: '9999 $', description: 'Product Description', name: 'Product Name' },
    { img: tor03, price: '9999 $', description: 'Product Description', name: 'Product Name' },
    { img: tor04, price: '9999 $', description: 'Product Description', name: 'Product Name' },
    { img: tor05, price: '9999 $', description: 'Product Description', name: 'Product Name' },
    { img: tor06, price: '9999 $', description: 'Product Description', name: 'Product Name' },
    { img: tor07, price: '9999 $', description: 'Product Description', name: 'Product Name' },
    { img: tor08, price: '9999 $', description: 'Product Description', name: 'Product Name' },
];

function ShoppingPage() {
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
                                        width={200}
                                        height={200}
                                        src={item.img}
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                    />
                                </div>
                                <div>
                                    <p>{item.description}</p>
                                    <p>PRICE {item.price}</p>
                                    <Space wrap>
                                        <Button type="primary" style={{ marginRight: '16px', width: '100%' }}>
                                            Primary Button
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