import React from "react";
import Slider from "react-slick";
import PropsTypes from "prop-types";
import { SRC_IMG } from "constants/common";
import styles from './Slider.module.less';
import { Link } from "react-router-dom";
import { PlayCircleFilled } from "@ant-design/icons";
SliderMovie.protoTypes = {
  title: PropsTypes.string,
  list: PropsTypes.array
}

export default function SliderMovie(props) {
  const { list, title } = props;
  var settings = {
    dots: true,
    infinite: true,
    rows: 1,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    adaptiveHeight: true,
    centerPadding: '24px',
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),

  };
  return (
    <div className={styles.wrapSlider}>
    <h1 className={styles.title}>{title}</h1>
    <Slider 
    {...settings}
    className={styles.list}
    >
      {
        list && list.map((item) =>
        <div key={item.id} className={styles.itemFilm}>
          <img src={`${SRC_IMG}w500/${item.poster_path}`} alt="Thumbnail Movie" className={styles.imgThumbnail}/>
          <Link to={`/movie/${item.id}`} className={styles.watch}><PlayCircleFilled /></Link>
        </div> 
        )
      }
    </Slider>
    </div>
  );
}