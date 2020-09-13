# day01 - El全家桶学习笔记

技术栈:

	1. vue
	2. vue-router
	3. vuex  共享数据管理
	4. axios
	5. Element-ui
	6. ....
Vue CLI的使用 

> 创建本地脚手架 ，vue create 项目名
>
> 运行项目   npm run serve
>
> 
>
> 创建远程仓库这里以`github`为例
>
> 1. `public`或者`privite`根据需求选择
> 2. `README.md`  不用勾选,创建项目时已经创建完毕
> 3. `.gitignore` 不用勾选,创建项目时已经创建完毕
> 4. `license`根据[需求](https://baike.baidu.com/item/开源协议/10642383?fr=aladdin)选择即可,我们这里不勾选

1. Git常用的命令

```bash
// 配置用户名`git config --global user.name "github用户名"`
// 添加到远程分支
git remote add origin https://github.com/AutumnFish/heimamm46.git
git push -u origin master

查看本地git状态
git status
查看提交的记录信息
git log
git log --oneline
将文件提交到本地暂存区,add与后面.之间有一个空格
git add .
记录此次更改
git commit -m"注释"
提交到远程仓库
git push

git 默认是不会记录空目录的哦，如果要记录可以添加一个`.gitkeep`文件哦
1. 出于性能考虑，git默认不跟踪空目录


分支相关指令
查看本地分支
git branch
创建分支
git branch 分支名
切换分支
git checkout 分支名
合并分支（当前分支合并某分支）
git merge 分支名
删除分支
git branch -d 分支名

概念：

1. 主分支一定要可以稳定运行
2. 其他的逻辑，切换分支编写
3. 写好了之后，合并到主分支，然后删除其他的分支
```



## @关键字

> Vue-cli为了让我们在导入文件时路径编写的更为简洁，支持用`@`关键字,他等同于`/src`
>
> 注意：@在style中的使用需要`~@`
>
> 工作中绝大多数人都是使用`@`
>
> 注意:



## Element UI的使用

[传送门](https://element.eleme.cn/#/zh-CN/component/installation)

1. 装包 `npm i element-ui`
2. `main.js`中
   1. 导入库
   2. 导入样式
   3. 注册一下使用按钮测试



## Vue Router的使用

1. 建立 文件夹router，在router内建立 一个index.js文件，在该index.js写入路由基本步骤
  
   1. 安装vue-router     npm i vue-router
   
   2. 导入vue-router    import VueRouter from 'vue-router'
   
   3. 注册路由  Vue.use(VueRouter)
   
   4. 路由实例化
   
      1. ```js
         const router=new VueRouter({
         routes:[
         //这里编写相应路由规则 
         //写登陆模块规则
             {
                 path:"/login",
                 component:login   //这里login要对应导入登陆模块名字
             }
         ]
         })
         ```
   
   5. 在index.js中输出路由    export default router
   
   6. 在main.js中导入路由     import router from './router/index.js'
   
   7. 挂载到vue实例    new Vue({router})
   
1. 组件的`name`属性
   1. 可以省略
   2. 写上之后，更加利于调试
   3. 在`chrome`的`Vue`插件界面十分便捷的进行检索



## LESS的使用安装

[传送门](https://cli.vuejs.org/zh/guide/css.html#%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8)

步骤:

1. 装包`npm install -D less-loader less`
  
   npm i less-loader 
   
   npm i less
   
2. 在`style`上设置`lang="less"`

## Element - ui  输入框

[输入框传送门](https://element.eleme.cn/#/zh-CN/component/input#dai-icon-de-shu-ru-kuang)

[图标传送门](https://element.eleme.cn/#/zh-CN/component/icon)

```html
 <!-- 挂载的元素 -->
    <div id="app">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="input1">
        </el-input>
        <el-input show-password placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="input2">
        </el-input>
        <el-input placeholder="请输入验证码" prefix-icon="el-icon-key" v-model="input3">
        </el-input>
    </div>
```

## Element - ui 栅格系统

[传送门](https://element.eleme.cn/#/zh-CN/component/layout)

```html
 <el-row>
        <el-col class="item" :span="8"></el-col>
        <el-col class="item2" :span="8"></el-col>
        <el-col class="item3" :span="8"></el-col>
        <el-col class="item4" :span="8"></el-col>
        <!-- 3格 数字设置为几 -->
  </el-row>
```

注意：

1. 一行24份
2. 装不下了，会自动换行？？测试会被挤下最后某些

## Element - ui 文字链接

[传送门](https://element.eleme.cn/#/zh-CN/component/link#link-wen-zi-lian-jie)

```html
<el-link type="primary">用户协议</el-link>
必须要同意
<el-link type="primary">隐私条款</el-link>

其实解析完毕之后，是a标签包裹了 `span`
```

## Element - ui 多选框

[传送门](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-duo-xuan-kuang)

```html
 <el-checkbox v-model="checked">晚上要不要吃辣椒！</el-checkbox>


el-checkbox 内部写label就可以将form.type的array改变啦
！！！这里要注意绑定在上面的checked 双向绑定的checked一定要有  bool初始值
CheckboxGroup绑定的group才需要是array数组类型的啊
```



注意：

1. true是勾选
2. false是取消勾选
3. 修改内容即可实现调整文本

## Element - ui 按钮

[传送门](https://element.eleme.cn/#/zh-CN/component/button#button-an-niu)

```html
<el-button @click="clickMe" class="my-btn" type="primary">登录</el-button>
<el-button class="my-btn" type="primary">注册</el-button>
```



注意：

1. 样式的修改，不要直接改自带的类名
2. 添加自己的类名来修改，避免出现覆盖默认样式的问题

## Element - ui 表单

[传送门](https://element.eleme.cn/#/zh-CN/component/form#dian-xing-biao-dan)

详细内容参考喔hello_wb项目 todo-list.vue或者官网的Doc使用

- 跨域的问题 使用修改过的跨域浏览器解决

1.在电脑上新建一个目录，例如：C:\MyChromeDevUserData

2:创建一个谷歌浏览器的快捷方式

3.在快捷方式上点击右键==》属性==》目标输入框里最后加上  --disable-web-security --user-data-dir=C:\MyChromeDevUserData，--user-data-dir的值就是刚才新建的目录。

再次打开chrome，发现有“--disable-web-security”相关的提示，说明chrome又能正常跨域工作了。





# day02

- git回顾

~~~
将远程仓库地址添加到本地
git remote add origin 仓库地址
提交所有代码到远程仓库同时建立分支联系
git push -u origin master
将代码添加到暂存
git add .
记录一下更改
git commit -m"注释信息"
提交上去
git push
查看一下杠地状态
git status
查看一下记录信息
git log
查看一行的记录信息
git log --oneline
查看本地分支
git branch
创建分支
git branch 分支名
切换分支
git checkout 分支名
将指定分支合并到当前分支
git merge 分支名
删除分支
git branch -d 分支名

~~~

1. element 基础知识点总结

   1. 安装  npm i element-ui
   2. 导入  import ElementUi from "element-ui"
   3. 导入css  import "css路径在官网复制"
   4. 注册   Vue.use(ElementUi )

2. el-input

   1. v-model双向绑定值
   2. prefix-icon在input框前面加上图标

3. 栅格系统 

   分24栅栏

   el-row  代表一行

   el-row下el-col 代表栏   它有一个属性span的值就是它的栏数   :span=“值”

4. 多选框

   el-checkbox

   1. v-model就是双向绑定的值
      1. 当v-model的默认值为字符串时，当选中checkbox与不选中，那它的值为true/false，
      2. 当v-model的默认值是数组时，它的值就是在该数组中是否添加当前选项的label值
   2. 它每一项的值是用label表示 

5. 表单  el-form

   1. 值的绑定:model="值"
   2. 表单的标题宽度  label-width
   3. 表单元素的每一个字项我们都是用el-form-item包住，
   4. el-form-item它有一个label属性该label属性就是这一项的标题



## Element - ui 表单元素 基本使用

> 表单元素的使用有挺多需要设置的内容，比如绑定数据时，需要遵守他的格式

```html
    <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动地点">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="活动性质">
                <el-checkbox v-model="form.isChecked">是否同意用户协议</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" >立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
```

1. el-form设置`:model`绑定整个表单数据对象
2. 表单元素通过`数据对象.属性`进行数据绑定 示例代码

~~~html
              <!-- 
        1:加一个el-form表单，再加入子项el-form-item
           :model属性，绑定表单元素的值
        2:在el-form-item下加入一个el-input
           v-model双向绑定表单元素的值
           placeholder
           prefix-icon  input前面图标
           show-password是否显示密码图标，以点点形式显示           
      -->
<el-form-item>
  
<el-input prefix-icon="el-icon-user" v-model="form.phone" placeholder="请输入手机号">
</el-input>
</el-form-item>
  
<el-input
    :show-password="true"
    prefix-icon="el-icon-lock"
    v-model="form.password"
    placeholder="请输入密码"
></el-input>
~~~





步骤:

1. 使用栅格把这一行分为2份

~~~html
       <!-- 栅栏处理共24栏
             el-row：行
                它有一个子项是el-col 代表栏 多少栏  :span="栏数"
        -->
        <el-form-item>
          <el-row>
            <el-col :span="16">
              <el-input v-model="form.code" prefix-icon="el-icon-key" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="8">
              <img src="@/assets/img/key.jpg" class="key" alt />
            </el-col>
          </el-row>
        </el-form-item>
     <!-- 
          el-checkbox
          v-model默认值可以来一个空字符串，这样的的选择结果就是true/false
          el-link  type决定颜色 
        -->
~~~



## Element - ui表单 - 表单验证

[传送门](https://element.eleme.cn/#/zh-CN/component/form#biao-dan-yan-zheng)

数据验证:

1. 基本上接口都会验证数据，目的是避免错误数据提交
2. 前端一般也会验证数据，避免`正常用户的误操作`，降低服务器的性能消耗

```html
        <!-- el-form:整个表单  
            label-width整个表单下面所有标题的宽度
            model:绑定值,就是绑定整个表单的值 
            el-form-item是表单元素的每一项   label属性就是该项的标题
            rules绑定验证规则
              rules:{
                  名字：[]//后面是一个数组
                  名字（该名字来自于el-form-item里面的prop属性的值，它一定要是表单元素v-model的值）
                  
                  例：el-form-item下的表单元素的v-model="ruleForm.name" 那么el-form-item下的prop一定要是name
                  需要验证的子项才写prop
                  验证规则参数说明
                   { required: true, message: '请输入活动名称', trigger: 'blur' },
                   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                   required：必填，如果没填报错误信息message的值
                   message:错误提示信息
                   trigger:在什么情况下触发这个验证，有二个值供我们选择blur失焦  change  值改变的时候触发
                   min:最小长度
                   max：最大长度                   
              }
        -->
```

注意:

1. <el-form 
   1. rules属性，传入验证规则
2. form-item
   1. prop属性 和验证的规则相对应
3. data中定义rules属性
   1. 设置校验的规则
      1. required:必须
      2. message：提示的消息
      3. trigger：失去焦点
      4. min:最短长度
      5. max:最长长度

## Element - ui表单 - 验证方法及表单重置

> 默认的验证只局限于单个元素，如果想全部验证，要如何实现呢？

[传送门](https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze)

```javascript
methods: {
    submitForm(formName) {
        // 上面传入的 formName是 ruleForm
        // $refs作用是 获取 页面中使用ref标记的元素
        // 等同于 this.$refs['ruleForm'] 相当于获取到了el-form的this
        // this.$refs['ruleForm'] 等同于 this.$refs.ruleForm
        // validate这个方法是Element-ui的表单el-form的组件方法
        this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('对啦!');
                // 验证正确
            } else {
                alert("错啦")
                // 验证错误
                return false;
            }
        });
    },
    // 重置表单
    resetForm(formName) { formName要穿入的字符串啊
        // 等同于 this.$refs['ruleForm'] 相当于获取到了el-form的this
        // this.$refs['ruleForm'] 等同于 this.$refs.ruleForm
        // resetFields 也是Element-ui表单的方法
        this.$refs[formName].resetFields();
    }
}

```

注意:

1. element-ui示例代码中 通过`this.$refs[xxx]`的语法获取表单元素
2. 等价于`this.$refs.xxx`
3. `resetFields`,`validate`这两个方法都是element-ui提供的，其他元素无法使用







## ElementUI表单验证的使用

表单验证

1. 首先写好相应布局，绑定好相应数据

   ~~~
   el-form :   :model="表单对象"  
   el-form-item     el-input  v-model="表单对象的值"        
   ~~~
   
2. 定义绑定验证规则属性

   ~~~
   el-form rules属性   :rules="rules"
   rules它是一个对象
   ~~~
   
3. 设定需要验证的值，设置el-form-item  里面的prop属性

   ~~~
   el-form-item  prop属性的值就是表单元素后面v-model绑定的值，名字要一样
   v-model="form.phone"    prop="phone"
   
   ~~~

4. 在rules里面写相应的验证规则

   ~~~
   rules:{
   名字（prop定义的值）：[
   {required:true(是否必填), message:"错误信息",trigger:"blur/change"}
   {min:最小长度,max:最大长度，message:"",trigger:"blur/change"}
   ]
   }
   
   ~~~

js实现全表单验证

执行el-form组件上的validate方法

通过访问el-form组件的this来该用它的方法

1. 在el-form上定义一个ref属性  ref="值"
2. 访问el-form的this    this.$refs.值==el-form的this
3. this.$refs.值.validate((result)=>{//这里的result相当于就是全表单验证的结果true/false})

表单数据重置 this.$refs.值.resetFields()？？？？？？





## Element - ui 消息提示Alert 信息提示

[传送门](https://element.eleme.cn/#/zh-CN/component/message#message-xiao-xi-ti-shi)

```javascript
    this.$message('默认弹框')

    // this.$message({
    //     message: "你成功啦！！",
    //     type: 'success'
    // })
    this.$message.success('你成功啦')

    this.$message.warning('这是一个警告哦！！')

    this.$message.error('这是一个错误哦！！')


```



## 登录模块 - 表单验证

> 将刚刚弄好的表单验证整合到登录模块中，点击登录要触发验证哦

步骤

1. 密码:非空验证，6-12位长度验证
2. 验证码：非空，4位长度验证
3. `<el-form`,
   1. `ref=loginForm`
   2. `:rules=rules`
      1. rules定义在data中
4. `<el-item`
   1. `prop`校验的字段相对应
5. 登录按钮绑定点击事件
   1. 触发校验方法
      1. 对：成功弹框
      2. 错：错误弹框



## Element - ui 对话框

> 点击弹出的那个框框，是Element-ui提供的对话框组件

[传送门](https://element.eleme.cn/#/zh-CN/component/dialog#dialog-dui-hua-kuang)

```html

        <!-- Form -->
        <el-button type="text" @click="isSHow = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog center width="603px" title="用户注册" :visible.sync="isSHow">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isSHow = false">取 消</el-button>
                <el-button type="primary" @click="isSHow = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data: {
                isSHow: true,
                form: {
                    name: '',
                },
                // 左侧文本的间隙
                formLabelWidth: '120px'
            }
        })
    </script>

```

注意：

1. `el-dialog`
   1. 需要添加到页面上
   2. center
      1. 设置了就居中
      2. 不设置 两边
   3. width:对话框的宽度
   4. :visible.sync 是否显示
2. 内部可以嵌套其他的标签，用和该标签是一样的



register.vue

~~~vue
<template>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false
    };
  }
};
</script>
<style>
</style>

~~~



## 修改ElementUI提供的style自定义

```vue
<template>
  <el-dialog
    title="收货地址"
    :visible.sync="dialogFormVisible"
    class="register"
    :show-close="false"
    width="600px"
  >
    <h1 slot="title" class="dialogTitle">用户注册</h1>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false
    };
  }
};
</script>
<style lang="less">
.register {
  .el-dialog__header {
    padding: 0;
  }
  .dialogTitle {
    text-align: center;
    color: #fff;
    height: 53px;
    background-color: rgb(14, 156, 250);
    font-size: 18px;
    line-height: 53px;
  }
}
</style>

```





