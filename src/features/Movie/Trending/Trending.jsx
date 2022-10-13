import { StarFilled} from '@ant-design/icons';
import { Col, Row } from 'antd';
import { SRC_IMG } from 'constants/common';
import PropTypes from 'prop-types';
import styles from './Trending.module.less';

Trending.propTypes = {
  listTrending: PropTypes.array
};

function Trending(props) {
  const { listTrending } = props;
  return (
    <div id={styles.listTrending}>
    <Row gutter={[16, 16]}>
    {listTrending && listTrending.map((item) =>
      <Col sm={24} key={item.id} id={item.id}>
        <div className={styles.wrapItem}>
          <img src={`${SRC_IMG}w500/${item.poster_path}`} alt="Demo"/>
          <div className={styles.info}>
            <h3 className={styles.name}>{item.title}</h3>
            <p className={styles.date}>{item.release_date}</p>
            <span className={styles.vote}>{Math.trunc(item.vote_average)}<span><StarFilled /></span></span>
          </div>
        </div>
      </Col>

    )}
    </Row>
</div>
  );
}

export default Trending;