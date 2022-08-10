import { createStore } from 'easy-peasy'

import login from './login'
import signup from './signup'
import logout from './logout'
import me from './me'
import requestOtp from './request_otp'
import verifyOTP from './verify_otp'
import changePassword from './change_password'
import updatePassword from './update_password'
import users from './users'
import merchants from './merchants'
import vouchers from './vouchers'
import industries from './industries'
import subIndustries from './sub_industries'
import voucherCategories from './voucher_categories'
import voucherSubCategories from './voucher_sub_categories'
import images from './images'
import files from './files'
import provinces from './provinces'
import cities from './cities'

export default createStore({
  // Login
  ...login,

  // Signup
  ...signup,

  // Logout
  ...logout,

  // Me
  ...me,

  // Request OTP
  ...requestOtp,

  // Verify OTP
  ...verifyOTP,

  // Change Password
  ...changePassword,

  // Update Password
  ...updatePassword,

  // Users
  ...users,

  // Vouchers
  ...vouchers,

  // Merchants
  ...merchants,

  // Industries
  ...industries,

  // Sub Industries
  ...subIndustries,

  // Voucher Categories
  ...voucherCategories,

  // Voucher Sub Categories
  ...voucherSubCategories,

  // Images
  ...images,

  // Files
  ...files,

  // Provinces
  ...provinces,

  // Cities
  ...cities,
})
