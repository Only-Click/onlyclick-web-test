import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SlideableCards from "../../components/SlideableCards";
import CategoryCards from "../../components/CategoryCards";
import ServicesCard from "../../components/ServicesCard";
import { Link } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { FaCircleUser } from "react-icons/fa6";

function HomePageUser() {
  const [username, setUsername] = useState("User");
  const [address, setAddress] = useState(
    "Vit Ap, University , Near Vandalur Zoo, Chennai, Tamil Nadu, India, 600127"
  );
  const popularServices = [
    {
      _id: "1",
      name: "Service 1",
      rating: 4.5,
      price: "₹100",
      image: "/assets/image.jpg",
    },
    {
      _id: "2",
      name: "Service 2",
      rating: 4.0,
      price: "₹150",
      image: "/assets/image.jpg",
    },
    {
      _id: "3",
      name: "Service 3",
      rating: 4.8,
      price: "₹200",
      image: "/assets/image.jpg",
    },
    {
      _id: "4",
      name: "Service 4",
      rating: 4.2,
      price: "₹120",
      image: "/assets/image.jpg",
    },
  ];
  const category = [
    {
      name: "Electrician",
      image: "/assets/image.jpg",
    },
    {
      name: "Plumber",
      image: "/assets/image.jpg",
    },
    {
      name: "Carpenter",
      image: "/assets/image.jpg",
    },
    {
      name: "Painter",
      image: "/assets/image.jpg",
    },
    {
      name: "Cleaner",
      image: "/assets/image.jpg",
    },
  ];
  const data = [
    {
      name: "lorem12",
      route: "1234",
      image: "/assets/image.jpg",
      text: "Connect Effortlessly with Only Click",
    },
    {
      name: "lorem12",
      route: "1234",
      image: "/assets/image.jpg",
      text: "Connect Effortlessly with Only Click",
    },
    {
      name: "lorem12",
      route: "1234",
      image: "/assets/image.jpg",
      text: "Connect Effortlessly with Only Click",
    },
    {
      name: "lorem12",
      route: "1234",
      image: "/assets/image.jpg",
      text: "Connect Effortlessly with Only Click",
    },
  ];
  const [search, setSearch] = useState("");
  return (
    <div className="h-max w-[100vw] flex flex-col gap-5">
      {/* upper box/header */}
    <Header username={username} address={address}/>

      {/* logo */}
      <div className=" w-full h-[7vh] flex justify-between items-center px-4">
      <div className='w-[60vw] flex gap-4 justify-center items-center '>
        <img src="/assets/image.png" className='h-full w-[10vw]  object-cover' alt="" />
        <p className='text-[#0099B5] font-extrabold text-3xl'>Only Click</p>
      </div>
      <Link to="/user/profile">
      <FaCircleUser className="h-full w-[9.9vw] text-slate-400"/>
      </Link>

      </div>

      {/* search bar */}
      <div className="flex  w-full h-[5vh] px-4 ">
        <div className="relative flex items-center ">
          <CiSearch className="absolute left-3 w-[6vw] h-[5vh] " />
          <input
            type="text"
            placeholder="Search"
            value={search}
            className="h-full w-[80vw] flex justify-center items-center placeholder:text-slate-400 px-14 bg-gray-200 "
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                window.alert("Submitted");
              }
            }}
          />
        </div>
        <div className="h-full w-[20vw] relative ">
          <IoFilterSharp className="h-full w-[9vw] bg-gray-200 absolute right-0  px-2" />
        </div>
      </div>

      {/* slidable box */}
      <div className="h-[18vh] w-full bg-red-200 flex flex-nowrap overflow-x-scroll overflow-y-hidden">
        {data.map((data, index) => (
          <SlideableCards
            key={index}
            name={data.name}
            image={data.image}
            route={data.route}
            text={data.text}
          />
        ))}
      </div>

      {/* /* category cards */}
      <div className="w-full h-max flex gap-5 flex-wrap justify-center p-2 mt-5">
        {category.map((category, index) => (
          <CategoryCards
            key={index}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>


      {/* popular services  */}

      <div className="h-[30vh] w-full px-4  flex flex-col gap-4">
        <div className="flex w-full h-max justify-between items-center">
        <p>Popular Services</p>
        <Link to="/services">See all {">"}</Link>
        </div>
        <div className="flex flex-nowrap overflow-x-scroll overflow-y-hidden gap-4">
        {popularServices.map((data,index)=>(<ServicesCard key={index} data={data}/> ))}
        </div>
      </div>

      {/* footer */}
      <Footer/>
    </div>
  );
}

export default HomePageUser;
