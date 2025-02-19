import React from 'react';

const services = [
  {
    title: 'Fan Installation & Repair',
    price: '₹299',
  },
  {
    title: 'Switch Board Installation',
    price: '₹399',
  },
  {
    title: 'Wiring & Circuit Repair',
    price: '₹499',
  },
];

const ContractorServicesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-5">
      <div className="app-container w-full max-w-md h-[90vh] relative bg-white border-2 border-sky-600 rounded-2xl overflow-hidden shadow-lg">
        {/* Top Banner */}
        <div className="top-banner bg-sky-600 h-1/10 flex items-center px-5 rounded-t-2xl">
          <h1 className="text-white text-xl font-semibold">Services</h1>
        </div>

        {/* Navigation Bar */}
        <div className="nav-header flex justify-between items-center p-4 bg-white shadow-sm">
          <div className="service-type flex items-center gap-2 text-gray-700 font-semibold">
            <i className="fas fa-bolt text-sky-600"></i>
            <span>Electrician</span>
          </div>
        </div>

        {/* Service Cards */}
        <div className="services-container p-5 overflow-y-auto h-[calc(90vh-120px)]">
          {services.map(({ title, price }, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-lg p-5 mb-5 shadow-sm border border-gray-200"
            >
              <div className="service-info">
                <h3 className="text-gray-700 mb-4 text-lg">{title}</h3>
                <div className="service-details flex justify-between items-center mb-4">
                  <div className="price text-xl font-semibold text-gray-700">
                    {price}
                  </div>
                </div>
                <div className="action-buttons">
                  <button
                    className="view-details bg-transparent text-sky-600 border-none py-2 px-5 font-medium w-full text-center hover:underline"
                    disabled
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractorServicesPage;
