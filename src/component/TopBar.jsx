import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className="mb-3 py-2">
      <div>
        <Link to="/add-employee">
          <button className="btn btn-primary btn-lg me-4">Add Employee</button>
        </Link>
        <button className="btn btn-outline-dark">Logout</button>
      </div>
    </div>
  );
}

export default TopBar