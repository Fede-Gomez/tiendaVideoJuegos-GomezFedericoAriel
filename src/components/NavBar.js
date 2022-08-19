import React from 'react'
import '../styles/NavBar.css'
import logo from '../assets/logo/logo.jpg'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  return (
    <>
        <nav className='navBar'>
            <ul>
                <li className='img'>
                    <img src={logo} />
                </li>
                <li>
                    <button className='btn-inicio'>Inicio</button>
                </li>
                <li className='categoria'>
                    <button className='btn-categoria'>Videojuegos</button>
                </li>
                <li className='categoria'>
                    <button className='btn-categoria'>Computadoras</button>
                </li>
                <li className='categoria'>
                    <button className='btn-categoria'>Notebooks</button>
                </li>
                <li className='categoria'>
                    <button className='btn-categoria'>Merchandising</button>
                </li>
                <li className='login'>
                    <button className='btn-login'>Login</button>
                </li>
                <li>
                    <CartWidget
                        cantidad={'cantidad de productos'}
                    />
                </li>

            </ul>
        </nav>
    </>
  )
}
