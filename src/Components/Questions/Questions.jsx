import { Accordion, Col, Container, Row } from 'react-bootstrap'
import './Questions.css'
import Heading from '../Heading/Heading'

const accordionArr = [
    {
        id: 1,
        title: 'Non consectetur a erat nam at lectus urna duis?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit tempore omnis obcaecati pariatur, fugit sapiente deserunt voluptas facilis quos temporibus saepe fugiat ea eligendi minima delectus. Alias assumenda autem enim!'
    },
    {
        id: 2,
        title: 'Feugiat scelerisque varius morbi enim nunc faucibus?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit tempore omnis obcaecati pariatur, fugit sapiente deserunt voluptas facilis quos temporibus saepe fugiat ea eligendi minima delectus. Alias assumenda autem enim!'
    },
    {
        id: 3,
        title: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit tempore omnis obcaecati pariatur, fugit sapiente deserunt voluptas facilis quos temporibus saepe fugiat ea eligendi minima delectus. Alias assumenda autem enim!'
    },
    {
        id: 4,
        title: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit tempore omnis obcaecati pariatur, fugit sapiente deserunt voluptas facilis quos temporibus saepe fugiat ea eligendi minima delectus. Alias assumenda autem enim!'
    },
    {
        id: 5,
        title: 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit tempore omnis obcaecati pariatur, fugit sapiente deserunt voluptas facilis quos temporibus saepe fugiat ea eligendi minima delectus. Alias assumenda autem enim!'
    },
    {
        id: 6,
        title: 'Perspiciatis quod quo quos nulla quo illum ullam?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit tempore omnis obcaecati pariatur, fugit sapiente deserunt voluptas facilis quos temporibus saepe fugiat ea eligendi minima delectus. Alias assumenda autem enim!'
    },
]


const Questions = () => {
  return (
    <>
        <div className='questions mb-5 pb-5 pt-5'>
            <Container className='mt-4'>
                <Heading title={'Frequently Asked Questions'} />
                <div className='mt-5 pt-3'>
                <Accordion defaultActiveKey="0">
                    <Row className='justify-content-center' >
                    {accordionArr.map((item, index) => {
                        return (
                                <Col className='mb-3' sm={12}  md={10} key={index}>
                                    <Accordion.Item className='py-2 border border-2'  eventKey={index}>
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body className='pStyle'>
                                            {item.content}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Col>
                        )
                    })}
                    </Row>
                </Accordion>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Questions