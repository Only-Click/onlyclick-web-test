import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import OtpInput from 'react-otp-input';
import axios from 'axios';

function OtpScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  useEffect(() => {
    setPhoneNumber(location.state?.phoneNumber);
  }, [location.state]);

  const verifyOtp = async () => {

    // try {
    //   const response = await axios.post(
    //     '/api/contractors/validOTP',
    //     {
    //       phoneNumber,
    //       otp,
    //     }
    //   );

    //   if (response.status === 200) {
    //     navigate('/home/contractor');
    //   } else if (response.status === 201) {
    //     navigate('auth/contractor/signup', { state: { phoneNumber } });
    //   }
    // } catch (error) {
    //   console.error('Error verifying OTP:', error);
    // }
  };

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
      <button
        className="bg-slate-400 text-white w-[85vw] h-12 rounded-lg flex justify-center items-center font-semibold text-lg"
        onClick={verifyOtp}
      >
        Send OTP
      </button>
    </div>
  );
}

export default OtpScreen;
