<template>
<a :href="detailUrl">
  <div class="book-card">
    <div class="thumb" @click.stop='preview'>
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
        <div class="right text-primary">
          浏览量:{{book.count}}
        </div>
      </div>
      <div class="row">
        <div class="left">
          {{book.publisher}}
        </div>
        <div class="right">
          {{book.user_info.nickName}}
        </div>
      </div>
    </div>
  </div>
</a>
</template>

<script>
import Rate from './Rate'
export default {
  components: {
    Rate
  },
  props: ['book'],
  computed: {
    detailUrl () {
      return '/pages/detail/main?id=' + this.book.id
    }
  },
  methods: {
    preview () {
      wx.previewImage({
        current: this.book.image, // 当前显示图片的http链接
        urls: [this.book.image] // 需要预览的图片http链接列表
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.book-card {
  overflow: hidden;
  padding: 10rpx;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  border-bottom: 1rpx solid #eee;
  font-size: 28rpx;
  .thumb {
    width: 180rpx;
    height: 180rpx;
    margin: 0 auto;
    float: left;
    overflow: hidden;
    .image {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .detail {
    margin-left: 200rpx;
    .row {
      line-height: 30rpx;
      margin-bottom: 20rpx;
      overflow: hidden;
    }
    .left {
      float: left;
      text-overflow: ellipsis;
    }
    .right {
      float: right;
    }
  }
}
</style>

