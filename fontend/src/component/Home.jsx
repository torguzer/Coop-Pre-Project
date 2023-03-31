import React from "react"
import { Button, Space } from 'antd'
import './Desige.css'

function Home () {
    
    return (
        <div>
            <h1>Home Page</h1>
            <Space wrap>
                <Button type="primary" className="hover-button">
                    Click me pls
                </Button>
            </Space>
        </div>
    )
}

export default Home
