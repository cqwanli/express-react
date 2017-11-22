#### 安装配置

1. 在项目下安装eslint组件`npm install eslint --save-dev`。
2. 设置一个配置文件`./node_modules/.bin/eslint --init`。
3. 如果你想使 ESLint 适用于你所有的项目，那么需要全局安装 ESLint `npm install -g eslint`。

#### eslint基本命令操作

- `eslint --init` 创建 `.eslintrc`配置文件。

- `eslint --fix [文件路径]` 安装设定的代码规则，自动修复匹配路径的代码规则。

- `eslint --debug [文件路径]`  查看eslint的debug日志。

- `eslint --env` 声明环境。

- `eslint --ext` 声明测试指定扩展名的文件。

- `--cache` 存储处理过的文件的信息以便只对有改变的文件进行操作。缓存默认被存储在 `.eslintcache`。可以通过`--cache-file`设置`.eslintcache`文件的地址。例如：

  ```shell
  eslint "src/**/*.js" --cache --cache-location "/Users/user/.eslintcache/"
  ```

#### eslint集成

##### eslint集成到webstorm

1. 下载Eslint插件，可以到`Preferences`中的`Plugins`中查询插件下载，如果下载失败，可以到网上下载插件，然后从本地安装。插件下载地址https://plugins.jetbrains.com/plugin/7494-eslint

2. 配置eslint插件。配置之后可以在项目中智能提示![config1](/Users/wanli/software/Templete/express-react/doc/files/config1.png)

3. 在工具栏添加eslint fix选项卡。如果项目中已经有了可以直接使用![Img2](/Users/wanli/software/Templete/express-react/doc/files/Img2.png)

4. 如果选项卡里没有这一栏时，可以配置Webstorm的Tools，打开settings -> Tools -> External Tools，点击添加按钮，做下图的配置

   1. $ProjectFileDir$ 指工程所在目录。
   2. $FilePathRelativeToProjectRoot$ 指文件相对于工程所在的路径。
   3. 如果你全局安装了eslint，也可以将执行程序指定为全局安装目录下的eslint.cmd，需要注意的是，此时，eslint依赖的库也需要全局安装。

   ![img3](/Users/wanli/software/Templete/express-react/doc/files/img3.png)

5. 配置完成后，右键点击.vue文件就会出现 External Tools -> eslint fix的选项![img4](/Users/wanli/software/Templete/express-react/doc/files/img4.png)

