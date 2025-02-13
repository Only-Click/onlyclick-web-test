import React from 'react';

function Footer() {
  return (
    <div className="bg-black h-max w-full flex flex-col pt-3">
      {/* logo */}
      <div className="w-[60vw] flex gap-4 justify-center items-center ">
        <img
          src="/assets/image.png"
          className="h-full w-[10vw]  object-cover"
          alt=""
        />
        <p className="text-[#0099B5] font-extrabold text-2xl">Only Click</p>
      </div>

      {/* actual footer */}
      <div className="flex flex-wrap w-full h-max  p-4 ">
        <div className="flex flex-col gap-4 w-[45vw] h-[25vh]  pl-4 ">
          <p className="text-white text-lg font-bold">Company</p>
          <div className=" w-full flex flex-col gap-1">
            <p className="text-white text-xs">About Us</p>
            <p className="text-white text-xs">Terms & Conditions</p>
            <p className="text-white text-xs">Privacy Policy</p>
            <p className="text-white text-xs">Anti-discrimination Policy</p>
            <p className="text-white text-xs">OC Reviews</p>
            <p className="text-white text-xs">Careers</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[45vw] pl-4 ">
          <p className="text-white text-lg font-bold">For Customers</p>
          <div className=" w-full h- flex flex-col gap-1">
            <p className="text-white text-xs">OC Reviews</p>
            <p className="text-white text-xs">Categories near you</p>
            <p className="text-white text-xs">Blog</p>
            <p className="text-white text-xs">Contact us</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[45vw]  pl-4">
          <p className="text-white text-lg font-bold">Social Links</p>
          <div className=" w-full h-[20vh] flex flex-col gap-1">
            <a href="https://www.facebook.com" className="text-white text-xs">
              Facebook
            </a>
            <a href="https://www.twitter.com" className="text-white text-xs">
              Twitter
            </a>
            <a href="https://www.instagram.com" className="text-white text-xs">
              Instagram
            </a>
            <a href="https://www.linkedin.com" className="text-white text-xs">
              LinkedIn
            </a>
            <a href="https://www.youtube.com" className="text-white text-xs">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
