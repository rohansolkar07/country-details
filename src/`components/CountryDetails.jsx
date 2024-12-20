import { logDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { data, Link, useLocation, useParams } from "react-router-dom";

const CountryDetails = () => {
  // const urlData1 = new URLSearchParams(window.location.search).get("name")
  // console.log("data",urlData);
  const name = useParams();
  const urlData1 = name.country;
  const {state} = useLocation()
  console.log("locataiondata" ,state);
  console.log("urlData1", urlData1);

  const [selectedCountry, setSelectedCountry] = useState([]);
  const [pageNotFound, setpageNotFound] = useState();
  const [borders, setboders] = useState([]);

  // useEffect(() =>{
  //     setUrldata(urlData1)
  // },[urlData1])
  let renderData = "";
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${urlData1}?fullText=true`)
      .then((data) => data.json())
      .then((data) => {
        setSelectedCountry(data);
      })
      .catch((err) => {
        setpageNotFound(true);
      });
  }, [urlData1]);

  //   console.log("urlData", selectedCountry[0]?.borders);

  //   selectedCountry[0]?.borders.map((border) =>{
  //     fetch(`https://restcountries.com/v3.1/alpha/${border}`)
  //     .then((data) => data.json())
  //     .then(([borderCountry]) =>{
  //         // console.log("borderCountry" , borderCountry.name.common);
  //         setboders((prevState) => ([...prevState , borderCountry.name.common]))
  //         // setboders((prevState) => ({...prevState, borders :[...prevState.borders, borderCountry.name.common]}))
  //     })
  //   })

  useEffect(() => {
    selectedCountry[0]?.borders.map((border) => {
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((data) => data.json())
        .then(([borderCountry]) => {
          // console.log("borderCountry" , borderCountry.name.common);
          setboders((prevState) => [...prevState, borderCountry.name.common]);
          // setboders((prevState) => ({...prevState, borders :[...prevState.borders, borderCountry.name.common]}))
        });
    });
  }, [selectedCountry]);

//   Promise.all(selectedCountry[0]?.borders.map((border) => {
//     return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
//       .then((data) => data.json())
//       .then(([borderCountry]) =>borderCountry.name.common)
//     //   {
//         // console.log("borderCountry" , borderCountry.name.common);
//         // setboders((prevState) => [...prevState, borderCountry.name.common]);
//         // setboders((prevState) => ({...prevState, borders :[...prevState.borders, borderCountry.name.common]}))
//     //   }
//     // );
//   })).then((data) =>{
//     // console.log(data);
//     setboders((prevState) => [...prevState, data]);
//   })

    function clearborder (){
        setboders([])
    }

  console.log("borders", borders);
  let finalBorder = borders.map((count) => <Link onClick={clearborder} to={`/${count}`}><p>{count}</p></Link>);

  if (selectedCountry) {
    renderData =
      selectedCountry.message == "Not Found" ? (
        <div>Page Not Found</div>
      ) : (
        selectedCountry.map((data) => (
          <div className="mainCount">
            <span className="backButton" onClick={() => window.history.back()}>
              Back
            </span>
            <div className="countContainer">
              <div className="contHeader">Country Details</div>
              <div className="imageCont">
                <img className="img1" src={data.flags.svg}></img>
              </div>
              <div>
                <strong>Country Name : </strong>
                {data.name.common}
              </div>
              <div>
                <strong>Country capital : </strong>
                {data.capital}
              </div>
              <div>
                <strong>Country population : </strong>
                {data.population}
              </div>
              <div className="borderDiv">
                    {finalBorder}
                </div>
            </div>
            <Link to={`/${urlData1}/about`}>
              <button>CLick</button>
            </Link>
          </div>
        ))
      );
  }

  return selectedCountry === null ? "Loading...." : <>{renderData}</>;
};

export default CountryDetails;
