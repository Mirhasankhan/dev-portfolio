import { Button, FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

const FloatingScrollToTopButton = () => {
  return (
    <div>
      <FloatButton.BackTop>
        <Button
          shape="circle"
          icon={<ArrowUpOutlined />}
          size="large"
          style={{
            position: "fixed",
            bottom: 50,
            right: 50,
            zIndex: 1000,
          }}
        />
      </FloatButton.BackTop>
    </div>
  );
};

export default FloatingScrollToTopButton;
