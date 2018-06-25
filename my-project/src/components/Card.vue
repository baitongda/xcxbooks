<template>
  <div class="book-card">
    <div class="thumb">
      <img :src="book.image" class="image" mode='aspectFit'>
    </div>
    <div class="detail">
      <div class="row text-primary">
        <div class="left">
          {{book.title}}
        </div>
        <div class="right">
          {{book.rate}} <Rate :value='book.rate'></Rate>
        </div>
      </div>
      <div class="row">
        <div class="left">
          {{book.author}}
        </div>
        <div class="right">
          浏览量
        </div>
      </div>
      <div class="row">
        <div class="left">
          {{book.publisher}}
        </div>
        <div class="right">
          添加人
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rate from './Rate'
export default {
  components: {
    Rate
  },
  props: ['book'],
  mounted() {
    console.log(this.book)
  }
}
</script>

<style lang="scss" scoped>
  .book-card{
    overflow: hidden;
    padding: 10rpx;
    margin-top: 10rpx;
    margin-bottom: 10rpx;
    border-bottom: 1rpx solid #eee;
    font-size: 28rpx;
    .thumb{
      width: 180rpx;
      height: 180rpx;
      margin: 0 auto;
      float: left;
      overflow: hidden;
      .image{
        max-width: 100%;
        max-height: 100%;
      }
    }
    .detail{
       margin-left: 200rpx;
       .row{
         line-height: 30rpx;
         margin-bottom: 20rpx;
         overflow: hidden;
       }
       .left{
         float: left;
         text-overflow: ellipsis;
       }
       .right{
         float: right;
       }
    }
  }
</style>

