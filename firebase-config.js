/*
 * Firebase Web 配置。
 *
 * 在 Firebase 控制台打开：
 * 项目设置 → 常规 → 你的应用 → SDK 设置和配置 → 配置
 *
 * 将其中的 apiKey 填到下方。其余项目地址已按当前 Realtime Database
 * 项目 potervlag-a3f74 预填；如果控制台给出的值不同，请以控制台为准。
 *
 * Firebase Web 配置会公开在浏览器端，不能把服务账号私钥放在这里。
 */
window.POTERVLAG_FIREBASE_CONFIG = Object.freeze({
    apiKey: "",
    authDomain: "potervlag-a3f74.firebaseapp.com",
    databaseURL: "https://potervlag-a3f74-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "potervlag-a3f74",
    storageBucket: "potervlag-a3f74.firebasestorage.app",
    messagingSenderId: "",
    appId: ""
});
