import { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { useFormik } from 'formik'

import { defaultErr } from '../../../utils/errorHandler'

import validationSchema from './validations'

const clearState = { status: 0, payload: null }

const defaultFormValues = {
  otp: '',
}

const Container = ({ children, otpDetails, setOtpDetails, setOtpModal, setFPModal }) => {
  // State
  const state = useStoreState(s => ({
    verifyOtpState: s.verifyOtpState,
  }))

  // Actions
  const actions = useStoreActions(a => ({
    verifyOtp: a.verifyOtp,
    setVerifyOtpState: a.setVerifyOtpState,
  }))

  const [initialValues] = useState(defaultFormValues)

  // Use to handle form validations and submissions
  const formik = useFormik({
    initialValues, // Initial form validations
    validationSchema, // From validations
    enableReinitialize: true,
    onSubmit(values) {
      if (values) {
        const { token, email, reason } = otpDetails
        const { otp } = values
        setOtpDetails({ token, email, otp, reason })
        actions.verifyOtp({ token, email, otp, reason })
      }
    },
  })

  useEffect(() => {
    const { status, payload } = state.verifyOtpState

    if (status === 2) {
      setOtpModal(false) // Close Current Modal
      setFPModal(true) // Open Change Password Modal
      actions.setVerifyOtpState(clearState)
    } else if (status === 3) {
      defaultErr(payload)
      actions.setVerifyOtpState(clearState)
    }
  }, [state.verifyOtpState])

  return children({ state, formik })
}

export default Container
