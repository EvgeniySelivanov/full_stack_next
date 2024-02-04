'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { registration } from './registration';
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { FormControl, Typography, OutlinedInput } from '@mui/material';
import { InputControl, Label } from '../UI/FormComponents/FormComponents.ts';
import Button from '../../UI/Button/Button';
import GoogleButton from '../../GoogleButton';
import styles from './Form.module.css';
interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegistrationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<IForm>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const userRegistration: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const result = await registration(formData);
    console.log('result in userRegistration>>>>>>>>>', result);
    const res = await signIn('credentials', {
      email: result.data.email,
      password: formData.password,
      redirect: false,
    });
    if (res && !res.error) {
      router.push('/profile');
    } else {
      console.log('error from credentials',res.error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={userRegistration} className={styles.form} method="post">
      <Typography variant="h5" gutterBottom>
        Registration
      </Typography>
      <FormControl required fullWidth>
        <OutlinedInput
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
        />
      </FormControl>
      <FormControl required fullWidth>
        <OutlinedInput
          type="text"
          name="last_name"
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
        <GoogleButton
          className={styles.button}
          text={'Registration with Google'}
        />
      </div>
    </form>
  );
};
export default RegistrationForm;
