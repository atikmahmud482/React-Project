import { createContext, useState } from "react";
export const dataContext = createContext();

function UserContext({ children }) {
  let [input, setInput] = useState("");
  let [cate, setCate] = useState([]); // Add this state for cate

  let data = {
    input,
    setInput,
    cate,
    setCate, // Add setCate here
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export default UserContext;
