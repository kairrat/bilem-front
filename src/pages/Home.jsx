import Banner from "../components/Banner";
import Courses from "../components/Courses";
import Header from "../components/Header";
import MainSection from "../components/Main";
import SearchBar from "../components/SearchBar";
import React from 'react';


function Home() {
  return (
    <div className="App">   
  <Header/>
  <Banner/>
  <SearchBar/>
  <MainSection/>
  <Courses/>
  </div>
  );
}

export default Home;