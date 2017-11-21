#### postcss安装及基本配置

> 创建postcss配置文件 `postcss.config.js` 配置文件

#### postcss模块集成

- 添加autoprefixer功能，在配置文件中添加如下配置

  ```javascript
  module.exports = {
    plugins: [
      require('autoprefixer')
    ]
  }
  ```

  ​

