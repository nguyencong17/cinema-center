import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './DetailMovie.scss';
import filmApi from 'api/filmApi';
import { SRC_IMG } from 'constants/common';
import { Button, Image } from 'antd';
import Modal from 'antd/lib/modal/Modal';
DetailMovie.propTypes = {
  
};

function DetailMovie(props) {

  const params = useParams();
  const moviesId = params.moviesId;
  const [data, setData] = useState({});
  const [genres,setGenres] = useState([]);
  const [vote,setVote] = useState(Number);
  const [isLoading,setIsLoading] = useState(true);
  const [open,setOpen] = useState(false);
  const [video,setVideo] = useState({});
  useEffect(() => {
    (async () => {
      const response_1 = await filmApi.getFilmById(moviesId);
      const response_2 = await filmApi.getVideo(moviesId);
      const result =  { ...response_1.data }
      setData(result);
      setGenres(result.genres);
      setVote(result.vote_average);
      setVideo(response_2.data.results[0]);
      console.log("Detail Movie",result);
      console.log(response_2.data.results[0]);
      setIsLoading(false);
      ;
    })();
  },[moviesId])

  // useEffect(() => {
  //   (async () => {
  //     const response = await filmApi.getVideo(moviesId);
  //     console.log("Detail Movie",response);
  //     ;
  //   })();
  // },[moviesId])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  

  return (
    <>
    {/* {isLoading ? <DetailSkeleton/> :    
    

    } */}
    <div className='content'>
      <div className='wrap-thumbnail'>
        <div className='thumbnail-img'>
        <Image
        preview={false}
        src={`${SRC_IMG}original/${data.backdrop_path}`}
        />
        </div>
      </div>
      <div className='detail-wrap'>
        <div className='left'>
          <Image
          src={`${SRC_IMG}w500/${data.poster_path}`}
          />

          <div className='status'>
            <span>Status</span>
            <span>{data.status}</span>
          </div>
        </div>

        <div className='right'>
          <h2 className='title'>{data.title}</h2>
          <h3 className='sub-title'>{data.tagline}</h3>
          <div className='vote'><i className="fa-solid fa-star"></i>{vote.toFixed(2)}<span>{`(${data.vote_count} Voting)`}</span></div>

          <div className='flex'>
            <div className='release-date'>
              <h5>Release date</h5>
              {data.release_date}
            </div>

            <div className='run-time'>
              <h5>Run time</h5>
              {data.runtime}<span> minutes</span>
            </div>
          </div>

          <div className='genres flex'>
              {genres.map((item) =>
                <li className='list-none' key={item.id} id={item.id} ><Link to="/">{item.name}</Link></li>
              )}
          </div>

          <div className='summary'>
            <h4>Summary</h4>
            <p>{data.overview}</p>
          </div>

          <Button className='watch-trailer flex items-center' onClick={showModal}>
            <span>Watch Trailer</span> <span style={{marginLeft: '.8rem'}}></span>
          </Button>

          <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.key}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal>
        </div>

      </div>
    </div>
    </>
  );
}

export default DetailMovie;