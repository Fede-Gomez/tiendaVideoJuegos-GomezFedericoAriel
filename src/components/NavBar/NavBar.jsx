import React from 'react'
import '../../styles/NavBar.css'
import logo from '../../assets/logo/logo.jpg'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
export const NavBar = () => {

    const categorias = ['Videojuegos', 'Computadoras', 'Notebooks', 'Merchandising'];

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <Link to={`/`}>
                <img src={logo} width="130" height="130" className="d-inline-block align-top" alt="logoRedireccion"/>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                {
                    categorias.map(cat =>(
                        <Link key={cat} to={`/category/${cat}`}>
                            <li key={cat} className='nav-item'>
                                <span className='nav-link'>{cat}</span>
                            </li>
                        </Link>
                    ))
                }
                </ul>
            </div>
                <Link to={'/cart'}>
                    <CartWidget/>
                </Link>
        </nav>
    </>
  )
}