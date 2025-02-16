import React, { useContext, useState } from 'react';
import { AuthContext } from '../../utils/context/Context';
import Header from '../User/Components/Header';
import { Link, useNavigate } from 'react-router';
import Footer from '../User/Components/Footer';

function UserProfile() {
  const { user, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState('John Doe');
  const [address, setAddress] = useState(
    'Vit Ap, University , Near Vandalur Zoo, Chennai, Tamil Nadu, India, 600127'
  );
  const [phoneNumber, setPhoneNumber] = useState('123456789');
  const [services, setServices] = useState([
    {
      date: '2023-10-01',
      name: 'Service 1',
      category: 'Category 1',
      contractor: 'Contractor 1',
      price: 100,
      status: 'Pending',
    },
    {
      date: '2023-10-02',
      name: 'Service 2',
      category: 'Category 2',
      contractor: 'Contractor 2',
      price: 200,
      status: 'Completed',
    },
    {
      date: '2023-10-02',
      name: 'Service 3',
      category: 'Category 3',
      contractor: 'Contractor 3',
      price: 200,
      status: 'Cancelled',
    },
  ]);
  const navigate = useNavigate();
  return (
    <div className="w-[100vw] h-max bg-[#ffffff] flex flex-col gap-4">
      {/* upper box */}
      <Header username={username} address={address} />

      {/* navbar part */}
      <div className="w-full h-[7vh] px-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Link
            className="text-2xl text-slate-500 mr-3"
            onClick={() => {
              navigate(-1);
            }}
          >
            {'<'}
          </Link>
          <p className="text-black font-bold text-2xl">Profile</p>
        </div>
      </div>

      {/* profile details */}
      <div className="w-full  px-4 flex flex-col gap-5">
        {/* main name and image */}
        <div className="flex w-full  justify-between">
          <div className="w-[70vw] text-4xl font-bold flex justify-center items-center">
            {username}
          </div>
        </div>

        {/* other details */}
        <div className="w-full h-[30vh] bg-slate-100 p-5 rounded-lg">
          <p className="">
            <span className="font-bold mr-4">Phone Number:</span>+91{' '}
            {phoneNumber}
          </p>
          <div className="flex">
            <p className="font-bold mr-4">Address:</p>
            <p className="leading-relaxed tracking-wide">{address}</p>
          </div>
        </div>
      </div>

      {/* my services */}
      <div className="w-full h-max px-4 py-4 flex flex-col gap-4">
        {services.map((data, index) => {
          return (
            // card
            <div
              key={index}
              className="w-full flex flex-col gap-3 px-4 py-3 bg-slate-200"
            >
              {/* service name and date */}
              <div className="flex w-full items-center justify-between">
                <p className="text-3xl font-bold">{data.name}</p>
                <div className="flex flex-col">
                  <p className="font-semibold">Date:</p>
                  <p>{data.date}</p>
                </div>
              </div>
              {/* mid details */}
              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <p className="font-semibold">Category:</p>
                  <p>{data.category}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Contractor:</p>
                  <p>{data.contractor}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Price:</p>
                  <p>₹{data.price}</p>
                </div>
              </div>

              {/* button */}
              <div className="flex justify-between items-center"></div>
              <button
                className={`px-4 py-2 rounded ${
                  data.status === 'Pending'
                    ? 'bg-yellow-500'
                    : data.status === 'Cancelled'
                      ? 'bg-red-500'
                      : 'bg-green-500'
                } text-white`}
              >
                {data.status}
              </button>
              {data.status === 'Pending' && (
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => {
                    // Handle cancel action here
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
