# HTML 第二课：页面结构、资源路径、表单进阶与可访问性

上一篇 `html-01` 解决的是“HTML 是什么、页面骨架怎么写、常用标签有哪些”。学到那里，你已经可以写出一个结构正确的简单网页。

这一篇继续往下走，目标是让你不只是“会写标签”，而是能开始像真正做网页一样组织页面：知道 `<head>` 里该放什么，资源路径为什么会失效，`id` 和 `class` 怎么设计，表单如何写得更完整，图片和媒体怎样更规范，以及怎样让网页对搜索引擎、手机用户和辅助技术更友好。

你可以把这篇理解成 HTML 的第二层地基：它不追求炫酷效果，但会让你的网页更稳定、更清楚、更专业。

## 1. 本课学习目标

学完这一篇，你应该能做到：

1. 看懂并能独立写出更完整的 `<head>` 区域。
2. 分清相对路径、绝对路径、根路径，减少图片和链接失效。
3. 合理使用 `id`、`class` 和锚点跳转。
4. 用语义化标签组织一篇文章页、作品页或个人主页。
5. 使用更多文本语义标签表达引用、代码、缩写、标记等内容。
6. 正确写图片、图注、音频、视频和响应式图片。
7. 写出更完整、更可用的表单。
8. 理解 HTML 层面的可访问性习惯。
9. 用检查清单排查常见 HTML 错误。
10. 独立完成一个“个人作品集首页”的 HTML 结构。

如果你现在还记不住所有标签，不用紧张。HTML 的学习重点不是背标签大全，而是理解“内容是什么，就选什么标签表达它”。

## 2. 更完整的 head 区域

`<head>` 里的内容大多不会直接显示在页面主体里，但它非常重要。它影响中文是否乱码、手机页面是否正常缩放、浏览器标签页显示什么、搜索引擎如何理解页面、社交平台分享时显示什么，以及 CSS 和 JavaScript 如何加载。

一个更完整的 `<head>` 可以这样写：

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Potervlag 的前端学习笔记</title>
  <meta name="description" content="记录 HTML、CSS、JavaScript 与网页设计学习过程的个人博客。">
  <meta name="author" content="Potervlag">

  <link rel="icon" href="./images/favicon.ico">
  <link rel="stylesheet" href="./styles/main.css">

  <meta property="og:title" content="Potervlag 的前端学习笔记">
  <meta property="og:description" content="记录前端学习和网页设计的个人博客。">
  <meta property="og:type" content="website">
  <meta property="og:image" content="./images/share-cover.jpg">
</head>
```

下面逐个解释。

### charset：字符编码

```html
<meta charset="UTF-8">
```

这行应该尽量写在 `<head>` 的最前面。它告诉浏览器用 UTF-8 编码解析页面。中文、英文、标点、数学符号、表情符号都可以用 UTF-8 很好地表示。

如果缺少这行，或者文件本身编码和声明不一致，就可能出现中文乱码。

### viewport：手机端显示规则

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

这行对移动端非常重要。

- `width=device-width`：让页面宽度等于设备屏幕宽度。
- `initial-scale=1.0`：初始缩放比例为 1。

如果没有这行，手机浏览器可能会假装页面是一个很宽的桌面网页，然后把它整体缩小，结果文字会变得很小，布局也不好控制。

### title：页面标题

```html
<title>HTML 第二课：页面结构与表单进阶</title>
```

`<title>` 会显示在浏览器标签页、收藏夹和搜索结果中。它不是页面里可见的 `<h1>`，但两者应该互相关联。

一个好的标题通常具备这些特点：

- 能准确说明当前页面内容。
- 不要过长，避免搜索结果中被截断。
- 不要每个页面都写同一个标题。
- 文章页可以使用“文章标题 - 网站名”的形式。

例如：

```html
<title>HTML 第二课：页面结构与表单进阶 - Potervlag 的博客</title>
```

### description：页面简介

```html
<meta name="description" content="学习 HTML 文档头部、资源路径、语义化结构、表单进阶和可访问性。">
```

`description` 是页面摘要。它不一定会直接显示在页面中，但搜索引擎和分享工具可能会读取它。

写简介时不要堆关键词。比较好的写法是用一两句话说明页面真正提供了什么。

### link：加载外部资源

常见写法：

```html
<link rel="stylesheet" href="./styles/main.css">
<link rel="icon" href="./images/favicon.ico">
```

`<link>` 用来连接外部资源。

- `rel="stylesheet"` 表示加载 CSS 样式表。
- `rel="icon"` 表示设置网站图标。
- `href` 写资源路径。

注意：`<link>` 是空元素，不需要写 `</link>`。

### script：加载 JavaScript

虽然 JavaScript 不属于 HTML 的核心语义内容，但 HTML 负责把脚本引入页面。

推荐写法：

```html
<script src="./scripts/main.js" defer></script>
```

`defer` 的意思是：脚本可以先下载，但等 HTML 解析完成后再执行。这样可以减少脚本阻塞页面渲染的问题。

如果脚本需要操作页面中的元素，`defer` 通常是很好的选择。

也可以把脚本放在 `</body>` 之前：

```html
  <script src="./scripts/main.js"></script>
</body>
```

初学时记住一条就够了：不要把大量 JavaScript 直接塞进 HTML 结构中，尽量让 HTML、CSS、JavaScript 分工清楚。

### Open Graph：分享卡片信息

下面这些 `meta` 常用于社交平台、聊天软件或链接预览：

```html
<meta property="og:title" content="HTML 第二课：页面结构与表单进阶">
<meta property="og:description" content="继续学习更完整的 HTML 页面组织方式。">
<meta property="og:type" content="article">
<meta property="og:image" content="./images/html-02-cover.jpg">
```

你不一定一开始就要写全，但如果以后做个人博客、作品集或正式网站，它们会很有用。

## 3. 资源路径：为什么图片经常加载不出来

初学 HTML 时，最常见的问题之一就是：明明图片在文件夹里，页面却显示不出来。

这通常不是 `<img>` 标签错了，而是路径写错了。

假设项目结构是这样：

```text
my-site/
  index.html
  about.html
  images/
    avatar.jpg
    dog.jpg
  posts/
    html-01.md
    html-02.md
  styles/
    main.css
```

### 相对路径

相对路径是从“当前文件所在位置”出发去找资源。

如果当前文件是 `index.html`，要找 `images/avatar.jpg`：

```html
<img src="./images/avatar.jpg" alt="站长头像">
```

这里的 `./` 表示当前目录。你也可以写成：

```html
<img src="images/avatar.jpg" alt="站长头像">
```

两者在这个场景下效果一样。

如果当前文件在 `posts/html-02.html`，要找上一级目录里的 `images/avatar.jpg`，就要写：

```html
<img src="../images/avatar.jpg" alt="站长头像">
```

`../` 表示回到上一级目录。

### 绝对网址

如果资源来自网络，可以写完整网址：

```html
<img src="https://example.com/images/banner.jpg" alt="网站横幅图">
```

这种路径和你本地文件夹结构无关，但依赖网络资源。如果对方图片删除、改名、防盗链或网络不可用，图片也会失效。

### 根路径

根路径从网站根目录开始，通常以 `/` 开头：

```html
<a href="/about.html">关于我</a>
<img src="/images/avatar.jpg" alt="站长头像">
```

在正式部署到域名根目录时，这很方便。但在 GitHub Pages 的项目站点、子目录部署或本地直接打开 HTML 文件时，根路径可能和你想的不一样。

如果你的网站部署在：

```text
https://username.github.io/project-name/
```

那么 `/images/avatar.jpg` 可能会指向：

```text
https://username.github.io/images/avatar.jpg
```

而不是：

```text
https://username.github.io/project-name/images/avatar.jpg
```

所以初学阶段，如果你还不确定部署方式，使用相对路径通常更安全。

### 路径排查清单

当资源加载失败时，可以按这个顺序检查：

1. 文件名是否完全一致，包括大小写。
2. 文件后缀是否正确，例如 `.jpg`、`.jpeg`、`.png`、`.webp`。
3. 当前 HTML 文件和目标资源之间的目录关系是否写对。
4. 路径里是否有中文、空格或特殊符号导致问题。
5. 浏览器开发者工具的 Network 面板是否显示 404。
6. 部署后路径是否因为网站根目录变化而失效。

路径问题很烦，但它也很适合练习“从当前文件出发找资源”的空间感。多画几次文件夹结构图，很快就会顺。

## 4. id、class 与锚点跳转

`id` 和 `class` 是 HTML 中非常常见的属性。它们本身不改变页面外观，但会给 CSS、JavaScript 和页面跳转提供“定位点”。

### id：页面内唯一标识

```html
<section id="about">
  <h2>关于我</h2>
  <p>我正在学习前端开发。</p>
</section>
```

`id` 应该在同一个页面里保持唯一。你可以把它理解成元素的身份证号。

常见用途：

- 页面内锚点跳转。
- JavaScript 精确查找某个元素。
- 表单 `label` 绑定输入框。
- `aria-describedby` 等可访问性关联。

锚点跳转示例：

```html
<nav>
  <a href="#about">关于我</a>
  <a href="#projects">作品</a>
  <a href="#contact">联系</a>
</nav>

<section id="about">
  <h2>关于我</h2>
</section>

<section id="projects">
  <h2>作品</h2>
</section>

<section id="contact">
  <h2>联系</h2>
</section>
```

点击 `href="#projects"` 的链接时，浏览器会滚动到 `id="projects"` 的区域。

### class：一组元素的共同分类

```html
<article class="post-card">
  <h2>HTML 入门完整指南</h2>
  <p>从网页骨架开始学习 HTML。</p>
</article>

<article class="post-card featured">
  <h2>HTML 第二课</h2>
  <p>继续学习页面结构和表单进阶。</p>
</article>
```

`class` 可以重复使用，也可以一个元素写多个 class。它更像“分类标签”。

常见用途：

- 给 CSS 提供样式钩子。
- 给 JavaScript 批量选择元素。
- 表达某个元素的状态，例如 `active`、`featured`、`is-open`。

### 命名建议

命名没有唯一标准，但要尽量清楚、稳定、可读。

推荐：

```html
<section class="profile-card">
<article class="post-card">
<form class="contact-form">
<button class="submit-button">
```

不推荐：

```html
<section class="box1">
<article class="aaa">
<form class="red-big-left">
```

`red-big-left` 这种名字把样式写进了命名里。如果以后颜色不红、尺寸不大、位置不在左边，名字就会很尴尬。更好的命名应该描述“它是什么”，而不是“它现在长什么样”。

## 5. 从内容清单到语义化页面

写 HTML 前，不要急着敲标签。先问自己：页面里有哪些内容？这些内容之间是什么关系？

例如一个个人作品集首页，内容可能包括：

1. 网站标题和导航。
2. 一段自我介绍。
3. 技能列表。
4. 作品列表。
5. 学习经历或时间线。
6. 联系方式。
7. 页脚版权信息。

把内容清单整理出来后，再选择语义化标签：

```html
<body>
  <header>
    <h1>Potervlag 的作品集</h1>
    <nav aria-label="主导航">
      <a href="#about">关于我</a>
      <a href="#skills">技能</a>
      <a href="#projects">作品</a>
      <a href="#contact">联系</a>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>关于我</h2>
      <p>我正在学习 HTML、CSS 和 JavaScript，希望做出清晰又好看的网页。</p>
    </section>

    <section id="skills">
      <h2>技能</h2>
      <ul>
        <li>使用 HTML 搭建页面结构</li>
        <li>使用 CSS 设计视觉样式</li>
        <li>使用 JavaScript 添加交互</li>
      </ul>
    </section>

    <section id="projects">
      <h2>作品</h2>

      <article>
        <h3>个人博客首页</h3>
        <p>一个展示文章列表、个人信息和导航的静态网页。</p>
        <a href="./blog.html">查看作品</a>
      </article>
    </section>

    <section id="contact">
      <h2>联系我</h2>
      <p>可以通过邮箱联系我：<a href="mailto:hello@example.com">hello@example.com</a></p>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Potervlag</p>
  </footer>
</body>
```

这段结构没有任何 CSS，但它已经能表达页面的内容关系。

### section 和 article 怎么区分

`<section>` 表示页面中的一个主题区块。它通常应该有自己的标题。

```html
<section id="skills">
  <h2>技能</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</section>
```

`<article>` 表示一块可以独立分发、独立阅读的内容。

适合用 `<article>` 的内容：

- 博客文章。
- 新闻报道。
- 论坛帖子。
- 商品卡片。
- 作品卡片。
- 评论。

例如作品列表里的每一个作品都可以是一个 `article`：

```html
<section id="projects">
  <h2>作品</h2>

  <article>
    <h3>天气卡片</h3>
    <p>展示城市、天气、温度和空气质量的小组件。</p>
  </article>

  <article>
    <h3>读书笔记页面</h3>
    <p>整理阅读摘录、章节总结和个人感想。</p>
  </article>
</section>
```

### aside 不一定只能放右侧

很多人以为 `<aside>` 就是“右侧栏”。其实它的核心语义是补充内容，不是位置。

例如：

```html
<article>
  <h2>学习 HTML 的方法</h2>
  <p>每天写一个小页面，比只看教程更有效。</p>

  <aside>
    <h3>补充建议</h3>
    <p>可以把每天练习的页面都放进同一个作品集里。</p>
  </aside>
</article>
```

即使 CSS 把它放在正文下方，它仍然可以是 `<aside>`。

## 6. 文本级语义标签

上一篇已经讲过 `<p>`、`<strong>`、`<em>`。这一节继续补充一些常见文本级标签。

### span：没有语义的行内容器

`<span>` 本身没有特殊语义，适合包住一小段文本，交给 CSS 或 JavaScript 处理。

```html
<p>当前状态：<span class="status">学习中</span></p>
```

不要滥用 `<span>`。如果有更准确的语义标签，优先用语义标签。

### small：附属说明

```html
<p>订阅课程 <small>可随时取消</small></p>
```

`<small>` 表示附属说明、免责声明、版权说明等。它不是单纯“让字变小”的工具。

### mark：高亮标记

```html
<p>搜索结果中包含关键词：<mark>HTML 表单</mark></p>
```

`<mark>` 表示因为当前上下文而被标记的内容，常见于搜索结果高亮。

### abbr：缩写

```html
<p><abbr title="HyperText Markup Language">HTML</abbr> 是网页结构语言。</p>
```

`title` 里写缩写的完整含义。用户把鼠标移到缩写上时，浏览器通常会显示提示。

### code、pre：代码内容

行内代码：

```html
<p>段落标签是 <code>&lt;p&gt;</code>。</p>
```

多行代码：

```html
<pre><code>&lt;section&gt;
  &lt;h2&gt;标题&lt;/h2&gt;
  &lt;p&gt;正文内容&lt;/p&gt;
&lt;/section&gt;</code></pre>
```

注意在 HTML 页面中展示 `<p>` 这种标签文本时，要写成 `&lt;p&gt;`，否则浏览器会把它当成真正的标签解析。

### blockquote 和 cite：引用

长引用可以用 `<blockquote>`：

```html
<blockquote cite="https://example.com/article">
  <p>语义化 HTML 的目标，是让内容结构比视觉样式更先被理解。</p>
</blockquote>
```

引用作品名、文章名或来源名称时，可以用 `<cite>`：

```html
<p>这段观点摘自 <cite>前端学习笔记</cite>。</p>
```

### time：机器可读的时间

```html
<p>发布于 <time datetime="2026-05-01">2026 年 5 月 1 日</time></p>
```

`datetime` 给机器读取，标签中的文字给用户阅读。这样既保留可读性，也让程序更容易理解时间。

### kbd：键盘输入

```html
<p>按 <kbd>Ctrl</kbd> + <kbd>S</kbd> 保存文件。</p>
```

`<kbd>` 表示用户需要按下的键盘按键。

### sup 和 sub：上标与下标

```html
<p>水的化学式是 H<sub>2</sub>O。</p>
<p>平方可以写作 x<sup>2</sup>。</p>
```

`<sub>` 是下标，`<sup>` 是上标。

## 7. HTML 实体：如何显示特殊字符

有些字符在 HTML 中有特殊意义，例如 `<` 和 `>` 会被当成标签边界。如果你想把它们作为普通文字显示，就需要使用 HTML 实体。

常见实体：

```html
&lt;      <!-- 小于号 < -->
&gt;      <!-- 大于号 > -->
&amp;     <!-- & 符号 -->
&quot;    <!-- 双引号 " -->
&apos;    <!-- 单引号 ' -->
&nbsp;    <!-- 不换行空格 -->
&copy;    <!-- 版权符号 © -->
```

示例：

```html
<p>段落标签写作：&lt;p&gt;这是一段文字&lt;/p&gt;</p>
<p>&copy; 2026 Potervlag</p>
```

不要为了缩进或排版大量使用 `&nbsp;`。页面排版应该交给 CSS。

## 8. 图片、图注与响应式图片

图片不只是 `<img>` 这么简单。写得更规范，可以让页面加载更稳定，也更适合手机和无障碍场景。

### img 的核心属性

```html
<img
  src="./images/avatar.jpg"
  alt="Potervlag 的头像"
  width="240"
  height="240"
  loading="lazy"
>
```

重要属性：

- `src`：图片路径。
- `alt`：替代文本。
- `width` 和 `height`：图片原始或预期显示尺寸，有助于浏览器预留空间，减少页面跳动。
- `loading="lazy"`：延迟加载图片，适合页面下方的非首屏图片。

如果图片是纯装饰，不传递信息，可以写空 alt：

```html
<img src="./images/divider.png" alt="">
```

空 `alt` 的意思是告诉屏幕阅读器：这张图可以忽略。

但如果图片包含重要信息，就必须写清楚。

### figure 和 figcaption

当图片需要配图说明时，推荐用 `<figure>` 和 `<figcaption>`：

```html
<figure>
  <img src="./images/workspace.jpg" alt="桌面上放着笔记本电脑、键盘和一杯咖啡">
  <figcaption>我的前端学习桌面。</figcaption>
</figure>
```

`<figure>` 表示一块独立的图文内容，`<figcaption>` 是它的说明。

它不仅能用于图片，也能用于代码、图表、插画等内容。

### srcset：根据屏幕选择图片

不同设备屏幕密度不同。高清屏可能需要更清晰的图片。

```html
<img
  src="./images/avatar-240.jpg"
  srcset="./images/avatar-240.jpg 1x, ./images/avatar-480.jpg 2x"
  alt="Potervlag 的头像"
  width="240"
  height="240"
>
```

这里的意思是：

- 普通屏幕使用 `avatar-240.jpg`。
- 2 倍高清屏可以使用 `avatar-480.jpg`。

### sizes：根据布局宽度选择图片

如果图片在不同屏幕下显示宽度不同，可以使用：

```html
<img
  src="./images/cover-800.jpg"
  srcset="./images/cover-480.jpg 480w, ./images/cover-800.jpg 800w, ./images/cover-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 800px"
  alt="一张展示前端代码编辑器的封面图"
>
```

含义大致是：

- 浏览器知道有 480、800、1200 三种宽度的图片可选。
- 当视口宽度小于等于 600px 时，图片大约占满屏幕宽度。
- 其他情况下，图片显示宽度约为 800px。

浏览器会根据设备、网络和显示需求自动选择更合适的文件。

### picture：根据条件切换图片

如果你想在手机端和桌面端使用不同构图的图片，可以用 `<picture>`：

```html
<picture>
  <source media="(max-width: 600px)" srcset="./images/banner-mobile.jpg">
  <source media="(min-width: 601px)" srcset="./images/banner-desktop.jpg">
  <img src="./images/banner-desktop.jpg" alt="前端学习计划横幅">
</picture>
```

`<img>` 是兜底内容，必须保留。

## 9. 音频、视频与嵌入内容

HTML5 提供了原生媒体标签，不需要额外插件就能播放音频和视频。

### audio：音频

```html
<audio controls>
  <source src="./media/lesson.mp3" type="audio/mpeg">
  <source src="./media/lesson.ogg" type="audio/ogg">
  当前浏览器不支持音频播放。
</audio>
```

`controls` 会显示浏览器自带的播放控件。

多个 `<source>` 可以提供不同格式，浏览器会选择自己支持的版本。

### video：视频

```html
<video controls width="720" poster="./images/video-cover.jpg">
  <source src="./media/demo.mp4" type="video/mp4">
  <source src="./media/demo.webm" type="video/webm">
  当前浏览器不支持视频播放。
</video>
```

常见属性：

- `controls`：显示播放控件。
- `poster`：视频播放前显示的封面图。
- `width` 和 `height`：设置视频尺寸。
- `muted`：静音。
- `loop`：循环播放。
- `autoplay`：自动播放，现代浏览器通常要求配合 `muted` 才允许。

不要滥用自动播放。尤其是带声音的视频，会非常打扰用户。

### iframe：嵌入其他页面

`<iframe>` 可以嵌入地图、视频、在线文档或其他网页。

```html
<iframe
  src="https://example.com"
  title="示例网页"
  width="640"
  height="360"
  loading="lazy"
></iframe>
```

注意：

- 一定要写 `title`，让屏幕阅读器知道嵌入内容是什么。
- 不要随便嵌入不可信网站。
- 嵌入内容可能影响页面性能。
- 有些网站会禁止被 iframe 嵌入。

## 10. 链接的更多写法

上一篇讲过普通链接。这一节补充几种常见场景。

### 页面内跳转

```html
<a href="#top">回到顶部</a>
```

目标位置：

```html
<header id="top">
  <h1>我的网页</h1>
</header>
```

### 邮箱链接

```html
<a href="mailto:hello@example.com">发送邮件</a>
```

也可以预填主题：

```html
<a href="mailto:hello@example.com?subject=作品集合作咨询">联系我</a>
```

### 电话链接

```html
<a href="tel:+8613800000000">拨打电话</a>
```

手机端点击后通常会唤起拨号。

### 下载链接

```html
<a href="./files/resume.pdf" download>下载简历</a>
```

`download` 提示浏览器下载文件，而不是直接打开。不过它是否生效也会受到浏览器和跨域策略影响。

### 好的链接文字

不推荐：

```html
<a href="./html-02.html">点击这里</a>
```

推荐：

```html
<a href="./html-02.html">阅读 HTML 第二课</a>
```

链接文字应该脱离上下文也能说明目的地。这样对用户、搜索引擎和屏幕阅读器都更友好。

## 11. 表格进阶：让数据更容易理解

上一篇已经讲过基本表格。这里补充几个让表格更规范的写法。

### caption：表格标题

```html
<table>
  <caption>前端学习计划表</caption>
  <thead>
    <tr>
      <th scope="col">阶段</th>
      <th scope="col">内容</th>
      <th scope="col">目标</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">第一周</th>
      <td>HTML 基础</td>
      <td>能写出个人介绍页</td>
    </tr>
    <tr>
      <th scope="row">第二周</th>
      <td>CSS 基础</td>
      <td>能美化页面布局</td>
    </tr>
  </tbody>
</table>
```

这里有两个细节：

- `scope="col"` 表示这个表头对应一列。
- `scope="row"` 表示这个表头对应一行。

这能帮助辅助技术理解表格结构。

### 不要用表格做布局

不推荐：

```html
<table>
  <tr>
    <td>侧边栏</td>
    <td>主要内容</td>
  </tr>
</table>
```

推荐用语义化结构：

```html
<main class="page-layout">
  <aside>
    <h2>个人信息</h2>
  </aside>

  <section>
    <h2>文章列表</h2>
  </section>
</main>
```

布局交给 CSS，数据表格才交给 `<table>`。

## 12. 表单进阶：从“能输入”到“好使用”

表单是 HTML 中非常重要也非常容易写糟的部分。一个好的表单不仅能提交数据，还应该清楚、好填、可访问、能给用户必要提示。

### form 的 action 和 method

```html
<form action="/messages" method="post">
  ...
</form>
```

- `action`：表单提交到哪里。
- `method`：提交方式。

常见 `method`：

- `get`：数据会出现在 URL 查询参数中，适合搜索、筛选这类可分享的请求。
- `post`：数据放在请求体中，适合登录、注册、留言、上传等会产生数据变化的请求。

搜索表单可以用 `get`：

```html
<form action="/search" method="get">
  <label for="keyword">搜索关键词</label>
  <input id="keyword" name="q" type="search">
  <button type="submit">搜索</button>
</form>
```

如果输入 `html`，提交后 URL 可能变成：

```text
/search?q=html
```

### label 必须认真写

不推荐：

```html
<p>邮箱</p>
<input type="email" name="email">
```

推荐：

```html
<label for="email">邮箱</label>
<input id="email" name="email" type="email" autocomplete="email" required>
```

`label` 的好处：

- 点击文字也能聚焦输入框。
- 屏幕阅读器能读出输入框含义。
- 表单结构更清楚。

也可以包裹写法：

```html
<label>
  昵称
  <input name="nickname" type="text">
</label>
```

但复杂表单里更推荐 `for` 加 `id`，因为可读性更强。

### name 才是提交字段名

```html
<input id="email" name="email" type="email">
```

`id` 是页面内定位用的，`name` 是提交数据用的。

如果没有 `name`，这个输入框的值通常不会被提交。

### 常见 input 类型

```html
<input type="text">
<input type="email">
<input type="password">
<input type="search">
<input type="url">
<input type="tel">
<input type="number">
<input type="date">
<input type="time">
<input type="color">
<input type="file">
<input type="checkbox">
<input type="radio">
```

选择合适的 `type` 有几个好处：

- 手机端会弹出更合适的键盘。
- 浏览器可以做基础格式校验。
- 代码语义更清楚。

例如邮箱：

```html
<input type="email" name="email">
```

网址：

```html
<input type="url" name="website">
```

数字：

```html
<input type="number" name="age" min="1" max="120">
```

### placeholder 不是 label

不推荐：

```html
<input type="email" placeholder="请输入邮箱">
```

更推荐：

```html
<label for="email">邮箱</label>
<input id="email" name="email" type="email" placeholder="name@example.com">
```

`placeholder` 是提示示例，不是字段名称。用户开始输入后，placeholder 会消失。如果只靠 placeholder，用户可能忘记这个输入框要填什么。

### fieldset 和 legend：给一组表单控件命名

单选和复选通常是一组问题，应该用 `<fieldset>` 包起来。

```html
<fieldset>
  <legend>你最想学习的方向</legend>

  <label>
    <input type="radio" name="track" value="html" checked>
    HTML 结构
  </label>

  <label>
    <input type="radio" name="track" value="css">
    CSS 样式
  </label>

  <label>
    <input type="radio" name="track" value="javascript">
    JavaScript 交互
  </label>
</fieldset>
```

同一组单选按钮要使用相同的 `name`，这样浏览器才知道它们互斥，只能选一个。

复选框可以选多个：

```html
<fieldset>
  <legend>你希望收到哪些内容</legend>

  <label>
    <input type="checkbox" name="topics" value="article">
    新文章提醒
  </label>

  <label>
    <input type="checkbox" name="topics" value="project">
    作品更新
  </label>

  <label>
    <input type="checkbox" name="topics" value="note">
    学习笔记
  </label>
</fieldset>
```

### select：下拉选择

```html
<label for="level">当前水平</label>
<select id="level" name="level">
  <option value="">请选择</option>
  <option value="beginner">刚入门</option>
  <option value="practice">正在练习</option>
  <option value="project">能做小项目</option>
</select>
```

`option` 的 `value` 是提交给服务器的值，标签中间的文字是用户看到的内容。

### textarea：多行文本

```html
<label for="message">留言</label>
<textarea id="message" name="message" rows="6" maxlength="500"></textarea>
```

`rows` 控制默认显示多少行，`maxlength` 限制最多输入多少字符。

### datalist：输入建议

```html
<label for="city">城市</label>
<input id="city" name="city" list="city-options">

<datalist id="city-options">
  <option value="北京">
  <option value="上海">
  <option value="广州">
  <option value="深圳">
</datalist>
```

`datalist` 和 `select` 不一样：用户可以从建议里选，也可以输入别的内容。

### 基础校验属性

```html
<input type="text" name="username" required minlength="2" maxlength="20">
<input type="email" name="email" required>
<input type="number" name="score" min="0" max="100" step="1">
<input type="text" name="code" pattern="[A-Za-z0-9]{6}">
```

常见属性：

- `required`：必填。
- `minlength`：最少字符数。
- `maxlength`：最多字符数。
- `min`：最小值。
- `max`：最大值。
- `step`：数字步长。
- `pattern`：正则表达式校验。

浏览器原生校验适合做基础提醒，但真正重要的数据校验仍然需要服务器端完成。前端校验是体验，后端校验是安全。

### autocomplete：帮助用户自动填写

```html
<input type="email" name="email" autocomplete="email">
<input type="text" name="name" autocomplete="name">
<input type="tel" name="phone" autocomplete="tel">
```

合理使用 `autocomplete` 可以让浏览器帮用户快速填写常见信息。

### disabled 和 readonly 的区别

```html
<input name="student-id" value="A001" readonly>
<input name="system-id" value="SYS-9527" disabled>
```

- `readonly`：只读，用户不能修改，但通常会随表单提交。
- `disabled`：禁用，用户不能操作，通常也不会随表单提交。

如果你只是想让用户不能改，但仍然需要提交这个值，优先考虑 `readonly`。

### 一个完整的联系表单示例

```html
<form action="/contact" method="post" class="contact-form">
  <fieldset>
    <legend>基本信息</legend>

    <div class="form-row">
      <label for="name">姓名</label>
      <input id="name" name="name" type="text" autocomplete="name" required>
    </div>

    <div class="form-row">
      <label for="email">邮箱</label>
      <input id="email" name="email" type="email" autocomplete="email" required>
    </div>

    <div class="form-row">
      <label for="website">个人网站</label>
      <input id="website" name="website" type="url" placeholder="https://example.com">
    </div>
  </fieldset>

  <fieldset>
    <legend>咨询内容</legend>

    <div class="form-row">
      <label for="topic">主题</label>
      <select id="topic" name="topic" required>
        <option value="">请选择一个主题</option>
        <option value="study">学习交流</option>
        <option value="project">项目合作</option>
        <option value="feedback">网站反馈</option>
      </select>
    </div>

    <div class="form-row">
      <label for="message">留言</label>
      <textarea id="message" name="message" rows="6" minlength="10" maxlength="500" required></textarea>
    </div>
  </fieldset>

  <fieldset>
    <legend>订阅偏好</legend>

    <label>
      <input type="checkbox" name="subscribe" value="yes">
      接收后续学习笔记更新
    </label>
  </fieldset>

  <button type="submit">发送留言</button>
</form>
```

这个表单已经具备了很多好习惯：

- 每个主要输入控件都有 `label`。
- 每个需要提交的字段都有 `name`。
- 使用 `fieldset` 和 `legend` 分组。
- 使用了合适的输入类型。
- 使用了基础校验。
- 按钮明确写在表单最后。

## 13. 可访问性：让更多人能使用你的网页

可访问性常被写作 a11y，意思是让网页尽可能被不同能力、不同设备、不同环境下的人使用。

它不是“额外的高级功能”，而是好 HTML 的一部分。

### 保持正确的标题层级

推荐：

```html
<h1>HTML 学习笔记</h1>
<h2>页面结构</h2>
<h3>header 的作用</h3>
<h2>表单基础</h2>
```

不推荐：

```html
<h1>HTML 学习笔记</h1>
<h4>页面结构</h4>
<h2>header 的作用</h2>
```

标题不是为了控制字体大小，而是为了表达内容层级。字体大小交给 CSS。

### 图片 alt 要看图片用途

信息型图片：

```html
<img src="./images/chart.png" alt="2026 年 1 月到 4 月博客访问量逐月上升">
```

头像：

```html
<img src="./images/avatar.jpg" alt="Potervlag 的头像">
```

纯装饰图片：

```html
<img src="./images/wave-divider.svg" alt="">
```

不要机械地每张图都写一大段，也不要所有图片都写“图片”。alt 的目标是替代图片传达信息。

### 表单错误提示要能被理解

```html
<label for="email">邮箱</label>
<input
  id="email"
  name="email"
  type="email"
  aria-describedby="email-help"
  required
>
<p id="email-help">请输入常用邮箱，例如 name@example.com。</p>
```

`aria-describedby` 可以把输入框和说明文字关联起来。

### aria-label：给没有文字的按钮命名

如果按钮只有图标，没有可见文字，应该提供可访问名称：

```html
<button type="button" aria-label="关闭弹窗">
  ×
</button>
```

如果按钮已经有清楚的文字，就不需要额外写 `aria-label`：

```html
<button type="submit">提交</button>
```

### 不要轻易移除键盘焦点

很多用户会用键盘浏览页面。链接、按钮、输入框都应该能通过键盘聚焦和操作。

HTML 原生元素通常已经具备键盘能力：

```html
<button type="button">打开菜单</button>
<a href="./about.html">关于我</a>
```

不推荐用普通 `div` 假装按钮：

```html
<div class="button">打开菜单</div>
```

如果它是按钮，就用 `<button>`。如果它是链接，就用 `<a>`。原生元素会帮你省掉很多可访问性问题。

### ARIA 不是万能补丁

ARIA 可以补充语义，但不能替代正确的 HTML。

不推荐：

```html
<div role="button">提交</div>
```

推荐：

```html
<button type="submit">提交</button>
```

先写正确的 HTML，再在确实需要时使用 ARIA。

## 14. data 属性：给元素保存自定义信息

HTML 允许使用 `data-*` 保存自定义数据。

```html
<article class="post-card" data-category="html" data-post-id="html-02">
  <h2>HTML 第二课</h2>
  <p>页面结构、资源路径、表单进阶与可访问性。</p>
</article>
```

`data-category`、`data-post-id` 不会直接影响显示，但 JavaScript 可以读取它们，用于筛选、统计、交互等。

命名规则：

- 必须以 `data-` 开头。
- 后面用小写字母、数字和连字符更稳妥。
- 不要把敏感信息放在 HTML 里，因为用户可以直接看到页面源代码。

## 15. 注释：写给未来的自己看

HTML 注释写法：

```html
<!-- 这里是首页主视觉区域 -->
<section class="hero">
  <h1>Potervlag 的前端学习笔记</h1>
  <p>记录从零开始搭建网页的过程。</p>
</section>
```

注释适合解释结构意图，但不要写废话。

不太有必要：

```html
<!-- 一个段落 -->
<p>这是一个段落。</p>
```

比较有用：

```html
<!-- 作品卡片列表：后续会由 JavaScript 从 data.js 中渲染 -->
<section class="project-list"></section>
```

同样，不要把密码、密钥、后台地址等敏感信息写进注释。HTML 注释也会出现在页面源代码里。

## 16. HTML 验证与调试方法

写完页面后，不要只看“好像能显示”。浏览器很宽容，很多错误它会自动修，但自动修出来的结构不一定是你想要的。

### 使用浏览器开发者工具

你可以右键页面，选择“检查”或“Inspect”，打开开发者工具。

重点看：

- Elements 面板里的 DOM 结构是否和你写的一致。
- Console 面板有没有报错。
- Network 面板里图片、CSS、JS 是否加载成功。
- 表单提交时字段名和值是否符合预期。

### 常见错误

错误 1：标签没有正确闭合。

```html
<p>第一段
<p>第二段</p>
```

推荐写清楚：

```html
<p>第一段</p>
<p>第二段</p>
```

错误 2：元素嵌套不合法。

```html
<p>
  这里是一段文字
  <div>这里是块级内容</div>
</p>
```

`<p>` 里不应该放 `<div>` 这类块级结构。可以改成：

```html
<section>
  <p>这里是一段文字</p>
  <div>这里是块级内容</div>
</section>
```

错误 3：重复使用同一个 `id`。

```html
<section id="about"></section>
<section id="about"></section>
```

同一页面中 `id` 应该唯一。

错误 4：表单控件缺少 `name`。

```html
<input id="email" type="email">
```

应该写：

```html
<input id="email" name="email" type="email">
```

错误 5：图片缺少有意义的 `alt`。

```html
<img src="./images/chart.png" alt="图片">
```

如果图表传达了数据，应该写清楚它表达什么。

## 17. 完整实战：个人作品集首页 HTML

下面是一份完整示例。它暂时没有 CSS，但 HTML 结构已经比较完整。你可以把它保存为 `portfolio.html`，再慢慢给它添加样式。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Potervlag 的个人作品集</title>
  <meta name="description" content="Potervlag 的前端学习作品集，展示 HTML、CSS 与 JavaScript 学习成果。">
  <meta name="author" content="Potervlag">
  <link rel="stylesheet" href="./styles/main.css">
</head>
<body>
  <header id="top">
    <h1>Potervlag 的个人作品集</h1>

    <nav aria-label="主导航">
      <a href="#about">关于我</a>
      <a href="#skills">技能</a>
      <a href="#projects">作品</a>
      <a href="#notes">学习笔记</a>
      <a href="#contact">联系</a>
    </nav>
  </header>

  <main>
    <section id="about" class="profile-section">
      <h2>关于我</h2>

      <figure>
        <img src="./images/avatar.jpg" alt="Potervlag 的头像" width="160" height="160">
        <figcaption>正在学习前端开发的网页创作者。</figcaption>
      </figure>

      <p>
        你好，我是 Potervlag。我正在系统学习 HTML、CSS 和 JavaScript，
        目标是做出结构清晰、视觉舒服、交互自然的个人网站。
      </p>
    </section>

    <section id="skills" class="skills-section">
      <h2>技能</h2>

      <ul>
        <li>能使用 HTML 搭建语义化页面结构。</li>
        <li>能为图片、链接和表单补充必要属性。</li>
        <li>正在学习使用 CSS 完成页面布局和视觉设计。</li>
        <li>计划使用 JavaScript 添加筛选、搜索和主题切换。</li>
      </ul>
    </section>

    <section id="projects" class="projects-section">
      <h2>作品</h2>

      <article class="project-card" data-category="html">
        <h3>个人博客首页</h3>
        <p>一个包含文章列表、个人资料、分类导航和背景视频的静态博客首页。</p>
        <p>
          <a href="./index.html">查看作品</a>
        </p>
      </article>

      <article class="project-card" data-category="html">
        <h3>HTML 学习笔记</h3>
        <p>整理 HTML 页面骨架、常用标签、表单和可访问性的系列文章。</p>
        <p>
          <a href="./posts/html-01.md">阅读第一课</a>
          <a href="./posts/html-02.md">阅读第二课</a>
        </p>
      </article>
    </section>

    <section id="notes" class="notes-section">
      <h2>学习笔记</h2>

      <article>
        <h3>为什么要先学 HTML</h3>
        <p>
          HTML 决定网页内容结构。结构清楚后，CSS 和 JavaScript 才能更稳定地发挥作用。
        </p>
        <p>
          <time datetime="2026-05-01">2026 年 5 月 1 日</time>
        </p>
      </article>
    </section>

    <aside class="learning-tip">
      <h2>学习建议</h2>
      <p>每天写一个小页面，并用浏览器检查结构，比只看教程更容易真正掌握。</p>
    </aside>

    <section id="contact" class="contact-section">
      <h2>联系我</h2>

      <p>
        如果你也在学习前端，可以通过
        <a href="mailto:hello@example.com">hello@example.com</a>
        和我交流。
      </p>

      <form action="/contact" method="post" class="contact-form">
        <fieldset>
          <legend>发送留言</legend>

          <div class="form-row">
            <label for="contact-name">姓名</label>
            <input id="contact-name" name="name" type="text" autocomplete="name" required>
          </div>

          <div class="form-row">
            <label for="contact-email">邮箱</label>
            <input id="contact-email" name="email" type="email" autocomplete="email" required>
          </div>

          <div class="form-row">
            <label for="contact-topic">主题</label>
            <select id="contact-topic" name="topic" required>
              <option value="">请选择主题</option>
              <option value="study">学习交流</option>
              <option value="project">项目合作</option>
              <option value="feedback">网站反馈</option>
            </select>
          </div>

          <div class="form-row">
            <label for="contact-message">留言</label>
            <textarea id="contact-message" name="message" rows="6" minlength="10" maxlength="500" required></textarea>
          </div>

          <button type="submit">发送</button>
        </fieldset>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Potervlag</p>
    <p><a href="#top">回到顶部</a></p>
  </footer>
</body>
</html>
```

这份示例里包含了很多本课重点：

1. `<head>` 中有字符编码、视口、标题、简介和样式表。
2. 页面使用 `header`、`nav`、`main`、`section`、`article`、`aside`、`footer` 组织。
3. 导航使用锚点跳转。
4. 图片有 `alt`、`width`、`height`。
5. 作品卡片使用 `data-category` 保存分类信息。
6. 日期使用 `<time>`。
7. 联系表单有 `label`、`fieldset`、`legend`、`name`、`required`。
8. 页脚提供回到顶部链接。

## 18. 本课练习

请基于上面的完整示例，完成一个属于你自己的 HTML 页面。

最低要求：

1. 文件名为 `portfolio.html`。
2. 页面有完整的 `<!DOCTYPE html>`、`html`、`head`、`body`。
3. `<head>` 中包含 `charset`、`viewport`、`title`、`description`。
4. 页面包含 `header`、`nav`、`main`、`section`、`article`、`footer`。
5. 至少有一张图片，并写清楚 `alt`。
6. 至少有一个页面内锚点跳转。
7. 至少有一个外部链接，并使用清楚的链接文字。
8. 至少有一个表单，包含姓名、邮箱、留言和提交按钮。
9. 表单控件必须有对应的 `label`。
10. 使用浏览器检查页面，确认图片和链接都能正常打开。

进阶要求：

1. 给作品卡片添加 `data-category`。
2. 使用 `<figure>` 和 `<figcaption>` 展示图片说明。
3. 使用 `<time>` 标记发布日期。
4. 添加一个 `<details>` 区域，放学习计划或常见问题。
5. 为表单增加 `required`、`maxlength`、`autocomplete` 等属性。
6. 尝试把 CSS 放到单独的 `styles/main.css` 文件中。

## 19. HTML 第二课总结

这一篇比第一篇更接近真实网页开发。你现在应该逐渐形成这样的思路：

1. 先确定页面内容，不急着想样式。
2. 用正确的结构标签表达内容关系。
3. 用 `id` 做唯一定位，用 `class` 做分类和样式钩子。
4. 写资源路径时，从当前文件位置出发思考。
5. 图片、链接、表单都要补充必要属性。
6. 表单不是只要能输入，还要清楚、好用、可提交。
7. 可访问性不是后期修补，而是写 HTML 时就顺手做好。
8. 浏览器能显示不等于 HTML 完全正确，写完要检查结构。

下一步可以开始学习 CSS。HTML 负责“这是什么”，CSS 负责“它长什么样”。当你能写出清楚的 HTML 结构后，再学 CSS 会轻松很多，因为你已经有了稳定的页面骨架。
