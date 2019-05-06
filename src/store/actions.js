import {GET_CITY} from './mutation-types'
import axios from '../http'
import moment from 'dayjs'

export default {
  async getCity ({commit}) {
    let res = await axios.req("api/topics")
    let date = new Date()
    let d = date.getTime()
    res.data.map(item => {
      let times = moment(d).valueOf() - moment(item.last_reply_at).valueOf()
      item.hours = (times / 60 / 60 / 1000).toFixed(0)
    })
    console.log(res.data);
    commit(GET_CITY,res.data)
  }
}