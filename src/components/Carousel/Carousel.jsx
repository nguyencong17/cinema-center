import { PlayCircleFilled, StarOutlined } from '@ant-design/icons';
import { Carousel, Image } from 'antd';
import { SRC_IMG } from 'constants/common';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Carousel.module.less';

const SlideShow = (props) => {

  const { listTrending } = props;

  return (
    <Carousel className={styles.carousel}>
    {listTrending && listTrending.map((item) =>
      <div className={styles.itemCarousel}  key={item.id}>
        <Image
        preview={false}
        src={`${SRC_IMG}original/${item.backdrop_path}`}
        />
        <div className={styles.info}>
        <div>

        <div className={styles.originalTitle}>
          {item.original_title || item.name}
        </div>

        <div className={styles.title}>
          {item.title}
        </div>
        <div className={styles.release} >
          {item.release_date}
        </div>
        <div className={styles.overview} >
          {item.overview}
        </div>
        <div className={styles.rating}>
          <StarOutlined />
          {item.vote_average}
        </div>
        <Link to={`/movie/${item.id}`} className={styles.watch}><PlayCircleFilled /></Link>       
        </div>
        </div>
      </div>
    )}
    </Carousel>
  );
};

export default SlideShow;