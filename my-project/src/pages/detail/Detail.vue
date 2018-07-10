<template>
  <div>
    <BookInfo :info='info'></BookInfo>
    <div class="comment">
      <textarea class='textarea' v-model="comment"
      :maxlength='120' placeholder='请输入对此图书的短评' ></textarea>
      <div class="location">
        地理位置:
        <switch color='#EA5A49' :checked='location' @change='getGeo'></switch>
        <span class="text-primary">{{location}}</span>
      </div>
      <div class="phone">
        手机型号:
        <switch color='#EA5A49' :checked='phone' @change='getPhone'></switch>
        <span class="text-primary">{{phone}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "@/util";
import BookInfo from '@/components/BookInfo'
export default {
  components: {
    BookInfo
  },
  data() {
    return {
      bookid: "",
      info: {},
      comment: '',
      location: '',
      phone: ''
    };
  },
  methods: {
    getGeo(e) {
      if(e.target.value){
        const geoInfo = ''
      }else{
        this.geoInfo = ''
      }
    },
    getPhone(e) {
      if(e.target.value){
        const phoneInfo = wx.getSystemInfoSync().model
        this.phone = phoneInfo
      }else{
        this.phone = ''
      }
    },
    async getDetail() {
      const info = await get("/weapp/bookdetail", { id: this.bookid });
      wx.setNavigationBarTitle({
        title: info.title
      });
      this.info = info
      console.log(info)
    }
  },
  mounted() {
    this.bookid = this.$root.$mp.query.id;
    this.getDetail();
  }
};
</script>

<style lang="scss">
  .comment{
    margin-top: 20rpx;
    .textarea{
      width: 730rpx;
      height: 200rpx;
      background: #eee;
      padding: 10rpx;
    }
  }
  .location,.phone{
    margin-top: 20rpx;
  }
</style>


