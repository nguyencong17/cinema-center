import {
  AppstoreOutlined,
  BookOutlined,
  HistoryOutlined,
  HomeOutlined, ProfileOutlined, SearchOutlined, UserOutlined, 
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import TopNavigation from 'components/Menu/Menu';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.less';
import { Input} from 'antd';
import Trending from 'features/Movie/Trending/Trending';
import filmApi from 'api/filmApi';
import Tags from 'components/Tag/Tag';
const { Header, Sider, Content } = Layout;
const { Search } = Input;

const onSearch = (value) => console.log(value);

const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [listTrending, setListTrending] = useState([]);
  const [listGenres, setListGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=> {
    async function getFilm() {
      try {
          // fetch list film trending
          const response_1 = await filmApi.getTrending();
          // fetch list genres
          const response_2 = await filmApi.getGenres();

          // Set to State
          setListTrending(response_1.data.results);
          setListGenres(response_2.data.genres);

          // Check
          console.log("Trending",response_1.data.results);
          console.log("Genres",response_2.data.genres);
      } catch (error) {
          console.log("Lỗi : ", error)
      }
      setIsLoading(false);
    }
    getFilm();

  },[]);

  return (
    <Layout id={styles.main}>
      <Sider 
        className={`${styles.mainSidebar} ${styles.sidebarLeft}`} 
        trigger={null} 
        collapsible 
        collapsed={collapsed}>
        <div className={styles.logo}>
          <img src="https://mymoonlight.vercel.app/logo.png" alt="Logo" />
          <p>moon<span>light</span></p>
        </div>
        <h2 className='title'>Menu</h2>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          className={styles.navigation}
          onClick = {({key}) => {
              navigate(key);
          }}
          items={[
            {
              key: '/',
              icon: <HomeOutlined />,
              label: 'Home',
            },
            {
              key: '/explore',
              icon: <AppstoreOutlined />,
              label: 'Expolre',
            },
            {
              key: '/search',
              icon: <SearchOutlined />,
              label: 'Search',
            }
          ]}
        />
        <h2>Personal</h2>
        <Menu
          theme="dark"
          mode="inline"
          className={styles.navigation}
          onClick = {({key}) => {
            navigate(key);
          }}
          items={[
            {
              key: '/bookmark',
              icon: <BookOutlined />,
              label: 'Bookmark',
            },
            {
              key: '/history',
              icon: <HistoryOutlined />,
              label: 'History',
            }
          ]}
        />
        <h2>General</h2>
        <Menu
          theme="dark"
          mode="inline"
          className={styles.navigation}
          onClick = {({key}) => {
            if(key === "logout") {
              console.log("Ban da logout")
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '/profile',
              icon: <ProfileOutlined />,
              label: 'Profile',
            },
            {
              key: '/account',
              icon: <UserOutlined />,
              label: 'Login',
            }
          ]}
        />
      </Sider>

      <Layout className={styles.mainContent}>
        <Header
          className={styles.mainHeader}
          style={{
            padding: 0,
          }}
        >
          <TopNavigation/>
        </Header>
        <Content className={styles.mainShow}>
          <Outlet/>
        </Content>
      </Layout>
      
      <Sider 
        className={`${styles.mainSidebar} ${styles.sidebarRight}`} 
        trigger={null} 
        collapsible 
        collapsed={collapsed}>
        <div className={styles.logo} />
        <Search placeholder="input search text" onSearch={onSearch} />
        <Tags listGenres={listGenres} />
        <h2>Trending</h2>
        <Trending listTrending={listTrending}/>
      </Sider>
    </Layout>
  );
};

export default Dashboard;