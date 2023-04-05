import React from 'react';
import { Layout, Row, Col } from 'antd';
import Logo from './Logo/Logo.png'

const { Footer } = Layout;

function SiteFooter() {
  return (
    <div className='Footer'>
      <Footer style={{ height: '320px',width: '100%', backgroundColor: '#000000' }}>
        <Row>
          <Col span={24}>
            <hr style={{ borderTop: '1px solid white' }} />
          </Col>
          <Col span={9}>
            <Row style={{ height: '100px' }}>
              <img
                src={Logo}
                alt="Logo"
                width={400}
                height={112}
              />
            </Row>
            <Row >
              <p style={{ fontFamily: 'Nunito', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                Our spanartphone unleashes the full potential of next-generation technology, providing an unparalleled user experience.
              </p>
            </Row>
          </Col>
          <Col span={5}>
            <Row>
              <p style={{ fontFamily: 'Nunito', fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
                About
              </p>
            </Row>
          </Col>
          <Col span={5}>
            <Row >
              <p style={{ fontFamily: 'Nunito', fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
                Support
              </p>
            </Row>
            <Row >
              <p style={{ fontFamily: 'Nunito', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                22
              </p>
            </Row>
          </Col>
          <Col span={5}>
            <Row >
              <p style={{ fontFamily: 'Nunito', fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
                Contact Us
              </p>
            </Row>
            <Row >
              <p style={{ fontFamily: 'Nunito', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                33
              </p>
            </Row>
          </Col>
        </Row>
        <hr style={{ borderTop: '1px solid white' }} />
        <Row justify={'center'}>
          <p style={{ fontFamily: 'Nunito', fontSize: '16px', color: 'white' }}>
            © 2023 NEXGEN. All Rights Reserved.
          </p>
        </Row>
      </Footer>
    </div>
  );
}

export default SiteFooter;