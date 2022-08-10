import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  me: { status: 0, payload: null },
  setMe: action((state, payload = null) => {
    state.me = payload
  }),
  getMe: thunk(async (actions, params = {}) => {
    actions.setMe({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/me`, { params })
      .then(response => actions.setMe({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setMe({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
