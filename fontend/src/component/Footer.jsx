import React from 'react';
import { Layout, Row, Col } from 'antd';
import Logo from './Logo/Logo.png'

const { Footer } = Layout;

function SiteFooter() {
  return (
    <div style={{ marginTop: '20px' }}>
      <Footer style={{ height: '300px', backgroundColor: '#000000' }}>
        <Row>
          <Col span={24}>
            <hr style={{ borderTop: '1px solid white' }} />
          </Col>
        </Row>
        <Row justify="center" gutter={[16, 32]}>
          <Col xs={24} sm={7}>
            <Row justify="center" style={{ marginTop: '37px' }}>
              <img src={Logo} alt="Logo" width={400} height={112} />
            </Row>
            <Row justify="center">
              <p style={{ fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
              Our smartphone unleashes the full potential of next-generation technology, providing an unparalleled user experience.
              </p>
            </Row>
          </Col>
          <Col xs={24} sm={7}>
            <Row justify="center">
              <h3 style={{ color: '#ffffff', fontFamily: 'Arial' }}>About</h3>
            </Row>
            <Row justify="center">
              <p style={{ fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                11
              </p>
            </Row>
          </Col>
          <Col xs={24} sm={7}>
            <Row justify="center">
              <h3 style={{ color: '#ffffff', fontFamily: 'Arial' }}>Support</h3>
            </Row>
            <Row justify="center">
              <p style={{ fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                22
              </p>
            </Row>
          </Col>
        </Row>
      </Footer>
    </div>
  );
}

export default SiteFooter;
