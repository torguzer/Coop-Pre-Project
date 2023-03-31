import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

function SiteFooter() {
  return (
    <div style={{ marginTop: '20px' }}>
      <Footer style={{ height: '400px', backgroundColor: '#000000' }}>
        <Row>
          <Col span={24}>
            <h1 style={{ color: '#ffffff', fontFamily: 'Arial' }}>FOOTER</h1>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <h3 style={{ color: '#ffffff', fontFamily: 'Arial', display: 'flex', justifyContent: 'flex-start' }}>
              <p>Location</p>
            </h3>
          </Col>
          <Col span={8}>
            <h3 style={{ color: '#ffffff', fontFamily: 'Arial', display: 'flex', justifyContent: 'center' }}>
              <p>About</p>
            </h3>
          </Col>
          <Col span={8}>
            <h3 style={{ color: '#ffffff', fontFamily: 'Arial', display: 'flex', justifyContent: 'flex-end' }}>
              <p>Support</p>
            </h3>
          </Col>
        </Row>
      </Footer>
    </div>
  );
}

export default SiteFooter;
