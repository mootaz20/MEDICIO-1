import { Button, Col, Container, Row } from 'react-bootstrap'
import './NeedHelpSection.css'

const NeedHelpSection = () => {
  return (
    <div className='needHelpSection my-5 bg-color py-5'>
       <Container className='py-4'>
       <Row className='text-center text-white justify-content-center'>
            <Col lg={10} md={8} sm={12}>
                <h3 className='fw-bold'>In an emergency? Need help now?</h3>
                <p className='mb-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button className='bg-outline fw-bold border border-white border-2'>Make an Appointment</Button>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default NeedHelpSection