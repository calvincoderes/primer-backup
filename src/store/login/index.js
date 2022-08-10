import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  // Login
  login: { status: 0, payload: null },
  setLogin: action((state, payload = null) => {
    state.login = payload
  }),
  postLogin: thunk(async (actions, data = {}) => {
    actions.setLogin({ status: 1, payload: null })

    axios
      .post(`${API_URL}/o/token/`, data)
      .then(response => actions.setLogin({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setLogin({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
