import { AppstoreOutlined, MailOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const items = [
  {
    label: (
      <Link to='/movies' rel="noopener noreferrer">
        Movie
      </Link>
    ),
    key: 'movies',
    icon: <MailOutlined />,
  },
  {
    label: (
      <Link to='/animes' rel="noopener noreferrer">
        Anime
      </Link>
    ),
    key: 'anime',
    icon: <AppstoreOutlined />,
  },
  {
    label: (
      <Link to='/series' rel="noopener noreferrer">
        Series
      </Link>
    ),
    key: 'series',
  },
  {
    label: (
      <Link to='/tv-shows' rel="noopener noreferrer">
        TV Shows
      </Link>
    ),
    key: 'tv-shows',
  },
];

const TopNavigation = () => {
  const [current, setCurrent] = useState('mail');

  // const onClick = (e) => {
  //   console.log('click ', e);
  //   setCurrent(e.key);
  // };

  return <Menu selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default TopNavigation;