# potervlag.github.io

纯静态个人站点，部署于 GitHub Pages。

- `index.html`：将根地址和查询参数转交给公开博客。
- `blog.html`：博客入口，文章数据来自 `data.js` 和 `posts/`。
- `blog-app.js`：博客列表、分类、文章路由、设置彩蛋和评论加载逻辑。
- `nature-reader/`：不在常规导航中展示的双语文献阅读库。

## 隐藏文献库

文献库采用“隐藏入口”而不是权限保护。用户在博客设置面板中连续切换“卡片悬停浮起”八次后，浏览器会记住并显示文献库入口。知道 `/nature-reader/` 地址的人仍可直接访问；相关页面通过 `noindex` 请求搜索引擎不要收录。

## 本地预览

直接用静态 HTTP 服务器启动仓库目录，例如：

```powershell
python -m http.server 8765
```

然后访问 `http://127.0.0.1:8765/`。不要直接双击 HTML 文件，因为文章正文通过 `fetch()` 加载。
