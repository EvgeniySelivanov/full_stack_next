'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from 'react';
import {
  FormControl,
  Typography,
  OutlinedInput,
  FormHelperText,
  InputLabel,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Schems from '../../../../utils/validationSchems';
import Button from '../../UI/Button/Button';
import GoogleButton from '../../GoogleButton';
import styles from '../Form.module.css';

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface IAuthentication {
  error?: string;
  ok: boolean;
  status: number;
  url: string;
}
const SingInForm: React.FC<Props> = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<IForm>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<IForm>({
    first_name: '',
    first_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const auth: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
    await Schems.LoginSchem.validate(formData, { abortEarly: false });
    const authentication:IAuthentication = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    if (authentication.ok && !authentication.error) {
      router.push('/profile');
    } else {
      console.log(authentication.error);
    }}
    catch(error){
      console.error(error);
    }
  };
  const handleChange: FormEventHandler<HTMLFormElement> = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
    try {
        Schems.RegistrationSchem.validateSyncAt(name, { [name]: value });
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
        }));
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error.message,
      }));
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <form onSubmit={auth} className={styles.form}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <FormControl required fullWidth>
        <InputLabel error={!!errors.email}>Email</InputLabel>
        <OutlinedInput
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
        />
        {errors.email && (
          <FormHelperText style={{ color: 'red' }}>{errors.email}</FormHelperText>
        )}
      </FormControl>
      <FormControl required fullWidth>
        <InputLabel error={!!errors.password}>Password</InputLabel>
        <OutlinedInput
         type={showPassword ? 'text' : 'password'} 
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && (
          <FormHelperText style={{ color: 'red' }}>
            {errors.password}
          </FormHelperText>
        )}
      </FormControl>

      <div className={styles.buttonsGroup}>
        <Button className={styles.button} type={'submit'}>
          Sign In
        </Button>
        <GoogleButton className={styles.button} text={'Sign In with Google'} />
      </div>
    </form>
  );
};
export default SingInForm;
