import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  // Forgot Password Request
  rotps: { status: 0, payload: null }, // Request OTP State
  setRotps: action((state, payload = null) => {
    state.rotps = payload
  }),
  postRequestOTP: thunk(async (actions, data = {}) => {
    actions.setRotps({ status: 1, payload: null })

    axios
      .post(`${API_URL}/api/request_otp`, data)
      .then(response => actions.setRotps({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setRotps({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
