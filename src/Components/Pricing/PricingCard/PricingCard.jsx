import { Button } from 'react-bootstrap'
import './PricingCard.css'

const PricingCard = ({title,price,time,desc,color}) => {
  return (
    <>
        <div className='pricingCard text-center rounded-2'>
            <div className={`${color ? 'bg-color rounded-1' : 'bg-secondary'} `}>
                <p className={`${color ? 'text-white' : ''} rounded-1  py-3 fw-bold fs-5 pStyle `} >{title}</p>
            </div>
            <div>
                <p className='pStyle mb-4'><strong className='fs-3'>{price} </strong> {time} </p>
            </div>
            <div className='mb-5'>
                <ul className='list-unstyled'>
                {desc.map((element, index) => (
                 <li   
                   key={index} 
                   className={`${element.disabled ? 'text-decoration-line-through' : ''} mb-3 pStyle `} 
                 >
                    {element.title}
                 </li>
                ))}

                </ul>
            </div>
            <div className='bg-secondary py-3'>
                <Button className='bg-color border-0 px-4 py-2'>Buy Now</Button>
            </div>
        </div>
    </>
  )
}

export default PricingCard