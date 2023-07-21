import Banner from "../components/Banner";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
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
  <Footer/>
  </div>
  );
}

export default Home;