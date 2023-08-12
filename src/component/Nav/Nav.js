import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-route-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Game NEWS</Navbar.Brand>
          <Nav className="me-auto">
            <link className='link' to=''><Nav.Link href="#home">Главная</Nav.Link></link>
            <link className='link' to='/News'><Nav.Link href="#news">Новости</Nav.Link></link>
            <Nav.Link href="#reding">Читать</Nav.Link>
            <link className='link' to='/Gamses'><Nav.Link href="#games">Игры</Nav.Link></link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;