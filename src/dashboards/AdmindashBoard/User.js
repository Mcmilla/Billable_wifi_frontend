// src/components/AdminDashboard/Users.js

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to install axios

const Users = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', national_id: '' });

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users'); // Adjust the endpoint as necessary
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle adding a user
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', formData); // Adjust the endpoint as necessary
      setUsers((prev) => [...prev, response.data]);
      setFormData({ name: '', email: '', national_id: '' }); // Reset form
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Handle editing a user
  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/users/${userToEdit.id}`, formData); // Adjust the endpoint as necessary
      setUsers((prev) => prev.map(user => user.id === userToEdit.id ? response.data : user));
      setFormData({ name: '', email: '', national_id: '' }); // Reset form
      setUserToEdit(null); // Reset editing state
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Handle user deletion
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`); // Adjust the endpoint as necessary
      setUsers((prev) => prev.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Handle editing user form
  const handleEditClick = (user) => {
    setUserToEdit(user);
    setFormData({ name: user.name, email: user.email, national_id: user.national_id });
  };

  return (
    <div>
      <h4 className="text-lg font-semibold">Manage Users</h4>
      <p>Here you can view and manage users connected to the Wi-Fi.</p>
      
      {/* User Table */}
      <table className="min-w-full mt-4 bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">National ID</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.national_id}</td>
              <td className="px-4 py-2 border">
                <button onClick={() => handleEditClick(user)} className="text-blue-600">Edit</button>
                <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* User Form */}
      <form onSubmit={userToEdit ? handleEditUser : handleAddUser} className="mt-4">
        <h5 className="text-lg font-semibold">{userToEdit ? 'Edit User' : 'Add User'}</h5>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded p-2 mr-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded p-2 mr-2"
          required
        />
        <input
          type="number"
          name="national_id"
          placeholder="National ID"
          value={formData.national_id}
          onChange={handleChange}
          className="border rounded p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {userToEdit ? 'Update User' : 'Add User'}
        </button>
        {userToEdit && (
          <button
            type="button"
            onClick={() => {
              setUserToEdit(null);
              setFormData({ name: '', email: '', national_id: '' });
            }}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default Users;
