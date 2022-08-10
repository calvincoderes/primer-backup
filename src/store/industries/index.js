import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  // Get Industries
  industries: { status: 0, payload: null },
  setIndustries: action((state, payload = null) => {
    state.industries = payload
  }),
  getIndustries: thunk(async (actions, params = {}) => {
    actions.setIndustries({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/configs/industries`, { params })
      .then(response => actions.setIndustries({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setIndustries({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
  industryDetails: { status: 0, payload: null },
  setIndustryDetails: action((state, payload = null) => {
    state.industryDetails = payload
  }),
  getIndustryDetails: thunk(async (actions, params = {}) => {
    actions.setIndustryDetails({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/configs/industries/${params.id}`, { params })
      .then(response => actions.setIndustryDetails({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setIndustryDetails({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Create Industry
  createdIndustry: { status: 0, payload: null },
  setCreatedIndustry: action((state, payload = null) => {
    state.createdIndustry = payload
  }),
  createIndustry: thunk(async (actions, data = {}) => {
    actions.setCreatedIndustry({ status: 1, payload: null })

    axios
      .post(`${API_URL}/api/configs/industries/`, data)
      .then(response => actions.setCreatedIndustry({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setCreatedIndustry({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Update Industry
  updatedIndustry: { status: 0, payload: null },
  setUpdatedIndustry: action((state, payload = null) => {
    state.updatedIndustry = payload
  }),
  updateIndustry: thunk(async (actions, data = {}) => {
    actions.setUpdatedIndustry({ status: 1, payload: null })

    axios
      .patch(`${API_URL}/api/configs/industries/${data.id}`, data)
      .then(response => actions.setUpdatedIndustry({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setUpdatedIndustry({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Delete Industry
  deletedIndustry: { status: 0, payload: null },
  setDeletedIndustry: action((state, payload = null) => {
    state.deletedIndustry = payload
  }),
  deleteIndustry: thunk(async (actions, id) => {
    actions.setDeletedIndustry({ status: 1, payload: null })

    axios
      .delete(`${API_URL}/api/configs/industries/${id}`)
      .then(response => actions.setDeletedIndustry({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setDeletedIndustry({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
