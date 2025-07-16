import React, { useState } from "react";

import "../Css/Fetch.css";
import HomePage from "./HomePage/HomePage";
const FetchPan = () => {
  const [pan, setPan] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchDetails = () => {
    const data = localStorage.getItem(pan);
    if (data) {
      setUserData(JSON.parse(data));
      setError("");
    } else {
      setError("PAN not found!");
      setUserData(null);
    }
  };

  return (
    
    <div className="fetch-container"> 

      <h2>Fetch PAN Details</h2>
      <input type="text" placeholder="Enter PAN Number" onChange={(e) => setPan(e.target.value)} />
      <button onClick={fetchDetails} >Fetch</button>
      {error && <p>{error}</p>}
      {userData && (
        <div className="user-data">
          <h3>Name: {userData.fullName}</h3>
          <p>DOB: {userData.dob}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Address: {userData.address}</p>
          <p>PAN: {userData.panNumber}</p>
        </div>
      )}
    </div>
  );
};

export default FetchPan;
