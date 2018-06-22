<template>
  <div class="container">
    <div class="userinfo" @click="login">
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>

    <button v-if="userinfo.openId" @click="scanBook" class="btn">添加图书</button>
  </div>
</template>

<script>
import YearProgress from '@/components/YearProgress'
import { showSuccess } from '@/util'
import qcloud from 'wafer2-client-sdk'
import config from '@/config.js'
export default {
  components: {
    YearProgress
  },
  data () {
    return {
      userinfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '点击登录'
      }
    }
  },
  methods: {
    scanBook () {
      wx.scanCode({
        success: res => {
          console.log(res)
        }
      })
    },
    login () {
      console.log('小程序启动啦')
      let user = wx.getStorageSync('userinfo')
      const _this = this
      if (!user) {
        // 设置登录地址
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: (userinfo) => {
            qcloud.request({
              url: config.userUrl,
              login: true,
              success (userRes) {
                showSuccess('登录成功')
                wx.setStorageSync('userinfo', userRes.data.data)
                _this.userinfo = userRes.data.data
              }
            })
          },
          fail: (err) => {
            console.log('登录失败', err)
          }
        })
      }
    }
  },
  onShow () {
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 0 30rpx;
}
.userinfo {
  margin-top: 100rpx;
  text-align: center;
  img {
    width: 128rpx;
    height: 128rpx;
    border-radius: 50%;
  }
}
</style>



