<template>
  <div class="bookinfo">
    <div class="thumb">
      <img class="bg" :src="info.image" mode="aspectFill">
      <img class="img" :src="info.image" mode="aspectFit">
      <div class="info">
        <div class="title">
          {{info.title}}
        </div>
        <div class="author">
          {{info.author}}
        </div>
      </div>
    </div>
    <div class="detail">
      <img class="avatar" :src="userinfo.image" mode="aspectFit">
      {{userinfo.name}}
      <div class="right text-primary">
        {{info.rate}}
        <Rate :value="info.rate"></Rate>
      </div>
    </div>
    <div class="detail">
      {{info.publisher}}
      <div class="right">
        {{info.price}}
      </div>
    </div>
    <div class="tags">
      <div class="badge" :key='tag' v-for="tag in info.tags">{{tag}}</div>
    </div>
    <div class="summary">
      <p :key='index' v-for='(sum,index) in info.summary'>{{sum}}</p>
    </div>
  </div>
</template>

<script>
import Rate from '@/components/Rate'
export default {
  components: {
    Rate
  },
  props: ["info"],
  computed:{
    userinfo(){
      return this.info.user_info || {}
    }
  }
};
</script>

<style lang="scss" scoped>
.bookinfo{
  font-size: 28rpx;
  .right{
    float: right;
  }
  .detail{
    padding: 10rpx 20rpx;
    .avatar{
      width: 40rpx;
      height: 40rpx;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  .thumb{
    position: relative;
    width: 750rpx;
    height: 500rpx;
    overflow:hidden;
    .bg{
      filter: blur(50rpx);
      width: 100%;
    }
    .img{
      position: absolute;
      width: 100%;
      height: 300rpx;
      top: 30rpx;
      left: 0;
    }
    .info{
      color: white;
      position: absolute;
      width: 100%;
      left: 0;
      top: 340rpx;
      text-align: center;
      .title{
        font-size: 40rpx;
      }
      .author{
        font-size: 28rpx;
      }
    }
  }
  .badge{
    display: inline-block;
    margin: 5rpx;
    padding: 10rpx;
    border-radius: 20rpx;
    border: 1px #EA5A49 solid;
    color: #EA5A49;
  }
  .summary{
    padding: 0 30rpx;
    margin-top: 20rpx;
    margin-bottom: 50rpx;
    p{
      text-indent:2em;
      font-size: 28rpx;
    }
  }
}
</style>


