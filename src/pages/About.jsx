import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const sections = [
  { img: "/ca1.jpg", title: "Eco-Friendly Products" },
  { img: "/ca2.jpg", title: "Advanced Equipment" },
  { img: "/ca3.jpg", title: "Expert Team" },
  { img: "/HomeIm.jpg", title: "Premium Treatment" },
  { img: "/c2.jpg", title: "10+ Years Experience" },
  { img: "/c3.jpg", title: "Customer Satisfaction" },
];

export default function About() {
  return (
    <>
    

      <div className="pt-20 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen">

        {/* Page Title */}
        <div className="text-center mb-12 px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">WashPro</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Premium car washing services using eco-friendly products and modern
            equipment to keep your vehicle looking brand new.
          </p>
        </div>

        {/* Grid Section */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={section.img}
                  alt={section.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team ensures premium car care using state-of-the-art
                    techniques and eco-friendly products. Your vehicle is in
                    expert hands.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 mb-0 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Car Deserves the Best
          </h2>
          <p className="text-gray-600 mb-0">
           .
          </p>
         
        </div>
      </div>

  
    </>
  );
}
