'use client';
import React, { useState } from 'react';
import { handleSubmit } from './handleSubmit';
import { FormControl, Typography, OutlinedInput } from '@mui/material';
import { InputControl, Label } from '../UI/FormComponents/FormComponents.ts';
// import OutlinedInput from '../UI/Input/OutlinedInput.tsx';
import Button from '../../UI/Button/Button';
import styles from './Form.module.css';

interface IForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [formData, setFormData] = useState<IForm>({
    firstName: '',
    lastName: '',
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
      firstName: '',
      lastName: '',
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
     Login
      </Typography>
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
