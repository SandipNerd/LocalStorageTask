import * as yup from 'yup';

export default loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Invalid phone number')
    .max(10, 'Invalid phone number'),
});
