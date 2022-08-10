import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  // Get Sub Industries
  subIndustries: { status: 0, payload: null },
  setSubIndustries: action((state, payload = null) => {
    state.subIndustries = payload
  }),
  getSubIndustries: thunk(async (actions, params = {}) => {
    actions.setSubIndustries({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/configs/sub_industries`, { params })
      .then(response => actions.setSubIndustries({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setSubIndustries({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
  subIndustryDetails: { status: 0, payload: null },
  setSubIndustryDetails: action((state, payload = null) => {
    state.subIndustryDetails = payload
  }),
  getSubIndustryDetails: thunk(async (actions, params = {}) => {
    actions.setSubIndustryDetails({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/configs/sub_industries/${params.id}`, { params })
      .then(response => actions.setSubIndustryDetails({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setSubIndustryDetails({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Create Sub Industry
  createdSubIndustry: { status: 0, payload: null },
  setCreatedSubIndustry: action((state, payload = null) => {
    state.createdSubIndustry = payload
  }),
  createSubIndustry: thunk(async (actions, data = {}) => {
    actions.setCreatedSubIndustry({ status: 1, payload: null })

    axios
      .post(`${API_URL}/api/configs/sub_industries/`, data)
      .then(response => actions.setCreatedSubIndustry({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setCreatedSubIndustry({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Update Sub Industry
  updatedSubIndustry: { status: 0, payload: null },
  setUpdatedSubIndustry: action((state, payload = null) => {
    state.updatedSubIndustry = payload
  }),
  updateSubIndustry: thunk(async (actions, data = {}) => {
    actions.setUpdatedSubIndustry({ status: 1, payload: null })

    axios
      .patch(`${API_URL}/api/configs/sub_industries/${data.id}`, data)
      .then(response => actions.setUpdatedSubIndustry({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setUpdatedSubIndustry({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Delete Sub Industry
  deletedSubIndustry: { status: 0, payload: null },
  setDeletedSubIndustry: action((state, payload = null) => {
    state.deletedSubIndustry = payload
  }),
  deleteSubIndustry: thunk(async (actions, id) => {
    actions.setDeletedSubIndustry({ status: 1, payload: null })

    axios
      .delete(`${API_URL}/api/configs/sub_industries/${id}`)
      .then(response => actions.setDeletedSubIndustry({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setDeletedSubIndustry({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
