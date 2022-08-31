import React from 'react'
import '../../styles/NavBar.css'
import logo from '../../assets/logo/logo.jpg'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
export const NavBar = () => {

    const categorias = ['Videojuegos', 'Computadoras', 'Notebooks', 'Merchandising'];

  return (
    <>
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <Link to={`/`}>
                <a className="navbar-brand" href="#">
                    <img src={logo} width="130" height="130" className="d-inline-block align-top" alt="logoRedireccion"/>
                </a>
            </Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                {
                    categorias.map(cat =>(
                        <Link to={`/category/${cat}`}>
                            <li key={cat} className='nav-item'>
                                <a className='nav-link'>{cat}</a>
                            </li>
                        </Link>
                    ))
                }
                </ul>
                <CartWidget
                    cantidad={'cantidad de productos'}
                />
                <button className='btn-login'>
                    Login
                </button>
            </div>
        </nav>
    </>
  )
}