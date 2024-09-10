import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY || window.pageYOffSet) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <Button
        className="scroll-to-top-btn position-fixed d-flex bg-color border-0 py-3"
        onClick={scrollToTop}
        size="lg"
      >
        <FaArrowUp size={'20px'} />
      </Button>
    )
  );
};

export default ScrollToTop;