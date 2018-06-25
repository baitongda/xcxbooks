<script>

export default {

  async created () {
    // // const res = await get('/weapp/demo')
    // // console.log(123, res)
    // wx.request({
    //   url: config.host + '/weapp/demo',
    //   success: (res) => {
    //     console.log(res)
    //   }
    // }
  }
}
</script>

<style lang="scss">
  .text-primary{
    color: #EA5A49;
  }
  .btn{
    color: white;
    background: #EA5A49;
    margin-bottom: 20rpx;
    padding-left: 30rpx;
    padding-right: 30rpx;
    border-radius: 4rpx;
    font-size: 32rpx;
    line-height: 80rpx;
    height: 80rpx;
    width: 100%;
    &:active{
      background-color: #fA5A49;
    }
  }
</style>

