import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom'

function Navbars() {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location]);

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">iNoteBook</Navbar.Brand>
          <Nav className="me-auto" defaultActiveKey={location.pathname}>
            <Nav.Link href='/' >Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
          {!localStorage.getItem('token')}?<Nav className="me">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
          </Nav>:<Nav.Link href="/">Logout</Nav.Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars
