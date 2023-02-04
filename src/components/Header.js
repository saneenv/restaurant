import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/vZ1wkj3F/eb4f749fd1c95eefe5cccbcd325d8299.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
           HOTEL AGAPE
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
