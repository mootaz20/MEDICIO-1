import { Container } from 'react-bootstrap'
import './Departments.css'
import Tabs from './Tabs/Tabs'
import Heading from '../Heading/Heading'

const Departments = () => {
  return (
    <>
        <div className='departments pt-4 mb-5 pb-5'>
            <Container>
                <Heading title={'Departments'} />
                <div>
                    <Tabs />
                </div>
            </Container>
        </div>
    </>
  )
}

export default Departments