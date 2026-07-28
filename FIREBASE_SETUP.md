# Firebase 内部登录配置

网页已经接入 Firebase Authentication 和 Realtime Database 内部账号白名单。
上线前需要在 Firebase 控制台完成以下设置。

## 1. 填写网页配置

在 Firebase 控制台打开：

`项目设置 → 常规 → 你的应用 → SDK 设置和配置 → 配置`

把配置对象中的 `apiKey` 填入 `firebase-config.js`。如果控制台中的其他值与
文件里预填的值不同，也以控制台显示的值为准。

Firebase Web 配置会被浏览器公开，这是正常的。不要把服务账号 JSON 或私钥
放进网页文件。

## 2. 开启邮箱和密码登录

打开：

`Authentication → Sign-in method → Email/Password`

启用 Email/Password。网页只有登录功能，没有注册入口。

## 3. 创建内部账号

打开：

`Authentication → Users → Add user`

为每位内部成员创建邮箱和密码账号，复制该账号的 `User UID`。

## 4. 添加内部访问白名单

在 Realtime Database 中创建：

```text
internalUsers
└── 用户的 UID
    └── enabled: true
```

示例：

```json
{
  "internalUsers": {
    "abc123FirebaseUid": {
      "enabled": true
    }
  }
}
```

即使有人绕过网页自行创建 Firebase Authentication 账号，没有对应的 UID
白名单记录也无法通过登录门禁或读取数据库。

## 5. 发布数据库规则

将 `database.rules.json` 的内容复制到：

`Realtime Database → Rules`

然后点击发布。规则默认拒绝所有访问，只允许白名单中的已登录账号访问现有
私聊数据。

## 6. 添加网站域名

打开：

`Authentication → Settings → Authorized domains`

确认已添加：

- `potervlag.github.io`
- `vlagli.com`
- 本地测试域名（只在确实需要本地测试时添加）

## 安全边界

Firebase Security Rules 能严格保护数据库，但 GitHub Pages 是静态托管。
登录门禁可以阻止普通访客进入页面界面，却不能像服务器权限控制那样隐藏已经
公开部署的 HTML、JavaScript 和 Markdown 源文件。若文章内容本身必须对未登录
用户完全不可获取，需要把内容迁移到受 Firebase Rules 保护的数据库中，或改用
带服务端鉴权的托管方案。
