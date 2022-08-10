export const API_URL = import.meta.env.VITE_API_URL

export const USER_TYPE_SCHOOL_ADMIN = 'SCHOOL_ADMIN'
export const USER_TYPE_SCHOOL_SUB_ADMIN = 'SCHOOL_SUB_ADMIN'
export const USER_TYPE_SUPER_ADMIN = 'SUPER_ADMIN'
export const USER_TYPE_TEACHER = 'TEACHER'
export const USER_TYPE_STUDENT = 'STUDENT'

export const STATUS_NOT_YET_TAKEN = 'NOT_YET_TAKEN'
export const STATUS_ONGOING = 'ONGOING'
export const FOR_CHECKING = 'FOR_CHECKING'
export const DONE = 'DONE'

export const GENDER_MALE = 'MALE'
export const GENDER_FEMALE = 'FEMALE'

export const genderLabel = g => {
  let gender = 'Male'

  switch (g) {
    case GENDER_FEMALE:
      gender = 'Female'
      break
  }

  return gender
}
