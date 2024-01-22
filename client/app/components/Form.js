'use client';
import React from 'react';
import { useState } from 'react';
import { handleSubmit } from './handleSubmit';
import {  Input, Button, FormControl, Typography} from '@mui/material';




const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password:''
  });

  const sendData = () => {
    handleSubmit(formData);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
     
        <form  onSubmit={sendData} style={{display:'flex',flexDirection:'column',gap:'20px'}} className="muiForm">
        <Typography variant="h5" gutterBottom>
          My Form
        </Typography>
        <FormControl>
          <Input
         type="text"
         name="firstName"
         placeholder="firstName"
         value={formData.firstName}
         onChange={handleChange}
         color='primary'
         variant='outlined'
            fullWidth
          />
            <Input
         type="text"
         name="lastName"
         placeholder="lastName"
         value={formData.lastName}
         onChange={handleChange}
            fullWidth
          />
            <Input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      
    </form>
      {/* <form className="testForm">
        <p>Users form</p>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button onClick={sendData}>Go!</button>
      </form> */}
    </div>
  );
};

export default Form;
