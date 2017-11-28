#### 代码分割

> 随着前端项目功能越来多，代码量越来越大。webpack打包出来的代码包会越来越大。从而导致用户在加载页面的时候不得不加载所有页面的代码。
>
> 因此，采用代码分割的方式来分割webpack打包的代码，每次加载时只加载框架包和当前页面对于的功能代码。

**注意事项**

- webpack添加如下配置，同时安装模块`npm i D bundle-loader`

  ```javascript
   module: {
      rules: [
        {
          test: /\.bundle\.js$/,
          use: 'bundle-loader'
        }
      ]
    }
  ```


- 异步引用模块`bundle-loader?lazy&name=xxxx!./xxxx`  *lazy*设置懒加载，*name*设置模块别名。
- react有 `production` `development`两种开发模式。开发模式下有很多帮助调试的提示信息，在打包的时候可以使用webpack的 `DefinePlugin`设置为生产模式去掉提示语信息。

