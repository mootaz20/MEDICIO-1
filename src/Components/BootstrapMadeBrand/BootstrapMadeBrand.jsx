import { Col, Row } from 'react-bootstrap'
import './BootstrapMadeBrand.css'
import { FaDesktop } from 'react-icons/fa6'
import { FaMobileAlt, FaTabletAlt } from 'react-icons/fa'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { CiSaveDown1 } from 'react-icons/ci'


const BootstrapMadeBrand = () => {
  return (
   <div className='bootstrapMadeBrand '>
     <Row>
        <Col lg={6} className='mt-1 d-none d-lg-flex'>
            <img src="assets/img/logo1.png" alt="error" className='mx-3' width={'178px'} height={'25px'} />
            <FaDesktop size={'20px'} className='text-white mt-1 mx-2' />
            <FaTabletAlt size={'20px'} className='text-white-50 mt-1 mx-2' />
            <FaMobileAlt size={'20px'} className='text-white-50 mt-1 mx-2' />
        </Col>
        <Col className='d-flex p-lg-0'>
            <ul className='d-flex h-100 align-items-center  list-unstyled'>
                <li className='me-2 text-white-50'><IoChevronBack size={'20px'} /></li>
                <li className='mx-2 fw-bold text-white'>Medicio</li>
                <li className='mx-2 text-white-50'><IoChevronForward size={'20px'} /> </li>
            </ul>
        </Col>
        <Col className='d-flex align-items-center  justify-content-end'>
            <BsBoxArrowUpRight className='text-white-50 mx-4' />
            <div className='d-flex last h-100 align-items-center px-2 bg-primary'>
                <CiSaveDown1 className='text-white d-none d-lg-flex mx-2' size={'25px'} />
                <p className='text-white text-uppercase m-0 fw-bold'>Free Download</p>
            </div>
        </Col>
     </Row>
   </div>   
  )
}

export default BootstrapMadeBrand
