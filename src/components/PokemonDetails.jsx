import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/pokemondetails.css'

const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const {name} = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
    .then(res => setPokeInfo(res.data))
    .catch(err => console.log(err))
  }, [])
  
  console.log(pokeInfo)
const abilities = pokeInfo?.abilities
const stats = pokeInfo?.stats
  /* const abilities = pokeInfo?.abilities
  console.log(pokeInfo?.stats)
  console.log(pokeInfo?.moves) */
 
  console.log(pokeInfo?.moves)
  return (
    <article>
      
      <img src={pokeInfo?.sprites.other.home.front_default} alt="" />
      <h1>{name}</h1>
       <div className='abilities'>
        {
          abilities?.map(item=> <p key={item.ability.name}>{ `${item.ability.name}`}</p> )
        }
      </div> 
      <div className='stats'>
        {
          stats?.map(item=> <p key={item.stat.name} >{ `${item.stat.name}: ${item['base_stat']}`}</p> )
        }
      </div> 

      <div className='stats'>
        {
          pokeInfo?.moves.map(item=> <p key={item.move.name} >{ ` ${item.move.name}`}</p> )
        }
      </div> 
      {/* <div className='stats'>
        {
          pokeInfo?.stats.map(item=>  )
        }
      </div>  */}
    </article>
  )
}

export default PokemonDetails