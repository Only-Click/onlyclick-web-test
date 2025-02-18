import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';

function SignUpContractor() {
  const location = useLocation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [category, setCategory] = useState('');
  const [buildingName, setBuildingName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [nearbyLandmark, setNearbyLandmark] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');

  useEffect(() => {
    if (location.state && location.state.phoneNumber) {
      setPhoneNumber(location.state.phoneNumber);
    }
  }, [location.state]);

  const onSubmit = async () => {
    const name = `${firstName} ${lastName}`;
    const address = `${buildingName}, ${streetAddress}, ${nearbyLandmark}, ${city}, ${state}, ${country}, ${pincode}`;
    const data = {
      name,
      phoneNumber,
      address,
      category,
    };
    const [lastName, setLastName] = useState('');
    // signup the contracotr here and store the data of his here on the localstorage and navigate to the home page of the contractor

    // try {
    //   const response = await axios.post(
    //     '/api/contractors/signup',
    //     data
    //   );
    //   localStorage.setItem('contractorData', JSON.stringify(response.data));
    //   console.log('Contractor data saved to local storage');
    //   navigate('/home/contractor');
    // } catch (error) {
    //   console.error('Error submitting form', error);
    // }
  };

  return (
    <div className="h-max w-[100vw] flex flex-col">
      <div className="h-[20vh] w-full bg-gradient-to-b from-[#0192AD] to-[#002856] rounded-b-3xl flex flex-col justify-center items-center gap-2">
        <p className="text-4xl text-white font-semibold">CONTRACTOR</p>
        <p className="text-4xl text-white font-semibold">REGISTRATION</p>
      </div>
      <div>
        <Formik
          initialValues={{
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            category: category,
            buildingName: buildingName,
            streetAddress: streetAddress,
            nearbyLandmark: nearbyLandmark,
            city: city,
            state: state,
            country: country,
            pincode: pincode,
          }}
          onSubmit={onSubmit}
        >
          {({ handleBlur, handleSubmit }) => (
            <form
              className="flex flex-col justify-center gap-7 items-center p-5"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg pl-3 py-1 bg-[#E2EFF2] focus:border-2 focus:border-[#0097b3] focus:outline-none"
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={handleBlur}
                  value={firstName}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg pl-3 py-1 bg-[#E2EFF2] focus:border-2 focus:border-[#0097b3] focus:outline-none"
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  onBlur={handleBlur}
                  value={lastName}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="category">
                  Category
                </label>
                <select
                  className="w-full min-w-[85vw] max-w-[85vw] h-8 rounded-lg pl-3 py-1 bg-[#E2EFF2] focus:border-2 focus:border-[#0097b3] focus:outline-none"
                  name="category"
                  id="category"
                  onChange={(e) => {
                    setCategory(e.target.value);
                    console.log('this is category:', category);
                  }}
                  onBlur={handleBlur}
                  value={category}
                >
                  <option className="w-[85vw]" value="Carpenter">
                    Carpentery
                  </option>
                  <option className="w-[85vw]" value="Electrician">
                    Electricity
                  </option>
                  <option className="w-[85vw]" value="Plumber">
                    Plumbering
                  </option>
                  <option className="w-[85vw]" value="Cleaner">
                    Cleaning
                  </option>
                  <option className="w-[85vw]" value="Painter">
                    Painting
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="buildingName">
                  Building Name
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg pl-3 py-1 bg-[#E2EFF2] focus:border-2 focus:border-[#0097b3] focus:outline-none"
                  type="text"
                  name="buildingName"
                  id="buildingName"
                  onChange={(e) => setBuildingName(e.target.value)}
                  onBlur={handleBlur}
                  value={buildingName}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="streetAddress">
                  Street Address
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg pl-3 py-1 bg-[#E2EFF2] focus:border-2 focus:border-[#0097b3] focus:outline-none"
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  onChange={(e) => setStreetAddress(e.target.value)}
                  onBlur={handleBlur}
                  value={streetAddress}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="nearbyLandmark">
                  Nearby Landmark
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg pl-3 py-1 bg-[#E2EFF2] focus:border-2 focus:border-[#0097b3] focus:outline-none"
                  type="text"
                  name="nearbyLandmark"
                  id="nearbyLandmark"
                  onChange={(e) => setNearbyLandmark(e.target.value)}
                  onBlur={handleBlur}
                  value={nearbyLandmark}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="city">
                  City
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg pl-3 py-1 bg-[#E2EFF2] focus:border-2 focus:border-[#0097b3] focus:outline-none"
                  type="text"
                  name="city"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  onBlur={handleBlur}
                  value={city}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="state">
                  State
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg pl-3 py-1 bg-[#E2EFF2] focus:border-2 focus:border-[#0097b3] focus:outline-none"
                  type="text"
                  name="state"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                  onBlur={handleBlur}
                  value={state}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="country">
                  Country
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg pl-3 py-1 bg-[#E2EFF2] focus:border-2 focus:border-[#0097b3] focus:outline-none"
                  type="text"
                  name="country"
                  id="country"
                  onChange={(e) => setCountry(e.target.value)}
                  onBlur={handleBlur}
                  value={country}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="pincode">
                  Pincode
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg pl-3 py-1 bg-[#E2EFF2] focus:border-2 focus:border-[#0097b3] focus:outline-none"
                  type="number"
                  name="pincode"
                  id="pincode"
                  onChange={(e) => setPincode(e.target.value)}
                  onBlur={handleBlur}
                  value={pincode}
                />
              </div>
              <button
                type="submit"
                className="bg-[#0097B3] w-[40vw] py-2 rounded-xl text-white font-lg"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SignUpContractor;
