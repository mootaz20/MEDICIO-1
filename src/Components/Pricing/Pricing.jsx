import { Col, Container, Row } from 'react-bootstrap'
import './Pricing.css'
import PricingCard from './PricingCard/PricingCard'
import Heading from '../Heading/Heading'

const pricingArr = [
    {
        id: 1,
        title: 'Free',
        price: '$0',
        time: '/ month' ,
        descriptions : [
            {
                title : 'Aida dere',
                disabled : false
            },
            {
                title : 'Nec feugiat nisl',
                disabled : false
            },
            {
                title : 'Nulla at volutpat dola',
                disabled : false
            },
            {
                title : 'Pharetra massa',
                disabled : true
            },
            {
                title : 'Massa ultricies mi',
                disabled : true
            },
        ],
        blueColor : false
    },
    {
        id: 2,
        title: 'Business',
        price: '$19',
        time: '/ month' ,
        descriptions : [
            {
                title : 'Aida dere',
                disabled : false
            },
            {
                title : 'Nec feugiat nisl',
                disabled : false
            },
            {
                title : 'Nulla at volutpat dola',
                disabled : false
            },
            {
                title : 'Pharetra massa',
                disabled : false
            },
            {
                title : 'Massa ultricies mi',
                disabled : true
            },
        ],
        blueColor : true
    },
    {
        id: 3,
        title: 'Developer',
        price: '$29',
        time: '/ month' ,
        descriptions : [
            {
                title : 'Aida dere',
                disabled : false
            },
            {
                title : 'Nec feugiat nisl',
                disabled : false
            },
            {
                title : 'Nulla at volutpat dola',
                disabled : false
            },
            {
                title : 'Pharetra massa',
                disabled : false
            },
            {
                title : 'Massa ultricies mi',
                disabled : false
            },
        ],
        blueColor : false
    },
    {
        id: 4,
        title: 'Ultimate',
        price: '$49',
        time: '/ month' ,
        descriptions : [
            {
                title : 'Aida dere',
                disabled : false
            },
            {
                title : 'Nec feugiat nisl',
                disabled : false
            },
            {
                title : 'Nulla at volutpat dola',
                disabled : false
            },
            {
                title : 'Pharetra massa',
                disabled : false
            },
            {
                title : 'Massa ultricies mi',
                disabled : false
            },
        ],
        blueColor : false
    },
]


const Pricing = () => {
  return (
    <>
        <div className='pricing mb-5 pt-5'>
            <Container>
                <Heading title={'Pricing'} />
                <div className='mt-5'>
                    <Row>
                        {pricingArr.map((element)=>{
                            return (
                                <Col sm={12} md={6} lg={3} className='mb-4' key={element.id} >
                                    <PricingCard title={element.title} price={element.price}  time={element.time}  desc={element.descriptions} color={element.blueColor} />
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

export default Pricing