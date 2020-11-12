| 阶段                    | 技术栈                                       |
| ----------------------- | -------------------------------------------- |
| 阶段一：vue3-todoList   | 初识compositionAPI                           |
| 阶段二：vue3-仿知乎日报 | 对compositionAPI、vite、typescript进一步了解 |

B站免费vue3教学视频：https://www.bilibili.com/video/BV13V411S79q/



### vue3.0入门到精通

#### vue3.0 安装




前安装过vue的2.0版本，你需要把2.0相关的删除

```
npm uni -g vue-cli
```

安装vue/cli脚架

```
npm i -g @vue/cli
```

检查版本号,目前安装vuecli 4.5.4

```
vue -V
```

创建:在命令窗口输入指令

选择default vue 3

```
vue create 项目名称
```

#### vue composition API



vue3.0 侧重于解决代码组织与逻辑复用问题

目前，我们使用的是“options”API 构建组件。 为了将逻辑添加到Vue组件中，我们填充（options）属性，如data、methods、computed等。 这种方法最大的缺点是，它本身不是一个工作的JavaScript代码。 您需要确切地知道模板中可以访问哪些属性以及this关键字的行为。在底层，Vue编译器需要将此属性转换为工作代码。正因为如此，我们无法从自动建议或类型检查中获益。

Composition API希望将通过当前组件属性、可用的机制公开为JavaScript函数来解决这个问题。 Vue核心团队将组件Composition API描述为“一套附加的、基于函数的api，允许灵活地组合组件逻辑”。 使用Composition API编写的代码更易读，并且场景不复杂，这使得阅读和学习变得更容易。

让我们看到一个非常简单的组件示例，它使用新的组件Composition API来理解它是如何工作的。

```
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{msg}}年龄为{{age}}</div>
    <button @click="add"> + </button>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      msg:'王大合',
      age:18
    }
  },
  methods:{
    add() {
      this.age += 1
    }
  }

}
</script>
```



##### setup

vue3.0将组件的逻辑都写在了函数内部,setup()会取代vue2.x的data()函数,返回一个对象,暴露给模板,而且只在初始化的时候调用一次,因为值可以被跟踪,所以我们通过vue3来改变编程习惯

首先引入ref

使用数据需要return

```
 import {ref} from 'vue'
 
 setup() {
    const msg = ref('王大合')
    const age = ref(18)
    function add() {
      age.value +=1
    }
    return {msg,age,add}
  }
```

**computed**

```
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{msg}}的年龄为{{age}}</div>
    <div>{{double}}</div>
    <button @click="add">+</button>
  </div>
</template>

<script>
import {computed, ref} from 'vue'

export default {
 
  name: 'App',
  setup() {
    const msg = ref('王大合')
    const age = ref(18)
    const double = computed(() =>{
      return age.value * 2
    })
    function add() {
      age.value += 1
    }
    return {msg,age,add,double}
    
  }
}
</script>



```



##### reactive

在 `setup` 函数里面， 我们适应了 Vue3.0 的第一个新接口 `reactive` 它主要是处理你的对象让它经过 `Proxy` 的加工变为一个响应式的对象，



##### toRefs

用于将响应式对象变成普通对象

```
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{msg}}的年龄为{{age}}</div>
    <div>{{double}}</div>
    <button @click="add">+</button>
  </div>
</template>

<script>
import {computed, reactive,toRefs} from 'vue'

export default {
 
  name: 'App',
  setup() {
    const state = reactive({
        msg:'王大合',
        age:18,
        double : computed(() =>{
      return state.age * 2
    })
    })

    function add() {
      state.age += 1
    }
    return {...toRefs(state),add}
    
  }
}
</script>



```

##### props 和 context

在 `Vue2.0` 中我们可以使用 `props` 属性值完成父子通信，在这里我们需要定义 `props` 属性去定义接受值的类型，然后我们可以利用 `setup` 的第一个参数获取 `props` 使用。

```
export default {
 
  name: 'App',
  components:{
    Content
  },
  setup() {
    const state = reactive({
        msg:'王大合',
        age:18,
        double : computed(() =>{
      return state.age * 2
    })
    })

    function add() {
      state.age += 1
    }
    return {...toRefs(state),add}
    
  }
}
```

我们在 `App.vue` 里面就可以使用该头部组件，有了上面的 `props` 我们可以根据传进来的值，让这个头部组件呈现不同的状态。

```
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{msg}}的年龄为{{age}}</div>
    <div>{{double}}</div>
    <Content :msg='msg' />
    <button @click="add">+</button>
  </div>
</template>
```

这里我新建一个新的组件content,在app.vue中引入

```
<!--  -->
<template>
  <div>{{data}}</div>
</template>

<script>
import {ref} from 'vue'
export default {
 name:'content',
 props:{
     msg:String
 },
 setup(props) {
     const data = ref(props.msg)
     return {data}
 }
}

</script>
```

`setup` 函数的第二个参数是一个上下文对象，这个上下文对象中包含了一些有用的属性，这些属性在 `Vue2.0` 中需要通过 `this` 才能访问到，在 `vue3.0` 中，访问他们变成以下形式：

```
setup(props, ctx) {
  console.log(ctx) // 在 setup() 函数中无法访问到 this
  console.log(this) // undefined
}
```

具体能访问到以下有用的属性：

```
- slot
- attrs
- emit
```



父组件

```
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{msg}}的年龄为{{age}}</div>
    <div>{{double}}</div>
    <Content :msg='msg' @change='showName' />
    <button @click="add">+</button>
  </div>
</template>

<script>
import {computed, reactive,toRefs} from 'vue'
import Content from './components/content.vue'
export default {
 
  name: 'App',
  components:{
    Content
  },
  
  setup() {
    const state = reactive({
        msg:'王大合',
        age:18,
        double : computed(() =>{
          return state.age * 2
        })
    })
    function showName(params) {
        alert(params)
    }

    function add() {
      state.age += 1
    }
    return {...toRefs(state),add,showName}
    
  }
}
</script>



```

子组件

```
<!--  -->
<template>
  <div>{{data}}</div>
  <button @click="changeName">打个招呼!</button>
</template>

<script>
import {ref} from 'vue'
export default {
 name:'content',
 props:{
     msg:String
 },
 setup(props,context) {
     const data = ref(props.msg)
    function changeName() {
        context.emit('change','Hello,王大合!')
    }
     return {data,changeName}
 }
}

</script>
```

##### watch

监听ref

不指定数据源

```
const a = ref(18)

watch(()=>{
	console.log(a.value)
})
```

指定数据源

```
 const a = ref(18)

  watch(a,()=> {

   console.log(a.value)

  })
```

监听reactive

```
const state = reactive({
        msg:'王大合',
        age:18,
        double : computed(() =>{
          return state.age * 2
        })
    })
```

不指定数据源

```
watch(()=>{
	console.log(state.age)
})
```

指定数据源

```
watch(()=>state.age,()=>{
	console.log(state.age)
})
```

回调函数参数以及watche clean,使用clean时候是处理重复性的watch监听事件

```
 watch(() => state.age,(newVal,oldVal,clean)=> {
     console.log(state.msg + "去年年纪:"+oldVal +"今年年纪:" + newVal)
     clean(
       ()=>{
         console.log('clean')
       }
     )
   })
```

#### vue3.X+vite+typescript

##### 放弃webpack,使用vite安装vue3.0

这个是尤大开发的新工具，目的是以后替代webpack，原理是利用浏览器现在已经支持es6的import了，遇到import会发送一个http请求去加载文件，vite拦截这些请求，做一些预编译，省去了webpack冗长打包的时间，提升开发体验

```
npm install -g create-vite-app
create-vite-app vue3-vite
cd vue3-vite
npm install
npm run dev
# 或者使用yarn
yarn add -g create-vite-app
yarn create vite-app <project-name>
```

安装依赖

```
yarn
```

使用yarn启动项目

```
yarn dev
```



##### 引入typescript

```
# 安装 typescript

yarn add typescript -D
```

初始化`tsconfig.json`

```
# 然后在控制台执行下面命令
npx tsc --init
```

将`main.js`修改为`main.ts`,同时将`index.html`里面的引用也修改为`main.ts`,

然后在script 里添加 lang="ts"

```
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

```

修改完之后，重启就可以访问项目了。虽然这样配置是可以了，但是打开`main.ts`会发现`import App from App.vue`会报错:` Cannot find module './App.vue' or its corresponding type declarations.`,这是因为现在`ts`还没有识别`vue`文件，需要进行下面的配置:

在项目根目录添加`shim.d.ts`文件

```
# powerShell终端,也可以手动创建
New-Item shim.d.ts
```

添加以下内容

```
declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}
```



##### 安装vue-router

```
yarn add vue-router@4.0
```

这样可以选择最新的vue-router 4.0.0的测试版本,这里更新到beta.13

##### 配置vue-router

在项目`src`目录下面新建`router`目录，然后添加`index.ts`文件，在文件中添加以下内容

```
import {createRouter, createWebHashHistory} from 'vue-router'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: []
})
```

##### 安装vuex

同上

```
yarn add vuex@4.0
```

目前只能选择最新测试版

在项目`src`目录下面新建`store`目录，并添加`index.ts`文件，文件中添加以下内容

```
import { createStore } from 'vuex'

interface State {
  userName: string
}

export default createStore({
  	state:{
  	userName:'王大合'
  	}
});
```



#### 上线小项目todoList

##### app.vue

```
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">todoList</router-link> | 
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">

export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
```

##### 配置路由 router/index.ts

```
import {createRouter, createWebHashHistory} from 'vue-router'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
    path: '/',
    // 必须添加.vue后缀
    component: () => import('../views/todo-list.vue')
      },
    {
        path: '/about',
        name: 'About',
       
        component: () => import('../views/About.vue')
      }
]
})
```

##### store的index.ts新建vuex

```
import { createStore } from 'vuex'

interface State {
  userName: string
  taskList: any[]
  
}

export default createStore({
  state: {
    
      userName: "王大合",
      taskList: []
      
  },
  mutations:{
    
    createTask (state:any, newTask:string) {
        state.taskList.push(newTask)
      },
      deleteTask (state:any, index:number) {
        state.taskList.splice(index, 1)
      },
      updateStatus (state:any, payload:any) {
        const { index, status } = payload
  
        state.taskList[index].isfinished = status
      }
  }
});
```

##### 在src目录新建view文件夹,创建todoList和about

todoList

```
<template>
  <div class="home">
    <!-- input输入list内容 -->
    <div>
       <input
    @keyup.enter="addTask"
      class="input"
      type="text"
      v-model="inputValue"
      placeholder="请输入" />
    </div>
    <!-- todoList内容展示和删除 -->
     <ul class="ul">
      <li class="item" v-for="(item, index) in taskList" :key="index">
        <p
        @click="updateStatus(index, !item.isfinished)"
        class="content"
        :class="item.isfinished ? 'active' : ''"
        >{{item.lable}}</p>
        <div class="item-delete" @click="deleteTask(index)">X</div>
      </li>
      <li v-if="taskList.length === 0" class="item-none">暂无数据</li>
    </ul>
  </div>
</template>


<script lang="ts">
 
import { ref, computed } from 'vue';
import { useStore } from "vuex";
export default {
  
  setup() {
    const store = useStore()
    const taskList = computed(() => store.state.taskList);
    const inputValue = ref('');
    const addTask = () => {
      store.commit('createTask', {
        lable: inputValue.value,
        isfinished: false
      })

      inputValue.value = ''
    }

    const updateStatus = (index, status) => {
      store.commit('updateStatus', {
        index,
        status
      })
    }

    const deleteTask = (index) => {
      store.commit('deleteTask', index)
    }

    return {
      inputValue,
      taskList,
      addTask,
      updateStatus,
      deleteTask
    };
  }
}
</script>

<style scoped lang='scss'>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;

  text-align: left;
}
.home {
  max-width: 400px;
  margin: 0 auto;
  .input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    outline-style: none;
    border: 2px solid #999;
    padding: 5px 10px;
  }
  .ul {
    margin-top: 10px;
  }

  .item {
    height: 40px;
    line-height: 40px;
    padding-bottom: 5px;
    border-bottom: 1px solid #dcdfe6;
    color: #333333;
  }
  .item-none {
    height: 40px;
    line-height: 40px;
    padding-bottom: 5px;
    color: #333333;
    text-align: center;
  }
  .content {
    float: left;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
  p.active {
    text-decoration:line-through; 
    color: #999999;
  }
  .item-delete {
    float: right;
    width: 25px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
```

about

```
<template>
  <div class="about">
    <h1>{{name}}</h1>
    

    
  </div>
</template>

<script lang='ts'>
import { ref, watch } from 'vue';

export default {
  name: 'about',
  setup() {
    const name = ref('王大合出品');

   



    
    return {
      name,
     
    };
  }
};
</script>

```

