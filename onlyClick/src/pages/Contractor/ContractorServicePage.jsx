import React, {useState} from 'react';
import Header from '../User/Components/Header';
import { Link } from 'react-router-dom';

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
  const [username,setUsername] = useState('User');
  const [address,setAddress] = useState('Some where in the world');
  return (
      <div className="app-container w-full h-screen relative bg-white border-2 border-sky-600 overflow-hidden shadow-lg">
        <Header username={username} address={address} />
          <h1 className="text-black text-xl font-semibold ml-4 mt-3"><Link to={-1}>{`<  `}</Link>Services</h1>


        {/* Navigation Bar */}
        <div className="nav-header flex justify-between items-center p-4 bg-white shadow-sm">
          <div className="service-type flex items-center gap-2 text-gray-700 font-semibold">
            <i className="fas fa-bolt text-sky-600"></i>
            <span>Electrician</span>
          </div>
        </div>

        {/* Service Cards */}
        <div className="services-container p-5 overflow-y-auto h-[calc(100vh-120px)]" style={styles.servicesContainer}>
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
  );
};

const styles = {
  servicesContainer: {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
};

export default ContractorServicesPage;
