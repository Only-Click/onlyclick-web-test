import React from "react";
import { Link, NavLink } from "react-router";

function CategoryCards({ name, image }) {
return (
    <NavLink to={`/user/category/${name}`} className="w-[28vw] h-[30vw] bg-red-300 flex-shrink-0 relative">
        <img src={image} alt="" className="object-cover w-full h-full"/>
        <p className="text-white absolute bottom-0 left-1/2 -translate-x-1/2">{name}</p>
    </NavLink>
);
}

export default CategoryCards;
