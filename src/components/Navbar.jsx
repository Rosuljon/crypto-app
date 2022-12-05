import React from 'react'
import { Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
const Navbar = () => {
  
  return (
    <div className="nav-container"> 
    <div className="logo-container">
        <Avatar  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3d3UbTE9h57jRwDUM2-OLEJ8RHcnM-cX2g&usqp=CAU" size="large" />
        <Typography.Title level={3} className="logo">
            <Link to="/">Ronny's Crypto</Link>    
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
    </div>
    <Menu theme='dark'>
      <Menu.Item icon={<HomeOutlined />} key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item icon={<FundOutlined />} key="2">
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
      </Menu.Item>
      <Menu.Item icon={<MoneyCollectOutlined />} key="3">
        <Link to="/exchanges">Exchanges</Link>
      </Menu.Item>
      <Menu.Item icon={<BulbOutlined />} key="4">
        <Link to="/news">News</Link>
      </Menu.Item>
    </Menu>
    </div>
  )
}

export default Navbar