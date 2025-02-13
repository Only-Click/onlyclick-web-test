import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import OtpInput from 'react-otp-input';
import axios from 'axios';

function OtpContractor() {
  const location = useLocation();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [timer, setTimer] = useState(30);
  const [resend, setResend] = useState(false);
  useEffect(() => {
    setPhoneNumber(location.state?.phoneNumber);
    if (!location.state?.phoneNumber) {
      window.alert('Please enter a  phone number');
    //   navigate(-1);
    }
  }, [location.state]);

  useEffect(() => {
    if (timer > 0) {
      const timeout = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(timeout);
      };
    } else {
      setResend(true);
      setEnabled(true);
    }
  }, [timer]);
  const verifyOtp = async () => {
    // according to backend check if the data i got got back was for a user or a contractor and navigate accordingly.if nothing then strctly navigate to signup page for user
  };
  const resendOtp = async () => {}; //resend the otp to the number.

  return (
    <div className="h-[100vh] w-[100vw] bg-slate-200 flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <label className="font-medium" htmlFor="phone">
          Enter Your OTP{' '}
        </label>
        <div className="w-[85vw] h-12">
          <OtpInput
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

      {/* resend otp buttons */}
      <div className="flex flex-col ">
        <p
          className={`px-2 ${!enabled ? 'text-slate-300' : 'text-blue-500 tracking-wide'}`}
        >
          Didn't get OTP?Please wait {timer} seconds before trying again.
        </p>
        <button
          className={` ${!enabled ? 'text-slate-300' : 'text-blue-500'}`}
          disabled={!enabled}
          onClick={() => {
            window.alert('otp has been resent');
          }}
        >
          Resend OTP
        </button>
        <p
          className="self-center mt-4"
          onClick={() => {
            navigate(-1);
          }}
        >
          Change Phone Number
        </p>
      </div>

      {/* send otp button */}
      <button
        className="bg-slate-400 text-white w-[85vw] h-12 rounded-lg flex justify-center items-center font-semibold text-lg"
        onClick={verifyOtp}
      >
        Send OTP
      </button>
    </div>
  );
}

export default OtpContractor;
