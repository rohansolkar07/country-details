import React, { useContext } from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeChontext'

const Card = ({name,capital , population ,region , flag , data}) => {
//  const params = useParams()

// const bgColor = useOutletContext();
const [bgColor , setbgColor] = useContext(ThemeContext)

//  console.log("params", params);
  return (
    <Link className={`card ${bgColor ? "cardw" : "cardb"}`} to={`/${name}`} state={{data}}>
            <img src={flag} alt={name} />
            <div className='info'>
              <h2 className="countName">{name}</h2>
              <p><strong>Capital : </strong>{capital}</p>
              <p><strong>Population : </strong>{population}</p>
              <p><strong>Region : </strong>{region}</p>
            </div>
    </Link>
  )
}

export default Card