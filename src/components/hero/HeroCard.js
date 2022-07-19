import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';

// const heroImages = require.context('../../assets', true)
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
  return (
    <div className='col'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-md-4'>

                <img 
                src={ heroImages(`./${ id }.jpg`) } 
                // src={heroImages(`./${id}.jpg`)}
                // src={`assets/${id}.jpg`} 
                className='card-img-top' alt={superhero}/>
                </div>
                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>
                        {
                            (alter_ego!==characters)&&
                                <p className='text-muted'>{characters}</p>
                            
                        }
                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id}`} className="btn btn-primary">
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}