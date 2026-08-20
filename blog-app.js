(() => {
    "use strict";

    const VIEW_IDS = ["listView", "detailView", "archiveView", "statsView", "aboutView"];
    const SETTINGS_KEY = "potervlagSettingHoverEffectsV1";
    const LIBRARY_UNLOCK_KEY = "potervlagHiddenLibraryUnlockedV1";
    const UNLOCK_TAPS = 8;
    const UNLOCK_WINDOW_MS = 1800;
    const BLOG_TITLE = "我的静态博客空间";

    let currentCategory = "全部内容";
    let detailRequestId = 0;
    let unlockTapCount = 0;
    let lastUnlockTapAt = 0;
    let settingsReturnFocus = null;

    const $ = selector => document.querySelector(selector);

    function postRoute(postId) {
        return `blog.html?post=${encodeURIComponent(postId)}`;
    }

    function updateRoute({ postId = null, view = null }, mode = "push") {
        if (mode === "none") return;
        const url = new URL(window.location.href);
        url.searchParams.delete("post");
        url.searchParams.delete("view");
        url.hash = "";
        if (postId !== null) url.searchParams.set("post", String(postId));
        if (view && view !== "home") url.searchParams.set("view", view);
        history[mode === "replace" ? "replaceState" : "pushState"]({}, "", url);
    }

    function createPostLink(post, label, className = "") {
        const link = document.createElement("a");
        link.href = postRoute(post.id);
        link.textContent = label;
        if (className) link.className = className;
        link.addEventListener("click", event => {
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            showDetail(post.id);
        });
        return link;
    }

    function renderCategories() {
        const menu = $("#categoryMenu");
        const categories = ["全部内容", ...new Set(blogPosts.map(post => post.category).filter(Boolean))];
        menu.replaceChildren();

        categories.forEach(category => {
            const item = document.createElement("li");
            const button = document.createElement("button");
            button.type = "button";
            button.textContent = category === "全部内容" ? "全部" : category;
            button.dataset.category = category;
            button.setAttribute("aria-pressed", String(category === currentCategory));
            button.addEventListener("click", () => {
                currentCategory = category;
                menu.querySelectorAll("button").forEach(candidate => {
                    candidate.setAttribute("aria-pressed", String(candidate === button));
                });
                switchPage("home", "push");
            });
            item.appendChild(button);
            menu.appendChild(item);
        });
    }

    function renderList() {
        const container = $("#listView");
        const posts = currentCategory === "全部内容"
            ? blogPosts
            : blogPosts.filter(post => post.category === currentCategory);
        container.replaceChildren();

        posts.forEach(post => {
            const card = document.createElement("article");
            card.className = "post-card";

            const title = document.createElement("h2");
            title.className = "post-title";
            title.appendChild(createPostLink(post, post.title));

            const meta = document.createElement("div");
            meta.className = "post-meta";
            const tag = document.createElement("span");
            tag.className = "post-tag";
            tag.textContent = post.category;
            meta.append(tag, document.createTextNode(`发布于：${post.date}`));

            const excerpt = document.createElement("div");
            excerpt.className = "post-excerpt";
            excerpt.textContent = post.summary || "点击阅读全文…";

            card.append(title, meta, excerpt, createPostLink(post, "阅读全文 →", "read-more"));
            container.appendChild(card);
        });
    }

    function renderArchive() {
        const list = $("#archiveList");
        list.replaceChildren();
        blogPosts.forEach(post => {
            const row = document.createElement("div");
            const date = document.createElement("span");
            date.textContent = post.date;
            date.style.cssText = "color:#666;margin-right:15px";
            const link = createPostLink(post, post.title);
            link.style.cssText = "color:#111;text-decoration:none;border-bottom:1px dashed #ccc";
            row.append(date, link);
            list.appendChild(row);
        });
    }

    function switchPage(pageId, historyMode = "push") {
        const targetId = pageId === "home" ? "listView" : `${pageId}View`;
        VIEW_IDS.forEach(id => {
            const element = document.getElementById(id);
            element.style.display = id === targetId ? "block" : "none";
        });

        if (pageId === "home") renderList();
        if (pageId === "archive") renderArchive();
        if (pageId === "stats") $("#statTotal").textContent = String(blogPosts.length);
        document.title = pageId === "home" ? BLOG_TITLE : `${$("#" + targetId + " .post-title")?.textContent || BLOG_TITLE} · Potervlag`;
        updateRoute({ view: pageId }, historyMode);
    }

    function slugifyHeadingText(text) {
        return text.trim().toLowerCase()
            .replace(/[^\w\s\u3400-\u9fff\u3040-\u30ff\uac00-\ud7af-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");
    }

    function assignPostHeadingAnchors(container) {
        const usedIds = new Map();
        container.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((heading, index) => {
            const baseId = slugifyHeadingText(heading.textContent) || `section-${index + 1}`;
            const count = usedIds.get(baseId) || 0;
            const headingId = count === 0 ? baseId : `${baseId}-${count}`;
            usedIds.set(baseId, count + 1);
            if (!heading.id) heading.id = headingId;
        });
    }

    function setupPostContent(container) {
        container.querySelectorAll("img").forEach(image => {
            image.loading = "lazy";
            if (!image.alt) image.alt = "文章图片";
        });

        container.onclick = event => {
            const link = event.target.closest('a[href^="#"]');
            if (!link) return;
            const id = decodeURIComponent(link.hash.slice(1));
            const target = document.getElementById(id);
            if (!target || !container.contains(target)) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState({}, "", `${location.pathname}${location.search}#${encodeURIComponent(id)}`);
        };
    }

    async function showDetail(postId, historyMode = "push") {
        const post = blogPosts.find(candidate => String(candidate.id) === String(postId));
        if (!post) {
            switchPage("home", historyMode);
            return;
        }

        enterBlogExperience();
        document.title = `${post.title} · Potervlag`;
        const requestId = ++detailRequestId;
        $("#detailTitle").textContent = post.title;
        $("#detailDate").textContent = post.date;
        $("#detailTag").textContent = post.category;
        const content = $("#detailContent");
        content.innerHTML = '<p style="text-align:center;color:#777;padding:50px">正在加载文章…</p>';
        VIEW_IDS.forEach(id => {
            document.getElementById(id).style.display = id === "detailView" ? "block" : "none";
        });
        updateRoute({ postId: post.id }, historyMode);
        loadComments(post.id);

        try {
            const response = await fetch(post.fileUrl, { cache: "no-cache" });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const markdown = await response.text();
            if (requestId !== detailRequestId) return;

            const rendered = marked.parse(markdown);
            content.innerHTML = DOMPurify.sanitize(rendered, { USE_PROFILES: { html: true } });
            assignPostHeadingAnchors(content);
            setupPostContent(content);

            if (typeof renderMathInElement === "function") {
                renderMathInElement(content, {
                    delimiters: [
                        { left: "$$", right: "$$", display: true },
                        { left: "$", right: "$", display: false }
                    ],
                    throwOnError: false
                });
            }

            if (location.hash) {
                requestAnimationFrame(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView());
            }
        } catch (error) {
            if (requestId !== detailRequestId) return;
            console.error("文章加载失败：", error);
            content.innerHTML = '<p style="text-align:center;color:#b42318;padding:50px">⚠️ 文章加载失败，请稍后重试。</p>';
        }
    }

    function loadComments(postId) {
        const box = $("#commentList");
        box.replaceChildren();
        const script = document.createElement("script");
        script.src = "https://giscus.app/client.js";
        script.dataset.repo = "potervlag-cyber/potervlag.github.io";
        script.dataset.repoId = "R_kgDOSDTRHQ";
        script.dataset.category = "Comments";
        script.dataset.categoryId = "DIC_kwDOSDTRHc4C7kiM";
        script.dataset.mapping = "specific";
        script.dataset.term = String(postId);
        script.dataset.strict = "0";
        script.dataset.reactionsEnabled = "1";
        script.dataset.emitMetadata = "0";
        script.dataset.inputPosition = "top";
        script.dataset.theme = "light";
        script.dataset.lang = "zh-CN";
        script.crossOrigin = "anonymous";
        script.async = true;
        box.appendChild(script);
    }

    function readBooleanSetting(key, fallback) {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value === "1";
    }

    function revealLibrary(announce = false) {
        $("#hiddenLibraryEntry").hidden = false;
        if (announce) $("#settingsStatus").textContent = "已发现一处隐藏入口。";
    }

    function registerLibraryUnlockTap() {
        const now = Date.now();
        unlockTapCount = now - lastUnlockTapAt < UNLOCK_WINDOW_MS ? unlockTapCount + 1 : 1;
        lastUnlockTapAt = now;
        if (unlockTapCount < UNLOCK_TAPS) return;
        unlockTapCount = 0;
        localStorage.setItem(LIBRARY_UNLOCK_KEY, "1");
        revealLibrary(true);
    }

    function applyHoverSetting(save = true) {
        const toggle = $("#hoverToggle");
        document.body.classList.toggle("disable-hover", !toggle.checked);
        if (save) {
            localStorage.setItem(SETTINGS_KEY, toggle.checked ? "1" : "0");
            registerLibraryUnlockTap();
        }
    }

    function openSettings() {
        settingsReturnFocus = document.activeElement;
        $("#settingsModal").style.display = "flex";
        $("#closeSettingsButton").focus();
    }

    function closeSettings() {
        $("#settingsModal").style.display = "none";
        $("#settingsStatus").textContent = "";
        settingsReturnFocus?.focus();
    }

    function enterBlogExperience() {
        document.body.classList.remove("intro-mode");
        const video = $(".video-background");
        if (video) {
            video.style.display = "none";
            video.pause();
        }
        document.body.classList.add("no-video-mode");
    }

    function handleRoute() {
        const params = new URLSearchParams(location.search);
        const postId = params.get("post");
        const view = params.get("view");
        if (postId) {
            showDetail(postId, "none");
            return;
        }
        if (["archive", "stats", "about"].includes(view)) {
            enterBlogExperience();
            switchPage(view, "none");
            return;
        }
        switchPage("home", "none");
    }

    function initialize() {
        renderCategories();
        $("#hoverToggle").checked = readBooleanSetting(SETTINGS_KEY, true);
        applyHoverSetting(false);
        if (localStorage.getItem(LIBRARY_UNLOCK_KEY) === "1") revealLibrary();

        const video = $(".video-background");
        video.addEventListener("click", enterBlogExperience);
        video.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                enterBlogExperience();
            }
        });

        document.querySelectorAll(".nav-links a[data-view]").forEach(link => {
            link.addEventListener("click", event => {
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                enterBlogExperience();
                switchPage(link.dataset.view, "push");
            });
        });
        $("#backToList").addEventListener("click", event => {
            event.preventDefault();
            switchPage("home", "push");
        });
        $("#openSettingsButton").addEventListener("click", openSettings);
        $("#closeSettingsButton").addEventListener("click", closeSettings);
        $("#hoverToggle").addEventListener("change", () => applyHoverSetting(true));
        $("#settingsModal").addEventListener("click", event => {
            if (event.target.id === "settingsModal") closeSettings();
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && $("#settingsModal").style.display !== "none") closeSettings();
        });
        window.addEventListener("popstate", handleRoute);

        let lastScrollY = window.scrollY;
        window.addEventListener("scroll", () => {
            const currentScrollY = window.scrollY;
            $(".top-nav").classList.toggle("nav-hidden", currentScrollY > lastScrollY && currentScrollY > 80);
            lastScrollY = currentScrollY;
        }, { passive: true });

        handleRoute();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, { once: true });
    } else {
        initialize();
    }
})();
