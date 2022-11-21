import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MyRecords from "./components/MyRecords";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";
function App() {
  const [token, setToken] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn setToken={setToken}/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/my-records" element={<MyRecords token={token}/>}/>
        <Route path="/input" element={<Input token={token}/>}/>
        <Route path="/output" element={<Output token={token}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
