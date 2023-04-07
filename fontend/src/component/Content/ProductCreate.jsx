import React, { useState } from 'react';
import { Row, Col, Card, Space, Image, Button, Input, Tag } from 'antd';
import { UploadOutlined, AppstoreAddOutlined, ClearOutlined } from '@ant-design/icons';

import Phone1 from './pic/ProductPic/Phone1.png'

const { TextArea } = Input;

const tagsData = ['Smartphone', 'Laptop', 'Smartwatch', 'Other'];

function ProductCreate() {

    const [selectedTags, setSelectedTags] = useState(['']);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productAmount, setProductAmount] = useState('');

    const handleTagChange = (tag, checked) => {
        setSelectedTags(checked ? [tag] : []);
    };

    const handleClearClick = () => {
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductAmount('');
        setSelectedTags([]);
    };
    return (
        <div className='productCreate'>
            <Row justify="center" style={{ marginTop: '20px' }}>
                <Col span={24}>
                    <Row>
                        <Col span={12} style={{ textAlign: 'right', paddingRight: '40px' }}>
                            <div>
                                <Space direction="vertical" size={16}>
                                    <Card
                                        title={<div style={{ textAlign: 'center' }}>Upload a picture of the product.</div>}
                                        style={{
                                            width: 500,
                                            height: 600,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                        }}>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Image width={255} height={500} src={Phone1} />
                                        </div>
                                    </Card>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button style={{ width: '20%', marginBottom: '10px' }} icon={<UploadOutlined />}>Upload</Button>
                                    </div>
                                </Space>
                            </div>
                        </Col>
                        <Col span={12} style={{ paddingLeft: '40px' }}>
                            <p>PRODUCT NAME</p>
                            <Input style={{ width: '60%' }} value={productName} onChange={e => setProductName(e.target.value)} />

                            <p>PRODUCT DECRIPTION</p>
                            <TextArea style={{ width: '60%' }} rows={4} maxLength={6} value={productDescription} onChange={e => setProductDescription(e.target.value)} />

                            <Row>
                                <Col span={10}>
                                    <p>PRODUCT PRICE</p>
                                    <Input prefix="$" suffix="USD" style={{ width: '80%' }} type="number" value={productPrice} onChange={e => setProductPrice(e.target.value)} />
                                </Col>
                                <Col span={10}>
                                    <p>Amount</p>
                                    <Input style={{ width: '60%', marginLeft: -37 }} type="number" value={productAmount} onChange={e => setProductAmount(e.target.value)} />
                                </Col>
                            </Row>
                            <p>PRODUCT CATEGORY</p>
                            <div>
                                Categories:{' '}
                                {tagsData.map(tag => (
                                    <Tag.CheckableTag
                                        key={tag}
                                        checked={selectedTags.includes(tag)}
                                        onChange={checked => handleTagChange(tag, checked)}
                                    >
                                        {tag}
                                    </Tag.CheckableTag>
                                ))}
                            </div>
                            <Row>
                                <Col span={15} style={{ textAlign: 'right', marginTop: 20 }}>
                                    <Button type="primary" style={{ width: '30%', marginRight: 10 }} icon={<AppstoreAddOutlined />}>Add Product</Button>
                                    <Button
                                        style={{
                                            width: '20%',
                                            marginRight: 6,
                                            backgroundColor: 'red',
                                            color: 'white'
                                        }}
                                        icon={<ClearOutlined />}
                                        onClick={handleClearClick}
                                    >
                                        Clear
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default ProductCreate;
