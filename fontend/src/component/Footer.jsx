import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, TwitterOutlined } from '@ant-design/icons';
import Logo from './Logo/Logo.png'

const { Footer } = Layout;

function SiteFooter() {
  return (
    <div className='Footer'>
      <Footer style={{ height: '300px', width: '100%', backgroundColor: '#000000' }}>
        <Row>
          <Col span={7} style={{ marginRight: 50 }}>
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
          <Row>
            <Col>
              <Row gutter={[100, 20]}>
                <Col span={8}>
                  <div style={{ fontFamily: 'Nunito', color: 'white' }}>
                    <p style={{ marginTop: 0, fontSize: '20px' }}>
                      About Us
                    </p>
                    <hr style={{ marginTop: -25, width: '15%', justifyContent: 'left', marginLeft: 0 }} />
                    <ul style={{ marginTop: 0, listStyleType: 'square', marginLeft: '-20px' }}>
                      <li>History and Background</li>
                      <li>Vision and Mission</li>
                      <li>Team and Management</li>
                    </ul>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ fontFamily: 'Nunito', color: 'white' }}>
                    <p style={{ marginTop: 0, fontSize: '20px' }}>
                      Support
                    </p>
                    <hr style={{ marginTop: -25, width: '15%', justifyContent: 'left', marginLeft: 0 }} />
                    <ul style={{ marginTop: 0, listStyleType: 'square', marginLeft: '-20px' }}>
                      <li>FAQ</li>
                      <li>Customer Service</li>
                      <li>Refund and Warranty Policy</li>
                    </ul>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ fontFamily: 'Nunito', color: 'white' }}>
                    <p style={{ marginTop: 0, fontSize: '20px' }}>
                      Contact Us
                    </p>
                    <hr style={{ marginTop: -25, width: '15%', justifyContent: 'left', marginLeft: 0 }} />
                    <ul style={{ marginTop: 0, listStyleType: 'square', marginLeft: '-20px' }}>
                      <li>Support Channels</li>
                      <li>Office Location and Hours of Operation</li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div>
                    <hr style={{ marginTop: -5, width: '100%' }}></hr>
                  </div>
                </Col>
              </Row>
              <Row justify="center" gutter={[10, 20]}>
                <Col>
                  <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                    <FacebookOutlined style={{ fontSize: '24px', color: '#3b5998' }} />
                  </a>
                </Col>
                <Col>
                  <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined style={{ fontSize: '24px', color: '#e4405f' }} />
                  </a>
                </Col>
                <Col>
                  <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                    <YoutubeOutlined style={{ fontSize: '24px', color: '#cd201f' }} />
                  </a>
                </Col>
                <Col>
                  <a href="https://twitter.com/youraccount" target="_blank" rel="noopener noreferrer">
                    <TwitterOutlined style={{ fontSize: '24px', color: '#1da1f2' }} />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
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