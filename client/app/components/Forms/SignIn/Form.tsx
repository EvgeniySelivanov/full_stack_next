'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from 'react';

// import { handleSubmit } from './handleSubmit';
import { FormControl, Typography, OutlinedInput } from '@mui/material';
import { InputControl, Label } from '../UI/FormComponents/FormComponents.ts';
import Button from '../../UI/Button/Button';
import GoogleButton from '../../GoogleButton';
import styles from './Form.module.css';

interface IForm {
  email: string;
  password: string;
}

const SingInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {

    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    if (res && !res.error) {
      router.push('/profile');
    } else {
      console.log(res);
    }
  };
 
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <FormControl required fullWidth>
        <OutlinedInput
          type="email"
          name="email"
          placeholder="Email"
          // value={formData.email}
          // onChange={handleChange}
        />
      </FormControl>
      <FormControl required fullWidth>
        <OutlinedInput
          type="password"
          name="password"
          placeholder="Password"
          // value={formData.password}
          // onChange={handleChange}
        />
      </FormControl>

      <div className={styles.buttonsGroup}>
        <Button className={styles.button} type={'submit'}>
        Sign In
        </Button>
        <GoogleButton className={styles.button} text={'Sign In with Google'} />
        {/* <Button className={styles.button} onClick={clearForm}>
          CLEAR DATA
        </Button> */}
      </div>
    </form>
  );
};
export default SingInForm;
