import axios from "axios";
import { useEffect, useState } from "react";

export default function Row({category}){
    const [movies, setMovies] = useState();
  
  const genreIds= [{
    genre:"Action",
    code:"28"
  },{
    genre:"Drama",
    code:"18"
  },{
    genre:"Romance",
    code:"10749"
  },{
    genre:"Thriller",
    code:"53"
  },{
    genre:"Western",
    code:"37"
  },{
    genre:"Horror",
    code:"27"
  },{
    genre:"Fantasy",
    code:"14"
  },{
    genre:"Music",
    code:"10402"
  },{
    genre:"Fiction",
    code:"35"
  },]
  
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const returnOptions = () =>{
    const genreCode=(genreIds.filter(ele => ele.genre === category))[0].code
    return({method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      with_genres: genreCode,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmQyOGM0NDVlZjE0NTg0MjA4Yjk4MWM0ZTE5YzliYiIsInN1YiI6IjYyOGI4MDg1N2Q1ZGI1MWIyOTFjN2MwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJWcFgxoyOhwJEvKi-hgZWQlIlz26vn5wSHJY4qGga0",
    },})
  }
  const fetchData = async () => {
    const response = await axios.request(returnOptions());
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

    return(
        <div className="action-row">
        <p className="action-title">{category}</p>
        <div className="genre-row">
          {movies &&
            movies.map((movie, index) => (
              <div className="action-card" key={index}>
                <p>{movie.title}</p>
                <img src={imageBaseUrl + movie.backdrop_path} alt={movie.title+"jpg"} />
              </div>
            ))}
        </div>
      </div>
    )
}