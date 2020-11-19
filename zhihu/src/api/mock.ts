import Mock from 'mockjs'

Mock.mock('/api/bannerList','get',{ "data": [
    {
        "id": "1",
        "img": "https://pic4.zhimg.com/v2-f05c0e1005121e89e53762704d05b28c_fhd.jpg?source=8673f162",
        "title": "金发碧眼为什么很少在白人以外的种族出现？"
      },
      {
        "id": "2",
        "img": "https://pic2.zhimg.com/v2-86bcc639835a991b61602b73310604b8_fhd.jpg?source=8673f162",
        "title": "《哈利波特》原著中与电影中人物有哪些差别？"
      },
      {
        "id": "3",
        "title": "有哪些适合情侣两个人一起玩的桌游？",
        "img": "https://pic1.zhimg.com/v2-89f0e1611118a7e15694060542eeba7a_fhd.jpg?source=8673f162"
      }
]})

Mock.mock('/api/newsList','get',{
    "data": [
        {
          "id": "1",
          "images": [
            "https://pic4.zhimg.com/v2-f05c0e1005121e89e53762704d05b28c_fhd.jpg?source=8673f162",
 
          ],
          "title": "金发碧眼为什么很少在白人以外的种族出现？",
          "author": "作者 / biokiwi"
        },
        {
          "id": "2",
          "title": "《哈利波特》原著中与电影中人物有哪些差别？",
          "author": "作者 / kalinnn",
          "images": [
            "https://pic2.zhimg.com/v2-86bcc639835a991b61602b73310604b8_fhd.jpg?source=8673f162"
          ]
        },
        {
          "id": "3",
          "title": "有哪些适合情侣两个人一起玩的桌游？",
          "author": "作者 / 北邙",
          "images": [
            "https://pic1.zhimg.com/v2-89f0e1611118a7e15694060542eeba7a_fhd.jpg?source=8673f162"
          ]
        }
      ]
})


Mock.mock(('/api/detailList'),'post',(options:any) => {
    let {id} = JSON.parse(options.body)
    console.log(id)

  if(id == 1) {
        let data = {
          "author": "作者 / biokiwi",
          "body":"<div > \n <p><strong><strong>是什么决定了眼色和发色？</strong></strong></p> \n <p>探究题主的问题之前，我们应该先了解一下眼色、发色的形成机制。其实眼睛和头发的颜色类似于皮肤，都是由于<strong>不同的色素沉淀</strong>导致的结果，只是可能因为其中涉及的色素差异，会有些许不同。</p>\n <p>眼睛色彩相对简单，主要就是<strong>黑色素</strong>沉淀的多少，决定了你眼睛是什么颜色。眼睛的结构图相信不少人都有看过，从正面看的话，中间最黑的地方就是瞳孔，而有颜色的一圈则是虹膜，虹膜内的黑色素细胞就决定了眼睛颜色。</p> \n <img  src=\"https://pic1.zhimg.com/v2-3ec9c9111d760b6b59f622a5ef3ee02a_720w.jpg?source=8673f162\"> \n <p>细胞中会含有一种叫<strong>黑色素体</strong>的细胞器。不同的人细胞里黑色体是不一样的，进而改变了虹膜的吸收光线的能力，眼睛也会呈现出不一样的颜色：黑素体少，呈现半透明的虹膜就会因为丁达尔效应反射出蓝色或者绿色的眼睛，而黑色素体较多，虹膜吸光能力也更强，就会呈现出深褐色的眼睛。</p> </div>",
          "id": 1,
          "img": "https://pic4.zhimg.com/v2-f05c0e1005121e89e53762704d05b28c_fhd.jpg?source=8673f162",
          "time": "2小时前",
          "title": "金发碧眼为什么很少在白人以外的种族出现？"
        }

        return data
        
    } else if(id == 2) {
      let data = {
        
          "author": "作者 / kalinnn",
          "body": "<div class=\"main-wrap content-wrap\">\n <p>我很满意鲁伯特塑造的罗恩，他在里面同龄人中演技可以说数一数二，非常自然。就像罗琳说的，「他是个天才，不用我多说，他好像天生就知道怎么演好罗恩。」</p> \n <p>罗恩没有电影里那么傻憨，电影里的罗恩被弱化太多太多了。</p> \n <p>但我不满意编剧导演塑造的罗恩。</p> \n <p>电影这里的改编应该是为了弥补后面删掉了赫敏逻辑推理出毒药魔药的高光片段，好让赫敏在最后学院杯中得分。所以只能把罗恩搞弱，把赫敏高光移到魔鬼网这里。</p> \n <p>电影这里的改编应该是为了弥补后面删掉了赫敏逻辑推理出毒药魔药的高光片段，好让赫敏在最后学院杯中得分。所以只能把罗恩搞弱，把赫敏高光移到魔鬼网这里。</p> </div>",
          "id": 2,
          "img": "https://pic2.zhimg.com/v2-86bcc639835a991b61602b73310604b8_fhd.jpg?source=8673f162",
          "time": "30分钟前",
          "title": "《哈利波特》原著中与电影中人物有哪些差别？"
        
        
      }

      return data
    } else if(id == 3) {
      let data = {
        "author": "作者 / 北邙",
        "body": "<div > \n <p>（以下为一些个人废话感想，只想了解桌游的朋友可以直接拉下）</p> \n <p>【我自己是属于桌游的收藏爱好者，这两年来陆陆续续入着，前几天一清算，连上各种系列的大小扩和循环，以及 larp 的剧本，家里的藏品已经破了 180 种，稳稳地往着 200 大关去了。</p> \n <p>今年来能感觉得到，国内桌游市场逐渐火了起来，越来越多的人开始涉及了解这个圈子，身边的朋友也大多开始对这些感兴趣了，聚会的时候不再只是抱着手机打王者，或者清一色的狼人三国杀，而是会提前请我带一些桌游去，或者干脆来我家随便玩。作为一个专业推新的半硬核老玩家，这一点让我非常非常得欣慰。</p> \n <p>今年来能感觉得到，国内桌游市场逐渐火了起来，越来越多的人开始涉及了解这个圈子，身边的朋友也大多开始对这些感兴趣了，聚会的时候不再只是抱着手机打王者，或者清一色的狼人三国杀，而是会提前请我带一些桌游去，或者干脆来我家随便玩。作为一个专业推新的半硬核老玩家，这一点让我非常非常得欣慰。</p> </div>",
        "id": 3,
        "img": "https://pic1.zhimg.com/v2-89f0e1611118a7e15694060542eeba7a_fhd.jpg?source=8673f162",
        "time": "2小时前",
        "title": "有哪些适合情侣两个人一起玩的桌游？"
      }

      return data
    }
    
})

