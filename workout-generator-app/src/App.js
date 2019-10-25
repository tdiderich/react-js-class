import React from 'react';
import './App.css';

import Home from './Home';
import About from './About';
import Generator from './Generator';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      activeKey: window.location.pathname
    }
  }

  render() {
    return (
      <Router>
        <div >
          <Navbar className="bg-dark" expand="lg">
            <Navbar.Brand href="/">Workout Generator App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" activeKey={this.state.activeKey}>
                <Nav.Link href="/about" eventKey="/about">About</Nav.Link>
                <Nav.Link href="/generator" eventKey="/generator">Generator</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Switch>
          <Route exact path="/" render={() => (<Home />)} />
          <Route exact path="/about" render={() => (<About />)} />
          <Route exact path="/generator" render={() => (<Generator />)} />
        </Switch>
      </Router>
    )
  }
}

export default App;
