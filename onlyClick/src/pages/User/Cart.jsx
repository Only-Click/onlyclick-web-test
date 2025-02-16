import React, { useEffect, useState } from 'react';
import ServicesCard from '../../components/ServicesCard';
import Footer from './Components/Footer';
import { FaCircleUser } from 'react-icons/fa6';
import { CiShoppingCart } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router';
import Header from './Components/Header';
import { MdDelete } from 'react-icons/md';

function Cart() {
  const [username, setUsername] = useState('User');
  const [address, setAddress] = useState(
    'Vit Ap, University , Near Vandalur Zoo, Chennai, Tamil Nadu, India, 600127'
  );
  const navigate = useNavigate();
  const [items] = useState([
    {
      id: 1,
      name: 'Item 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Item 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Item 3',
      price: 150,
    },
  ]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = items.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalAmount);
  }, [items]);

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

      {/* item summary */}
      <div className="w-full h-max flex flex-col px-5 mt-4 gap-3">
        <p className="text-center font-medium text-xl">Item Summary</p>
        {items.map((data, index) => {
          return (
            <Link
              key={index}
              to={`/user/service/${data.id}`}
              className="w-full h-[8vh] rounded-md bg-[#E2EFF2] px-4 flex justify-between items-center"
            >
              <p className="font-semibold">{data.name}</p>
              <div className="flex w-[30%] justify-between items-center">
                <p className="font-medium">₹{data.price}</p>
                <MdDelete className="text-lg" />
              </div>
            </Link>
          );
        })}
      </div>

      {/*      Proceed to Payment button
       */}
      <div className="w-full flex justify-center items-center mt-4 mb-4">
        <button
          className="px-3 text-lg text-white font-medium py-1 bg-[#0097b3] rounded-md"
          onClick={() => navigate('/user/cart/checkout', { state: { total } })}
        >
          Proceed to Payment
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
