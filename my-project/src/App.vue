<script>
export default {
  async created() {
    // // const res = await get('/weapp/demo')
    // // console.log(123, res)
    // wx.request({
    //   url: config.host + '/weapp/demo',
    //   success: (res) => {
    //     console.log(res)
    //   }
    // }
  }
};
</script>

<style lang="scss">
.text-footer {
  text-align: center;
  font-size: 24rpx;
  margin-bottom: 30rpx;
}
.text-primary {
  color: #ea5a49;
}
.btn {
  color: white;
  background: #ea5a49;
  margin-bottom: 20rpx;
  padding-left: 30rpx;
  padding-right: 30rpx;
  border-radius: 4rpx;
  font-size: 32rpx;
  line-height: 80rpx;
  height: 80rpx;
  width: 100%;
  &:active {
    background-color: #fa5a49;
  }
}
</style>

