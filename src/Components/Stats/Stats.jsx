import { Col, Container, Row } from 'react-bootstrap'
import './Stats.css'
import { FaAward, FaRegHospital, FaUserDoctor } from 'react-icons/fa6'
import { FaFlask } from 'react-icons/fa'
import StatsCard from './StatsCard/StatsCard'

const statsArr = [
    {
        id: 1,
        num : '25',
        title: 'Doctors',
        icon: <FaUserDoctor size={'48px'} className='txt-color' />
    },
    {
        id: 2,
        num : '15',
        title: 'Departments',
        icon: <FaRegHospital size={'48px'} className='txt-color' />
    },
    {
        id: 3,
        num : '8',
        title: 'Research Labs',
        icon: <FaFlask size={'48px'} className='txt-color' />
    },
    {
        id: 4,
        num : '150',
        title: 'Awards',
        icon: <FaAward size={'48px'} className='txt-color' />
    }
]


const Stats = () => {
  return (
    <>
        <div className='stats pt-5 mb-5'>
            <Container>
                <Row>
                    {statsArr.map((stat) => {
                        return (
                            <Col sm={12} md={6} lg={3} className='mb-4' key={stat.id}>
                                <StatsCard title={stat.title} number={stat.num} icon={stat.icon} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Stats