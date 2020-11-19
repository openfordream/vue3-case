<template>
  <div class="swipe-content">
    <van-swipe class="my-swipe" :autoplay="3000"  :show-indicators=false>
      <van-swipe-item v-for="item in bannerData" :key='item._id'>
        <img :src="item.img" class="img" alt >
        <h5 style="position: absolute; bottom: 2rem; left: 2rem;">{{item.title}}</h5>
      </van-swipe-item>

    </van-swipe>
  </div>
</template>
<script>

import { ref,watch } from "vue";

export default {
  props: {
    bannerData: {
      type: Array
    }
  },
 

 
};
</script>
<style lang="scss" scoped>
.swipe-content {
  margin-top:6rem;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 1rem;
    line-height: 6rem;
    text-align: center;
    background-color: #fff;
  }


</style>