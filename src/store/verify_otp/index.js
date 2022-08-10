import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  // Forgot Password Request
  verifyOtpState: { status: 0, payload: null },
  setVerifyOtpState: action((state, payload = null) => {
    state.verifyOtpState = payload
  }),
  verifyOtp: thunk(async (actions, data = {}) => {
    actions.setVerifyOtpState({ status: 1, payload: null })

    axios
      .post(`${API_URL}/api/verify_otp`, data)
      .then(response => actions.setVerifyOtpState({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setVerifyOtpState({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
