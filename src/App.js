import React from 'react'
import { Nav, Navbar, Container, Row, Col} from "react-bootstrap"
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import CreateDesigner from "./Components/create-designer.component";
import EditDesigner from "./Components/edit-designer.component";
import DesignerList from "./Components/designer-list.component";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-designer"} className="nav-link">
                  Designer record application
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-designer"} className="nav-link">Create designer record</Link>
                </Nav>
                <Nav>
                  <Link to={"/designer-list"} className="nav-link">Designer List</Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar> 
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<CreateDesigner/>}/>
                  <Route path="/create-designer" element={<CreateDesigner/>}/>
                  <Route path="/edit-designer" element={<EditDesigner/>}/>
                  <Route path="/designer-list" element={<DesignerList/>}/>
                </Routes>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
