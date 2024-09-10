import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './NavbarCom.css'

const NavbarCom = () => {
  return (
    <>
     <div className='navbarCom'>
     <Navbar expand="lg" className="py-3 ">
      <Container fluid>
        <Navbar.Brand href="#"><img src="assets/img/logo.png" alt="error" width={'135px'} height={'36px'} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Button className='bg-color btn border-0 order-3'>Make an Appointment</Button>
        <Navbar.Collapse id="navbarScroll" className='ms-lg-5 ps-lg-5'>
          <Nav
            className="my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link className='fw-bold hover txt-color margin'>Home</Nav.Link>
            <Nav.Link className='fw-bold hover margin '>About</Nav.Link>
            <Nav.Link className='fw-bold hover margin '>Services</Nav.Link>
            <Nav.Link className='fw-bold hover margin '>Departments</Nav.Link>
            <Nav.Link className='fw-bold hover margin '>Doctors</Nav.Link>
            <Nav.Link className='fw-bold hover margin '>DropDown</Nav.Link>
            <Nav.Link className='fw-bold hover margin '>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </div>
    </>
  )
}

export default NavbarCom
