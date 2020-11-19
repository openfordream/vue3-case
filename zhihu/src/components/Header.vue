<!--  -->
<template>
  <header class="headerBox">
      <div class="title">
          <div class="time">
              <span>{{day}}日</span>
              <span>{{month}}月</span>
          </div>
          <h1>知乎日报</h1>
      </div>
      <div class="pic">
          <img >
      </div>
  </header>
</template>

<script lang="ts">
export default {
   props:{
       day:{
           type:String,
           default:'-'
       },
       month:{
           type:String,
           default:'-' 
       }
   }
}

</script>
<style lang='scss' scoped>
.headerBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:fixed;
    top:0;
    left:0;
    .title {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        .time {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;
            border-right: 0.2rem solid #eee;
            span {
                display:block;
                text-align: center;
                font-size: 1.5rem;
                &:nth-child(1) {
                    font-size: 2rem;
                    font-weight: bold;
                }
            }
        }
        h1 {
            margin-left:1rem ;
        }
    }

    .pic {
        width: 3rem;
    height: 3rem;
    margin-right: 3rem;
    background: url("../assets/images/timg.jpg") no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    }
}
</style>