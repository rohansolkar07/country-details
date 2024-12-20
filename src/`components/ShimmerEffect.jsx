import React from 'react'

const ShimmerEffect = () => {

  return (
    <div className='country_container'>
      {
        Array.from({length : 10}).map((el,i) =>{
            return <div key={i} className='card shimmer-card'></div>
        })
      }
      
    </div>
  )
}

export default ShimmerEffect