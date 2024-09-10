import { Col } from 'react-bootstrap'
import './Property.css'

const Property = ({title,desc,icon}) => {
  return (
    <>
        <Col xs={2} className='mb-4' >
            <div className='shadow text-center p-lg-3 p-2  mt-2 txt-color rounded'>
                {icon}
            </div>
        </Col>
        <Col xs={10} className='mb-4'>
            <div>
                <a href="" className='text-decoration-none text-black fw-bold fs-5 mb-1 d-block'>{title} </a>
                <p className='pStyle'>{desc} </p>
            </div>
        </Col>
    </>
  )
}

export default Property