import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import { Link, NavLink, useNavigate, useParams } from 'react-router';
import { CiShoppingCart } from 'react-icons/ci';
import { FaCircleUser } from 'react-icons/fa6';
import { IoFilterSharp } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import RatingCard from '../../components/RatingCard';
import Footer from './Components/Footer';

function ServicesPage() {
  const [address, setAddress] = useState(
    'Vit Ap, University , Near Vandalur Zoo, Chennai, Tamil Nadu, India, 600127'
  );
  const navigate = useNavigate();
  const [user, setUser] = useState('Vivek');
  const params = useParams();
  const [serviceData, setServiceData] = useState(null);
  useEffect(() => {
    const id = params.id;
    setServiceData(data);
  }, []);

  const data = {
    _id: 1,
    name: 'Service 1',
    ratingData: {
      total: 4.5,
      reviews: 99,
      rating: { 1: 10, 2: 20, 3: 30, 4: 20, 5: 20 },
    },
    price: '₹100',
    image: '/assets/image.jpg',
    isAvailable: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa omnis culpa ad! Accusantium perferendis enim obcaecati id, in, at quis, delectus quisquam saepe quod cupiditate. Pariatur perferendis, velit odit quas animi omnis praesentium veritatis officia quos sapiente quis voluptatum eum.',
  };
  return (
    <div className="w-[100vw] h-max bg-slate-100 flex flex-col gap-7 overflow-x-hidden">
      {/* header */}
      <Header address={address} username={'Vivek'} />

      {/* navigation bar */}
      <div className="w-full h-[7vh]  px-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p
            className="text-2xl text-slate-500"
            onClick={() => {
              navigate(-1);
            }}
          >
            {'<'}
          </p>
          <p className="text-black font-bold text-2xl">Service Title</p>
        </div>
        <div className="flex gap-2">
          <Link to="/user/cart">
            <CiShoppingCart className="h-full w-[9.9vw] text-black" />
          </Link>
          <NavLink to="/user/profile">
            <FaCircleUser className="h-full w-[9.9vw] text-slate-400" />
          </NavLink>
        </div>
      </div>

      {/*details*/}
      <div className="w-full pt-2">
        <div className="w-full  flex flex-col justify-center items-center px-4">
          {/* image */}
          <img
            src={data.image}
            alt=""
            className="w-full h-[30vh] object-cover"
          />
          {/* price and reviews */}
          <div className="w-full h-[8vh] flex justify-between items-center gap-2">
            <p className="font-bold text-lg">{data.price}</p>
            <div className="flex gap-1">
              <p className="flex justify-center items-center gap-1">
                <FaStar className="text-yellow-400" />

                {data.ratingData.total}
              </p>
              <p>(99 reviews)</p>
            </div>
          </div>

          {/* description */}
          <div className="flex flex-col p-3 gap-5">
            {/* tab */}
            <div className="flex justify-between items-center w-[100vw] px-4">
              <p className="text-lg font-extrabold ">Description</p>
              {data.isAvailable ? (
                <p className="text-green-500 px-3 py-1 rounded-lg border-green-500 border-2">
                  Available
                </p>
              ) : (
                <p className="text-red-500 px-2 py-1 rounded-lg border-red-500 border-2">
                  Not Available
                </p>
              )}
            </div>
            {/* texts */}
            <div className="w-full px-3">
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum nisi cumque recusandae id eum itaque voluptatum aperiam
                voluptates dolor. Quisquam dolores assumenda eum quaerat commodi
                quas ipsam? Doloremque cumque omnis magnam doloribus quaerat
                consequatur minus iure fuga beatae facere, ducimus veritatis
                suscipit error, placeat autem quia delectus ipsa, natus dolorum.
              </p>
            </div>
          </div>

          {/* reviews */}
          <div className="w-full flex flex-col gap-3">
            <p className='text-xl font-bold'>Reviews</p>
            <RatingCard data={data.ratingData} />
          </div>
          {/* booking div */}
          <div className="h-[8vh] w-full  flex justify-between items-center  mb-5 mt-5">
            <Link to="/user/cart">
              <CiShoppingCart className="h-full w-[9.9vw] text-black" />
            </Link>
            <p className="text-white bg-[#0097B3]  py-2 w-[65vw] text-lg rounded-xl text-center">
              Book Now
            </p>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default ServicesPage;
