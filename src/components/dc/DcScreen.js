import React from 'react'
import { heroes } from '../../data/heroes'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
  
  return (
    <div>
        <h1>DCScreen</h1>
        <HeroList
          publisher="DC Comics"
        />
    </div>
  )
}
