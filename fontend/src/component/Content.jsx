import React from 'react';
import { Col, Row, Image, Button, Space } from 'antd';

import tor01 from './pic/tor01.jpg';
import tor02 from './pic/tor02.jpg';
import tor03 from './pic/tor03.jpg';
import tor04 from './pic/tor04.jpg';
import winnie from './pic/winnie.jpg';

function Content() {
  return (
    <div>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={4} align="middle">
          <Image width={200} height={200} src={tor01} style={{ objectFit: 'cover', objectPosition: 'center' }}/>
          <p>PRICE 9999 $</p>
          <Space wrap>
            <Button type="primary" style={{ marginRight: '16px', width: '100%' }}>
              Primary Button
            </Button>
          </Space>
        </Col>
        <Col span={4} align="middle">
          <Image width={200} height={200} src={tor02} style={{ objectFit: 'cover', objectPosition: 'center' }}/>
          <p>PRICE 9999 $</p>
          <Space wrap>
            <Button type="primary" style={{ marginRight: '16px', width: '100%' }}>
              Primary Button
            </Button>
          </Space>
        </Col>
        <Col span={4} align="middle">
          <Image width={200} height={200} src={tor03} style={{ objectFit: 'cover', objectPosition: 'center' }}/>
          <p>PRICE 9999 $</p>
          <Space>
            <Space wrap>
              <Button type="primary" style={{ marginRight: '16px', width: '100%' }}>
                Primary Button
              </Button>
            </Space>
          </Space>
        </Col>
        <Col span={4} align="middle">
          <Image width={200} height={200} src={tor04} style={{ objectFit: 'cover', objectPosition: 'center' }}/>
          <p>PRICE 9999 $</p>
          <Space wrap>
            <Button type="primary" style={{ marginRight: '16px', width: '100%' }}>
              Primary Button
            </Button>
          </Space>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={4} align="middle">
          <Image width={200} height={200} src={winnie} style={{ objectFit: 'cover', objectPosition: 'center' }}/>
          <p>PRICE 9999 $</p>
          <Space wrap>
            <Button type="primary" style={{ marginRight: '16px', width: '100%' }}>
              Primary Button
            </Button>
          </Space>
        </Col>
        <Col span={4} align="middle">
          <Image width={200} height={200} src={tor02} style={{ objectFit: 'cover', objectPosition: 'center' }}/>
          <p>PRICE 9999 $</p>
          <Space wrap>
            <Button type="primary" style={{ marginRight: '16px', width: '100%' }}>
              Primary Button
            </Button>
          </Space>
        </Col>
        <Col span={4} align="middle">
          <Image width={200} height={200} src={tor03} style={{ objectFit: 'cover', objectPosition: 'center' }}/>
          <p>PRICE 9999 $</p>
          <Space>
            <Space wrap>
              <Button type="primary" style={{ marginRight: '16px', width: '100%' }}>
                Primary Button
              </Button>
            </Space>
          </Space>
        </Col>
        <Col span={4} align="middle">
          <Image width={200} height={200} src={tor04} style={{ objectFit: 'cover', objectPosition: 'center' }}/>
          <p>PRICE 9999 $</p>
          <Space wrap>
            <Button type="primary" style={{ marginRight: '16px', width: '100%' }}>
              Primary Button
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default Content;
