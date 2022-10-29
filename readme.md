# 从Vue3入手快速学习Vue开发

> 从Vue3入手快速学习Vue开发，目前Vue官网已经切换到Vue3作为默认的，现在学习Vue再从2开始就感觉有些过时了，so。。。，借这段时间就想整理一下，做一些入门的学习资料给那些新人们。

[b站视频链接](https://www.bilibili.com/video/BV1XD4y1r7BC/)

**Vue2，在2.7(更新时间2022-07-01)就可以直接使用组合式API和setup语法**

Vue官网 [https://cn.vuejs.org/](https://cn.vuejs.org/)

# Vue基础知识和常见API

## 模版语法和常见的指令

### 模版语法

数据绑定语法，两个花括号

```jsx
Vue.createApp({
  // 通过data可以定义一个数据，data的属性值是一个function，返回一个对象
  //  这个返回的对象在实例中可以直接使用
  data() {
    return {
      txt: '你好，世界',
      num: 123,
      person: { id: 1, name: '小黑' },
      isOk: false,
    };
  },
}).mount('#app');
```

### 指令

1. v-model，实现数据和表单元素的绑定，实现联动。是一个语法糖，相当于绑定了input事件和value值

    v-model的修饰符：trim(去除前后的空格)、number(转数字)

2. v-on，绑定时间v-on:可以简写为@。在Vue中绑定事件的时候直接在后面跟事件名字就好

    修饰符 [https://cn.vuejs.org/guide/essentials/event-handling.html#key-modifiers](https://cn.vuejs.org/guide/essentials/event-handling.html#key-modifiers)

3. v-bind，绑定属性。其中样式绑定是最麻烦的一个事情

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>v-bind</title>
        <style>
          .ball {
            width: 35vw;
            height: 35vw;
            border-radius: 50%;
            background-color: red;
            transition: all 2s; /* css */
          }
          .big {
            width: 50vw;
            height: 50vw;
          }
          .blue {
            background-color: blue;
          }
        </style>
      </head>
      <body>
        <div id="app">
          <a v-bind:href="link">{{txt}}</a>
          <img src="" :alt="txt" />
          <p :class="classP"></p>
          <p :class="classP2"></p>
          <p :class="classP3"></p>
          <h2 :style="{color: 'red', fontSize: '5rem'}">这是一个标题</h2>
          <hr />
          <div class="ball" :class="classTransition"></div>
          <label><input v-model="classTransition.big" type="checkbox" />变大</label>
          <label
            ><input v-model="classTransition.blue" type="checkbox" />变蓝</label
          >
        </div>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <script>
          const { createApp } = Vue;
          createApp({
            data() {
              return {
                txt: '这是一个文本',
                link: 'http://www.baidu.com',
                classP: 'a b c', // 字符串
                classP2: ['a', 'b', 'c', 'd'], // 数组方式
                // 对象表示样式的时候，属性名表示样式名，属性值为bool值(true表示生效，false表示无效)
                classP3: {
                  a: true,
                  b: false,
                  c: true,
                },
                classTransition: {
                  big: false,
                  blue: false,
                },
              };
            },
          }).mount('#app');
        </script>
      </body>
    </html>
    ```

4. v-if/v-else，作用是控制标签的显示和隐藏。通过删除或者添加标签实现
5. v-show，控制标签显示和隐藏。通过控制display属性实现。建议使用它，因为相对来讲，这个更节省时间
6. v-for，遍历展示数据

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>v-for</title>
      </head>
      <body>
        <div id="app">
          <h1>字符串</h1>
          <p v-for="(item, index) in str">{{index}}------{{item}}</p>
          <hr />
          <h1>数组</h1>
          <p v-for="(item, index) in arr">{{index}}------{{item}}</p>
          <hr />
          <h1>数字</h1>
          <p v-for="(item, index) in num">{{index}}------{{item}}</p>
          <hr />
          <h1>对象组成的数组</h1>
          <p v-for="(item, index) in people">{{index}}------{{item}}</p>
          <hr />
          <div class="movies">
            <div class="movie" v-for="movie in movies">
              <h3>{{movie.name}}</h3>
              <p v-for="person in movie.people">{{person}}</p>
              <hr />
            </div>
          </div>
        </div>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <script>
          const { createApp } = Vue;
          createApp({
            data() {
              return {
                str: '你好，世界',
                arr: ['a', 'b', 'c'],
                obj: {
                  name: '小黑',
                  desc: '楼下神秘男子',
                },
                num: 3,
                people: [
                  {
                    id: 1,
                    name: '卡卡西',
                  },
                  {
                    id: 2,
                    name: '卡卡罗特',
                  },
                  {
                    id: 3,
                    name: '贝吉塔',
                  },
                ],
                movies: [
                  {
                    id: 1,
                    name: '龙珠',
                    people: ['卡卡罗特', '贝吉塔', '布玛', '18号'],
                  },
                  {
                    id: 2,
                    name: '灌篮高手',
                    people: ['流川枫', '樱木花道', '仙道'],
                  },
                ],
              };
            },
          }).mount('#app');
        </script>
      </body>
    </html>
    ```

7. v-text，相当于设置innerText属性
8. v-html，相当于设置innerHTML属性

## 常见的Api

### watch

监听一个数据的改变，数据改变之后执行一个操作

### computed

计算属性，当依赖的数据改变之后会重新计算一个结果。计算属性具有缓存功能

面试点：计算属性和方法调用的区别

1. 计算属性具有缓存效果，依赖的数据不改变不会重新计算
2. 计算属性可以直接调用，不需要加括号
3. 方法调用的时候需要加括号
4. 方法在每一次组件更新的时候都会重新执行

### refs

获取dom元素

### nextTick

框架的dom更新是异步的，数据改变之后没办法直接获取dom中的最新值。可以使用这个api实现

### component

动态组件，通过is属性控制当前显示哪一个组件

## 组件

组件直白的讲就是自定义标签，是我们以后项目中使用最多的一种方案

### 组件定义

1. 局部组件，定义好之后需要先注册再使用
2. 全局组件，定义好之后可以直接使用

### 组件传参

1. 父传子，使用props属性
2. 子传父，使用事件派发
3. 非相关组件，使用provide/inject依赖注入，或者使用vuex和pinia这类全局状态管理插件

### 组件生命周期函数

这个是面试最常问的点，也是最基础的内容

![https://cn.vuejs.org/assets/lifecycle.16e4c08e.png](https://cn.vuejs.org/assets/lifecycle.16e4c08e.png)

八个常见的生命周期钩子函数

1. beforeCreate
2. created【重要】，一般用来调接口获取数据
3. beforeMount
4. mounted【重要】，这个之后就可以获取dom元素
5. beforeUpdate，重复执行
6. updated，重复执行，在5和6两个钩子函数中不能修改数据，因为改了数据之后会引起死循环
7. beforeUnmount
8. unmounted

两个不常见的，需要配合keep-alive一起使用。keep-alive的作用是对组件做缓存。最常用的有两个属性，include(包含)和exclude(不包含)，如果指定多个组件使用,分割

1. activated，激活
2. deactivated，取消激活

---

嵌套组件的生命周期钩子函数，如果组件出现嵌套，那么执行到父组件的beforeMount之后，开始解析dom，当遇到子组件的时候，会执行所有组件的创建到挂载完成，当所有的子组件都挂载完成之后执行父组件的挂载完成

## setup

setup是Vue3新增的功能，可以让我们使用组合式API的方式来写代码，所有的代码都可以直接在这个setup方法中进行定义，不需要再使用各种配置项

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>setup</title>
  </head>
  <body>
    <div id="app" class="container">
      <h1>当前的count值为:{{count}}</h1>
      <button @click="clickHandle">点一下</button>
      <h3>{{product.page}}</h3>
      <hr />
      <input
        v-model="txt"
        type="text"
        placeholder="请输入内容"
        @keyup.enter="save"
      />
      <ul>
        <li v-for="item in product.list">{{item}}</li>
      </ul>
    </div>
    <!-- 引入之后就可以直接在js代码中访问 -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
      // 在vue2.7之后的vue2中也能使用这个API
      //
      const { ref, reactive } = Vue;
      // ref用来定义基础数据类型
      // reactive用来定义复杂数据类型
      Vue.createApp({
        // data() {
        //   return {
        //     txt: '你好，世界',
        //   };
        // },
        beforeCreate() {
          console.log('before create');
        },
        created() {
          console.log('created');
        },
        // vue3新增的
        setup() {
          console.log('setup');
          console.log(this);
          // 在setup中没有this
          const count = ref(1); // 使用了ref进行响应式转换的数据，在js中使用的时候需要通过value属性访问
          const txt = ref('');
          const product = reactive({
            page: 1,
            list: [],
          });

          const clickHandle = () => {
            console.log('按钮点了');
            count.value += 1;
            product.page += 1;
          };

          const save = () => {
            console.log(product.list.length);
            if (txt.value) product.list.push(txt.value);
          };

          return {
            count,
            clickHandle,
            product,
            save,
            txt,
          };
        },
      }).mount('#app');
    </script>
  </body>
</html>
```

**在Vue2.7版本更新之后，Vue2的项目中也可以使用组件式API和setup语法，这个大家一定要知道。但是2和3的底层实现是不一样的。**

# 脚手架创建项目和单文件组件

> Vite创建项目
>

```bash
npm init vite@latest # 按照提示创建项目就可以
```

在脚手架搭建的项目中，使用.vue文件表示组件。每一个文件都是一个单独的组件，分为三部分内容:

1. template，表示组件的模版内容。一般我们在vue3项目中，都会加上setup属性
2. script，表示组件的逻辑代码
3. style，表示样式。style中添加scoped属性，表示样式只在当前组件内有效

```html
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
```

# 常见插件的使用

## 路由

## ui组件库(Vant)

## 状态管理插件

### Vuex

### Pinia
