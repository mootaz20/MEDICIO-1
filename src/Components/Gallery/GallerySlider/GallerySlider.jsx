import './GallerySlider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Container } from 'react-bootstrap';


const GallerySlider = () => {
  return (
    <>
      <Container className="my-2" data-aos="fade-up" data-aos-delay="100">
      <Swiper
        loop={true}
        speed={600}
        autoplay={{ delay: 5000 }}
        slidesPerView="auto"
        centeredSlides={true}
        pagination={{
          clickable: true,
          type: "bullets",
          el: ".swiper-pagination", 
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="gallery-swiper"
      >
        {[
          "gallery-1.jpg",
          "gallery-2.jpg",
          "gallery-3.jpg",
          "gallery-4.jpg",
          "gallery-5.jpg",
          "gallery-6.jpg",
          "gallery-7.jpg",
          "gallery-8.jpg",
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <a className="glightbox" data-gallery="images-gallery" href={`assets/img/gallery/${image}`}>
              <img src={`assets/img/gallery/${image}`} className="img-fluid" alt={`Gallery ${index + 1}`}/>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination mt-5 mt-lg-1 "></div>
    </Container>
    </>
  )
}

export default GallerySlider