<script>
import {get} from './util'

export default {
  async created () {
    const res = await get('/weapp/demo')
    console.log(res)
    // wx.request({
    //   url: config.host + '/weapp/demo',
    //   success: (res) => {
    //     console.log(res)
    //   }
    // }
    console.log('小程序启动啦')
  }
}
</script>
