import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  // Signup
  signupState: { status: 0, payload: null },
  setSignedup: action((state, payload = null) => {
    state.signupState = payload
  }),
  signup: thunk(async (actions, data = {}) => {
    actions.setSignedup({ status: 1, payload: null })

    axios
      .post(`${API_URL}/api/v1/signup`, data)
      .then(response => actions.setSignedup({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setSignedup({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
