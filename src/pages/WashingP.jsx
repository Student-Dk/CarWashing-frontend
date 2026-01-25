import React, { useEffect, useState } from 'react';

export default function WashingP() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:1200/washingPoint");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 md:px-8 font-sans mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Car Washing Points
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Find the best car washing services in your area
          </p>

          {/* <div className="inline-flex bg-white shadow rounded-xl mt-6 p-4 md:p-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <div className="text-xl font-bold text-gray-800">{data.length}</div>
                <div className="text-gray-500 font-medium text-sm">Locations</div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Empty State */}
        {data.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl shadow text-center">
            <div className="text-6xl mb-5 opacity-60">🚗</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No washing points available</h3>
            <p className="text-gray-400">Check back later for new washing points</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {data.map((item, index) => (
              <div key={item._id} className="bg-white rounded-2xl shadow border border-gray-200 overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl p-6 md:p-7">
                {/* Top Section */}
                <div className="flex justify-between items-center mb-5">
                  <div className="w-9 h-9 bg-blue-100 rounded-lg border-2 border-blue-200 flex items-center justify-center text-blue-600 font-bold">
                    {index + 1}
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block"></span>
                    Available Now
                  </div>
                </div>

                {/* Main Content */}
                <div className="mb-5">
                  <div className="flex justify-between items-start mb-5">
                    <h3 className="text-xl font-bold text-gray-800">{item.Car_Washing_Point_Name}</h3>
                    <div className="flex items-center gap-1 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-md">
                      <span className="text-sm font-bold">✓</span> Verified
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                    <div className="flex gap-4">
                      <div className="text-gray-600 text-xl flex-shrink-0 mt-1">📍</div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Address</div>
                        <div className="text-gray-800 font-medium">{item.Address}</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="text-gray-600 text-xl flex-shrink-0 mt-1">📞</div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Contact Number</div>
                        <div className="text-gray-800 font-medium">{item.Contact_No}</div>
                        <div className="text-gray-400 text-sm italic">Available for calls 8 AM - 8 PM</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 pt-3 text-center flex justify-center gap-2 text-gray-500 text-sm">
                  <span>Car Washing Service</span>
                  <span>•</span>
                  <span>Professional Cleaning</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
