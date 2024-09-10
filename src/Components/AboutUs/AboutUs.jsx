import { Col, Container, Row } from 'react-bootstrap'
import './AboutUs.css'
import { IoMdPlay } from 'react-icons/io'
import { IoCheckmarkDone } from 'react-icons/io5'
import Heading from '../Heading/Heading'

const AboutUs = () => {
  return (
    <>
       <div className='aboutUs mb-5'>
       <Container>
            <Heading title={'About Us'} />
            <Row className='mt-5 pt-3'>
                <Col className='position-relative mb-5' lg={6} sm={12}>
                    <img src="assets/img/about.jpg" alt="error" className='' width={'100%'} height={'410px'} />
                    <div className='position-absolute top-50 start-50 text-center translate-middle bg-color rounded-circle play'>
                        <IoMdPlay size={'30px'} color='white' className='ps-1 pb-1' />
                    </div>
                </Col>
                <Col>
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Row className=''>
                        <Col xs={1} ><IoCheckmarkDone size={'25px'} className='txt-color' /></Col>
                        <Col><p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></Col>
                    </Row>
                    <Row className=''>
                        <Col xs={1} ><IoCheckmarkDone size={'25px'} className='txt-color' /></Col>
                        <Col><p>Duis aute irure dolor in reprehenderit in voluptate velit.</p></Col>
                    </Row>
                    <Row className=''>
                        <Col xs={1}><IoCheckmarkDone size={'25px'} className='txt-color' /></Col>
                        <Col ><p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p></Col>
                    </Row>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </Col>
            </Row>
        </Container>
       </div>
    </>
  )
}

export default AboutUs