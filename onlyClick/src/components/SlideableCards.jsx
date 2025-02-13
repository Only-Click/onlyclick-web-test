import { Link } from "react-router";
function SlideableCards({ name, route, image,text }) {
  //   window.alert(image);
  return (
    <div
      className="w-full h-full flex-shrink-0 bg-cover bg-center flex justify-between items-center px-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Link to={route} className="bg-[#0097B3] px-4 py-1 rounded-xl text-white">{name}</Link>
      <p className="text-white text-2xl font-semibold w-[60%]">{text}</p>
    </div>
  );
}

export default SlideableCards;
