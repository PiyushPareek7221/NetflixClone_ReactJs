import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

//2f6807fea41e2385d0d43b21e1b9f753
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
