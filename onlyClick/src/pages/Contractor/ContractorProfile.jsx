import React, { useContext, useState } from 'react';
import { AuthContext } from '../../utils/context/Context';
import Header from '../User/Components/Header';
import { FaPlusCircle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router';
import { FaCircleUser } from 'react-icons/fa6';
import Footer from '../User/Components/Footer';
import OTPInput from 'react-otp-input';

function ContractorProfile() {
  const { user, setUser } = useContext(AuthContext);
  const [workers, setWorkers] = useState([
    'Ravi',
    'Ramu',
    'Gopal',
    'Ramesh',
    'Raghav',
    'Remu',
  ]);
  const [isAddWorkerOpen, setIsAddWorkerOpen] = useState(false);
  const [workerName, setWorkerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('1234567890');
  const [username, setUsername] = useState('John Doe');
  const [secondayContractor, setSecondaryContractor] = useState('');
  const [address, setAddress] = useState(
    'Vit Ap, University , Near Vandalur Zoo, Chennai, Tamil Nadu, India, 600127'
  );
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="w-[100vw] h-max bg-[#ffffff] flex flex-col gap-4">
      {/* upper box */}
      <Header username={username} address={address} />

      {/* navbar part */}
      <div className="w-full h-[7vh] px-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p
            className="text-2xl text-slate-500 mr-3"
            onClick={() => {
              navigate(-1);
            }}
          >
            {'<'}
          </p>
          <p className="text-black font-bold text-2xl">Profile</p>
        </div>
      </div>

      {/* profile details */}
      <div className="w-full  px-4 flex flex-col gap-5">
        {/* main name and image */}
        <div className="flex w-full  justify-between">
          <img
            src="/assets/image.jpg"
            className="bg-slate-400 w-[25vw] h-[25vw] rounded-full"
            alt=""
          />
          <div className="w-[70vw] text-4xl font-bold flex justify-center items-center">
            {username}
          </div>
        </div>

        {/* other details */}

        <div className="w-full h-[30vh] bg-slate-100 p-5 rounded-lg">
          <p className="">
            <span className="font-bold mr-4">Phone Number:</span>+91{' '}
            {phoneNumber}
          </p>
          <div className="flex">
            <p className="font-bold mr-4">Address:</p>
            <p className="leading-relaxed tracking-wide">{address}</p>
          </div>
          {/* <p className=''><span className=''>Address:</span>{address}</p> */}
          <p></p>
        </div>
      </div>

      {/* lower part of add worker and all */}
      <div className="w-full bg-slate-200 px-3  flex flex-col gap-4">
        {/* workers and add workers and phone number */}
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-2xl ml-4 mt-5 text-[#0097b3]">
            Workers
          </p>
          <div className="flex flex-col gap-3 ml-4">
            {workers.map((data, index) => {
              return (
                <div
                  className="leading-relaxed tracking-wider bg-slate-100 px-4 p-3"
                  key={index}
                >
                  {data}
                </div>
              );
            })}
          </div>
        </div>
        {!isAddWorkerOpen ? (
          <div className="flex justify-between px-4 bg-white h-12 items-center ml-4">
            <p className="font-semibold">Add Worker</p>
            <FaPlusCircle
              onClick={() => {
                setIsAddWorkerOpen(true);
              }}
            />
          </div>
        ) : (
          <div className="ml-4">
            <label htmlFor="workerName">Enter Worker Name</label>
            <input
              type="text"
              id="workerName"
              value={workerName}
              className="px-4 py-3 w-full"
              onChange={(e) => {
                setWorkerName(e.target.value);
              }}
            />
            <div className="flex justify-between mt-4">
              <button
                className="w-[40vw] py-2 bg-[#0192AD]"
                //   onClick={handleAddWorker}
              >
                Add
              </button>
              <button
                className="w-[40vw] py-2 bg-[#0192AD]"
                onClick={() => {
                  setIsAddWorkerOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* phone number add */}
        <form
          className="flex flex-col justify-center items-center gap-5"
          // onSubmit={handleAddPhoneNumber}
        >
          <label className="font-medium" htmlFor="phone">
            Enter Secondary Phone Number{' '}
          </label>
          <input
            className="w-[85vw] h-12 rounded-lg text-xl tracking-widest font-semibold text-center"
            type="number"
            name="phone"
            id="phone"
            maxLength={10}
            onChange={(e) => {
              setSecondaryContractor(e.target.value);
            }}
            value={secondayContractor}
          />
          <button
            className="bg-slate-400 text-white w-[85vw] h-12 rounded-lg flex justify-center items-center font-semibold text-lg"
            type="submit"
          >
            Send OTP
          </button>
        </form>
        <div className="flex flex-col justify-center items-center gap-5">
          <label className="font-medium" htmlFor="phone">
            Enter Your OTP{' '}
          </label>
          <div className="w-[85vw] h-12">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputType="tel"
              renderSeparator={<span className="w-2"></span>}
              containerStyle={{
                width: '85vw',
                height: '6vh',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              inputStyle={{
                width: '12vw',
                height: '6vh',
                borderColor: 'black',
                border: 2,
              }}
              renderInput={(props) => <input className="h-12" {...props} />}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContractorProfile;
