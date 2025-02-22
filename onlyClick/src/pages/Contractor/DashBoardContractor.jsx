import { useState, useEffect, useContext } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import axios from 'axios';
import { AuthContext } from '../../utils/context/Context';
import Header from '../User/Components/Header';
import { Link, NavLink, useNavigate } from 'react-router';
import { FaCircleUser } from 'react-icons/fa6';
import { CiShoppingCart } from 'react-icons/ci';
import Footer from '../User/Components/Footer';
import Assigned from './Components/Assigned';
import Requests from './Components/Requests';

function DashBoardContractor() {
  const { user, setUser } = useContext(AuthContext);
  const [workers, setWorkers] = useState([]);
  const [isAddWorkerOpen, setIsAddWorkerOpen] = useState(false);
  const [workerName, setWorkerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('John Doe');
  const [address, setAddress] = useState(
    'Vit Ap, University , Near Vandalur Zoo, Chennai, Tamil Nadu, India, 600127'
  );
  const navigate = useNavigate();
  const data = [
    { name: 'Total Earning', number: 0 },
    { name: 'Jobs Finished', number: 0 },
  ];
  const [assignedOpen, setAssignedOpen] = useState(false);
  const [requestsOpen, setRequestsOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      name: 'John Doe',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptate est libero.',
      time: '3',
    },
    {
      name: 'John Doe',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptate est libero.',
      time: '3',
    },
    {
      name: 'John Doe',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptate est libero.',
      time: '3',
    },
  ]);

  useEffect(() => {
    // Fetch workers list from user context and update local state and localStorage
    if (user && user.workers) {
      setWorkers(user.workers);
      localStorage.setItem('workers', JSON.stringify(user.workers));
    }
  }, [user]);

  const handleAddWorker = async () => {
    try {
      const response = await axios.post('/api/contractors/addWorker', {
        name: workerName,
      });
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
      setPhoneNumber('');
    } catch (error) {
      console.error('Error adding phone number:', error);
    }
  };

  return (
    <div className="w-[100vw] h-max bg-[#ffffff] flex flex-col ">
      {/* upper box */}
      <Header username={username} address={address} />

      {/* Below Part */}
      <div className="w-[100vw] h-max p-4 flex flex-col gap-4">
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
            <p className="text-black font-bold text-2xl">Dashboard</p>
          </div>
          <div className="flex gap-2">
            <NavLink to="/contractor/profile">
              <FaCircleUser className="h-full w-[9.9vw] text-slate-400" />
            </NavLink>
          </div>
        </div>
        {/* total workers tab */}
        <div className="w-full h-[10vh] bg-[#e2eff2] flex justify-center items-center text-lg font-semibold mt-4">
          <p>Total Workers</p>
          <p className="ml-20">{workers.length}</p>
        </div>

        <div className="flex flex-wrap gap-4 w-full h-max  justify-between items-center">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className=" w-[43vw] h-[15vh] bg-[#0097b3] rounded-lg flex flex-col justify-center p-4"
              >
                <p className="font-semibold text-lg text-white">{data.name}</p>
                <p className="font-semibold text-lg text-white">
                  {data.number}
                </p>
              </div>
            );
          })}
          <div
            className=" w-[43vw] h-[15vh] bg-[#0097b3] rounded-lg flex flex-col justify-center p-4"
            onClick={() => {
              setRequestsOpen(true);
            }}
          >
            <p className="font-semibold text-lg text-white">Total Requests</p>
            <p className="font-semibold text-lg text-white">0</p>
          </div>
          <div
            className=" w-[43vw] h-[15vh] bg-[#0097b3] rounded-lg flex flex-col justify-center p-4"
            onClick={() => {
              setAssignedOpen(true);
            }}
          >
            <p className="font-semibold text-lg text-white">Total Assigned</p>
            <p className="font-semibold text-lg text-white">0</p>
          </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px'}}>
          <span>Services</span>
          <span>See all<Link to='/contractor/services'>{`  >`}</Link></span>
        </div>

        {/* Reviews */}
        <div className="w-full h-max ">
          {/* upper part */}
          <div className="flex w-full justify-between items-center px-2">
            <p className="font-bold text-lg">Reviews</p>
            <Link className="text-slate-500" to="/hihaia">
              {' '}
              See all {'>'}
            </Link>
          </div>
          {/* lower part */}
          <div className="flex h-[24vh] mt-4 bg-slate-100">
            <div className="w-[45vw] h-[full] flex flex-col items-center justify-center gap-2 ">
              <p className="text-3xl">4.5/5</p>
              <p>(99 reviews)</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className="w-[50vw] h-[full]  flex flex-col"></div>
          </div>

          {/* review comments part */}
          <div className="flex flex-col w-full h-max gap-5 mt-8 mb-8 ">
            {reviews.map((data, index) => (
              <div
                className="flex flex-col w-full h-max gap-3 flex-shrink-0 bg-slate-50 px-3 py-1 rounded-md"
                key={index}
              >
                <div className="flex justify-between w-full">
                  <p className="text-md">{data.name}</p>
                  <p className="text-xs">{data.time} days ago</p>
                </div>
                <div className="text-sm">{data.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <Assigned open={assignedOpen} setOpen={setAssignedOpen} />
      <Requests open={requestsOpen} setOpen={setRequestsOpen} />
    </div>
  );
}

export default DashBoardContractor;
