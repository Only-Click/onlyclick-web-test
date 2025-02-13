import React from 'react'

function Header({address, username}) {
  return (
    <div className="h-[18vh] w-full bg-[#0097B3] rounded-b-3xl flex flex-col justify-center pl-6 pb-2 gap-3 shadow-lg shadow-gray-400">
    <div className=" flex flex-col justify-center">
      <p className="text-xl text-white font-semibold">Address</p>
      <p className="text-white">{address}</p>
    </div>
    <p className="text-2xl text-white font-semibold">Hello {username}!</p>
  </div>
  )
}

export default Header
