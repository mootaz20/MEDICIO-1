import { Container } from 'react-bootstrap'
import './Gallery.css'
import Heading from '../Heading/Heading'
import GallerySlider from './GallerySlider/GallerySlider'

const Gallery = () => {
  return (
    <>
        <div className='gallery'>
            <Container>
                <Heading title={'Gallery'} />
                <div className='mt-5'>
                  <GallerySlider />
                </div>
            </Container>

        </div>
    </>
  )
}

export default Gallery