import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Image, Button, Rate } from 'antd'
import { Link, useParams } from 'react-router-dom'

function ProductApiTest() {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className='productApiTest'>
            <Row justify="center" style={{ marginTop: '20px' }} gutter={[16, 16]}>
                {data && data.products.slice(0, 20).map((item) => (
                    <Col span={5} key={item.id}>
                        <Card
                            title={item.title}
                            hoverable
                            style={{
                                width: 250,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                textAlign: 'center'
                            }}>
                            <div style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
                                <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    width={200}
                                    height={200}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 10 }}
                                />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>Price: {item.price} $</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'left', marginTop: -20, marginLeft: 0 }}>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Rate value={item.rating} allowHalf disabled style={{ marginBottom: 20 }} />
                                <Link to={{ pathname: `/productDetail/${item.id}`, state: { product: item } }}>
                                    <Button style={{ width: '100%' }}>
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ProductApiTest;
