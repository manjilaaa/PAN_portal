import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({ fullName: "", dob: "", email: "", phone: "", address: "" });
  const [panNumber, setPanNumber] = useState(null);
  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    //email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;  // Stop form submission if the email is invalid
  }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;  // Stop form submission
      }

 //dob validation
    const dob = formData.dob;
  if (!dob) {
    alert("Please enter your date of birth.");
    return;  // Stop form submission if DOB is missing
  }

  // Check if the DOB is in the correct format (YYYY-MM-DD)
  const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dobRegex.test(dob)) {
    alert("Please enter a valid date in the format YYYY-MM-DD.");
    return;  // Stop form submission if DOB format is incorrect
  }

  // Check if the user is above 18 years old
  let today = new Date();
  let birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--; // Adjust age if the birthday hasn't occurred yet this year
  }

  if (age < 18) {
    alert("You must be at least 18 years old to register.");
    return;  // Stop form submission if the user is underage
  }

   //random pan generate
    const newPan = "PAN" + Math.floor(1000000000 + Math.random() * 9000000000);

    localStorage.setItem(newPan, JSON.stringify({ ...formData, panNumber: newPan }));

    setPanNumber(newPan);
    
   
  };
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('registrationForm');
    const footer = document.getElementById('footer');
  
    if (form && footer) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            form.style.opacity = '0';
            form.style.pointerEvents = 'none'; // disable interactions when hidden
          } else {
            form.style.opacity = '1';
            form.style.pointerEvents = 'auto';
          }
        });
      }, {
        threshold: 0.1
      });
  
      observer.observe(footer);
    }
  });
  
  
  return (
    <div className="body">
      {!panNumber && (
        <div className="form">
          <h2>PAN Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}  />
          <input type="date" placeholder="DOB" onChange={(e) => setFormData({ ...formData, dob: e.target.value })}  />
          <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })}  />
          <input type="tel" placeholder="Phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })}  />
          <textarea placeholder="Address" onChange={(e) => setFormData({ ...formData, address: e.target.value })} required></textarea>
          <button type="submit">Register</button>
        </form></div>
      )}

{panNumber && (
        <div className="form">
          <h2>Your PAN Number</h2>
          <h3>{panNumber}</h3>
          <button onClick={() => navigate("/fetch")}>Fetch Details</button>
        </div>
      )}
    </div>


      
      
  );
};

export default Register;
