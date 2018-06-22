<template>
  <div class="progressbar">
    <progress :percent="percent" activeColor="#EA5A49" />
    <p>{{year}}已经过去了{{days}}天 ,  {{percent}}%</p>
  </div>
</template>

<script>
export default {
  methods: {
    isLeapYear () {
      let year = new Date().getFullYear()
      if (year % 400 === 0) {
        return true
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
      } else {
        return false
      }
    },
    getDayOfYear () {
      return this.isLeapYear() ? 366 : 365
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    days () {
      // start是今年的第一天
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      // offset是今天的时间戳
      let offset = new Date().getTime() - start.getTime()
      return (offset / 1000 / 60 / 60 / 24) + 1
    },
    percent () {
      return (this.days / this.getDayOfYear() * 100).toFixed(1)
    }
  }
}
</script>

<style lang="scss">
  .progressbar{
    width: 100%;
    margin-top: 20rpx;
    margin-bottom: 60rpx;
    font-size: 28rpx;
    p{
      text-align: center;
    }
    progress{
      margin-bottom: 20rpx;
    }
  }
</style>

