import './ContactCard.css'

const ContactCard = ({title,desc,icon}) => {
  return (
    <>
        <div className='contactCard text-center pt-4 pb-2'>
            <div className='border rounded-circle'>
                {icon}
            </div>
            <h4 className='mt-2 fs-5'>{title} </h4>
            <p className='pStyle'>{desc} </p>
        </div>
    </>
  )
}

export default ContactCard