import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  cities: { status: 0, payload: null },
  setCities: action((state, payload = null) => {
    state.cities = payload
  }),
  getCities: thunk(async (actions, params = {}) => {
    actions.setCities({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/configs/cities`, { params })
      .then(response => actions.setCities({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setCities({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
