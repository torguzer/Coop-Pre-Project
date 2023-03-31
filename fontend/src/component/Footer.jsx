import React from 'react';
import { Layout, Row, Col, Input } from 'antd';

const { Footer } = Layout;

function SiteFooter() {
  return (
    <div style={{ marginTop: '20px' }}>
      <Footer style={{ height: '400px', backgroundColor: '#000000' }}>
        <Row>
          <Col span={24} >
            <h1 style={{ color: '#ffffff', fontFamily: 'Arial' }}>FOOTER</h1>
          </Col>
        </Row>
        <Row>
          <Col span={7} style={{ margin: '0 29px' }}>
            <Row>
              <h3 style={{ color: '#ffffff', fontFamily: 'Arial', display: 'flex', justifyContent: 'flex-start' }}>
                <p>Location</p>
              </h3>
            </Row>
            <Row>
              <p style={{ fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                "53/129-134 หน้ามหาวิทยาลัยเทคโนโลยีสุรนารี ประตู1 Suranari, Mueang Nakhon Ratchasima District, Nakhon Ratchasima 30000"
              </p>
            </Row>
          </Col>
          <Col span={7} style={{ margin: '0 29px' }}>
            <Row>
              <h3 style={{ color: '#ffffff', fontFamily: 'Arial', display: 'flex', justifyContent: 'flex-start' }}>
                <p>About</p>
              </h3>
            </Row>
            <Row>
              <p style={{ fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                "53/129-134 หน้ามหาวิทยาลัยเทคโนโลยีสุรนารี ประตู1 Suranari, Mueang Nakhon Ratchasima District, Nakhon Ratchasima 30000"
              </p>
            </Row>
          </Col>
          <Col span={7} style={{ margin: '0 29px' }}>
            <Row>
              <h3 style={{ color: '#ffffff', fontFamily: 'Arial', display: 'flex', justifyContent: 'end' }}>
                <p>Support</p>
              </h3>
            </Row>
            <Row>
              <p style={{ fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                "53/129-134 หน้ามหาวิทยาลัยเทคโนโลยีสุรนารี ประตู1 Suranari, Mueang Nakhon Ratchasima District, Nakhon Ratchasima 30000"
              </p>
            </Row>
          </Col>
        </Row>
      </Footer>
    </div>
  );
}

export default SiteFooter;
