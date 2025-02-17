import React, { useEffect, useState } from 'react';
import ServicesCard from '../../components/ServicesCard';
import Footer from './Components/Footer';
import { FaCircleUser } from 'react-icons/fa6';
import { CiShoppingCart } from 'react-icons/ci';
import { Link, useLocation, useNavigate } from 'react-router';
import Header from './Components/Header';
import { MdDelete } from 'react-icons/md';
import ServiceConfirmed from './Components/ServiceConfirmed';

function Checkout() {
  const [username, setUsername] = useState('User');
  const [address, setAddress] = useState(
    'Vit Ap, University , Near Vandalur Zoo, Chennai, Tamil Nadu, India, 600127'
  );
  const navigate = useNavigate();
  const location = useLocation();
  const tax = 50;
  const validation = 80;
  const [total, setTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [date, setDate] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  useEffect(() => {
    const state = location.state;
    console.log('state', state);

    if (state && state.total) {
      setTotal(state.total);
    }
  }, [location.state]);

  const [items, setItems] = useState([
    {
      name: 'Item Total',
      price: total,
    },
    {
      name: 'Taxes and Fees',
      price: tax,
    },
    {
      name: 'Validation Fees',
      price: validation,
    },
  ]);

  useEffect(() => {
    setItems([
      {
        name: 'Item Total',
        price: total,
      },
      {
        name: 'Taxes and Fees',
        price: tax,
      },
      {
        name: 'Validation Fees',
        price: validation,
      },
    ]);
  }, [total, tax, validation]);

  useEffect(() => {
    const finalTotal = items.reduce((acc, item) => acc + item.price, 0);
    setFinalTotal(finalTotal);
  }, []);
  useEffect(() => {
    console.log(finalTotal);
  }, [finalTotal]);

  return (
    <div>
      <Header username={username} address={address} />

      {/* navbar part */}
      <div className="w-full h-[7vh]  px-4 flex justify-between items-center mt-4">
        <div className="flex gap-2 items-center">
          <Link
            className="text-2xl text-slate-500"
            onClick={() => {
              navigate(-1);
            }}
          >
            {'<'}
          </Link>
          <p className="text-black font-bold text-2xl ml-4">Your Cart</p>
        </div>
        <div className="flex gap-2">
          <Link to="/user/profile">
            <FaCircleUser className="h-full w-[9.9vw] text-slate-400" />
          </Link>
        </div>
      </div>

      {/* payment summary */}
      <div className="w-full h-max flex flex-col px-5 mt-4 gap-3">
        <p className="text-center font-medium text-xl">Payment Summary</p>
        {items.map((data, index) => {
          return (
            <Link
              key={index}
              to={`/user/service/${data.id}`}
              className="w-full h-[8vh] rounded-md bg-[#E2EFF2] px-4 flex justify-between items-center"
            >
              <p className="font-semibold">{data.name}</p>
              <p className="font-medium">₹{data.price}</p>
            </Link>
          );
        })}
        <div className="w-full h-[7vh] flex justify-between px-4 border-t-2 border-black">
          <p className="font-semibold">Toal Price</p>
          <p>₹{finalTotal}</p>
        </div>
      </div>

      {/* cancellation policy */}
      <div className="w-full px-6 py-3   ">
        <div className="w-full  bg-slate-100 flex flex-col px-3 py-2 rounded-lg gap-3">
          <p className="text-lg font-bold">Cancellation Poilicy</p>
          <p className="text-md font-normal">
            Free cancellation if done more than 12 hrs before the service or if
            a professional isn’t assigned. A fee will be charged otherwise.
          </p>
        </div>
      </div>

      {/* date service */}
      <div className="w-full flex flex-col  px-7 gap-4 mb-5">
        <label htmlFor="date" className="font-bold text-lg ">
          Select Date of Service
        </label>
        <input
          type="date"
          className="w-full h-[5vh] flex justify-center tracking-widest"
          value={date}
          id="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>

      {/* book service button */}
      <div className="w-full flex justify-center items-center mt-4 mb-4">
        <button
          className="px-3 text-lg text-white font-medium py-1 bg-[#0097b3] rounded-md"
          onClick={() => {
            setIsBooked(true);
          }}
        >
          Book Service
        </button>
      </div>
      <Footer />
      <ServiceConfirmed isBooked={isBooked} />
    </div>
  );
}

export default Checkout;
