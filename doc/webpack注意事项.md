#### entry

- `vendor` 框架代码。

#### output

- `path: path.resolve(__dirname, "browser/dist")` webpack编译代码目的地址。
- `filename: "[name].bundle.js"` webpack生成js文件名称，name是设置的模块名称。
- `chunkFilename` webpack设置的子模块名称。
- `publicPath` 公共地址，比如热部署时内存中的文件引用地址，代码分割时被分割的子模块引用路径地址。

#### module

- `babel-loader`使用babel配置转码js代码。
- `bundle-loader`结合react-router v4做react代码分割。
- `style-loader` `css-loader` 加载 CSS 需要 **css-loader** 和 **style-loader**，他们做两件不同的事情，**css-loader**会遍历 CSS 文件，然后找到 `url()` 表达式然后处理他们，**style-loader** 会把原来的 CSS 代码插入页面中的一个 style 标签中。
- `postcss-loader` 用于支持auto-profixer



https://webpack.js.org/loaders/less-loader/

