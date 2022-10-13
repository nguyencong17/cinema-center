import { SRC_IMG } from 'constants/common';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image } from 'antd';
import './ItemMovie.less';
import { PlayCircleFilled, StarOutlined } from '@ant-design/icons';
ItemMovie.propTypes = {
  item: PropTypes.object
};

const { Meta } = Card;

function ItemMovie(props) {
  const { item } = props;
  return (
    <>
      <Card
      hoverable
      className='item-movie'
      >
        <Image
        src={`${SRC_IMG}w500/${item.poster_path}`} 
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
          />
        }
        />
        <div className='item-action'>
          <div className='rating'>
            <div>
            <StarOutlined />
            {item.vote_average}
            </div>
          </div>

          <div className='info'>
            <div className='title'>
              {item.title}
            </div>
            <Link to={`/movie/${item.id}`} className='watch-now btn'><PlayCircleFilled /></Link>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ItemMovie;



