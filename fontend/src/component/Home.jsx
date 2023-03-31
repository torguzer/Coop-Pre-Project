import React, { useState } from "react";
import { Button, Popover, Space } from "antd";

function Home() {
  const [disableButton, setDisableButton] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleMouseMove = () => {
    setDisableButton(true);
    setTimeout(() => {
      setDisableButton(false);
    }, 3000); // disable button for 3 seconds
  };

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };

  const content = (
    <div>
      <p>Burhhh This is a popup</p>
    </div>
  );

  return (
    <div>
      <h1>Home Page</h1>
      <Space wrap>
        <Popover
          content={content}
          trigger="hover"
          visible={visible}
          onVisibleChange={handleVisibleChange}
        >
          <Button
            type="primary"
            disabled={disableButton}
            onMouseMove={handleMouseMove}
          >
            Click me pls
          </Button>
        </Popover>
      </Space>
    </div>
  );
}

export default Home;
