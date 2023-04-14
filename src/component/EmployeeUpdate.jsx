import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EmployeeUpdate = () => {
    const employeeData = useLoaderData();
    const [user, setUser] = useState(employeeData);
    const navigate = useNavigate();
   const { _id, firstName, lastName, email, salary, date } = employeeData;

   const handleUserUpdateData = event => {
    event.preventDefault()


    fetch(`http://localhost:5000/employee/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
       if(data.modifiedCount > 0){
        toast.success("User update successfully");
        navigate("/");
       }
    })

   }
   console.log(user);
   const handleInputChange = event => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = {...user}
    newUser[field] = value;
    setUser(newUser)
   }
  return (
    <div>
      <h2 className="fs-2 fw-bold text-primary text-center py-3 bg-light text-capitalize">
        Here you can update your employee data
      </h2>
      <form onSubmit={handleUserUpdateData}>
        <div className="w-50 mx-auto mt-3">
          <input
            type="text"
            className="mb-3"
            defaultValue={firstName}
            name="firstName"
            onChange={handleInputChange}
            placeholder="Enter your first name"
          />
          <input
            className="mb-3"
            type="text"
            defaultValue={lastName}
            name="lastName"
            onChange={handleInputChange}
            placeholder="Enter your last name"
          />
          <input
            className="mb-3"
            type="email"
            defaultValue={email}
            name="email"
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />
          <input
            className="mb-3"
            type="text"
            defaultValue={salary}
            name="salary"
            onChange={handleInputChange}
            placeholder="Enter your salary range"
          />
          <input
            className="mb-3"
            type="date"
            defaultValue={date}
            name="date"
            onChange={handleInputChange}
            placeholder="Enter your salary date"
          />
          <input
            className="mb-3 bg-danger fw-semibold text-white"
            type="submit"
            value="Update Employee"
          />
        </div>
      </form>
    </div>
  );
}

export default EmployeeUpdate