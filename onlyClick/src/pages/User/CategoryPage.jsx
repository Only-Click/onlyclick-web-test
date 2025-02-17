import React, { useState } from 'react';
import Header from './Components/Header';
import { Link, useNavigate, useParams } from 'react-router';
import { CiShoppingCart } from 'react-icons/ci';
import { FaCircleUser } from 'react-icons/fa6';
import Footer from './Components/Footer';

function CategoryPage() {
  const [username, setUsername] = useState('User');
  const [address, setAddress] = useState(
    'Vit Ap, University , Near Vandalur Zoo, Chennai, Tamil Nadu, India, 600127'
  );
  const params = useParams();
  const { name } = params;
  const navigate = useNavigate();
  const [subCats, setSubCats] = useState([
    { name: 'Sub-Cat1', id: '123456', image: '/assets/image.jpg' },
    { name: 'Sub-Cat1', id: '123456', image: '/assets/image.jpg' },
    { name: 'Sub-Cat1', id: '123456', image: '/assets/image.jpg' },
    { name: 'Sub-Cat1', id: '123456', image: '/assets/image.jpg' },
    { name: 'Sub-Cat1', id: '123456', image: '/assets/image.jpg' },
    { name: 'Sub-Cat1', id: '123456', image: '/assets/image.jpg' },
    { name: 'Sub-Cat1', id: '123456', image: '/assets/image.jpg' },
    { name: 'Sub-Cat1', id: '123456', image: '/assets/image.jpg' },
    { name: 'Sub-Cat1', id: '123456', image: '/assets/image.jpg' },
  ]);
  return (
    <div className="w-full h-max">
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
          <p className="text-black font-bold text-2xl ml-4">{name}</p>
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

      {/* subcategories */}
      <div className="w-full h-max flex gap-4 justify-center items-center flex-wrap mt-3 mb-5">
        {subCats.map((cats, index) => {
          return (
            <Link
              to={`/user/category/${name}/${cats.id}`}
              className="w-[25vw] h-[15vh] flex flex-col gap-2 mt-3"
              key={index}
            >
              <img
                src={cats.image}
                alt=""
                className="w-full h-[80%] object-cover overflow-hidden flex-shrink-0 rounded-lg"
              />
              <p className="text-sm text-center">{cats.name}</p>
            </Link>
          );
        })}
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default CategoryPage;
