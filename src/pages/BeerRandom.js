import React from 'react'
import { NavBar } from '../components/NavBar'
import imgA from '../assets/amanda.jpg'
import '../pages/Home.css'

export const BeerRandom = () => {

  function sim(){
    const div = document.querySelector('.at')
    div.style.background = '#636363'
    div.style.color = '#62ff62'
    div.textContent = 'ACERTOU ELA É UMA GOSTOSA'
  }

  function nao(){
    const div = document.querySelector('.at')
    div.style.color = 'red'
    div.style.background ='#cbcbcb'
    div.textContent = 'VC NAO ENXERGA NAO FILHA DA PUTA'

  }

  return (
    <div>
      <NavBar />
      <img src={imgA} className='a' alt=' '/>
      <p className='per'>Meu amor é bonita?</p>
      <button className='btns' onClick={sim}>SIM</button>
      <button className='btnn' onClick={nao}>NÃO</button>
      <div className='at'></div>
    </div>
  )
}
