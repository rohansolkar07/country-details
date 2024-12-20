import React from 'react'
import Card from './card'

const CountryCard = ({countryData,selectedCount}) => {
  // console.log("card" , countryData);
  let cardList= countryData.filter((country) =>   country.name.common.toLowerCase().includes(selectedCount) || country.region.toLowerCase().includes(selectedCount)).map((country) => {
    // console.log("hi ",country);
    return <Card key={country.name.common} name={country.name.common} capital={country.capital} population={country.population} region={country.region} flag={country.flags.svg} data={country}/>
  })
  return (
    <div className='country_container'>
      {
        cardList
      }
      
    </div>
  )
}

export default CountryCard