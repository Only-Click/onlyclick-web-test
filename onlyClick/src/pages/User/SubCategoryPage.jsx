import React, { useEffect, useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { FaCircleUser } from 'react-icons/fa6';
import { Link, useNavigate, useParams } from 'react-router';
import Header from './Components/Header';
import ServicesCard from '../../components/ServicesCard';
import Footer from './Components/Footer';

function SubCategoryPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState('User');
  const [address, setAddress] = useState(
    'Vit Ap, University , Near Vandalur Zoo, Chennai, Tamil Nadu, India, 600127'
  );
  const [subCatName, setSubCatName] = useState('Sub-Cat1');
  const [servicesData, setServicesData] = useState([
    {
      name: 'Service 1',
      id: 1,
      image: '/assets/image.jpg',
      rating: 4.5,
      price: '₹100',
    },
    {
      name: 'Service 2',
      id: 2,
      image: '/assets/image.jpg',
      rating: 4.0,
      price: '₹150',
    },
    {
      name: 'Service 3',
      id: 3,
      image: '/assets/image.jpg',
      rating: 3.5,
      price: '₹200',
    },
    {
      name: 'Service 4',
      id: 4,
      image: '/assets/image.jpg',
      rating: 5.0,
      price: '₹250',
    },
    {
      name: 'Service 5',
      id: 5,
      image: '/assets/image.jpg',
      rating: 4.8,
      price: '₹300',
    },
  ]);
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
          <p className="text-black font-bold text-2xl ml-4">{subCatName}</p>
        </div>
        <div className="flex gap-2">
          <Link to="/user/cart">
            <CiShoppingCart className="h-full w-[9.9vw] text-black" />
          </Link>
          <Link to="/user/profile">
            <FaCircleUser className="h-full w-[9.9vw] text-slate-400" />
          </Link>
        </div>
      </div>

      {/* services page */}
      <div className="w-full h-max flex gap-4 justify-around items-center flex-wrap mt-3">
        {servicesData.map((data, index) => {
          return <ServicesCard data={data} key={index} />;
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default SubCategoryPage;
