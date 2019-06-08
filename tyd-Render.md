-------------------------------------- 2019.06.07 端午节 -------------------------------------------------------
## 渲染模版
制定渲染语法， 根据语法填充数据。

### 变量语法
希望用双花括号来渲染变量。好像： 
``` js
// index.tyd 
  <div>my name is {{ name }} </div>
 
// data
  data = { name: 'combine' }
  
// 结果
  <div>my name is combine </div>
  
```
-------------------------------------- 2019.06.08 -------------------------------------------------------
## 实现
实现是比较容易的， 全局找出 `{{ params }}` 表达式，来替换就行了。如下
``` js
class Parser {
  parser(content, data) {
    const parserContent = content.replace(/\{\{\s*?([^\s]*?)\s*?\}\}/g, (...a) => {
      return data[a[1]];
    });
    return parserContent.trim();
  }
}
```
