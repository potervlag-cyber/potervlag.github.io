# HTML 入门完整指南：从页面骨架到常用标签

HTML 是学习网页制作的第一块地基。它不负责“计算逻辑”，也不负责“视觉样式”，而是负责告诉浏览器：页面里有哪些内容，这些内容分别代表什么。

你可以把 HTML 理解成网页的结构说明书：标题、段落、图片、链接、列表、表格、表单、文章区、侧边栏，这些都要先用 HTML 标记出来，之后 CSS 才能美化它，JavaScript 才能让它动起来。

## 1. HTML 的核心概念

HTML 的全称是 HyperText Markup Language，中文通常翻译为“超文本标记语言”。

- **标签（Tag）**：HTML 的基本语法单位，通常写在尖括号里，例如 `<p>`、`<a>`、`<img>`。
- **元素（Element）**：由开始标签、内容和结束标签组成，例如 `<p>这是一段文字</p>`。
- **属性（Attribute）**：写在开始标签里，用来补充元素信息，例如 `<a href="https://example.com">示例链接</a>` 里的 `href`。
- **嵌套（Nesting）**：一个元素放在另一个元素内部，例如列表 `<ul>` 里面包含多个 `<li>`。
- **空元素（Void Element）**：不需要结束标签的元素，例如 `<img>`、`<br>`、`<hr>`、`<input>`。

一个最简单的 HTML 元素长这样：

```html
<p class="intro">欢迎来到我的网页。</p>
```

这里的 `p` 是段落标签，`class="intro"` 是属性，`欢迎来到我的网页。` 是内容。

## 2. 标准网页骨架

每一个完整 HTML 页面都应该从标准骨架开始：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的第一个网页</title>
</head>
<body>
  <h1>欢迎来到我的网站</h1>
  <p>这是我写下的第一段网页内容。</p>
</body>
</html>
```

这段代码里最重要的部分是：

- `<!DOCTYPE html>`：声明这是现代 HTML5 文档。
- `<html lang="zh-CN">`：整个页面的根元素，并告诉浏览器页面主要语言是简体中文。
- `<head>`：网页的“后台信息区”，放字符集、标题、样式、脚本、SEO 信息等。
- `<meta charset="UTF-8">`：让中文、符号和表情能够正确显示。
- `<meta name="viewport">`：让网页在手机上按设备宽度显示，是响应式页面的基础。
- `<title>`：浏览器标签页标题，也会影响搜索结果展示。
- `<body>`：用户真正能看到的页面内容。

## 3. 文本与内容层级

HTML 不是只把文字塞到页面里，更重要的是表达内容层级。标题、段落、强调和分隔都应该选合适的标签。

### 标题标签

```html
<h1>网页主标题</h1>
<h2>一级小节标题</h2>
<h3>二级小节标题</h3>
```

`<h1>` 到 `<h6>` 表示从高到低的标题层级。通常一个页面只保留一个 `<h1>`，它代表页面最核心的主题。不要为了字体大小乱用标题标签，字体大小应该交给 CSS 控制。

### 段落、换行与分隔

```html
<p>这是一个完整的段落。</p>
<p>如果只是想另起一段，应该再写一个 p 标签。</p>

<p>这一行后面强制换行<br>这里会显示在下一行。</p>

<hr>
```

- `<p>`：表示段落。
- `<br>`：强制换行，只在确实需要同一段内换行时使用。
- `<hr>`：表示内容主题上的分隔，不只是画一条线。

### 强调文本

```html
<p>学习 HTML 时，<strong>语义</strong> 比单纯外观更重要。</p>
<p>这个词可以用 <em>强调语气</em> 来表达。</p>
```

- `<strong>`：表示重要内容，默认显示为加粗。
- `<em>`：表示语气强调，默认显示为斜体。

## 4. 链接、图片与列表

### 链接

链接是网页之间互相连接的关键：

```html
<a href="https://example.com">访问示例网站</a>
<a href="about.html">关于我</a>
<a href="#contact">跳转到联系方式</a>
```

如果链接要在新标签页打开，可以这样写：

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  新标签页打开
</a>
```

`target="_blank"` 会打开新标签页，`rel="noopener noreferrer"` 可以减少安全风险，是一个好习惯。

### 图片

```html
<img src="./images/dog.jpg" alt="一只小狗坐在草地上">
```

图片至少应该有两个核心属性：

- `src`：图片路径，可以是本地相对路径，也可以是网络图片地址。
- `alt`：替代文本。图片加载失败时会显示它，屏幕阅读器也会读出它。

不要把 `alt` 写成“图片”或“照片”这种空泛内容。更好的写法是描述图片传达的信息，例如“一只小狗坐在草地上”。

### 列表

无序列表适合没有固定顺序的内容：

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

有序列表适合步骤、排名、流程：

```html
<ol>
  <li>创建 HTML 文件</li>
  <li>写入页面骨架</li>
  <li>用浏览器打开预览</li>
</ol>
```

## 5. 语义化布局

早期网页经常用大量 `<div>` 拼页面，但现代 HTML 更推荐使用语义化标签。语义化标签能让页面结构更清晰，也更利于搜索引擎、辅助技术和后期维护。

常见语义化标签包括：

- `<header>`：页面或区域的头部。
- `<nav>`：导航区域。
- `<main>`：页面主体内容，一个页面通常只出现一次。
- `<article>`：一篇独立内容，例如博客文章、新闻、帖子。
- `<section>`：页面中的一个主题区块。
- `<aside>`：侧边栏、补充说明、相关推荐。
- `<footer>`：页面或区域的底部。

一个个人博客页面可以这样组织：

```html
<body>
  <header>
    <h1>我的前端笔记</h1>
    <nav>
      <a href="/">首页</a>
      <a href="/archive.html">归档</a>
      <a href="/about.html">关于我</a>
    </nav>
  </header>

  <main class="layout">
    <aside class="sidebar">
      <section class="profile-card">
        <img src="avatar.jpg" alt="站长头像">
        <h2>Potervlag</h2>
        <p>记录前端学习和网页设计。</p>
      </section>
    </aside>

    <section class="post-list">
      <article class="post-card">
        <h2>HTML 入门完整指南</h2>
        <p>从页面骨架、基础标签到语义化布局。</p>
        <a href="posts/html-01.html">阅读全文</a>
      </article>
    </section>
  </main>

  <footer>
    <p>© 2026 我的博客</p>
  </footer>
</body>
```

这里仍然可以使用 `div`，但它更适合做没有明确语义的包装容器。能用语义化标签表达含义时，优先选择语义化标签。

## 6. 表格：展示规整数据

表格应该用来展示二维数据，不应该用来做网页排版。

```html
<table>
  <caption>仓库库存表</caption>
  <thead>
    <tr>
      <th scope="col">SKU 编号</th>
      <th scope="col">货物名称</th>
      <th scope="col">库存状态</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WH-A-001</td>
      <td>人体工学椅</td>
      <td>库存充足</td>
    </tr>
    <tr>
      <td>WH-B-042</td>
      <td>机械键盘</td>
      <td>需补货</td>
    </tr>
  </tbody>
</table>
```

几个细节值得注意：

- `<caption>` 给表格添加标题。
- `<thead>` 放表头，`<tbody>` 放主体数据。
- `<th scope="col">` 能帮助浏览器和屏幕阅读器理解表头对应哪一列。
- 表格样式不要写在 HTML 里，边框、间距、颜色交给 CSS。

## 7. 表单：收集用户输入

表单是网页和用户交互的重要入口。登录、注册、搜索、评论、问卷都离不开表单。

```html
<form action="/message" method="post">
  <div>
    <label for="username">昵称</label>
    <input id="username" name="username" type="text" required>
  </div>

  <div>
    <label for="email">邮箱</label>
    <input id="email" name="email" type="email" required>
  </div>

  <div>
    <label for="message">留言</label>
    <textarea id="message" name="message" rows="5"></textarea>
  </div>

  <button type="submit">提交</button>
</form>
```

表单里有几个非常重要的习惯：

- `<label>` 的 `for` 要对应输入框的 `id`，点击文字就能聚焦输入框。
- `name` 是提交数据时的字段名，不要漏掉。
- `type="email"`、`type="password"`、`type="file"` 等类型能让浏览器提供更合适的输入体验。
- `required` 可以让浏览器在提交前做基础必填校验。
- `<button>` 最好明确写上 `type`，例如 `type="submit"` 或 `type="button"`。

## 8. 原生交互：details 与 summary

有些简单交互不用 JavaScript 也能完成，例如展开和折叠：

```html
<details>
  <summary>点击查看学习建议</summary>
  <p>每天写一个小页面，比只看教程更容易真正掌握 HTML。</p>
  <p>写完后用浏览器打开检查结构，再逐步加入 CSS。</p>
</details>
```

`<summary>` 是可点击标题，`<details>` 内部是展开后显示的内容。它适合 FAQ、补充说明、折叠答案、学习计划等场景。

## 9. HTML 最佳实践

写 HTML 时，建议养成这些习惯：

1. **保持缩进清晰**：嵌套关系要一眼能看出来。
2. **优先表达语义**：不要只想着页面长什么样，先想内容是什么。
3. **一个页面保留一个主标题**：通常只写一个 `<h1>`，再用 `<h2>`、`<h3>` 分层。
4. **图片一定写有意义的 alt**：这对可访问性非常重要。
5. **链接文字要具体**：尽量写“查看 HTML 指南”，不要只写“点击这里”。
6. **表格只用于数据**：页面布局应该交给 CSS，而不是表格。
7. **给 CSS 留 class 钩子**：例如 `class="post-card"`、`class="sidebar"`，方便后续美化。
8. **不要把样式混进结构里**：尽量少写内联样式，让 HTML、CSS、JavaScript 分工清楚。
9. **检查标签是否闭合**：尤其是多层嵌套时，少一个结束标签很容易导致页面结构错乱。
10. **从小页面开始练习**：先写个人介绍页、文章卡片、留言表单，再逐步组合成完整网站。

## 10. 一个小练习

如果你刚学完这篇，可以试着写一个 `index.html`，要求包含：

- 一个页面标题。
- 一段自我介绍。
- 一张头像图片。
- 一个包含三项内容的技能列表。
- 一个外部链接。
- 一个简单留言表单。
- 使用 `header`、`main`、`section`、`footer` 组织页面。

练习时先不用追求好看。HTML 的第一目标是结构正确、语义清楚；当结构稳定后，再用 CSS 把它变漂亮。

## 11. 下一步：继续学习 HTML 第二课

如果你已经能写出基础页面骨架，并且理解标题、段落、图片、链接、列表、表格、表单和语义化布局的作用，就可以继续阅读 `html-02`。

第二课会继续讲更完整的 `<head>` 区域、资源路径、`id` 和 `class`、文本级语义标签、响应式图片、媒体标签、表单进阶、可访问性和完整作品集页面练习。也就是说，第一课解决“有哪些常用标签”，第二课解决“怎样把它们组织成更像真实项目的网页”。
