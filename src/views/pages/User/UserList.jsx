import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Button, 
  CardHeader, 
  Grid, 
  Typography, 
  CardContent, 
  Card, 
  TableContainer, 
  TableHead, 
  TableBody, 
  TableCell, 
  Table, 
  TableRow, 
  IconButton, 
  Collapse ,
  TableFooter,
  TablePagination,
  Checkbox,
  
  
  
  
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import Checkbox from '@mui/material';


import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import EditOutlined from '@mui/icons-material/EditOutlined';

import ExpandCircleDown from '@mui/icons-material/ExpandCircleDown';

import ExpandLessRounded from '@mui/icons-material/ExpandLessRounded';
import ExpandLessSharp from '@mui/icons-material/ExpandLessSharp';
import {  ExpandMoreOutlined } from '@mui/icons-material';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'johndoe', email: 'johndoe@ReportGmailerrorred.com', national_id: 4034567}, 
    { id: 2, username: 'johndoe', email: 'johndoe@ReportGmailerrorred.com', national_id: 4034567},
    // sessions: [{ id: 101, details: 'Session 1' }, { id: 102, details: 'Session 2' }] 
    ]);
  const [userToEdit, setUserToEdit] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', national_id: '' });
  const [expandUserId, setExpandUserId] = useState(null);
  const [selectedUser, setSelectedUser]=useState([]);
  const [page, setPage]=useState(0)
  const [rowsPerPage, setRowsPerPage]=useState(5)



  const navigate = useNavigate();

  // Fetch users from the API
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get('/api/users');
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  const handleExpandUserId = (userId) => {
    setExpandUserId(expandUserId === userId ? null : userId);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage=(NewPage)=>{
    setPage(NewPage)
  }

  const handleSelectUser=(userId)=>{
    setSelectedUser(prevselected => prevselected.includes(userId) ? prevselected.filter(id=> id !==userId): [...prevselected, userId])


  }

  const handleSelectAllClick=(event)=>{
    if(event.target.checked){
      const newSelected= users.slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage)
      .map(user=>user.id);
      setSelectedUser(newSelected)
    }else{
      setSelectedUser([])
    }


  }

  const performActionSelected =()=>{

  }

  // caculate the users to display on the current page 

  const UsersToDisplay=users.slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage)



  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle user deletion
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      setUsers((prev) => prev.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <Grid container display="flex" justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5">Users</Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => navigate('/new-user')}>
              Create Users
            </Button>
          </Grid>
        </Grid>
      </CardContent>

      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox
                indeterminate={selectedUser.length>0 && selectedUser.length<UsersToDisplay.length}
                checked={selectedUser.length===UsersToDisplay.length && UsersToDisplay.length>0}
                onChange={handleSelectAllClick}
                />
              </TableCell>
              
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>National ID</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {UsersToDisplay.map((user) => (
              <TableRow key={user.id} selected={selectedUser.includes(user.id)}>
                <TableCell><Checkbox checked={selectedUser.includes(user.id)} onChange={()=>handleSelectUser(user.id)}/></TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.national_id}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDeleteUser(user.id)}>
                    <DeleteOutlined />
                  </IconButton>
                  <IconButton onClick={()=>console.log('edit user', user.id)}>
                    <EditOutlined/>
                  </IconButton>
                  <IconButton onClick={() => handleExpandUserId(user.id)}>
                    {expandUserId === user.id ? <ExpandLessSharp/> : <ExpandMoreOutlined />}
                  </IconButton>
                </TableCell>

                
              </TableRow>
            ))}
            {/*PAYEMENT AND SESSIONS DROPDOWN MENU */}
            
          </TableBody>
        </Table>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              
            />
          </TableRow>
        </TableFooter>
      </TableContainer>

      {users.map((user) => (
        <Collapse in={expandUserId === user.id} timeout="auto" unmountOnExit key={user.id}>
          <CardContent sx={{ backgroundColor: '#f9f9f9' }}>
            <ul>
              <li>Session</li>
              <li>P</li>
            
            </ul>
          </CardContent>
        </Collapse>
      ))}
    </Card>
  );
};

export default UserList;
