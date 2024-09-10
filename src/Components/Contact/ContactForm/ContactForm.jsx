import { Button, Col, Row } from 'react-bootstrap'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <>
        <div className='contactForm text-center px-4 py-4'>
            <form className='py-2'>
                <Row>
                    <Col sm={12} md={6}>
                        <input  className='border border-2 w-100 mb-4 px-2 py-2 ' type="text" name="text" id="text" placeholder='Your Name' />
                    </Col>
                    <Col sm={12} md={6}>
                        <input  className='border border-2 w-100 mb-4 px-2 py-2 ' type="emai" name="text" id="text" placeholder='Your Email' />
                    </Col>
                    <Col xs={12}>
                        <input  className='border border-2 w-100 mb-4 px-2 py-2 ' type="text" name="text" id="text" placeholder='Your Name' />
                    </Col>
                    <Col xs={12}>
                        <textarea className='border border-2 w-100 mb-4 px-2 py-2 ' name="message" id="message" placeholder='Message'></textarea>
                    </Col>
                </Row>
                <Button className='bg-color px-4 py-2 border-0 fw-bold'>Send Message</Button>
            </form>
        </div>
    </>
  )
}

export default ContactForm