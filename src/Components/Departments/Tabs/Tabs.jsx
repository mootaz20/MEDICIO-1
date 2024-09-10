import { Col, Nav, Row, Tab } from 'react-bootstrap'
import './Tabs.css'

const departments = [
  {
    key: 'first',
    title: 'Cardiology',
    firstDesc : 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
    secondDesc: `Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
    image: 'assets/img/departments-1.jpg',
  },
  {
    key: 'second',
    title: 'Neurology',
    firstDesc : 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
    secondDesc: `Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
    image: 'assets/img/departments-2.jpg',
  },
  {
    key: 'third',
    title: 'Hepatology',
    firstDesc : 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
    secondDesc: `Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
    image: 'assets/img/departments-3.jpg',
  },
  {
    key: 'fourth',
    title: 'Pediatrics',
    firstDesc : 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
    secondDesc: `Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
    image: 'assets/img/departments-4.jpg',
  },
  {
    key: 'fifth',
    title: 'Ophthalmologists',
    firstDesc : 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
    secondDesc: `Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
    image: 'assets/img/departments-5.jpg',
  }
];

const Tabs = () => {
  return (
    <>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className='mt-5 pt-4'>
        <Col sm={12} md={4} lg={3}  className='mb-4'>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Cardiology</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Neurology</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Hepatology</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Pediatrics</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Ophthalmologists</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12} md={8} lg={9}>
        <Tab.Content>
      {departments.map((department) => (
        <Tab.Pane eventKey={department.key} key={department.key}>
          <Row className='d-flex'>
            <Col sm={12} lg={8} className='order-1 order-lg-0' >
              <h3 className='mb-4'>{department.title}</h3>
              <p className='pStyle'>{department.firstDesc} <br /> <br /> {department.secondDesc} </p>
            </Col>
            <Col sm={12} lg={4} className='mb-4'>
              <div>
                <img src={department.image} alt={department.title} width={'100%'} />
              </div>
            </Col>
          </Row>
        </Tab.Pane>
      ))}
    </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </>
  )
}

export default Tabs