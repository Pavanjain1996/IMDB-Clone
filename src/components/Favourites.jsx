import React, { useState } from "react";
import Pagination from "./Pagination";

function Favourites() {
  let favs;
  if (localStorage.getItem("favMovies") === null) {
    favs = [];
  } else {
    favs = JSON.parse(localStorage.getItem("favMovies"));
  }
  let [favMovies, setFavMovies] = useState(favs);
  return (
    <>
      <div className="m-6 flex justify-center space-x-2">
        <button className="p-2 bg-red-500 rounded-xl text-white text-xl">
          All Genres
        </button>
        <button className="p-2 hover:bg-red-500  bg-gray-400 rounded-xl text-white text-xl">
          Sci-Fi
        </button>
        <button className="p-2 hover:bg-red-500  bg-gray-400 rounded-xl text-white text-xl">
          Action
        </button>
      </div>
      <div className="m-6 flex justify-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 text-center"
        />
        <input
          type="number"
          min="1"
          max="20"
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
              favMovies.map((movie) => {
                return <Row id={movie}></Row>
              })
            }
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
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
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
          <div className="text-sm">
            <div className="font-medium text-gray-700">{props.id}</div>
          </div>
        </th>
        <td className="px-6 py-4 text-center font-bold">10</td>
        <td className="px-6 py-4 text-center font-bold">10</td>
        <td className="px-6 py-4 text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-300 px-2 py-1 text-xs font-semibold text-black">
            All Genre
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-300 px-2 py-1 text-xs font-semibold text-red-700">
            Delete
          </span>
        </td>
      </tr>
    </>
  );
}

export default Favourites;
