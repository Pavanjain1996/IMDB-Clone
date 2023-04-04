import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

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
    setFiltered(newset);
    setItemperpage(favs.length-1);
  }

  let [itemperpage, setItemperpage] = useState(favs.length);
  let [maxpages, setMaxpages] = useState(1);
  const updatepagevals = (e) =>{
    setItemperpage(e.target.value);
    let pages = Math.ceil(filtered.length/e.target.value);
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

  let [filtered, setFiltered] = useState(favoriteMovies)

  let [searchText, setSearchText] = useState("");
  const updateFilterByText = (e) => {
    setSearchText(e.target.value);
    setSelectedButton("All Genres");
    setPopularSort("down");
    setRatingSort("down");
    let f = favoriteMovies.filter((movie) => {return movie.title !== undefined ? movie.title.toLowerCase().includes(e.target.value.toLowerCase()) : movie.name.toLowerCase().includes(e.target.value.toLowerCase())})
    setFiltered(f);
    setItemperpage(f.length);
    setMaxpages(1);
    setPageno(1);
  }

  let [selectedButton, setSelectedButton] = useState("All Genres");
  const updateFilterByButton = (e) => {
    setSearchText("");
    setSelectedButton(e.target.value);
    setPopularSort("down");
    setRatingSort("down");
    let f = e.target.value === "All Genres" ? favoriteMovies : favoriteMovies.filter((movie) => {return movie.genre.toLowerCase() === e.target.value.toLowerCase()});
    setFiltered(f);
    setItemperpage(f.length);
    setMaxpages(1);
    setPageno(1);
  }
  
  let [ratingSort, setRatingSort] = useState("down");
  const updateFilterByRating = () => {
    setSearchText("");
    setSelectedButton("All Genres");
    setPopularSort("down");
    setRatingSort(ratingSort === "down" ? "up" : "down");
    let f = ratingSort === "down" ? favoriteMovies.sort((a,b) => {return b.vote_average - a.vote_average}) : favoriteMovies.sort((a,b) => {return a.vote_average - b.vote_average})
    setFiltered(f);
    setItemperpage(f.length);
    setMaxpages(1);
    setPageno(1);
  }

  let [popularSort, setPopularSort] = useState("down");
  const updateFilterByPopular = () => {
    setSearchText("");
    setSelectedButton("All Genres");
    setPopularSort(popularSort === "down" ? "up" : "down");
    setRatingSort("down");
    let f = popularSort === "down" ? favoriteMovies.sort((a,b) => {return b.popularity - a.popularity}) : favoriteMovies.sort((a,b) => {return a.popularity - b.popularity})
    setFiltered(f);
    setItemperpage(f.length);
    setMaxpages(1);
    setPageno(1);
  }

  return (
    <>
      <div className="m-6 flex-wrap justify-center space-x-2 space-y-2">
        <button className={selectedButton === "All Genres" ? "p-2 bg-red-500 rounded-xl text-white text-xl" : "p-2 hover:bg-red-500  bg-gray-400 rounded-xl text-white text-xl"} value="All Genres" onClick={updateFilterByButton}>All Genres</button>
        <button className={selectedButton === "Science Fiction" ? "p-2 bg-red-500 rounded-xl text-white text-xl" : "p-2 hover:bg-red-500  bg-gray-400 rounded-xl text-white text-xl"} value="Science Fiction" onClick={updateFilterByButton}>Sci-Fi</button>
        <button className={selectedButton === "Action" ? "p-2 bg-red-500 rounded-xl text-white text-xl" : "p-2 hover:bg-red-500  bg-gray-400 rounded-xl text-white text-xl"} value="Action" onClick={updateFilterByButton}>Action</button>
        <button className={selectedButton === "Drama" ? "p-2 bg-red-500 rounded-xl text-white text-xl" : "p-2 hover:bg-red-500  bg-gray-400 rounded-xl text-white text-xl"} value="Drama" onClick={updateFilterByButton}>Drama</button>
        <button className={selectedButton === "Comedy" ? "p-2 bg-red-500 rounded-xl text-white text-xl" : "p-2 hover:bg-red-500  bg-gray-400 rounded-xl text-white text-xl"} value="Comedy" onClick={updateFilterByButton}>Comedy</button>
        <button className={selectedButton === "Adventure" ? "p-2 bg-red-500 rounded-xl text-white text-xl" : "p-2 hover:bg-red-500  bg-gray-400 rounded-xl text-white text-xl"} value="Adventure" onClick={updateFilterByButton}>Adventure</button>
      </div>
      <div className="m-6 flex justify-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 text-center"
          value={searchText}
          onChange={updateFilterByText}
        />
        <input
          type="number"
          min="1"
          max={filtered.length}
          value={itemperpage}
          onChange={updatepagevals}
          className="border-2 text-center"
        />
      </div>
      <div className="overflow-x-scroll rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <div className="flex justify-center items-center">Name</div>
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <div className="flex justify-center items-center">
                  <div>Ratings</div>
                  <img
                    src={ratingSort === "up" ? "https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" : 
                                    "https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"}
                    alt="Arrow Icon"
                    className="m-2 cursor-pointer"
                    onClick={updateFilterByRating}
                  ></img>
                </div>
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <div className="flex justify-center items-center">
                  <div>Popularity</div>
                  <img
                    src={popularSort === "up" ? "https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" : 
                    "https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"}
                    alt="Arrow Icon"
                    className="m-2 cursor-pointer"
                    onClick={updateFilterByPopular}
                  ></img>
                </div>
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <div className="flex justify-center items-center">Genre</div>
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
                            genre={movie.genre}
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
