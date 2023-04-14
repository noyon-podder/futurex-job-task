import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    const handleFormData = e => {
        e.preventDefault();

        const employeeData = {
            firstName, 
            lastName, 
            email,
            salary, 
            date
        }

        fetch("http://localhost:5000/add-employee", {
            method: "POST",
            headers: {
                "content-type": "application/json" 
            },
            body: JSON.stringify(employeeData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
             navigate("/")
             toast.success("Employee add successfully!!")
            }
        })
    }
  return (
    <div>
      <form onSubmit={handleFormData}>
        <div className="w-50 mx-auto mt-5">
          <input
            type="text"
            className="mb-3"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
          <input
            className="mb-3"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
          <input
            className="mb-3"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
          <input
            className="mb-3"
            type="text"
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter your salary range"
          />
          <input
            className="mb-3"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter your salary range"
          />
          <input
            className="mb-3 bg-primary fw-semibold text-white"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}

export default AddEmployee