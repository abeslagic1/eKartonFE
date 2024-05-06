import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SideBar from "./components/sideBar";
import TopBar from "./components/TopBar";
import Home from "./pages/home";
import User from "./pages/user";
import NewUser from "./pages/newUser";
import Product from "./pages/product";
import Consultations from "./pages/consultations";
import Patients from "./pages/patients";
import Doctors from "./pages/doctors";
import LoginPage from "./login";

const App = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    // if path == login, render only the login page
    path === "/login" ? (
      <div className="App">
        <LoginPage />
      </div>) : (
      <main className="font-body ">
        <TopBar></TopBar>
        <div className="flex ">
          <div className="flex-1 ">
            <SideBar></SideBar>
          </div>

          <div className="flex-[4_4_0%] ">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/login" element={ <LoginPage /> } />
              <Route path="/patients" element={ <Patients /> } />
              <Route path="/doctors" element={ <Doctors /> } />
              <Route path="/user/:id" element={ <User /> } />
              <Route path="/newUser" element={ <NewUser /> } />
              <Route path="/consultations" element={ <Consultations /> } />
              <Route path="/product/:id" element={ <Product /> } />
            </Routes>
          </div>
        </div>
      </main>
    ));
};

export default App;
