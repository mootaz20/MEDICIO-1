import { Col, Container, Row } from 'react-bootstrap'
import './Contact.css'
import Map from './Map/Map'
import ContactCard from './ContactCard/ContactCard'
import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import ContactForm from './ContactForm/ContactForm'
import Heading from '../Heading/Heading'

const Contact = () => {
  return (
    <>
        <div className='contact mb-5'>
            <Container>
                <Heading title={'Contact'} />
            </Container>
            <Map />
            <Container>
                <Row>
                    <Col sm={12} md={6} className='mb-4'>
                        <ContactCard title={'Address'} desc={'A108 Adam Street, New York, NY 535022'} icon={<CiLocationOn size={'25px'} className='txt-color' />} />
                        <Row className='mt-4'>
                            <Col md={6} className='mb-4'>
                                <ContactCard title={'Call Us'} desc={'+1 5589 55488 55'} icon={<BsTelephone size={'25px'} className='txt-color' />} />
                            </Col> 
                            <Col md={6}>
                                <ContactCard title={'Email Us'} desc={'info@example.com'} icon={<TfiEmail size={'25px'} className='txt-color' />} />
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} >
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Contact