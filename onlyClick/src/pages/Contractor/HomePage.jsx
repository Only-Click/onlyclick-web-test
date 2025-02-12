import { useState, useEffect, useContext } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import axios from 'axios';
import { AuthContext } from '../../utils/context/Context';

function HomePage() {
  const { user, setUser } = useContext(AuthContext);
  const [workers, setWorkers] = useState([]);
  const [isAddWorkerOpen, setIsAddWorkerOpen] = useState(false);
  const [workerName, setWorkerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const data=["abcd","efgh","ijkl","mnop"]


  useEffect(() => {
    // Fetch workers list from user context and update local state and localStorage
    if (user && user.workers) {
      setWorkers(user.workers);
      localStorage.setItem('workers', JSON.stringify(user.workers));
    }
  }, [user]);

  const handleAddWorker = async () => {
    try {
      const response = await axios.post(
        '/api/contractors/addWorker',
        {
          name: workerName,
        }
      );
      const newWorker = response.data;
      const updatedWorkers = [...workers, newWorker];
      setWorkers(updatedWorkers);
      setUser({ ...user, workers: updatedWorkers });
      localStorage.setItem('user', JSON.stringify(user));
      setWorkerName('');
      setIsAddWorkerOpen(false);
    } catch (error) {
      console.error('Error adding worker:', error);
    }
  };

  const handleAddPhoneNumber = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        '/api/contractors/addSecondaryPhoneNumber',
        {
          phoneNumber,
        }
      );
      setPhoneNumber('');
    } catch (error) {
      console.error('Error adding phone number:', error);
    }
  };

  return (
    <div className="w-[100vw] h-max bg-slate-300 flex flex-col ">
      <div className="w-full h-[10vh] text-2xl text-white flex items-center p-4 leading-relaxed tracking-wide font-semibold bg-[#0192AD]">
        Handyman Home
      </div>

      <div className="w-[100vw] h-max p-4 px-6 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg ">Hello, John Doe</p>
          <p className=""> Welcome back!</p>
        </div>
        <div className="w-full h-[10vh] bg-[#51b1c1] flex justify-center items-center text-lg font-semibold mt-4">
          Total Cash in Hand <span className="ml-20">Rs. 0.0</span>
        </div>
        <div className="flex flex-wrap gap-4 w-full h-max  justify-center items-center">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className=" w-[40vw] h-[20vh] bg-[#51b1c1] rounded-lg flex flex-col justify-center p-4"
              >
                <p className="font-semibold text-lg text-white">0</p>
                <p className="font-semibold text-lg text-white">{data}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg ml-4 mt-5">Workers</p>
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
                onClick={handleAddWorker}
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
        <form
              className="flex flex-col justify-center items-center gap-5"
              onSubmit={handleAddPhoneNumber}
            >
              <label className="font-medium" htmlFor="phone">
                Enter Your Phone Number{' '}
              </label>
              <input
                className="w-[85vw] h-12 rounded-lg text-xl tracking-widest font-semibold text-center"
                type="number"
                name="phone"
                id="phone"
                maxLength={10}
                onChange={(e) => {
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
    </div>
  );
}

export default HomePage;
