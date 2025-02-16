import React, { useEffect } from 'react';
import { Link } from 'react-router';

function ServiceConfirmed({ isBooked }) {
  useEffect(() => {
    if (isBooked) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isBooked]);
  return (
    <div
      className={`fixed z-10 flex flex-col h-[100vh] inset-0 gap-4 overflow-y-auto transition-all duration-300 ease-in-out bg-slate-300    p-2
    ${isBooked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
    >
      <div className="w-full h-[30vh] bg-[#ffffff] flex flex-col justify-center items-center gap-3 border-2 border-[#0097b3] rounded-xl">
        <p className="text-2xl font-bold text-[#0097b3] ">
          Your service is Confirmed
        </p>
        <p className="text-lg font-medium">Thank You!</p>
        <Link className="bg-[#0097b3] px-8 text-lg text-white py-1" to="/user/home">
          Done
        </Link>
      </div>
    </div>
  );
}

export default ServiceConfirmed;
