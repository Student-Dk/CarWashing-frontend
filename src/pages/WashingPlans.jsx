import React, { useEffect, useState } from 'react'

import axios from 'axios';


export default function WashingPlans() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        mobileNo: "",
        washDate: "",
        washTime: "",
        washingPoint: "",
        message: "",
        packageType: ""
    });
    const [washingPoints, setWashingPoints] = useState([]);
   

    useEffect(() => {
        const fetchWashingPoints = async () => {
            try {
                const res = await axios.get("https://carwashing-backend-repo.onrender.com/washingPoint");
                setWashingPoints(res.data);
            } catch (error) {
                console.log("Error during fetching washing points data: ", error)
            }
        }
        fetchWashingPoints();
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://carwashing-backend-repo.onrender.com/booking", formData);
            const msg = `Booking Successful! Your Booking ID: ${res.data.bookingId}`;
         
            alert(msg);
            setFormData({
                name: "",
                mobileNo: "",
                washDate: "",
                washTime: "",
                washingPoint: "",
                message: "",
                packageType: ""
            });
            setShowForm(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
                {/* Header Section */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="max-w-2xl mx-auto">
                        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
                            OUR SERVICES
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Washing Plans
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            Choose the perfect cleaning package for your vehicle.
                            Professional service with guaranteed quality.
                        </p>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {/* Basic Plan */}
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
                        <div className="p-6 lg:p-8 text-center border-b border-gray-100">
                            <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                                Standard
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">BASIC CLEANING</h3>
                            <div className="mb-2">
                                <span className="text-4xl font-bold text-gray-900">₹500</span>
                                <span className="text-gray-500 font-medium ml-1">/one time</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2">
                                Essential cleaning for regular maintenance
                            </p>
                        </div>

                        <div className="p-6 lg:p-8 flex-grow">
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Seats Washing</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Vacuum Cleaning</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Exterior Cleaning</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-3 flex-shrink-0">✗</div>
                                    <span className="text-gray-400 font-medium">Interior Wet Cleaning</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-3 flex-shrink-0">✗</div>
                                    <span className="text-gray-400 font-medium">Window Wiping</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 lg:p-8 pt-0">
                            <button
                                onClick={() => setShowForm(!showForm)}
                                className="w-full py-4 px-6 bg-gradient-to-r from-blue-50 to-blue-50 text-blue-600 border-2 border-blue-500 rounded-xl font-semibold text-lg hover:from-blue-100 hover:to-blue-100 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-500 flex flex-col h-full relative">
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Most Popular
                        </div>
                        <div className="p-6 lg:p-8 text-center border-b border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">PREMIUM CLEANING</h3>
                            <div className="mb-2">
                                <span className="text-4xl font-bold text-gray-900">₹1000</span>
                                <span className="text-gray-500 font-medium ml-1">/one time</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2">
                                Complete cleaning for thorough maintenance
                            </p>
                        </div>

                        <div className="p-6 lg:p-8 flex-grow">
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Seats Washing</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Vacuum Cleaning</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Exterior Cleaning</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Interior Wet Cleaning</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-3 flex-shrink-0">✗</div>
                                    <span className="text-gray-400 font-medium">Window Wiping</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 lg:p-8 pt-0">
                            <button
                                onClick={() => setShowForm(!showForm)}
                                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* Complex Plan */}
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
                        <div className="p-6 lg:p-8 text-center border-b border-gray-100">
                            <div className="absolute top-4 right-4 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                                Ultimate
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">COMPLEX CLEANING</h3>
                            <div className="mb-2">
                                <span className="text-4xl font-bold text-gray-900">₹2000</span>
                                <span className="text-gray-500 font-medium ml-1">/one time</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2">
                                Ultimate cleaning with full detailing
                            </p>
                        </div>

                        <div className="p-6 lg:p-8 flex-grow">
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Seats Washing</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Vacuum Cleaning</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Exterior Cleaning</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Interior Wet Cleaning</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span className="text-gray-700 font-medium">Window Wiping</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 lg:p-8 pt-0">
                            <button
                                onClick={() => setShowForm(!showForm)}
                                className="w-full py-4 px-6 bg-gradient-to-r from-blue-50 to-blue-50 text-blue-600 border-2 border-blue-500 rounded-xl font-semibold text-lg hover:from-blue-100 hover:to-blue-100 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Form */}
            {showForm && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-slideUp max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Book Car Wash</h2>
                                    <p className="text-gray-600 text-sm mt-1">Fill your details to schedule</p>
                                </div>
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <span className="text-2xl">×</span>
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="space-y-5">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                {/* Mobile Number */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Mobile Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobileNo"
                                        value={formData.mobileNo}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="10-digit mobile number"
                                        pattern="[0-9]{10}"
                                        required
                                    />
                                </div>

                                {/* Date and Time in Grid for larger screens */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Wash Date */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                                            Wash Date <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="washDate"
                                            value={formData.washDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                                            min={new Date().toISOString().split('T')[0]}
                                            required
                                        />
                                    </div>

                                    {/* Wash Time */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                                            Wash Time <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="time"
                                            name="washTime"
                                            value={formData.washTime}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Washing Point */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Washing Point <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="washingPoint"
                                        value={formData.washingPoint}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="">Select washing point</option>
                                        {washingPoints.map((point) => (
                                            <option key={point._id} value={point.Car_Washing_Point_Name}>
                                                {point.Car_Washing_Point_Name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Package Type */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Package Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="packageType"
                                        value={formData.packageType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="">Select package</option>
                                        <option value="Basic - ₹500">Basic - ₹500</option>
                                        <option value="Premium - ₹1000">Premium - ₹1000</option>
                                        <option value="Complex - ₹2000">Complex - ₹2000</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Additional Notes (Optional)
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white resize-none h-32"
                                        placeholder="Enter message..."
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-8">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors border border-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
                                >
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Tailwind CSS Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </div>
    )
}