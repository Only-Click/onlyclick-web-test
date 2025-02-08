import  { useState } from "react";
import { createContext } from "react";

function Context(props) {
  const ThemeContext = createContext();
  const AuthContext = createContext();
  // const [socket, setSocket] = useState<USESOCKETCONTEXT.IO|null>(null);
  const [type, setType] = useState("user");
  const [theme, setTheme] = useState("dark");
  const [user,setUser]=useState(null);
  const [preference, setPreference] = useState("dark");
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, preference, setPreference }}
    >
      <AuthContext.Provider value={{ user, setUser, type, setType }}>
        {props.children}
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default Context;
