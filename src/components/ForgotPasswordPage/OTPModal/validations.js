import * as Yup from 'yup'

export default Yup.object().shape({
  otp: Yup.string().min(6).required('OTP is required'),
})
