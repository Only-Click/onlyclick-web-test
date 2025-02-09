import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
// export const ThemeContext = createContext();
function Context(props) {
  // const [socket, setSocket] = useState<USESOCKETCONTEXT.IO|null>(null);
  const [type, setType] = useState("contractor");
  const [user, setUser] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <AuthContext.Provider value={{ user, setUser,isLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default Context;
