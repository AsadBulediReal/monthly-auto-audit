import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import UploadFile from "./component/Upload";
import ReportGeneration from "./component/ReportGeneration";
import Navbar from "./component/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
        style={{ width: "350px" }}
      />
      <Navbar />
      <Routes>
        <Route path="/report" element={<ReportGeneration />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="*" element={<Navigate to="/report" />} />
      </Routes>
    </>
  );
}

export default App;
