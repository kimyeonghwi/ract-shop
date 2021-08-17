import {Navbar, Container, Nav ,NavDropdown } from 'react-bootstrap'
import './App.css';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Data from './data';
import Detail from './Detail';
import {Link , Route , Switch} from 'react-router-dom';


function App() {

  let [shoes, shoesSet] = useState(Data);
 

  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Mulok_Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home </Nav.Link>
                <Nav.Link as={Link} to="/detail">Detil</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      <Switch>
      
      {/* exact를 붙이면 path가 정확하게 맞아야 이 화면 출력해준다, */}
      <Route exact path="/">

          <div className="jumbotron">
            <h1>20% Season Off</h1>
            <p> asdjkfjskldfjskldfjskldf</p>
            <Button variant="contained" color="primary">
              자세히보기
            </Button>
            </div>

            <div className="container"> 
              <div className="row">
                {
                  shoes.map( (a , i ) => {
                    return <Card shoes={a} i={i}/>
                  })
                }   
              </div>
            </div>
          
      </Route>
      

      {/* 디테일 라우터 */}
      <Route path="/detail/:id">
        <Detail shoes={shoes} />
      </Route>

      {/* /모든 문자 라는 경로를 의미 */}
      <Route path="/:id">
        아무문자
      </Route>

    </Switch>

    </div>
  );
}

function Card(props) {

  return(
  <div className="col-md-4">
    <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="100%"/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content} & {props.shoes.price}</p>
    
  </div>
  );

}


export default App;
