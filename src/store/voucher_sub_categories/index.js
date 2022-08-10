import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  // Get Voucher Sub-Categories
  voucherSC: { status: 0, payload: null },
  setVoucherSC: action((state, payload = null) => {
    state.voucherSC = payload
  }),
  getVoucherSC: thunk(async (actions, params = {}) => {
    actions.setVoucherSC({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/voucher_sub_categories`, { params })
      .then(response => actions.setVoucherSC({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setVoucherSC({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Get Voucher Sub-Category Details
  voucherSCDetails: { status: 0, payload: null },
  setVoucherSCDetails: action((state, payload = null) => {
    state.voucherSCDetails = payload
  }),
  getVoucherSCDetails: thunk(async (actions, params = {}) => {
    actions.setVoucherSCDetails({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/voucher_sub_categories/${params.id}`, { params })
      .then(response => actions.setVoucherSCDetails({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setVoucherSCDetails({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Create Voucher Sub-Category
  createdVoucherSC: { status: 0, payload: null },
  setCreatedVoucherSC: action((state, payload = null) => {
    state.createdVoucherSC = payload
  }),
  createVoucherSC: thunk(async (actions, data = {}) => {
    actions.setCreatedVoucherSC({ status: 1, payload: null })

    axios
      .post(`${API_URL}/api/voucher_sub_categories/`, data)
      .then(response => actions.setCreatedVoucherSC({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setCreatedVoucherSC({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Update Voucher Sub-Category
  updatedVoucherSC: { status: 0, payload: null },
  setUpdatedVoucherSC: action((state, payload = null) => {
    state.updatedVoucherSC = payload
  }),
  updateVoucherSC: thunk(async (actions, data = {}) => {
    actions.setUpdatedVoucherSC({ status: 1, payload: null })

    axios
      .patch(`${API_URL}/api/voucher_sub_categories/${data.id}`, data)
      .then(response => actions.setUpdatedVoucherSC({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setUpdatedVoucherSC({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Delete Voucher Sub-Category
  deletedVoucherSC: { status: 0, payload: null },
  setDeletedVoucherSC: action((state, payload = null) => {
    state.deletedVoucherSC = payload
  }),
  deleteVoucherSC: thunk(async (actions, id) => {
    actions.setDeletedVoucherSC({ status: 1, payload: null })

    axios
      .delete(`${API_URL}/api/voucher_sub_categories/${id}`)
      .then(response => actions.setDeletedVoucherSC({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setDeletedVoucherSC({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
