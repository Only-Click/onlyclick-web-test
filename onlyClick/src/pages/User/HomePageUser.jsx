import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SlideableCards from "../../components/SlideableCards";
import CategoryCards from "../../components/CategoryCards";

function HomePageUser() {
  const [username, setUsername] = useState("User");
  const [address, setAddress] = useState(
    "Vit Ap, University , Near Vandalur Zoo, Chennai, Tamil Nadu, India, 600127"
  );
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
      {/* upper box */}
      <div className="h-[18vh] w-full bg-[#0097B3] rounded-b-3xl flex flex-col justify-center pl-6 pb-2 gap-3 shadow-lg shadow-gray-400">
        <div className=" flex flex-col justify-center">
          <p className="text-xl text-white font-semibold">Address</p>
          <p className="text-white">{address}</p>
        </div>
        <p className="text-2xl text-white font-semibold">Hello {username}!</p>
      </div>

      {/* logo */}
      <div className="bg-red-300 w-full h-[7vh]"></div>

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


    </div>
  );
}

export default HomePageUser;
