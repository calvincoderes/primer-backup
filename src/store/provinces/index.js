import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  provinces: { status: 0, payload: null },
  setProvinces: action((state, payload = null) => {
    state.provinces = payload
  }),
  getProvinces: thunk(async (actions, params = {}) => {
    actions.setProvinces({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/configs/provinces`, { params })
      .then(response => actions.setProvinces({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setProvinces({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
