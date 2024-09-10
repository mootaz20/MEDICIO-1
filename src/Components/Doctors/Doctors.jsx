import { Col, Container, Row } from 'react-bootstrap'
import './Doctors.css'
import DoctorsCard from './DoctorsCard/DoctorsCard'
import Heading from '../Heading/Heading'

const doctorsArr = [
    {
        id: 1,
        title: 'Walter White',
        desc: 'Chief Medical Officer',
        img: 'assets/img/doctors/doctors-1.jpg'
    },
    {
        id: 2,
        title: 'Sarah Jhonson',
        desc: 'Anesthesiologist',
        img: 'assets/img/doctors/doctors-2.jpg'
    },
    {
        id: 3,
        title: 'William Anderson',
        desc: 'Cardiology',
        img: 'assets/img/doctors/doctors-3.jpg'
    },
    {
        id: 4,
        title: 'Amanda Jepson',
        desc: 'Neurosurgeon',
        img: 'assets/img/doctors/doctors-4.jpg'
    },
]


const Doctors = () => {
  return (
    <>
        <div className='doctors mb-5 pb-5 pt-5'>
            <Container>
                <Heading title={'Doctors'} />
                <div className='mt-5 pt-3'>
                   <Row>
                    {doctorsArr.map((param)=>{
                        return (
                            <Col sm={12} md={6} lg={3} className='mb-4' key={param.id}>
                                 <DoctorsCard title={param.title} desc={param.desc} img={param.img} />
                            </Col>
                        )
                    })}
                   </Row>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Doctors