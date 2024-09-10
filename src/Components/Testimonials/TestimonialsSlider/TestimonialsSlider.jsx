import { Col, Row } from 'react-bootstrap';
import './TestimonialsSlider.css';
import { useEffect, useRef, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

const testimonialsData = [
  {
    name: "Saul Goodman",
    role: "CEO & Founder",
    img: "assets/img/testimonials/testimonials-1.jpg"
  },
  {
    name: "Sara Willson",
    role: "Designer",
    img: "assets/img/testimonials/testimonials-2.jpg"
  },
  {
    name: "Jena Karlis",
    role: "Store Owner",
    img: "assets/img/testimonials/testimonials-3.jpg"
  },
  {
    name: "Matt Brandon",
    role: "Freelancer",
    img: "assets/img/testimonials/testimonials-4.jpg"
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    img: "assets/img/testimonials/testimonials-5.jpg"
  }
];

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const divAnim = useRef(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const isVisible = (testimonialIndex) => {
    if (windowWidth >= 992) {
      if (index === 1 && testimonialIndex <= 3) return true;
      if (index === 2 && testimonialIndex >= 2 && testimonialIndex <= 4) return true;
      if (index === 3 && testimonialIndex >= 3 && testimonialIndex <= 5) return true;
      if (index === 4 && (testimonialIndex === 4 || testimonialIndex === 5 || testimonialIndex === 1)) return true;
      if (index === 5 && (testimonialIndex === 5 || testimonialIndex === 1 || testimonialIndex === 2)) return true;
      return false;
    } else {
      if (index === testimonialIndex) return true;
      return false;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (divAnim) {
      divAnim.current.classList.remove('animation');
      void divAnim.current.offsetWidth;
      divAnim.current.classList.add('animation');
    }
  }, [index]);

  return (
    <>
      <div className='testimonialsSlider mt-5 pt-3'>
        <div ref={divAnim}>
          <Row className='flex-nowrap'>
            {testimonialsData.map((testimonial, idx) => (
              <Col
                sm={12} lg={4}
                key={idx}
                className={isVisible(idx + 1) ? '' : 'd-none'}
              >
                <div className="testimonial-wrapper position-relative">
                  <div className="testimonial mx-auto rounded pt-3 px-3 pStyle fs-6">
                    <FaQuoteLeft size={'22px'} className='txt-color me-2' />
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <FaQuoteRight size={'22px'} className='txt-color ms-2' />
                  </div>
                  <div>
                    <img className='position-absolute rounded-circle' src={testimonial.img} alt={testimonial.name} width={'90px'} height={'90px'} />
                  </div>
                  <div className='mt-5 pt-3 px-4 ms-2'>
                    <h4>{testimonial.name}</h4>
                    <p className='pStyle'>{testimonial.role}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="custom-indicators">
          <ul className="list-inline text-center">
            {testimonialsData.map((_, itemIndex) => (
              <li
                key={itemIndex}
                className={`list-inline-item ${index === itemIndex + 1 ? "active" : ""}`}
                onClick={() => handleSelect(itemIndex + 1)}
              >
                <span className="indicator-circle"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSlider;
