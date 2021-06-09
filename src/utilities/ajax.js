import axios from 'axios';
import notify from './notify'

export default function ajax (req) {
  return axios(req)
    .then(res => {
      return res.data
    })
    .catch(err => {
      const res = err.response
      if (res) {
        notify(`[${res.status}] ${res.statusText}`)
      } else {
        notify(err.message)
      }
      throw err
    })
}