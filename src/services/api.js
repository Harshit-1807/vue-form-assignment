import axios from 'axios'

// Simulated token
const jwtToken = 'fake-jwt-token-123456'

// Axios instance
const api = axios.create({
  baseURL: 'https://mock-api.com',
  headers: {
    Authorization: `Bearer ${jwtToken}`,
    'Content-Type': 'multipart/form-data'
  }
})

// Simulated API - In real case, this will be replaced with actual API endpoint
export const submitFormData = async (form) => {
  const formData = new FormData()

  // Add group fields
  formData.append('groups', JSON.stringify(form.groups))
  formData.append('birthDate', form.birthDate)
  formData.append('gender', form.gender)
  formData.append('languages', JSON.stringify(form.languages))
  formData.append('cities', JSON.stringify(form.cities))
  if (form.file) {
    formData.append('file', form.file)
  }

  // Simulate API request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (form.gender && form.birthDate) {
        resolve({
          data: {
            ...form,
            fileName: form.file?.name || 'No File'
          }
        })
      } else {
        reject({
          response: { data: { message: 'Gender and Birth Date are required' } }
        })
      }
    }, 1000)
  })
}
