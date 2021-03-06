import React from "react";
import "./App.css";
import { Link, Router } from "@reach/router";
import Cancel from "./Components/Cancel/Cancel/Cancel";
import Order from "./Components/Order/Order/Order";
import MekCoins from "./Components/MekCoins/MekCoins";
import Profile from "./Components/Car Profile/Profile/Profile";
import Bookings from "./Components/Bookings/Bookings";

function App() {
  return (
    <div className="App">
      <Link to="/"> Home</Link>
      <Link to="/order"> Order</Link>
      <Link to="/cancel"> Cancel</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/addmoney">Add money</Link>
      <Link to="/bookings">Bookings</Link>

      <Router>
        <Order path="/order" />
        <Cancel path="/cancel" />
        <Profile path="/profile" />
        <MekCoins path="/addmoney" />
        <Bookings path="/bookings" />
      </Router>
    </div>
  );
}

export default App;
