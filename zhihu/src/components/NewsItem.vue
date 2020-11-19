<template>
  <div>
    <div v-for="item in news" :key="item.id">
      <router-link :to="{path:`/detail/${item.id}`}" class="newsItem">
        <div class="con">
          <h4>{{item.title}}</h4>
          <span>{{item.author}}</span>
        </div>
        <div class="pic">
          <img :src="item.images[0]" alt />
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
   props: {
    news: {
      type: Array
    }
  },
  
};
</script>
<style lang="scss">
.newsItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  margin:0 0.5rem;
  border-bottom:0.1rem solid #eee;
  .con {
    display: flex;
    flex-direction: column;
    margin-right: 0.3rem;
    color: #000;

    h4 {
        float: left;
        width:15rem;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin: 1rem 1rem;
      font-size: 1rem;
      font-weight: normal;
      line-height: 1rem;
      overflow: hidden;
    }

    span {
      display:flex;
      justify-content: flex-start;
      color: #999;
      line-height: 0.5rem;
      margin: 0 1rem;
    }
  }
  .pic {
    width: 6rem;
    height: 4rem;
    background: #eee;
    margin-right:0.5rem;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 0.1rem;
    }
  }
}
</style>