import React, { useMemo, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroeById } from '../selectors/getHeroeById';
import { heroImages } from '../../helpers/heroImages';

// import batman from '../../assets/dc-batman.jpg'
// const heroImages = require.context('../../assets', true)

export const HeroScreen = () => {

  const {heroeId} = useParams();

  const hero = useMemo(()=>getHeroeById(heroeId),[heroeId]) 

  const navigate = useNavigate();

  const handleReturn = ()=>{
    navigate(-1);
  }

  if(!hero) {
    return  <Navigate to='/'/>
  }
  
  return (
    <div className='row mt-5'>
      <div className='col-4 '>
        <img 
        src={ heroImages(`./${ heroeId }.jpg`) } 
        // src = {heroImages(`./${heroeId}.jpg`)}
        // src={`/assets/${hero.id}.jpg`} //Desde public/assets
        className='img-thumbnail animate__animated animate__fadeInLeft' 
        alt={hero.superhero}
        />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>

      <h5 className='mt-3'>Characters </h5>
      <p>{hero.characters}</p>
      <button
        className='btn btn-primary'
        onClick={handleReturn}
      >
        Regresar
      </button>

      </div>
    </div>
  )
}