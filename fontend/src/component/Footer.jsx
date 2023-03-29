import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function SiteFooter() {
    return (
        <div style={{ marginTop: '20px' }}>
            <Footer style={{ textAlign: 'center', height: '150px' }}>
                My website footer text
            </Footer>
        </div>

    );
}

export default SiteFooter;