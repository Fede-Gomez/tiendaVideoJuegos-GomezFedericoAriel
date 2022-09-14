import { useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo.jpg'
import { CartWidget } from '../CartWidget/CartWidget';
import {
    collection,
    getDocs,
    getFirestore,
  } from 'firebase/firestore'

export const NavBar = () => {
  
  const [genders, setGenders] = useState([])
  const [platforms, setPlatforms] = useState([])
  const [navBar, setNavBar] = useState([])
    
  
    const getAllGenders = ()=>{
        const db = getFirestore();
        let generosFirebase = [];
        let generosFiltrados = [];
        const itemCollection = collection(db, 'items');
        getDocs(itemCollection).then(snapshot =>{
            generosFirebase = snapshot.docs.filter(e => e.data().categoryId == 'Videojuegos')
            generosFirebase.forEach(e => generosFiltrados.push(e.data().gender))
            setGenders(Array.from(new Set(generosFiltrados.flat())))
        })
    }

    const getAllPlatform = ()=>{
        const db = getFirestore();
        let plataformasFirebase = [];
        let plataformasFiltrados = [];
        const itemCollection = collection(db, 'items');
        getDocs(itemCollection).then(snapshot =>{
            plataformasFirebase = snapshot.docs.filter(e => e.data().categoryId == 'Videojuegos')
            plataformasFirebase.forEach(e => plataformasFiltrados.push(e.data().consolas))
            setPlatforms(Array.from(new Set(plataformasFiltrados.flat())))
        })
    }

    const getAllCategory = ()=>{
        const db = getFirestore();
        let categoriaFirebase = [];
        let categoriaFiltrados = [];
        const itemCollection = collection(db, 'items');
        getDocs(itemCollection).then(snapshot =>{
            categoriaFirebase = snapshot.docs;
            categoriaFirebase.forEach(e => categoriaFiltrados.push(e.data().categoryId))
            setNavBar(Array.from(new Set(categoriaFiltrados.flat())))
        })
    }

    useEffect(() => {
        getAllGenders();
        getAllPlatform();
        getAllCategory();
    }, [])

    const generos = 
        <>
            <NavDropdown title="Videojuegos" id="basic-nav-dropdown">
            <>
                {
                    genders.map(e =>(
                        <>
                            { 
                                e!='???' && <Link key={e} to={`/gender/${e}`} style={style.links}>
                                    {e}
                                </Link>
                            }
                        </>
                    ))
                }
                {
                    platforms.map(e =>(
                        <>
                            { 
                                e!='???' && <Link key={e} to={`/platform/${e}`} style={style.links}>
                                    {e}
                                </Link>
                            }
                        </>
                    ))
                }
            </>
            </NavDropdown>
        </>

    return (
    <>
      <Navbar bg="dark">
          <Navbar.Brand>
            <Link to={`/`} key={1}>
                <img src={logo} width="130" height="130" className="d-inline-block align-top" alt="logoRedireccion"/>
            </Link>
          </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            {
                navBar.map(e=>(
                    <>
                        {e.toString() == 'Videojuegos' 
                        ? 
                            generos
                        : 
                            <Link key={e} to={`/category/${e}`} style={style.linksCategorias}>
                                    {e}
                            </Link>
                        }
                    </>
                ))
            }
            
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );


}

const style = {
    links:{
        display:'block',
    },
    linksCategorias:{
        color:'white',
        marginRight:5,
        marginLeft:5,
        marginTop:9,

    }
}

