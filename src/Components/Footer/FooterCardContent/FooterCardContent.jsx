import './FooterCardContent.css'

const FooterCardContent = ({title,links}) => {
  return (
    <>
        <div className='footerCardContent'>
            <h4 className='fs-5 mb-3'>{title} </h4>
            <ul className='list-unstyled'>
                {links.map((link, index) => {
                    return (
                        <li className='mb-2' key={index}>
                            <a className='pStyle text-decoration-none' href=''>{link.text}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default FooterCardContent