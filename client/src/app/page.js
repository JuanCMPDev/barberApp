import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Carousel from '../components/Carousel.jsx'
import BannerComponent from '../components/Banner.jsx'
import CardComponent from '../components/Card.jsx'
import Testimonials from '../components/Testimonials.jsx'
import BookingSection from '../components/Booking.jsx'

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className='flex-grow bg-gray-100'>
        <Carousel />
        <BannerComponent />
        <CardComponent />
      </div>
      <div id="testimonios" className="bg-gray-200 flex-grow flex justify-center items-center overflow-hidden">
        <Testimonials />
      </div>
      <div className='flex-grow bg-gray-100 py-10'>
        <BookingSection />
      </div>
      <Footer />
    </div>
  );
}
