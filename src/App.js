import './App.css';
import Nav from './Component/Nav/Nav';
import Row from './Component/Row';
import Banner from './banner/Banner';
import requests from './request';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
          <Row title = 'NETFLIX ORIGINAL' fetchUrl={requests.fetchNetflixOriginals} 
          isLargeRow
          />
          <Row title = 'TRENDING NOW' fetchUrl={requests.fetchTrending} />
          <Row title = 'TOP RATED' fetchUrl={requests.fetchTopRatedMovies} />
          <Row title = 'ACTION MOVIES' fetchUrl={requests.fetchActionMovies} />
          <Row title = 'COMEDY MOVIES' fetchUrl={requests.fetchComedyMovies} />
          <Row title = 'HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} />
          <Row title = 'ROMANCE MOVIES' fetchUrl={requests.fetchRomanceMovies} />
          <Row title = 'DOCUMENTARY' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
