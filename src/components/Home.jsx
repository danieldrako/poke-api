import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import FooterPoke from './shared/FooterPoke'
import './styles/home.css'
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()

    if(inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ""
  }

  return (
    <div className='home'>
      <img className='home__img' src="/images/Home/pokedex.png" alt="Pokedex Logo" />
      <div className='home-container'>
      <h1 className='home__title'>
      <TypeWriterEffect
        textStyle={{
          /* fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', */
          color: '#207DE5',
          fontWeight: 'bold',
          fontSize: '2.5rem',
          margin: '40px 15px'
          /* background: 'rgb(120, 90, 48)' */
         /*  background: 'linear-gradient(-120deg, rgba(0,4,5,1) 8%, rgba(18,18,19,1) 45%, rgba(173,188,191,1) 88%, rgba(199,232,238,0.927608543417367) 100%)',

          webkitBackgroundClip: 'text',
          webkitTextFillColor: 'transparent', */

        }}
        startDelay={1000}
        cursorColor="rgb(18,18,19)"
        multiText={[
          'Hi Trainer!',
          'To Start give me your trainer name'
          
        ]}
        multiTextDelay={5000}
        typeSpeed={100}
        multiTextLoop
      />
        
        </h1>
      <p className='home__description'>

      </p>

      </div>
      
      <form className='home__form' onSubmit={handleSubmit}>
        <input placeholder='Enter your name' className='home__input' id='name' type="text" />
        <button className='home__btn'>Catch them all</button>
      </form>
      <FooterPoke />
    </div>
  )
}

export default Home