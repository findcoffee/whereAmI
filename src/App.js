import 'antd/dist/antd.css';
import { FaBeer, FaHome } from 'react-icons/fa';
import { CgHomeAlt } from 'react-icons/cg';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { Space, Card, Row, Col } from 'antd';
import { blue } from '@ant-design/colors';

function App() {
  console.log(blue);
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col span={6} color={blue[1]}/>
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />

        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
      </Row>
    {/* <Space direction="vertical">
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space> */}
      <div> Beer <FaBeer/> </div>
      <div> Home <FaHome/> </div>
      <div> Home Alt <CgHomeAlt/> </div>
      <div className="icons-list">
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </div>
    </div>
  );
}

export default App;
