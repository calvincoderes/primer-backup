import { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { message } from 'antd'

import { defaultErr } from '../../../utils/errorHandler'

import validationSchema from './validations'

const clearState = { status: 0, payload: null }

const defaultFormValues = {
  password: '',
  confirm_password: '',
}

const Container = ({ children, otpDetails, setFPModal }) => {
  // State
  const state = useStoreState(s => ({
    cp: s.cp,
  }))

  // Actions
  const actions = useStoreActions(a => ({
    postCp: a.postCp,
    setCp: a.setCp,
  }))

  const history = useHistory()
  const [initialValues] = useState(defaultFormValues)

  // Use to handle form validations and submissions
  const formik = useFormik({
    initialValues, // Initial form validations
    validationSchema, // From validations
    enableReinitialize: true,
    onSubmit(values) {
      if (values) {
        const { token, otp } = otpDetails
        const { password } = values
        actions.postCp({ token, otp, password })
      }
    },
  })

  useEffect(() => {
    const { status, payload } = state.cp

    if (status === 2) {
      message.success('Password has been successfully updated!')
      actions.setCp(clearState)
      history.push('/')
    } else if (status === 3) {
      defaultErr(payload)
      actions.setCp(clearState)
    }
  }, [state.cp])

  return children({ state, formik })
}

export default Container
