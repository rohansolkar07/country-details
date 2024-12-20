import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div> 
        <h2>Something Went Wrong</h2>
        <p>Status Code : {error.statusText}</p>
    </div>
  )
}

export default Error