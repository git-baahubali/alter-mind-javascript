import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Home';
import { Navigate } from 'react-router-dom';
import EmailPage from "./Email";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/email" element={<EmailPage />} />
        {/* <Route path="/Routine/:routineId" element={<Routine />} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App


