import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/contractors/sendOTP", { phoneNumber });
      if (response.status === 200) {
        navigate("/auth/contractor/verifyOtp", { state: { phoneNumber } });
      } else {
        console.error("Failed to send phone number");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-slate-200 flex flex-col gap-8 justify-center items-center">
      <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit}>
        <label className="font-medium" htmlFor="phone">
          Enter Your Phone Number{" "}
        </label>
        <input
          className="w-[85vw] h-12 rounded-lg text-xl tracking-widest font-semibold text-center"
          type="number"
          name="phone"
          id="phone"
          onChange={(e) => {
            console.log(e.target.value);
            setPhoneNumber(e.target.value);
          }}
          value={phoneNumber}
        />
        <button
          className="bg-slate-400 text-white w-[85vw] h-12 rounded-lg flex justify-center items-center font-semibold text-lg"
          type="submit"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
}

export default Login;
