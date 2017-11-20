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