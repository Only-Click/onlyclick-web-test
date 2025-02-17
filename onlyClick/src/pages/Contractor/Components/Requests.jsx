import React, { useEffect, useState } from 'react';

function Requests({ open, setOpen }) {
  //   const [isOpen, setIsOpen] = useState(open);
  const [data, setData] = useState([
    {
      name: 'Worker A',
      Category: 'Electrician',
      Work: 'Fan Repair',
      Client_Name: 'Client A',
      Price: '₹ 250',
      Date: '9th Jan,2025',
      Client_contact: '+91 1234567890',
      Location:
        'VIT-AP University, Near Vijayawada, G-30, Inavolu, Beside AP Secretariat, Amaravati, Andhra Pradesh 522237, India',
      Status: 'Working',
    },
    {
      name: 'Worker A',
      Category: 'Electrician',
      Work: 'Fan Repair',
      Client_Name: 'Client A',
      Price: '₹ 250',
      Date: '9th Jan,2025',
      Client_contact: '+91 1234567890',
      Location:
        'VIT-AP University, Near Vijayawada, G-30, Inavolu, Beside AP Secretariat, Amaravati, Andhra Pradesh 522237, India',
      Status: 'Completed',
    },
    {
      name: 'Worker A',
      Category: 'Electrician',
      Work: 'Fan Repair',
      Client_Name: 'Client A',
      Price: '₹ 250',
      Date: '9th Jan,2025',
      Client_contact: '+91 1234567890',
      Location:
        'VIT-AP University, Near Vijayawada, G-30, Inavolu, Beside AP Secretariat, Amaravati, Andhra Pradesh 522237, India',
      Status: 'Cancelled',
    },
  ]);
  const [workers, setWorkers] = useState([
    'Ravi',
    'Ramu',
    'Gopal',
    'Ramesh Rajshekar Rmukar',
    'Raghav',
    'Remu',
  ]);
  const [selectedWorker, setSelectedWorker] = useState('');
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [open]);
  useEffect(() => {
    // setIsOpen()
  }, []);
  return (
    <div
      className={`fixed z-10 flex pt-7 flex-col h-[100vh]  inset-0 gap-4 overflow-y-auto transition-all duration-300 ease-in-out bg-white   
      ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
    >
      {/* upper part */}
      <div className="w-full h-[6vh]  flex px-4 items-center ">
        <p className="text-2xl font-bold">
          <span
            className="mr-4 text-slate-400"
            onClick={() => {
              setOpen(false);
            }}
          >
            {'<'}
          </span>
          Requests
        </p>
      </div>

      {/* details box */}
      <div className="w-full h-max px-4 flex flex-col gap-3">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="w-full h-max  flex-shrink-0 gap-3 flex flex-col p-4 border-2 border-[#0097B3] rounded-md shadow-md"
            >
              <div className="flex w-full gap-5 h-max">
                <p className="font-bold">Name:</p>
                <p>{data.name}</p>
              </div>

              <div className="flex w-full gap-5 h-max">
                <p className="font-bold">Category:</p>
                <p>{data.Category}</p>
              </div>
              <div className="flex w-full gap-5 h-max">
                <p className="font-bold">Work:</p>
                <p>{data.Work}</p>
              </div>
              <div className="flex w-full gap-5 h-max">
                <p className="font-bold">Client Name:</p>
                <p>{data.Client_Name}</p>
              </div>
              <div className="flex w-full gap-5 h-max">
                <p className="font-bold">Price:</p>
                <p>{data.Price}</p>
              </div>
              <div className="flex w-full gap-5 h-max">
                <p className="font-bold">Date:</p>
                <p>{data.Date}</p>
              </div>
              <div className="flex w-full gap-5 h-max">
                <p className="font-bold">Client Contact:</p>
                <p>{data.Client_contact}</p>
              </div>
              <div className="flex w-full gap-5 h-max">
                <p className="font-bold">Location:</p>
                <p>{data.Location}</p>
              </div>

              {/* assign workers box */}
              <div className="flex w-full gap-5 h-max">
                <p className="font-bold">Assign Worker:</p>

                <select
                  name="worker"
                  id="worker"
                  className="w-[45vw] py-1 text-center"
                >
                  {workers.map((data, index) => {
                    return <option key={index}>{data}</option>;
                  })}
                </select>
              </div>
              <button className="bg-[#0097B3] px-2 py-1 w-[30vw] text-white rounded-md self-center">
                Submit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Requests;
