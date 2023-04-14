import React from 'react';
import Table from "react-bootstrap/Table";
import { Link, useLoaderData } from 'react-router-dom';
import TopBar from './TopBar';
import "./style.css";
const SalarySheet = ({}) => {
    const salaryData = useLoaderData();
    
  return (
    <section className="">
      <TopBar />
      <Table responsive>
        <thead className="bg-info">
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {salaryData.map((salary, i) => (
            <tr key={salary._id}>
              <td>{i + 1}</td>
              <td>{salary.firstName}</td>
              <td>{salary.lastName}</td>
              <td>{salary.email}</td>
              <td>${salary.salary}</td>
              <td>{salary.date}</td>
              <td className="d-flex ">
                <Link
                  to={`/employee/${salary._id}`}
                  className="text-decoration-none"
                >
                  <button
                    // onClick={() => setUserData(salary)}
                    className="table-button"
                  >
                    Edit
                  </button>
                </Link>
                <button className="ms-4 table-second-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default SalarySheet