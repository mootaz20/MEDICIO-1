import './FeaturedCard.css'

const FeaturedCard = ({title,icon,desc}) => {
  return (
    <>
        <div className='shadow py-5 px-4'>
            <div>{icon} </div>
            <h4 className='my-3 fw-bold fs-5'>{title} </h4>
            <p>{desc} </p>
        </div>
    </>
  )
}

export default FeaturedCard