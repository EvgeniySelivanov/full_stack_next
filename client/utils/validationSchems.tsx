import * as yup from 'yup';
const validationSchems = {
  LoginSchem: yup.object().shape({
    email: yup.string().email('Check email').required('Email is required'),
    password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Password must contain only Latin letters and numbers')
    .matches(/[A-Z]+/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]+/, 'Password must contain at least one digit'),
  }),

  RegistrationSchem: yup.object().shape({
    email: yup.string().email('Check email').required('Email is required'),
    password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Password must contain only Latin letters and numbers')
    .matches(/[A-Z]+/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]+/, 'Password must contain at least one digit'),
    confirmPassword: yup
      .string()
      .required('confirm password is required')
      .oneOf([yup.ref('password'),null], 'Passwords must match'),
    first_name: yup
      .string()
      .min(2, 'First name must be at least 2 characters long.')
      .max(20,'First name must be no more than 20 characters.')
      .required('First Name is required')
      .matches(/^[a-zA-Z]+$/, 'First  name must contain only Latin letters'),
    last_name: yup
      .string()
      .matches(/^[a-zA-Z]+$/, 'Last name must contain only Latin letters')
      .min(2, 'Last name must be at least 2 characters long.')
      .max(20,'Last name must be no more than 20 characters.')
      .required('Last Name is required')
      
  }),
};
export default validationSchems;
