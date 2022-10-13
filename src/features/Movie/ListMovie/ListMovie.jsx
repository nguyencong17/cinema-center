import React from 'react';
import PropTypes from 'prop-types';
import './ListMovie.scss'
import { Col, Row } from 'antd';
import ItemMovie from '../ItemMovie/ItemMovie';

ListMovie.propTypes = {
  listMovies: PropTypes.array
};

function ListMovie(props) {
  const { listMovies } = props;
  
  return (
    <div className='list-film'>
        {/* {listMovies && listMovies.map((item) =>
          <ItemFilm item={item} key={item.id} id={item.id}/>
        )} */}
        <Row gutter={[16, 16]}>
        {listMovies && listMovies.map((item) =>
          <Col sm={12} md={8} lg={6} xxl={4} key={item.id} id={item.id}>
            <ItemMovie item={item} />
          </Col>

        )}
        </Row>
    </div>
  );
}

export default ListMovie;