<!--  -->
<template>
  <div class="Home">
      <zhihuHeader :month="month" :day="day" />
      <zhihu-banner :bannerData="bannerData" />
      
        <zhihu-newsItem :news="newsData" />
      
       
      
  </div>
</template>

<script lang="ts">
import zhihuHeader from '../components/Header.vue'
import zhihuBanner from '../components/Banner.vue'
import zhihuNewsItem from '../components/NewsItem.vue'
import {reactive,toRefs,computed, onBeforeMount, onMounted} from 'vue'
import {getBannerList,getNewsList} from '../api/index'
import utils from '../utils'
export default {
    components: {
        zhihuHeader,
        zhihuBanner,
        zhihuNewsItem
    },

    setup() {

        const state = reactive({
            date: new Date(),
            bannerData:[],
            newsData:[]

        })

        let day = computed(() => utils.formatTime(state.date)[2])
        let month = computed(() => utils.formatTime(state.date)[1])

      /* 获取banner数据 */
      const getBannerData = async() => {
          const res = await getBannerList()
          state.bannerData = res.data.data
          console.log(res)
      }

     /* 获取newsList 数据 */   
     const getNewsData = async() => {
         const res = await getNewsList()
         state.newsData = res.data.data
         console.log(state.newsData)
     }

      onMounted(() => {
          getBannerData(),
          getNewsData()
      })

        return {
            ...toRefs(state),
            day,
            month
        }
    }
}

</script>
<style lang='scss' scoped>
.Home {
    width:100%;
    height: 100%;
}
</style>