import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import TrendingMovies from './components/TrendingMovies';
import Pagination from './components/Pagination';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <TrendingMovies></TrendingMovies>
      <Pagination></Pagination>
    </>
  );
}

export default App;
