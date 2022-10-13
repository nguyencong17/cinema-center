import filmApi from "api/filmApi";
import { useEffect, useState } from "react";

export default function useGetDetail(id) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async() => {
      try {
        const result = filmApi.getFilmById(id);
        setMovie(result);
      } catch (error) {
        console.log("Error",error)
      }
      setLoading(true)
    })();
  })
  return { movie,loading };
}
