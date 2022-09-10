import { Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import datos from '../../assets/bd/productos';
import logo from '../../assets/logo/logo.jpg'
import { CartWidget } from '../CartWidget/CartWidget';


export const NavBar = () => {
  
  const {category, platforms, genders} = datos;
  const navbar = ['Videojuegos', 'Computadoras', 'Notebooks', 'Merchandising']

const generos = 
<>
    <NavDropdown title="Videojuegos" id="basic-nav-dropdown">
        {
            category.map(e =>(
                e == 'Videojuegos' 
                ?
                    <>
                        <Link to={`/category/${e}`}>
                            <NavDropdown.Item href={`/category/${e}`} color='white' >Todos</NavDropdown.Item>
                        </Link>
                    </>
                :
                    platforms.includes(e)
                    ?
                        <>
                            <Link to={`/platform/${e}`}>
                                <NavDropdown.Item href={`/platform/${e}`}>{e}</NavDropdown.Item>
                            </Link>
                        </>
                    :
                    genders.includes(e)
                    ?
                        <>
                                <Link to={`/gender/${e}`}>
                                    <NavDropdown.Item href={`/gender/${e}`}>{e}</NavDropdown.Item>
                                </Link>
                            </>
                    :
                    <>
                        <Link to={`/category/${e}`}>
                            <NavDropdown.Item href={`/category/${e}`}>{e}</NavDropdown.Item>
                        </Link>
                    </>
            ))
        }
    </NavDropdown>
</>

    return (
    <>
      <Navbar bg="dark">
          <Navbar.Brand>
          <Link to={`/`}>
                <img src={logo} width="130" height="130" className="d-inline-block align-top" alt="logoRedireccion"/>
            </Link>
          </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            {
                navbar.map(e=>(
                    <Nav.Link >
                        {e.toString() == 'Videojuegos' 
                        ? 
                            generos
                        : 
                            <Link to={`/category/${e}`}>
                                <Nav.Link href={`/category/${e}`} style={{color:'white'}}>{e}</Nav.Link>
                            </Link>
                        }
                    </Nav.Link>
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