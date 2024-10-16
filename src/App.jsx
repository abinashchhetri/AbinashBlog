import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // assignment to imporve what to do when not login

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  ) : (
    <div>Yse Jasuda </div>
  );
}

export default App;
