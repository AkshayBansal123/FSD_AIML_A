import React from 'react'
import {useState,useEffect} from 'react';
const Viewusers = () => {
    const  [users,setUsers]=useState([]);
    const fetchUsers=async()=>{
        try {
            const res = await fetch("http://localhost:3002/users");
            const userJson = await res.json();
            setUsers(userJson);
          } catch (error) {
            console.error("Failed to fetch users:", error);
          }
        


    }
    useEffect(()=>{
        fetchUsers();
    },[])

    let count=0
  return (
    <div>
     <h1>List of Users</h1>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  )
}

export default Viewusers;
