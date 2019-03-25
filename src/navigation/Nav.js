import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter, } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
// import TrelloList from '../components/TrelloList';
import TrelloBoard from '../components/TrelloBoard'

class Navigation extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand>Lively</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><NavLink exact to="/">Home</NavLink></Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            <Nav.Link><NavLink exact to="/Login">Login</NavLink></Nav.Link>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <Route exact path="/" component={TrelloBoard} />  
                </div>
            </BrowserRouter>
      </div>
    )
  }
}

export default Navigation;
