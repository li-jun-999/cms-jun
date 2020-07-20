const path = require('path')

// 启用热更新的 第2步
const  webpack = require('webpack')

//引入在内存中生成html的插件
// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

//解决vue-loader加载不上的问题
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//这个配置文件，起始就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
    //打包前文件路径
    // 入口，表示，要使用 webpack 打包哪个文件
    entry:path.join(__dirname,'./src/main.js'),
    //打包后文件路径  打包文件命名
    // 输出文件相关的配置
    output:{
        path:path.join(__dirname,'./dist'), // 指定 打包好的文件，输出到哪个目录中去
        filename:'bundle.js', // 这是指定 输出的文件的名称
    },
    devServer:{
        open:true, //让服务自启动
        port:8050, //设置端口
        contentBase:'src' ,//设置程序启动根路径
        hot:true //设置服务热更新  热更新第一步
    },
    plugins:[// 配置插件的节点
        new webpack.HotModuleReplacementPlugin() ,// new 一个热更新的 模块对象， 这是 启用热更新的第 3 步

        new htmlWebpackPlugin({// 创建一个 在内存中 生成 HTML  页面的插件
            //要在内存中生成的html  硬盘中的路径
            template:path.join(__dirname,'./src/index.html'),
            //内存中指定生成的文件名称
            filename:'index.html'
        }),

        //解决vue-loader 加载不上的问题
        new VueLoaderPlugin()
    ],
    module:{//这个节点  用于配置所有第三方模块  加载器
        rules:[//所有第三方模块的 匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']} ,//配置处理.css文件   用加载器来处理
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//配置处理.less文件   用加载器来处理
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//配置处理.scss文件   用加载器来处理
            {test:/\.(png|jpg|gif|bmp|jpeg)$/,use:'url-loader?limit=87563&name=[hash:8]-[name].[ext]'},//处理图片路径  [name].[ext]原名称出现 第二个参数 让图片以原名称出现  并且在图片名称前面加哈希码32位
            // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 
            // 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},// 处理 字体文件的 loader  css中某些字体文件编译不过去需要加载器处理
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//解决es6高级语法，  exclude 属性排除掉不需要访问的文件夹
            {test:/\.vue$/,use:'vue-loader'}, // 处理 .vue 文件的 loader
        ]
    },
    resolve: {
        alias: {// 修改 Vue 被导入时候的包的路径
            "vue$": "vue/dist/vue.js"
        }
    }
}

// 当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
//  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
//  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；