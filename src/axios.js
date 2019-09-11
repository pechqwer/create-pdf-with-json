import axios from 'axios'

const singleSignOn = '/#/login/'

const redirect = (url) => {
  return window.location.replace(url)
}

// axios interceptors
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  const { status } = error.response

  if (process.env.VUE_APP_VERSION === 'dev') return Promise.reject(error)

  if (status === 401) redirect(singleSignOn)
  // if (status === 403) redirect(singleSignOn)

  return Promise.reject(error)
})
