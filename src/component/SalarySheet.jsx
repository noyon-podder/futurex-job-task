import React from 'react';
import Table from "react-bootstrap/Table";
import { useLoaderData } from 'react-router-dom';
import "./style.css"
const SalarySheet = () => {
    const salaryData = useLoaderData();
  return (
    <section className='p-5 '>
      <Table responsive>
        <thead className='bg-info'>
          <tr>
            <th>#</th>
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
              <td>{salary.salary}</td>
              <td>{salary.date}</td>
              <td className='d-flex '>
                <button className='table-button'>Edit</button>
                <button className='ms-4 table-second-button'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default SalarySheet