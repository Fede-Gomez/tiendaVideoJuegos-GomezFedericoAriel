import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import carritoVacio from '../../assets/carrito/carritoVacio.png'
import carritoLleno from '../../assets/carrito/carritoLleno.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const CartWidget = () => {

  const {items} = useContext(CartContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {items === 0
      ?
        <img className='imgCarrito'
          src={carritoVacio}
          height='50'
        />
      :
      (
        <>
          <img className='imgCarrito'
            src={carritoLleno}
            height='50'
            onClick={handleShow}
          />
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Carrito</Modal.Title>
          </Modal.Header>
          <Modal.Body >
              {
                items.map(e => (
                  <>
                    <div style={{display: 'flex', alignItems:'center', marginTop:5, marginBottom:5}}>
                      <img
                        src={e.urlPic}
                        height={100}
                        width={250}
                        style={{marginRight:20}}
                      />
                      <p style={{marginRight:20}}>
                        Nombre: {e.title}
                      </p>
                      <p style={{marginRight:20}}>
                        Cantidad: {e.count}
                      </p>
                      <p style={{marginRight:20}}>
                        Precio: {e.price*e.count}
                      </p>
                    </div>
                  </>
                ))
              }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Volver
            </Button>
          <Link to={'/cart'}>
            <Button variant="primary" onClick={handleClose}>
              Ir al carrito
            </Button>
          </Link>
          </Modal.Footer>
        </Modal>
        </>
      )
      }
    </>
  )
}
