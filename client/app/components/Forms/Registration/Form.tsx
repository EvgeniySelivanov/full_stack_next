'use client';
import React, { useState, FormEventHandler } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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
import { registration } from './registration';
import Button from '../../UI/Button/Button';
import GoogleButton from '../../GoogleButton';
import styles from './Form.module.css';

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
const RegistrationForm: React.FC<Props> = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<IForm>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<IFormErrors>({
    first_name: '',
    first_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  // const [firstNameError, setFirstNameError] = useState<boolean>(false);
  // const [lastNameError, setLastNameError] = useState<boolean>(false);
  // const [emailError, setEmailError] = useState<boolean>(false);
  // const [passwordError, setPasswordError] = useState<boolean>(false);
  // const [confirmPasswordError, setConfirmPasswordError] =
  //   useState<boolean>(false);

  const userRegistration: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      await Schems.RegistrationSchem.validate(formData, { abortEarly: false });
      await registration(formData);
      const authentication:IAuthentication = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
  
      if (authentication.ok && !authentication.error) {
        router.push('/profile');
      } else {
        console.log('error from authentication', authentication.error);
      }
    } catch (error) {
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
    <form onSubmit={userRegistration} className={styles.form} method="post">
      <Typography variant="h5" gutterBottom>
        Registration
      </Typography>
      <FormControl required={true} fullWidth margin="normal">
        {<InputLabel error={!!errors.firstName}>First Name</InputLabel>}
        <OutlinedInput
          id="first_name"
          label="First Name"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          error={!!errors.first_name}
        />
        {errors.first_name && (
          <FormHelperText style={{ color: 'red' }}>
           {errors.first_name}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl required fullWidth>
        <InputLabel error={!!errors.last_name}>Last Name</InputLabel>
        <OutlinedInput
          type="text"
          label="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          error={!!errors.last_name}
        />
        {errors.last_name && (
          <FormHelperText style={{ color: 'red' }}>
            {errors.last_name}
          </FormHelperText>
        )}
      </FormControl>
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
      <FormControl required fullWidth>
        <InputLabel error={!!errors.confirmPassword}>Confirm Password</InputLabel>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'} 
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.confirmPassword && (
          <FormHelperText style={{ color: 'red' }}>
            {errors.confirmPassword}
          </FormHelperText>
        )}
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
