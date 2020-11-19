<!--  -->
<template>
  <div class="detailBox">

    <!-- nav -->
  <van-nav-bar  left-text="返回" 
  left-arrow  
  @click-left="$router.push('/')"
  @click-right="showShare = true">
    <template #right>
      <van-icon name="arrow" size="18" />
    </template>
  </van-nav-bar>
    <!-- 分享面板 -->
        <van-share-sheet
          v-model:show="showShare"
          title="立即分享给好友"
          :options="options"
         
        />
    <!-- 文章内容 -->
       
    <div class="headBox">
        <h3>{{title}}</h3>
        <span>{{ author }}</span>
    </div>
      
    <div class="content" v-html="body"></div>
    <!-- 结尾button -->
    
    <van-button type="primary">进入[知乎]查看相关讨论</van-button>
  </div>
</template>

<script>
import {reactive,toRefs,watch,ref,onMounted} from 'vue'
import {getNewsDetail} from '../api/index'

export default {
  setup() {
    
    let id = ref(0);
    const state = reactive({
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
      title:'',
      author:'',
      body:''
    })

    watch(id,async() => {
      const res = await getNewsDetail(id.value)
      let {title, author, body} = res.data
      console.log(res.data)
      state.title = title
      state.author = author
      state.body = body
    })


    return {
      id,
      ...toRefs(state)
    }
  },

  
     beforeMount(){
    let { id } = this.$route.params
    this.id = id
    
  }
}

</script>
<style lang='scss' scoped>
.detailBox {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      padding:0 0.5rem;
    .headBox {
      
      box-sizing: border-box;
      padding: 0.2rem;
      width: 100%;
      background: linear-gradient(
        0,
        rgba(55, 86, 103, 0.5),
        rgba(55, 86, 103, 0)
      );
      color: #fff;
      line-height: 1.4rem;

      h3 {
        font-size: 1rem;
      }

      span {
        display: block;
        font-size: 0.4rem;
        text-align: right;
      }
    }
}
</style>