import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  // Get Voucher Categories
  voucherC: { status: 0, payload: null },
  setVoucherC: action((state, payload = null) => {
    state.voucherC = payload
  }),
  getVoucherC: thunk(async (actions, params = {}) => {
    actions.setVoucherC({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/voucher_categories`, { params })
      .then(response => actions.setVoucherC({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setVoucherC({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Get Voucher Category Details
  voucherCDetails: { status: 0, payload: null },
  setVoucherCDetails: action((state, payload = null) => {
    state.voucherCDetails = payload
  }),
  getVoucherCDetails: thunk(async (actions, params = {}) => {
    actions.setVoucherCDetails({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/voucher_categories/${params.id}`, { params })
      .then(response => actions.setVoucherCDetails({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setVoucherCDetails({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Create Voucher Category
  createdVoucherC: { status: 0, payload: null },
  setCreatedVoucherC: action((state, payload = null) => {
    state.createdVoucherC = payload
  }),
  createVoucherC: thunk(async (actions, data = {}) => {
    actions.setCreatedVoucherC({ status: 1, payload: null })

    axios
      .post(`${API_URL}/api/voucher_categories/`, data)
      .then(response => actions.setCreatedVoucherC({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setCreatedVoucherC({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Update Voucher Category
  updatedVoucherC: { status: 0, payload: null },
  setUpdatedVoucherC: action((state, payload = null) => {
    state.updatedVoucherC = payload
  }),
  updateVoucherC: thunk(async (actions, data = {}) => {
    actions.setUpdatedVoucherC({ status: 1, payload: null })

    axios
      .patch(`${API_URL}/api/voucher_categories/${data.id}`, data)
      .then(response => actions.setUpdatedVoucherC({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setUpdatedVoucherC({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Delete Voucher Category
  deletedVoucherC: { status: 0, payload: null },
  setDeletedVoucherC: action((state, payload = null) => {
    state.deletedVoucherC = payload
  }),
  deleteVoucherC: thunk(async (actions, id) => {
    actions.setDeletedVoucherC({ status: 1, payload: null })

    axios
      .delete(`${API_URL}/api/voucher_categories/${id}`)
      .then(response => actions.setDeletedVoucherC({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setDeletedVoucherC({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
