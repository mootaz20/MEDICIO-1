import { Card } from 'react-bootstrap'
import './DoctorsCard.css'

const DoctorsCard = ({title,desc,img}) => {
  return (
    <>
        <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {desc}
            </Card.Text>
        </Card.Body>
        </Card>
    </>
  )
}

export default DoctorsCard