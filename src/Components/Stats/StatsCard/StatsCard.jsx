import './StatsCard.css'

const StatsCard = ({title,number,icon}) => {
  return (
    <>
        <div className='statsCard shadow-lg px-4 py-2'>
            <div className='d-flex w-100 h-100 gap-3 align-items-center'>
                <div>
                    {icon}
                </div>
                <div>
                    <h1 className='mb-2 pt-3'>{number} </h1>
                    <p>{title} </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default StatsCard