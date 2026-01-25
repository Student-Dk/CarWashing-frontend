import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Added for navigation
import Header from '../components/Header';
import About from './About';
import WashingP from './WashingP';
import WashingPlans from './WashingPlans';
import Contact from './Contact';
import Footer from '../components/Footer';
import { FaCar, FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const heroImages = [
  '/HI.jpg',
  '/ca3.jpg',
  '/c2.jpg',
  '/c3.jpg',
  '/ca1.jpg',
  '/ca2.jpg',
  '/c4.jpg',
  '/c5.jpg',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Auto slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Changed to 4 seconds for better viewing
    
    return () => clearInterval(interval);
  }, []);

  // Manual slide control
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const features = [
    { 
      icon: <FaCar />, 
      title: 'Multi-Vehicle Support', 
      desc: 'Cars, Bikes, SUVs & More',
      points: ['All vehicle types', 'Specialized equipment', 'Size-appropriate cleaning']
    },
    { 
      icon: <FaShieldAlt />, 
      title: 'Eco-Friendly', 
      desc: 'Biodegradable Cleaning Products',
      points: ['Water-saving techniques', 'Chemical-free options', 'Environment safe']
    },
    { 
      icon: <FaClock />, 
      title: 'Quick Service', 
      desc: '30 Min Express Wash Available',
      points: ['Fast turnaround', 'Online booking', 'Time slots available']
    },
  ];

  // Navigation handlers
  const handleBookNow = () => {
    navigate('/Wplans');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
   

      {/* Hero Slider */}
      <section className="relative w-full h-[500px] md:h-[780px] overflow-hidden mt-18">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          </div>
        ))}

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
            Premium Car Wash Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl animate-fadeInUp delay-200">
            Professional cleaning with care. Book online and get 20% off on your first wash!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-400">
            <button
              onClick={handleBookNow}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Now
            </button>
            <button
              onClick={handleContactUs}
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
            Why Choose WashPro
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference with our professional and eco-friendly car wash services
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:border-blue-200 hover:scale-[1.02] group"
            >
              <div className="text-5xl mb-6 text-blue-600 p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 text-lg">{feature.desc}</p>
              
              {feature.points && (
                <ul className="mt-4 space-y-2 text-left w-full">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <FaCheckCircle className="text-green-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Service Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30min</div>
              <div className="text-blue-100">Express Wash</div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <div >
       <WashingPlans></WashingPlans>
      </div>
      <div id="contact">
        <Contact />
      </div>

   
    </div>
  );
}