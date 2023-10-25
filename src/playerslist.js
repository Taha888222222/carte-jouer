import React from 'react'
import players from './players'
import Player from './player'

const playerslist = () => {
  return ( 
    <div>
        {players.map((play, index) => (
        <Player key={index} {...play} /> 
        ))}
    </div>
  )
}

export default playerslist;