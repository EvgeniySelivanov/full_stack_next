import * as yup from 'yup';
const validationSchems = {
  LoginSchem: yup.object().shape({
    email: yup.string().email('check email').required('required'),
    password: yup
      .string()
      .test(
        'test-password',
        'min 6 symbols',
        (value) => value && value.trim().length >= 6
      )
      .required('required'),
  }),

  RegistrationSchem: yup.object().shape({
    email: yup.string().email('check email').required('Email is required'),
    password: yup
      .string()
      .test(
        'test-password',
        'min 6 symbols',
        (value) => value && value.trim().length >= 6
      )
      .required('required'),
    confirmPassword: yup
      .string()
      .required('confirm password is required')
      .oneOf([yup.ref('password')], 'confirmation pass must match password'),
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
