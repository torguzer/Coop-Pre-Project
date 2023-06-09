import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, TwitterOutlined } from '@ant-design/icons';
import Logo from './Logo/Logo.png'

const { Footer } = Layout;

function SiteFooter() {
  return (
    <div className='Footer' style={{ marginTop: 50}}>
      <Footer style={{ width: '100%', backgroundColor: '#000000' }}>
        <Row>
          <Col span={7} style={{ marginRight: 50, marginBottom: 50 }}>
            <Row style={{ height: '100px' }}>
              <img
                src={Logo}
                alt="Logo"
                width={400}
                height={112}
              />
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
              </Row>
            </Col>
          </Row>
        </Row>

        <hr style={{ borderTop: '1px solid white' }} />

        <Row justify="center" gutter={[10, 20]} style={{ marginTop: 20}}>
                <Col>
                  <a href="https://www.facebook.com/tirawat.euseiwong/" target="_blank" rel="noopener noreferrer">
                    <FacebookOutlined style={{ fontSize: '24px', color: '#3b5998' }} />
                  </a>
                </Col>
                <Col>
                  <a href="https://www.instagram.com/aazugrot/" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined style={{ fontSize: '24px', color: '#e4405f' }} />
                  </a>
                </Col>
                <Col>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                    <YoutubeOutlined style={{ fontSize: '24px', color: '#cd201f' }} />
                  </a>
                </Col>
              </Row>
      </Footer>
    </div>
  );
}

export default SiteFooter;