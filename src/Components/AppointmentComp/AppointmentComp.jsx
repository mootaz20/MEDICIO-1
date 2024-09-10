import { Button, Container } from 'react-bootstrap'
import './AppointmentComp.css'
import FormCom from './FormCom/FormCom'
import Heading from '../Heading/Heading'

const AppointmentComp = () => {
  return (
    <>
        <div className='appointmentComp py-5 mb-5 '>
            <Container className='pt-3'>
                <Heading title={'MAKE AN APPOINTMENT'} />
                <div>
                    <FormCom />
                </div>
                <div className='text-center'>
                    <Button className='bg-color border-0 px-5 py-2 mb-3'>Make an Appointment</Button>
                </div>
            </Container>
        </div>
    </>
  )
}

export default AppointmentComp