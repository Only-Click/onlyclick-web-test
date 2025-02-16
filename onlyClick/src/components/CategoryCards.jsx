import React from 'react';
import { Link, NavLink } from 'react-router';

function CategoryCards({ name, image }) {
  return (
    <NavLink
      to={`/user/category/${name}`}
      className="w-[28vw] h-[35vw]  flex flex-col gap-3 flex-shrink-0 justify-center items-center relative"
    >
      <img
        src={image}
        alt=""
        className="object-contain w-[23vw] h-[23vw] rounded-full bg-slate-300 mb-4"
      />
      <p className="text-black absolute bottom-0 left-1/2 -translate-x-1/2 mt-3">
        {name}
      </p>
    </NavLink>
  );
}

export default CategoryCards;
