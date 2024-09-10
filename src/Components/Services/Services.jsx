import { Col, Container, Row } from 'react-bootstrap'
import './Services.css'
import { FaDna, FaHeartbeat, FaPills } from 'react-icons/fa'
import { FaHospitalUser, FaNotesMedical, FaWheelchair } from 'react-icons/fa6'
import Heading from '../Heading/Heading'

const servicesArr = [
    {
        id: 1,
        title: 'Nesciunt Mete',
        description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
        icon: <FaHeartbeat size={'32px'} className='txt-color' />,
    },
    {
        id: 2,
        title: 'Eosle Commodi',
        description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
        icon: <FaPills size={'32px'} className='txt-color' />,
    },
    {
        id: 3,
        title: 'Ledo Markt',
        description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
        icon: <FaHospitalUser size={'32px'} className='txt-color' />,
    },
    {
        id: 4,
        title: 'Asperiores Commodit',
        description: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
        icon: <FaDna size={'32px'} className='txt-color' />,
    },
    {
        id: 5,
        title: 'Velit Doloremque',
        description: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
        icon: <FaWheelchair size={'32px'} className='txt-color' />,
    },
    {
        id: 6,
        title: 'Dolori Architecto',
        description: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
        icon: <FaNotesMedical size={'32px'} className='txt-color' />,
    },
] 


const Services = () => {
  return (
    <>
        <div className='services pt-5'>
            <Container className='text-center'>
                 <Heading title={'Services'} />
                 <Row className='mt-5 pt-3'>
                    {servicesArr.map((elem)=>{
                        return (
                            <Col className='text-center px-4 mb-5' sm={12} md={6} lg={4} key={elem.id}>
                                <div className='shadow mx-auto text-center shape rounded-circle'>
                                    {elem.icon}
                                </div>
                                <div className='mt-3'>
                                    <h4 className='line1'>{elem.title}</h4>
                                    <p className='pStyle'>{elem.description}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>        
        </div>  
    </>
  )
}

export default Services