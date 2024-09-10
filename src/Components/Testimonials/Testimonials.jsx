import { Container } from 'react-bootstrap'
import './Testimonials.css'
import TestimonialsSlider from './TestimonialsSlider/TestimonialsSlider'
import Heading from '../Heading/Heading'

const Testimonials = () => {
  return (
    <>
        <div className='testimonials pt-4 mb-5 pb-4'>
            <Container>
                <Heading title={'Testimonials'} />
                <div>
                    <TestimonialsSlider />
                </div>
            </Container>
        </div>
    </>
  )
}

export default Testimonials