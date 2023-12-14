import React from 'react'
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar'

const Beers = ({beersList}) => {
  return (
    <div>
        <Navbar/>
        {beersList.map((beer)=>{
        return (<Link key={beer._id} to={beer._id} className='beer-container'>

        <img src={beer.image_url} className='img-beer'/>
        <div className='beer-text'>
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.contributed_by}</p>
        </div>
        </Link>

        )
    })}</div>
  )
}

export default Beers