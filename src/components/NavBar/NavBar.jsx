import React from 'react'
import '../../styles/NavBar.css'
import logo from '../../assets/logo/logo.jpg'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
export const NavBar = () => {

    const categorias = ['Videojuegos', 'Computadoras', 'Notebooks', 'Merchandising'];

  return (
    <>
        <nav className="navbar navbar-dark bg-dark">
            <Link to={`/`}>
                <a className="navbar-brand" href="#">
                    <img src={logo} width="130" height="130" className="d-inline-block align-top" alt="logoRedireccion"/>
                </a>
            </Link>
            <ul className="navbar-nav">
                {
                    categorias.map(cat =>(
                        <li key={cat} className='nav-item'>
                            <a className='nav-link' href='#'>{cat}</a>
                        </li>
                    ))
                }
            </ul>
            <CartWidget
                cantidad={'cantidad de productos'}
            />
            <button className='btn-login'>
                Login
            </button>
        </nav>
    </>
  )
}