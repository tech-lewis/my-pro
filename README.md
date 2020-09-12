# my-pro
[demo] ant design pro for vue

复习 函数组件的使用 来实现权限控制哦

// baidu开发的DOM Resize 监听器啥？？？

Lodash 的finalist和其他常见函数的使用

```js
import debounce from "lodash/debounce";
this.resize = debounce(this.resize, 300); //截留函数的作用啥的
debounce
import { addListener, removeListener } from "resize-detector"; 
//beforeDestroy 生命周期不要忘记移除监听器和this.chart.dispose

```

# 解决Vue Router给当前URL添加动态query无反应的问题

发布于 2018-06-29

最近遇到这么一个问题，就是想在当前url上添加一个动态的query传参。
听上去非常简单的一个功能，但是遇到的问题是很让人头大的。
一开始我的思路是这样的

```
let path = this.$route.path;
let query = this.$route.query
query.a = 'abc';
let location = {
    path,
    query
}
this.$router.push(location);
```

可是运行后 没有任何反应。。。也不报错。。

```
let path = this.$route.path;
let location = {
    path,
    query:{
        a:'abc'
    }
}
this.$router.push(location);
```

这样就没问题。。但是这样就不能保留原先已有的query了。。

所以我又做了一些尝试，把query直接做成字符串拼接起来

```
let path = this.$route.path;
let str = '?';
for (let i in query) {
  str += i + '=' + query[i] + "&";
}
str = str.substr(0,str.length - 1);
this.$router.push(path + str);
```

依旧没有反应。。。

但是

```
let path = this.$route.path;
this.$router.push( path + '?a=a');
```

这样就是ok的。。。

索性放弃字符串拼接的方法接着研究一开始的思路，
默认先不获取已有的query，直接定义新的。

```
let path = this.$route.path;
let query = {
    a:'a'
}
let location = {
    path,
    query
}
this.$router.push(location);
```

执行后发现正常。。。。 
基于这个接着实验定义了query 在把 已有的query复制过来

```
let path = this.$route.path;
let query = this.$route.query;
query.a = 'abc';
let new_query = {};
for (let i in query){
    new_query[i] = query[i];
}

let location = {
    path,
    query:new_query
}
this.$router.push(location);
```

执行后发现又不好使。。。
但是 给 new_query 默认声明的时候加个 属性就是ok的 。。。。

```
let path = this.$route.path;
let query = this.$route.query;
query.a = 'abc';
let new_query = {
    b:'b'
};
for (let i in query){
    new_query[i] = query[i];
}

let location = {
    path,
    query:new_query
}
this.$router.push(location);
```

...很懵逼为啥这样就好用了..

测试的时候还发现一个问题就是 new_query声明的属性是query已有的话也是不行的。。。
反正就是这么诡异。。。

不知道哪位大神能介绍下原因