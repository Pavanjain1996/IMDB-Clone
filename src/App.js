import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import TrendingMovies from './components/TrendingMovies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourites from './components/Favourites';
import NotFound404 from './components/NotFound404';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={
          <>
            <Banner></Banner>
            <TrendingMovies></TrendingMovies>
          </>
        }></Route>
        <Route path="/fav" element={
          <>
            <Favourites></Favourites>
          </>
        }></Route>
        <Route path="*" element={
          <>
            <NotFound404></NotFound404>
          </>
        }></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
