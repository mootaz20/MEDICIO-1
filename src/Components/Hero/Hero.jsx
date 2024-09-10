import { Button, Carousel } from 'react-bootstrap'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className='hero'>
      <Carousel fade>
      <Carousel.Item style={{'height':"410px"}}>
        <img src="assets/img/hero-carousel/hero-carousel-1.jpg" alt="error" />
        <Carousel.Caption>
            <div className='text-black pb-5 backGround'>
                <h1>Welcome to Medicio</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, deleniti enim, laudantium veritatis, inventore ullam et doloribus facere eum reprehenderit dignissimos quod voluptate iste nesciunt! Esse error maiores eius dolores.</p>
                <Button className='bg-color border-0' >Read More </Button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"410px"}}>
      <img src="assets/img/hero-carousel/hero-carousel-2.jpg" alt="error" />
        <Carousel.Caption>
        <div className='text-black pb-5 backGround'>
                <h1>Welcome to Medicio</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, deleniti enim, laudantium veritatis, inventore ullam et doloribus facere eum reprehenderit dignissimos quod voluptate iste nesciunt! Esse error maiores eius dolores.</p>
                <Button className='bg-color border-0'  >Read More </Button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"410px"}}>
      <img src="assets/img/hero-carousel/hero-carousel-3.jpg" alt="error" />
        <Carousel.Caption>
        <div className='text-black pb-5 backGround'>
                <h1>Welcome to Medicio</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, deleniti enim, laudantium veritatis, inventore ullam et doloribus facere eum reprehenderit dignissimos quod voluptate iste nesciunt! Esse error maiores eius dolores.</p>
                <Button className='bg-color border-0'  >Read More </Button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </>
  )
}

export default Hero
