import AboutUs from "../Components/AboutUs/AboutUs"
import AppointmentComp from "../Components/AppointmentComp/AppointmentComp"
import BootstrapMadeBrand from "../Components/BootstrapMadeBrand/BootstrapMadeBrand"
import Contact from "../Components/Contact/Contact"
import Departments from "../Components/Departments/Departments"
import Doctors from "../Components/Doctors/Doctors"
import Featured from "../Components/Featured/Featured"
import Features from "../Components/Features/Features"
import Footer from "../Components/Footer/Footer"
import Gallery from "../Components/Gallery/Gallery"
import HeaderContact from "../Components/HeaderContact/HeaderContact"
import Hero from "../Components/Hero/Hero"
import NavbarCom from "../Components/Navbar/NavbarCom"
import NeedHelpSection from "../Components/NeedHelpSection/NeedHelpSection"
import Pricing from "../Components/Pricing/Pricing"
import Questions from "../Components/Questions/Questions"
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop"
import Services from "../Components/Services/Services"
import Stats from "../Components/stats/stats"
import Testimonials from "../Components/Testimonials/Testimonials"



const Home = () => {
  return (
    <>
     <BootstrapMadeBrand />
     <HeaderContact />
     <NavbarCom />
     <Hero />
     <Featured />
     <NeedHelpSection />
     <AboutUs />
     <Stats />
     <Features />
     <Services />
     <AppointmentComp />
     <Departments />
     <Testimonials />
     <Doctors />
     <Gallery />
     <Pricing />
     <Questions />
     <Contact />
     <Footer />
     <ScrollToTop />
    </>
  )
}

export default Home
