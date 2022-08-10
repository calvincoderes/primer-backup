import * as Yup from 'yup'

export default Yup.object().shape({
  username: Yup.string().required('Email Address is required').email('Enter a valid email address'),
  password: Yup.string().required('Password is required'),
})
