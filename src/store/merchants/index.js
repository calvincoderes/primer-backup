import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  // Get Merchants
  merchants: { status: 0, payload: null },
  setMerchants: action((state, payload = null) => {
    state.merchants = payload
  }),
  getMerchants: thunk(async (actions, params = {}) => {
    actions.setMerchants({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/merchants`, { params })
      .then(response => actions.setMerchants({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setMerchants({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
  merchantDetails: { status: 0, payload: null },
  setMerchantDetails: action((state, payload = null) => {
    state.merchantDetails = payload
  }),
  getMerchantDetails: thunk(async (actions, params = {}) => {
    actions.setMerchantDetails({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/merchants/${params.id}`, { params })
      .then(response => actions.setMerchantDetails({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setMerchantDetails({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Create Merchant
  createdMerchant: { status: 0, payload: null },
  setCreatedMerchant: action((state, payload = null) => {
    state.createdMerchant = payload
  }),
  createMerchant: thunk(async (actions, data = {}) => {
    actions.setCreatedMerchant({ status: 1, payload: null })

    axios
      .post(`${API_URL}/api/merchants/`, data)
      .then(response => actions.setCreatedMerchant({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setCreatedMerchant({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Update Merchant
  updatedMerchant: { status: 0, payload: null },
  setUpdatedMerchant: action((state, payload = null) => {
    state.updatedMerchant = payload
  }),
  updateMerchant: thunk(async (actions, data = {}) => {
    actions.setUpdatedMerchant({ status: 1, payload: null })

    axios
      .patch(`${API_URL}/api/merchants/${data.id}`, data)
      .then(response => actions.setUpdatedMerchant({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setUpdatedMerchant({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Delete Merchant
  deletedMerchant: { status: 0, payload: null },
  setDeletedMerchant: action((state, payload = null) => {
    state.deletedMerchant = payload
  }),
  deleteMerchant: thunk(async (actions, id) => {
    actions.setDeletedMerchant({ status: 1, payload: null })

    axios
      .delete(`${API_URL}/api/merchants/${id}`)
      .then(response => actions.setDeletedMerchant({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setDeletedMerchant({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
