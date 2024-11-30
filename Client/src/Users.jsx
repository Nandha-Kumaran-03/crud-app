import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([
    {
      Name: 'Nandha',
      Email: 'nkumaran17@gmail.com',
      Age: 20,
    },
  ]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/Create" className='btn btn-success'>Add +</Link>
        <h2 className="text-center">User List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Age}</td>
                <td>
                  <Link to="/Update" className='btn btn-primary btn-sm me-2'>Update</Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      const newUsers = users.filter((_, i) => i !== index);
                      setUsers(newUsers);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
