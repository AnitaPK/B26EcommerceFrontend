import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [role, setRole] = useState('commonUser')
  const [name, setName] = useState("");
  const [mobileNumber ,setMobileNumber] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function register(payload){
    try {
        const response = await axios.post('http://localhost:5000/api/auth/register', payload)
        if(response.data.success){
            alert(response.data.message);
            navigate('/login')
        }else{
            alert(response.data.message)
        }
        
    } catch (error) {
        alert('registration failed')
    }
       
  }

  const handleRgisterSubmit = async (event) => {
    event.preventDefault();
    console.log(role, name, mobileNumber, email, password);
    const payload = { role, name, mobileNumber, email, password };
    console.log(payload);
    register(payload);
  };
  return (
    <div className="container w-50 formContainer">
      <h3>Register here...</h3>
      <form>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            className="form-control"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="admin">Admin</option>
            <option value="commonUser">Common User</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button onClick={handleRgisterSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
