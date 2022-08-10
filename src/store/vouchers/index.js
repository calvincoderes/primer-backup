import { action, thunk } from 'easy-peasy'
import axios from 'axios'

import { API_URL } from '../../utils/constants'

export default {
  // Get Vouchers
  vouchers: { status: 0, payload: null },
  setVouchers: action((state, payload = null) => {
    state.vouchers = payload
  }),
  getVouchers: thunk(async (actions, params = {}) => {
    actions.setVouchers({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/vouchers`, { params })
      .then(response => actions.setVouchers({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setVouchers({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
  voucherDetails: { status: 0, payload: null },
  setVoucherDetails: action((state, payload = null) => {
    state.voucherDetails = payload
  }),
  getVoucherDetails: thunk(async (actions, params = {}) => {
    actions.setVoucherDetails({ status: 1, payload: null })

    axios
      .get(`${API_URL}/api/vouchers/${params.id}`, { params })
      .then(response => actions.setVoucherDetails({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setVoucherDetails({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Create Voucher
  createdVoucher: { status: 0, payload: null },
  setCreatedVoucher: action((state, payload = null) => {
    state.createdVoucher = payload
  }),
  createVoucher: thunk(async (actions, data = {}) => {
    actions.setCreatedVoucher({ status: 1, payload: null })

    axios
      .post(`${API_URL}/api/vouchers/`, data)
      .then(response => actions.setCreatedVoucher({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setCreatedVoucher({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Update Voucher
  updatedVoucher: { status: 0, payload: null },
  setUpdatedVoucher: action((state, payload = null) => {
    state.updatedVoucher = payload
  }),
  updateVoucher: thunk(async (actions, data = {}) => {
    actions.setUpdatedVoucher({ status: 1, payload: null })

    axios
      .patch(`${API_URL}/api/vouchers/${data.id}`, data)
      .then(response => actions.setUpdatedVoucher({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setUpdatedVoucher({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),

  // Delete Voucher
  deletedVoucher: { status: 0, payload: null },
  setDeletedVoucher: action((state, payload = null) => {
    state.deletedVoucher = payload
  }),
  deleteVoucher: thunk(async (actions, id) => {
    actions.setDeletedVoucher({ status: 1, payload: null })

    axios
      .delete(`${API_URL}/api/vouchers/${id}`)
      .then(response => actions.setDeletedVoucher({ status: 2, payload: response.data }))
      .catch(e =>
        actions.setDeletedVoucher({
          status: 3,
          payload: typeof e.response !== 'undefined' ? e.response.data : e,
        }),
      )
  }),
}
