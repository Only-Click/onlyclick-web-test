import { Formik } from "formik";
import { useEffect, useState } from "react";
function SignUpContractor() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [nearbyLandamrk, setNearbyLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const onSubmit = () => {
    console.log("submitted");
  };
  useEffect(() => {
    console.log("changed", firstName);
  }, [firstName]);
  return (
    <div className="h-max w-[100vw]  flex flex-col ">
      <div className="h-[20vh] w-full bg-gradient-to-b from-[#0192AD] to-[#002856] rounded-b-3xl flex flex-col justify-center items-center gap-2">
        <p className="text-4xl text-white font-semibold">CONTRACTOR</p>
        <p className="text-4xl text-white font-semibold">REGISTRATION</p>
      </div>
      <div>
        <Formik
          initialValues={{
            firstName: firstName,
            lastName: lastName,
            email: email,
            category: category,
            buildingName: buildingName,
            streetAddress: streetAddress,
            nearbyLandmark: nearbyLandamrk,
            city: city,
            state: state,
            country: country,
            pincode: pincode,
          }}
          //   validate={}
          onSubmit={onSubmit}
        >
          {({ handleBlur, handleSubmit }) => (
            <form className="flex flex-col justify-center gap-7 items-center p-5">
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg bg-[#E2EFF2] "
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setEmail(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={email}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg bg-[#E2EFF2] "
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setFirstName(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={firstName}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg bg-[#E2EFF2] "
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setLastName(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={lastName}
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="category">
                  Category
                </label>
                <select
                  className="w-full min-w-[85vw]  max-w-[85vw] h-8 rounded-lg bg-[#E2EFF2] "
                  name="category"
                  id="category"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setCategory(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={category}
                >
                  <option className="w-[85vw]" value="carpenter">Carpentery</option>
                  <option className="w-[85vw]" value="electrician">Electricity</option>
                  <option className="w-[85vw]" value="plumber">Plumbering</option>
                  <option className="w-[85vw]" value="cleaner">Cleaning</option>
                  <option className="w-[85vw]" value="painter">Painting</option>
                </select>
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="buildingName">
                  Building Name
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg bg-[#E2EFF2] "
                  type="text"
                  name="buildingName"
                  id="buildingName"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setBuildingName(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={buildingName}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="streetAddress">
                  Street Address
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg bg-[#E2EFF2] "
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setStreetAddress(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={streetAddress}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="nearbyLandmark">
                  Nearby Landmark
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg bg-[#E2EFF2] "
                  type="text"
                  name="nearbyLandmark"
                  id="nearbyLandmark"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setNearbyLandmark(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={nearbyLandamrk}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="city">
                  City
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg bg-[#E2EFF2] "
                  type="text"
                  name="city"
                  id="city"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setCity(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={city}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="state">
                  State
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg bg-[#E2EFF2] "
                  type="text"
                  name="state"
                  id="state"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setState(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={state}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="country">
                  Country
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg bg-[#E2EFF2] "
                  type="text"
                  name="country"
                  id="country"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setCountry(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={country}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium" htmlFor="pincode">
                  Pincode
                </label>
                <input
                  className="w-[85vw] h-8 rounded-lg bg-[#E2EFF2] "
                  type="text"
                  name="pincode"
                  id="pincode"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setPincode(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={pincode}
                />
              </div>
              <button type="submit" onSubmit={handleSubmit}>
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
