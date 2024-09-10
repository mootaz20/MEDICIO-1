import { Col, Container, Row } from 'react-bootstrap'
import './Features.css'
import { FaHandHoldingMedical, FaLungs } from 'react-icons/fa'
import { FaStaffSnake, FaSuitcaseMedical } from 'react-icons/fa6'
import Property from './Property/Property'

const properties = [
    {
        id: 1,
        title: 'Lorem Ipsum',
        description: 'Voluptatum deleniti atque corrupti quos dolores et quas excepturi sint occaecati cupiditate non provident',
        icon : <FaHandHoldingMedical size={'25px'} />,
    },
    {
        id: 2,
        title: 'Nemo Enim',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
        icon : <FaSuitcaseMedical size={'25px'} />,
    },
    {
        id: 3,
        title: 'Dine Pad',
        description: 'Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis',
        icon : <FaStaffSnake size={'25px'} />,
    },
    {
        id: 4,
        title: 'Tride clov',
        description: 'Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi',
        icon : <FaLungs size={'25px'} />,
    }
]


const Features = () => {
  return (
    <>
        <div className='features pt-5 mb-5'>
            <Container className='mt-3'>
                <Row>
                    <Col  sm={12} lg={7} className='ps-lg-4'>
                        <img src="assets/img/features.jpg" alt="error" width={'91%'} height={'735px'} />
                    </Col>
                    <Col sm={12} lg={5} className='pt-5 px-lg-0 pt-lg-1'>
                        <div>
                            <h3 className='fw-bold line'>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
                        </div>
                        <Row className='mt-5 pt-2'>
                            {properties.map((property) => {
                                return (
                                    <Property  key={property.id} title={property.title} desc={property.description} icon={property.icon} />
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Features