import React, { useState } from 'react';
import { Row, Col, Card, Space, Image, Button, Input, Tag } from 'antd';

import '../Desige.css'

import phone1 from './pic/ProductPic/phone1.png'

const { TextArea } = Input;

const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

function ProductCreate() {

    const [selectedTags, setSelectedTags] = useState(['Books']);

    const handleTagChange = (tag, checked) => {
        setSelectedTags((prevTags) => {
            if (checked) {
                return [...prevTags, tag];
            } else {
                return prevTags.filter((t) => t !== tag);
            }
        });
    };

    return (
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
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image
                                            width={255}
                                            height={500}
                                            src={phone1}
                                        />
                                    </div>
                                </Card>
                                <Button style={{ width: '100%' ,marginBottom: '10px' }}>Upload</Button>
                            </Space>
                        </div>
                    </Col >
                    <Col span={12} style={{ paddingLeft: '40px' }}> 
                        <p>PRODUCT NAME</p>
                        <Input style={{ width: '50%' }} />

                        <p>PRODUCT DECRIPTION</p>
                        <TextArea style={{ width: '50%' }} rows={4} maxLength={6} />

                        <p>PRODUCT PRICE</p>
                        <Input prefix="$" suffix="USD" style={{ width: '50%' }} type="number" />

                        <p>PRODUCT CATEGORY</p>
                        <div>
                            Categories:{' '}
                            {tagsData.map((tag) => (
                                <Tag.CheckableTag
                                    key={tag}
                                    checked={selectedTags.includes(tag)}
                                    onChange={(checked) => handleTagChange(tag, checked)}
                                >
                                    {tag}
                                </Tag.CheckableTag>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default ProductCreate;
