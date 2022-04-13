import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Rooms from "./components/Rooms/Rooms";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import MainRooms from "./components/MainRooms/MainRooms";
import SignUp from "./components/SignUp/SignUp";
import RoomDetail from "./components/RoomDetail/RoomDetail";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import RoomBooking from "./components/RoomBooking/RoomBooking";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/rooms" element={<MainRooms></MainRooms>}></Route>
        <Route
          path="/rooms/:roomsId"
          element={<RoomDetail></RoomDetail>}
        ></Route>
        <Route
          path="/room_booking"
          element={
            <RequireAuth>
              <RoomBooking></RoomBooking>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
