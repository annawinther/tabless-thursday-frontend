import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation(props) {

  const logout = () => {
    window.localStorage.clear();
    }

  if(!props.loggedIn) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Tabless</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
  } else {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Tabless</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/dashboard">My Account</Nav.Link>
            <Nav.Link onClick={logout} href="/">Sign Out</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )

  }
}