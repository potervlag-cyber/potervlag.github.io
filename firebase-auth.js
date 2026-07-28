import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
    browserLocalPersistence,
    getAuth,
    onAuthStateChanged,
    setPersistence,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
    get,
    getDatabase,
    ref
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

const gate = document.getElementById("authGate");
const checking = document.getElementById("authChecking");
const checkingText = document.getElementById("authCheckingText");
const form = document.getElementById("authForm");
const emailInput = document.getElementById("authEmail");
const passwordInput = document.getElementById("authPassword");
const errorBox = document.getElementById("authError");
const submitButton = document.getElementById("authSubmit");
const protectedContent = document.getElementById("protectedContent");
const userEmail = document.getElementById("authUserEmail");
const signOutButton = document.getElementById("authSignOut");

const config = window.POTERVLAG_FIREBASE_CONFIG || {};
const requiredConfigKeys = ["apiKey", "authDomain", "databaseURL", "projectId"];
const missingConfigKeys = requiredConfigKeys.filter(key => !String(config[key] || "").trim());

let auth = null;
let database = null;
let pendingLoginMessage = "";

function setChecking(message) {
    checkingText.textContent = message;
    checking.hidden = false;
    form.hidden = true;
    errorBox.textContent = "";
}

function setFormBusy(isBusy) {
    emailInput.disabled = isBusy;
    passwordInput.disabled = isBusy;
    submitButton.disabled = isBusy;
    submitButton.textContent = isBusy ? "正在验证…" : "进入空间";
}

function showLogin(message = "") {
    document.body.classList.remove("auth-pending");
    document.body.classList.add("auth-locked");
    gate.hidden = false;
    protectedContent.hidden = true;
    protectedContent.inert = true;
    protectedContent.setAttribute("aria-hidden", "true");
    checking.hidden = true;
    form.hidden = false;
    errorBox.textContent = message;
    passwordInput.value = "";
    setFormBusy(false);
    window.requestAnimationFrame(() => emailInput.focus());
}

function unlockSite(user) {
    document.body.classList.remove("auth-pending", "auth-locked");
    gate.hidden = true;
    protectedContent.hidden = false;
    protectedContent.inert = false;
    protectedContent.setAttribute("aria-hidden", "false");
    userEmail.textContent = user.email || "内部账号";
    setFormBusy(false);
}

function describeLoginError(error) {
    if (error?.code === "auth/too-many-requests") {
        return "尝试次数过多，请稍后再试。";
    }
    if (error?.code === "auth/network-request-failed") {
        return "网络连接失败，请检查网络后重试。";
    }
    if (error?.code === "auth/invalid-email") {
        return "请输入有效的邮箱地址。";
    }
    return "账号或密码不正确，或该账号没有访问权限。";
}

function isInternalAccountRecord(value) {
    return (
        value &&
        typeof value === "object" &&
        value.enabled === true
    );
}

async function verifyInternalAccount(user) {
    const accessSnapshot = await get(ref(database, `internalUsers/${user.uid}`));
    return isInternalAccountRecord(accessSnapshot.val());
}

window.getFirebaseAuthToken = async () => {
    if (!auth?.currentUser) {
        throw new Error("登录状态已失效，请重新登录。");
    }
    return auth.currentUser.getIdToken();
};

window.getAuthorizedFirebaseUrl = async url => {
    const token = await window.getFirebaseAuthToken();
    const authorizedUrl = new URL(url, window.location.href);
    authorizedUrl.searchParams.set("auth", token);
    return authorizedUrl.toString();
};

form.addEventListener("submit", async event => {
    event.preventDefault();
    errorBox.textContent = "";

    if (!form.reportValidity()) return;
    if (!auth) {
        errorBox.textContent = "Firebase 尚未配置完成。";
        return;
    }

    setFormBusy(true);
    try {
        await signInWithEmailAndPassword(
            auth,
            emailInput.value.trim(),
            passwordInput.value
        );
    } catch (error) {
        showLogin(describeLoginError(error));
    }
});

signOutButton.addEventListener("click", async () => {
    signOutButton.disabled = true;
    try {
        await signOut(auth);
    } finally {
        signOutButton.disabled = false;
    }
});

if (missingConfigKeys.length) {
    showLogin("站点管理员尚未完成 Firebase 配置，请稍后再试。");
    console.warn(`Firebase 配置缺少：${missingConfigKeys.join(", ")}`);
} else {
    try {
        const app = initializeApp(config);
        auth = getAuth(app);
        database = getDatabase(app);
        await setPersistence(auth, browserLocalPersistence);

        onAuthStateChanged(auth, async user => {
            if (!user) {
                const message = pendingLoginMessage;
                pendingLoginMessage = "";
                showLogin(message);
                return;
            }

            setChecking("正在核验内部访问权限…");
            try {
                if (await verifyInternalAccount(user)) {
                    unlockSite(user);
                    return;
                }

                pendingLoginMessage = "此账号未获得内部访问权限，请联系管理员。";
                await signOut(auth);
            } catch (error) {
                console.error("内部账号权限校验失败：", error);
                pendingLoginMessage = "暂时无法核验访问权限，请稍后重试。";
                await signOut(auth);
            }
        });
    } catch (error) {
        console.error("Firebase 初始化失败：", error);
        showLogin("登录服务初始化失败，请联系管理员检查配置。");
    }
}
