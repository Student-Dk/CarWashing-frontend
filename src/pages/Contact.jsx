import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://carwashing-backend-repo.onrender.com/query", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.status === 201) {
        alert('Ticket Generated');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Process failed");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 md:px-8 mt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-12 text-lg md:text-xl">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

      

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Info Box */}
          <div className="flex-1 space-y-6">
            {/* Address Card */}
            <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg text-2xl">📍</div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Address</h3>
                <p className="text-gray-600 font-medium">New Delhi, India</p>
                <p className="text-gray-400 text-sm">Near Connaught Place</p>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg text-2xl">⏰</div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Opening Hours</h3>
                <p className="text-gray-600 font-medium">Mon–Fri, 8AM–9PM</p>
                <p className="text-gray-400 text-sm">Saturday: 9AM–6PM</p>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg text-2xl">📞</div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Call Us</h3>
                <p className="text-gray-600 font-medium">+91 7857028793</p>
                <p className="text-gray-400 text-sm">+91 9142635439</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg text-2xl">✉️</div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">Email Us</h3>
                <p className="text-gray-600 font-medium">test@gmail.com</p>
                <p className="text-gray-400 text-sm">support@company.com</p>
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="flex-1 " >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center border-b border-gray-100 pb-4">
                Send Us a Message
              </h3>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows="5"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-y"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex justify-center items-center gap-2 transition transform hover:-translate-y-1"
                >
                  Send Message <span className="text-lg">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
