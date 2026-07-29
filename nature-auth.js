import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
    browserLocalPersistence,
    getAuth,
    onAuthStateChanged,
    setPersistence,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
    get,
    getDatabase,
    ref
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

const loginUrl = new URL("index.html", import.meta.url);
const config = window.POTERVLAG_FIREBASE_CONFIG || {};
const requiredConfigKeys = ["apiKey", "authDomain", "databaseURL", "projectId"];
const missingConfig = requiredConfigKeys.some(key => !String(config[key] || "").trim());

function showPage() {
    document.getElementById("natureAuthGuard")?.remove();
}

function returnToLogin() {
    window.location.replace(loginUrl.href);
}

function isInternalAccount(value) {
    return Boolean(value && typeof value === "object" && value.enabled === true);
}

if (missingConfig) {
    returnToLogin();
} else {
    try {
        const app = initializeApp(config);
        const auth = getAuth(app);
        const database = getDatabase(app);

        await setPersistence(auth, browserLocalPersistence);
        onAuthStateChanged(auth, async user => {
            if (!user) {
                returnToLogin();
                return;
            }

            try {
                const snapshot = await get(ref(database, `internalUsers/${user.uid}`));
                if (isInternalAccount(snapshot.val())) {
                    showPage();
                    return;
                }
            } catch (error) {
                console.error("Nature Reader 访问权限校验失败：", error);
            }

            try {
                await signOut(auth);
            } finally {
                returnToLogin();
            }
        });
    } catch (error) {
        console.error("Nature Reader 登录状态初始化失败：", error);
        returnToLogin();
    }
}
