/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { useFormik } from 'formik'
import { message } from 'antd'

import { defaultErr } from '../../utils/errorHandler'

import validationSchema from './validations'

const defaultFormValues = {
  email: '',
}

const Container = ({ children }) => {
  // State
  const state = useStoreState(s => ({
    rotps: s.rotps,
  }))

  // Actions
  const actions = useStoreActions(a => ({
    postRequestOTP: a.postRequestOTP,
    setRotps: a.setRotps,
  }))

  const [initialValues] = useState(defaultFormValues)
  const [otpDetails, setOtpDetails] = useState(null)
  const [otpModal, setOtpModal] = useState(false)
  const [fPModal, setFPModal] = useState(false)

  // Use to handle form validations and submissions
  const formik = useFormik({
    initialValues, // Initial form validations
    validationSchema, // From validations
    enableReinitialize: true,
    onSubmit(values) {
      if (values) {
        // const { email } = values
        // eslint-disable-next-line no-console
        message.success('Coming soon')

        // actions.postRequestOTP({ email, reason: 'FORGOT_PASSWORD' })
      }
    },
  })

  useEffect(() => {
    const { status, payload } = state.rotps

    if (status === 2) {
      const { token } = payload
      const { email } = formik.values
      setOtpDetails({ token, email, reason: 'FORGOT_PASSWORD' })
      setOtpModal(true)
      actions.setRotps({ status: 0, payload: null })
    } else if (status === 3) {
      defaultErr(payload)
      actions.setRotps({ status: 0, payload: null })
    }
  }, [state.rotps])

  return children({
    state,
    formik,
    otpDetails,
    setOtpDetails,
    otpModal,
    setOtpModal,
    fPModal,
    setFPModal,
  })
}

export default Container
