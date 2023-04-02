import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";

function Favourites() {
  let favMovieIds = [];
  if (localStorage.getItem("favMovieIds") === null) {
    favMovieIds = [];
  }
  else {
    favMovieIds = JSON.parse(localStorage.getItem("favMovieIds"))
  }
  let favMovies = []
  if (localStorage.getItem("favMovies") === null) {
    favMovies = [];
  }
  else {
    favMovies = JSON.parse(localStorage.getItem("favMovies"))
  }
  let [favs, setFavs] = useState(favMovieIds);
  useEffect(() => {
    localStorage.setItem('favMovieIds', JSON.stringify(favs));
  }, [favs])

  let [favoriteMovies, setFavouriteMovies] = useState(favMovies);
  useEffect(() => {
    localStorage.setItem('favMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies])
  const removeMovieFromFavs = (id) => {
    let newset = favs.filter((movie_id) => {return movie_id!==id});
    setFavs(newset);
    newset = favoriteMovies.filter((movie) => {return movie.id!==id});
    setFavouriteMovies(newset);
    setItemperpage(favs.length-1);
  }

  let [genre, setGenre] = useState([]);
  useEffect(() => {
    (function(){
      axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=13cf82512e78f27808142958d5d4f8f6").then((res) => {
        setGenre(res.data.genres);
      })
    })()
  }, [])

  let [itemperpage, setItemperpage] = useState(favs.length);
  let [maxpages, setMaxpages] = useState(1);
  const updatepagevals = (e) =>{
    setItemperpage(e.target.value);
    let pages = Math.ceil(favs.length/e.target.value);
    setMaxpages(pages);
    setPageno(Math.min(pageno, pages));
  }

  let [pageno, setPageno] = useState(1);
  const onNext = () => {
    if(pageno < maxpages){
      setPageno(pageno+1);
    }
  }
  const onPrev = () => {
    if(pageno > 1){
      setPageno(pageno-1);
    }
  }

  let [searchText, setSearchText] = useState("");
  let [filtered, setFiltered] = useState(favoriteMovies.filter((movie) => {return movie.title !== undefined ? movie.title.toLowerCase().includes(searchText.toLowerCase()) : movie.name.toLowerCase().includes(searchText.toLowerCase())}))
  const updateFiltered = (e) => {
    setSearchText(e.target.value);
    let f = favoriteMovies.filter((movie) => {return movie.title !== undefined ? movie.title.toLowerCase().includes(e.target.value.toLowerCase()) : movie.name.toLowerCase().includes(e.target.value.toLowerCase())})
    setFiltered(f);
    setItemperpage(f.length);
    setMaxpages(1);
    setPageno(1);
  }

  return (
    <>
      <div className="m-6 flex justify-center space-x-2">
        <button className="p-2 bg-red-500 rounded-xl text-white text-xl">All Genres</button>
        <button className="p-2 hover:bg-red-500  bg-gray-400 rounded-xl text-white text-xl">Sci-Fi</button>
        <button className="p-2 hover:bg-red-500  bg-gray-400 rounded-xl text-white text-xl">Action</button>
      </div>
      <div className="m-6 flex justify-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 text-center"
          value={searchText}
          onChange={updateFiltered}
        />
        <input
          type="number"
          min="1"
          max={favs.length}
          value={itemperpage}
          onChange={updatepagevals}
          className="border-2 text-center"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <div className="flex justify-center items-center">Name</div>
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <div className="flex justify-center items-center">
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                    alt="Arrow Icon"
                    className="mr-2 cursor-pointer"
                  ></img>
                  <div>Ratings</div>
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                    alt="Arrow Icon"
                    className="ml-2 mr-2"
                  ></img>
                </div>
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <div className="flex justify-center items-center">
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                    alt="Arrow Icon"
                    className="mr-2 cursor-pointer"
                  ></img>
                  <div>Popularity</div>
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                    alt="Arrow Icon"
                    className="ml-2 mr-2"
                  ></img>
                </div>
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <div className="flex justify-center items-center">
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                    alt="Arrow Icon"
                    className="mr-2 cursor-pointer"
                  ></img>
                  <div>Genre</div>
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                    alt="Arrow Icon"
                    className="ml-2 mr-2"
                  ></img>
                </div>
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <div className="flex justify-center items-center">Remove</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {
              filtered.slice((pageno-1)*itemperpage, pageno*itemperpage).map((movie) => {
                return <Row key={movie.id}
                            id={movie.id} 
                            name={movie.title !== undefined ? movie.title : movie.name}
                            poster={movie.backdrop_path}
                            ratings={movie.vote_average}
                            popularity={movie.popularity}
                            genre={genre.length !== 0 ? genre.filter((g) => {
                              return g.id === movie.genre_ids[0]
                            })[0].name : ""}
                            remove={removeMovieFromFavs}>
                        </Row>
              })
            }
          </tbody>
        </table>
      </div>
      <Pagination pageNum={pageno} onPrev={onPrev} onNext={onNext}></Pagination>
    </>
  );
}

function Row(props) {
  return (
    <>
      <tr className="hover:bg-gray-50">
        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900r items-center">
          <img
            className="h-[7rem] w-[14rem] object-fit"
            src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
            alt=""
          />
          <div className="font-medium text-gray-700 text-sm">{props.name}</div>
        </th>
        <td className="px-6 py-4 text-center font-bold">{props.ratings}</td>
        <td className="px-6 py-4 text-center font-bold">{props.popularity}</td>
        <td className="px-6 py-4 text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-300 px-2 py-1 text-xs font-semibold text-black">{props.genre}</span>
        </td>
        <td className="px-6 py-4 text-center">
          <button className="inline-flex items-center gap-1 rounded-full bg-gray-300 px-2 py-1 text-xs font-semibold text-red-700" onClick={() => props.remove(props.id)}>Delete</button>
        </td>
      </tr>
    </>
  );
}

export default Favourites;
