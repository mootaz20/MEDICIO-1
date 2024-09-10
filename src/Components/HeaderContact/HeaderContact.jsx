import { Col, Container, Row } from 'react-bootstrap'
import './HeaderContact.css'
import { FaMobileAlt, FaRegClock } from 'react-icons/fa'

const HeaderContact = () => {
  return (
    <>
      <div className='bg-color'>
      <Container className='py-2 text-white fw-bold'  fluid="md">
      <Row className='justify-content-between'>
        <Col className='d-none d-lg-flex align-items-center'>
            <FaRegClock />
            <span className='ms-1'>Monday - Saturday, 8AM to 10PM</span>
        </Col>
        <Col className='media d-flex justify-content-center justify-content-lg-end align-items-center'>
            <FaMobileAlt className='' />
            <span className='ms-1'>Call us now +1 5589 55488 55</span>
        </Col>
      </Row>
    </Container>
      </div>
    </>
  )
}

export default HeaderContact
