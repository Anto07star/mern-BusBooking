import "antd/dist/antd.min.css";
import "./resourses/globel.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicRoute from "./components/PublicRoute";
import ProctectedRoute from "./components/ProctectedRoute"
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import AdminBuses from "./pages/Admin/AdminBuses";
import AdminUsers from "./pages/Admin/AdminUsers";
import BookNow from "./pages/BookNow";
import Booking from "./pages/Booking";
import AdminBooking from "./pages/Admin/AdminBooking";
import Pagenot from "./components/Pagenot/Pagenot";
import Profile from "./components/Profile";


function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div>
      {loading && <Loader />}
      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          <Route
            path="/"
            element={
              <ProctectedRoute>
                <Home />
              </ProctectedRoute>
            }
            

          />
          <Route
            path="/book-now/:id"
            element={
              <ProctectedRoute >
                <BookNow />
              </ProctectedRoute >
            }
            />
            <Route
              path="*"
              element={
                
                  <Pagenot />
                
              }
          />
          <Route
            path="/bookings"
            element={
              <ProctectedRoute >
                <Booking />
              </ProctectedRoute >
            }
          />

          <Route
            path="/admin/buses"
            element={
              <ProctectedRoute >
                <AdminBuses />
              </ProctectedRoute >
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProctectedRoute >
                <AdminUsers />
              </ProctectedRoute >
            }
          />
          <Route
            path="/admin/bookings"
            element={
              <ProctectedRoute >
                <AdminBooking />
              </ProctectedRoute >
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
           <Route
            path="/profile"
            element={
              <ProctectedRoute >
                <Profile />
              </ProctectedRoute >
            }
          />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;