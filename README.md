# potervlag.github.io

站点包含两个并列项目：

- `blog.html`：原博客的公开入口。
- `nature-reader/`：登录后进入的动力电池关键文献 Nature Reader。

根目录 `index.html` 为 Firebase 内部账号登录入口。登录并通过
`internalUsers/{uid}.enabled` 权限校验后，会跳转到 Nature Reader。
