import { Col, Container, Row } from 'react-bootstrap'
import './Featured.css'
import { FaDna, FaHeartbeat } from 'react-icons/fa'
import { FaPills, FaThermometer } from 'react-icons/fa6'
import FeaturedCard from './FeaturedCard/FeaturedCard'

const featuredArray = [
    {
        id: 1,
        title: 'Lorem Ipsum',
        description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
        icon: <FaHeartbeat size={'36px'} style={{"color": 'var(--primary-color)'}} />
    },
    {
        id: 2,
        title: 'Sed ut perspici',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
        icon: <FaPills size={'36px'} style={{"color": 'var(--primary-color)'}} />
    },
    {
        id: 3,
        title: 'Magni Dolores',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
        icon: <FaThermometer size={'36px'} style={{"color": 'var(--primary-color)'}} />
    },
    {
        id: 4,
        title: 'Nemo Enim',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
        icon: <FaDna size={'36px'} style={{"color": 'var(--primary-color)'}} />
    }
]

const Featured = () => {
  return (
    <div className='featured pt-4 my-5'>
        <Container>
            <Row>
                {featuredArray.map((element)=>{
                    return (
                        <Col sm={12} md={6} lg={3} className='mb-4' key={element.id}>
                            <FeaturedCard title={element.title} icon={element.icon} desc={element.description} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </div>
  )
}

export default Featured