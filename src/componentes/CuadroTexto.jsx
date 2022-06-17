import React from 'react'
import '../estilos/CuadroTexto.css'
import inst from '../assets/in.svg' 
import inst_ima from '../assets/inst.svg'

function CuadroTexto() {
  return (
    <>
    <div className='container_grande'>
        
    </div>

    <div className='name'>Yarriba Castro</div>
    <div className='desing'>Design Track</div>
    <div className='description'>I chose design track because I love to design beautiful user-centered interfaces.</div>
    <div className='in'>
        <img src={inst} alt="inst" />
        <span>Yaretas24</span>
    </div>
    <div className='in_ima'>
        <img src={inst_ima} alt="inst_ima" />
        <span>Yaretas24</span>
    </div>
    </>
  )
}

export  {CuadroTexto}