import { useContext, useEffect } from 'react';
import Routers from './routers/Routers.jsx';
import { AuthContext } from './utils/context/Context.jsx';

function App() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserDetails = () => {
      const userDetails = localStorage.getItem('userDetails');
      if (userDetails) {
        const user = JSON.parse(userDetails);
        setUser(user);
      }
    };

    fetchUserDetails();
  }, [setUser]);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
