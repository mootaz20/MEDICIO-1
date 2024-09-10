import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import FooterCardContent from './FooterCardContent/FooterCardContent'

const icons = [
    {
        id : 1,
        icon: <FaXTwitter />,
    },
    {
        id : 2,
        icon : <FaFacebook />
    },
    {
        id : 3,
        icon : <FaInstagram />
    },
    {
        id : 4,
        icon : <FaLinkedin />
    },
]

const arr1 = [
    {
        id : 1,
        text : 'Home',
    },
    {
        id : 2,
        text : 'About Us',
    },
    {
        id : 3,
        text : 'Services',
    },
    {
        id : 4,
        text : 'Terms of service',
    },
    {
        id : 5,
        text : 'Privacy policy',
    },
]
const arr2 = [
    {
        id : 1,
        text : 'Web Design',
    },
    {
        id : 2,
        text : 'Web Development',
    },
    {
        id : 3,
        text : 'Product Management',
    },
    {
        id : 4,
        text : 'Marketing',
    },
    {
        id : 5,
        text : 'Graphic Design',
    },
]
const arr3 = [
    {
        id : 1,
        text : 'Molestiae accusamus',
    },
    {
        id : 2,
        text : 'Excepturi dignissimos',
    },
    {
        id : 3,
        text : 'Suscipit distinctio',
    },
    {
        id : 4,
        text : 'Dilecta',
    },
    {
        id : 5,
        text : 'Sit quas consectetur',
    },
]
const arr4 = [
    {
        id : 1,
        text : 'Ipsam',
    },
    {
        id : 2,
        text : 'Laudantium dolorum',
    },
    {
        id : 3,
        text : 'Dinera',
    },
    {
        id : 4,
        text : 'Trodelas',
    },
    {
        id : 5,
        text : 'Flexo',
    },
]

const Footer = () => {
  return (
    <>
        <div className='footer pb-3 pt-5'>
            <Container>
                <Row className=' border-1 border-bottom pb-2'>
                    <Col sm={12}  md={4} className='mb-5 mb-lg-0'>
                        <h4 className='mb-5'>Medicio</h4>
                        <p className='pStyle'>A108 Adam Street
                        <br />
                           New York, NY 535022
                        </p>
                        <p className='pStyle m-0'><strong>Phone :</strong> +1 5589 55488 55 </p>
                        <p className='pStyle mb-4'><strong>Email :</strong> info@example.com </p>
                        <div className=''>
                            <ul className='list-unstyled d-flex gap-2'>
                                {icons.map(icon => {
                                    return (
                                        <li className='shape text-center rounded-circle' key={icon.id}>
                                            <a className='' href=''>{icon.icon}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12}  md={2} className='mb-5 mb-lg-0'>
                         <FooterCardContent title={'Useful Links'} links={arr1} />
                    </Col>
                    <Col sm={12}  md={2} className='mb-5 mb-lg-0'>
                         <FooterCardContent title={'Our Services'} links={arr2} />
                    </Col>
                    <Col sm={12}  md={2} className='mb-5 mb-lg-0'>
                         <FooterCardContent title={'Hic solutasetp'} links={arr3} />
                    </Col>
                    <Col sm={12}  md={2} className='mb-5 mb-lg-0'>
                         <FooterCardContent title={'Nobis illum'} links={arr1} />
                    </Col>
                </Row>
                <div className='text-center mt-4'>
                    <p className='pStyle m-2'>© Copyright <strong>Medicio</strong> All Rights Reserved</p>
                    <p className='pStyle'>Designed by <span className='txt-color'>BootstrapMade</span> </p>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Footer