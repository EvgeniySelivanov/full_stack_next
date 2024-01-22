'use client';
import React, { useState } from 'react';
import { handleSubmit } from './handleSubmit';
import { FormControl, Typography, OutlinedInput } from '@mui/material';
import { InputControl, Label } from '../UI/FormComponents/FormComponents.ts';
// import OutlinedInput from '../UI/Input/OutlinedInput.tsx';
import Button from '../../UI/Button/Button';
import styles from './Form.module.css';

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegistrationForm = () => {
  const [formData, setFormData] = useState<IForm>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const sendData = () => {
    handleSubmit(formData);
    clearForm();
  };
  const clearForm = () => {
    setFormData({
      ...formData,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <form onSubmit={sendData} className={styles.form}>
      <Typography variant="h5" gutterBottom>
      Registration
      </Typography>
      <FormControl required fullWidth>
      <OutlinedInput
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
      />
      </FormControl>
      <FormControl required fullWidth>
        <OutlinedInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
        />
      </FormControl>
      <FormControl required fullWidth>
        <OutlinedInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <OutlinedInput
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormControl>

      <div className={styles.buttonsGroup}>
        <Button className={styles.button} type={'submit'}>
          SEND DATA
        </Button>
        <Button className={styles.button} onClick={clearForm}>
          CLEAR DATA
        </Button>
      </div>
    </form>
  );
};