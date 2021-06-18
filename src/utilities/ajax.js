import axios from 'axios';
import notify from './notify'

export default function ajax (req) {
  //TODO: add progress bar
  return axios(req)
    .then(res => {
      //info user city is not valid
      if (res.data?.status === 0) {
        notify(res.data?.message)
      }
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