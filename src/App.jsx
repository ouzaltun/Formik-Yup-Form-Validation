import "./App.css";
import { Routes, Route } from "react-router-dom";
import GeneralForm from "./components/GeneralForm";
import PortalForm from "./components/PortalForm";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GeneralForm />}></Route>
        <Route path="/portal" element={<PortalForm />}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </>
  );
}

export default App;
