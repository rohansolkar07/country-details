// import logo from './logo.svg';
import '../App.css';
import Header from '../`components/Header';
import CountryCard from '../`components/CountryCard';
// import countryData from './CountryData';
import SearchBox from '../`components/SearchBox';
import { useContext, useState } from 'react';
import ShimmerEffect from './ShimmerEffect';
import { useLocation, useOutletContext } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeChontext';

const Home = () => {
    const [countryData , setcountryData] = useState([]);
    // const bgColor = useOutletContext()
    const [bgColor , setbgColor] = useContext(ThemeContext)
  if(countryData.length < 1){
    fetch('https://restcountries.com/v3.1/all')
    .then((resp) => resp.json())
    .then((data) => {
      setcountryData(data)
    })

  }

  const [ selectedCount , setSelectedCount] = useState ("");

  function filterCountry(SelectedCount) {
    // console.log("selectedCount", selectedCount);
    setSelectedCount (SelectedCount)
  }
//   let list = "";
//   if(bgColor){
//     list = document.getElementsByClassName("box").classList;
//     console.log("list" , list);
//     list.addClass("mode-color");
//   }
//   else{
//     list = document.getElementsByClassName("box").classList;
//     console.log("list" , list);

//     list.remove("mode-color");
//   }
// debugger
  return (
    <>
    <div className={`box ${bgColor ? "mode-dark" : "mode-light"}`}>
    <SearchBox selectedCount = {selectedCount} filterCountry ={filterCountry}/>
    {!countryData.length ? <ShimmerEffect /> :<CountryCard selectedCount = {selectedCount} countryData={countryData}/>}
    </div>
    </>
  )
}

export default Home