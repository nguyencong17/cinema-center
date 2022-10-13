import { Layout } from 'antd';
import 'antd/dist/antd.css';
import SlideShow from 'components/Carousel/Carousel';
import { Input } from 'antd';
import filmApi from 'api/filmApi';
import SliderMovie from 'components/Slider/Slider';
import { useEffect, useState } from 'react';
const { Header, Sider, Content } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [listTrending, setListTrending] = useState([]);
  const [listPopular, setListPopular] = useState([]);
  const [listTopRate, setListTopRate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=> {
    async function getFilm() {
      try {
          // fetch list film trending
          const response_1 = await filmApi.getTrending();
          const response_2 = await filmApi.getPopular();
          const response_3 = await filmApi.getTopRate();

          // Set to State
          setListTrending(response_1.data.results);
          setListPopular(response_2.data.results);
          setListTopRate(response_3.data.results);

          // Check
          console.log("Trending",response_1.data.results);
          console.log("Popular",response_2.data.results);
          console.log("Top Rate",response_3.data.results);
      } catch (error) {
          console.log("Lỗi : ", error)
      }
      setIsLoading(false);
    }
    getFilm();

  },[]);

  return (
    <>
      <SlideShow listTrending={listTrending}/>
      <SliderMovie list={listPopular} title={"Popular"}/>
      <SliderMovie list={listTopRate} title={"TopRate"}/>
    </>
  );
};

export default Dashboard;