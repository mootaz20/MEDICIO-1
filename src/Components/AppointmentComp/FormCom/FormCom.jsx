import { Col, Row } from 'react-bootstrap'
import './FormCom.css'

const FormCom = () => {
  return (
    <>
        <div className='formCom mt-5'>
            <form>
                <Row>
                    <Col className='mb-4' sm={12} md={6} lg={4} >
                        <input className='w-100 fw-normal border border-1 px-2 py-2' type="text" name="text" id="text" placeholder='Your Name' />
                    </Col>
                    <Col className='mb-4' sm={12} md={6} lg={4} >
                        <input className='w-100 fw-normal border border-1 px-2 py-2' type="email" name="email" id="email" placeholder='Your Email' />
                    </Col>
                    <Col className='mb-4' sm={12} md={6} lg={4} >
                        <input className='w-100 fw-normal border border-1 px-2 py-2' type="text" name="text" id="text" placeholder='Your Phone' />
                    </Col>
                    <Col className='mb-4' sm={12} md={6} lg={4} >
                        <input className='w-100 fw-normal border border-1 px-2 py-2' type="date" name="date" id="date" />
                    </Col>
                    <Col className='mb-4' sm={12} md={6} lg={4} >
                        <select className='w-100 fw-normal border border-1 px-2 py-2 ' name="department" id="department">
                            <option value="Select Department">Select Department</option>
                            <option value="Department 1">Department 1</option>
                            <option value="Department 2">Department 2</option>
                            <option value="Department 3">Department 3</option>
                        </select>
                    </Col>
                    <Col className='mb-4' sm={12} md={6} lg={4} >
                        <select className='w-100 fw-normal border border-1 px-2 py-2 ' name="doctors" id="doctors">
                            <option value="Select Doctor">Select Doctor</option>
                            <option value="Doctors 1">Doctors 1</option>
                            <option value="Doctors 2">Doctors 2</option>
                            <option value="Doctors 3">Doctors 3</option>
                        </select>
                    </Col>
                    <Col className='mb-4' xs={12} > 
                        <textarea className='w-100 fw-normal border border-1 px-2 py-2' style={{'height': '127px'}} name="message" id="message" placeholder='Message (optional) '></textarea>
                    </Col>
                </Row>
            </form>
        </div>
    </>
  )
}

export default FormCom