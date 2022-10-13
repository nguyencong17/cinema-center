import filmApi from 'api/filmApi';
import React, { useEffect, useState } from 'react';
import './index.scss'
import ListMovie from './ListMovie/ListMovie';
Movie.propTypes = {
  
};

function Movie(props) {
  const [page, setPage] = useState(1);
  const [listMovies, setListMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    async function getFilm() {
      try {
          const response = await filmApi.getAllFilm(page);
          const data = response.data.results;
          setListMovies(data);
          console.log("List Movie",data);
      } catch (error) {
          console.log("Lỗi : ", error)
      }
      setIsLoading(false);
    }
    getFilm();

  },[page])

  return (
    <div>
      {/* <div>
        {isLoading ? <ListSkeleton length={15}/> : <ListMovie listMovies={listMovies}/>}
      </div>
      <Pagination setPage={setPage} /> */}
      <ListMovie listMovies={listMovies}/>
    </div>
  );
}

export default Movie;