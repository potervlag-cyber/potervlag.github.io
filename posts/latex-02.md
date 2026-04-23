## 1. 学术论文的 LaTeX 标准模板
一个标准的论文结构通常包含摘要、正文、图表和参考文献。你可以将以下代码直接复制到 Overleaf 中运行：
```
\documentclass[12pt, a4paper]{article}

% --- 宏包加载 (功能增强) ---
\usepackage[utf8]{inputenc}
\usepackage{ctex}         % 如果写中文论文必选
\usepackage{amsmath, amssymb} % 数学公式必备
\usepackage{graphicx}     % 插入图片
\usepackage{booktabs}     % 制作学术风表格 (三线表)
\usepackage{geometry}     % 设置页边距
\geometry{left=2.5cm, right=2.5cm, top=3cm, bottom=3cm}
\usepackage[style=authoryear]{biblatex} % 参考文献管理 (哈佛格式常用于管理学)
\addbibresource{references.bib} % 指定你的参考文献库

% --- 标题信息 ---
\title{供应链优化中的关键因素分析：以跨境电商为例}
\author{你的姓名}
\date{\today}

\begin{document}

\maketitle

\begin{abstract}
本文探讨了...（此处填写摘要内容）。
\end{abstract}

\section{引言}
随着全球化的发展，物流效率成为了企业的核心竞争力。

\section{文献综述}
根据 \textcite{example2024} 的研究，供应链的柔性是应对不确定性的关键。

\section{模型与方法}
我们建立了一个线性规划模型来优化库存：
\begin{equation}
    \min Z = \sum_{i=1}^n c_i x_i
\end{equation}

\section{结论}
研究表明...

\printbibliography % 自动生成参考文献列表

\end{document}
```
### `\documentclass{ctexart}`和`\usepackage{ctex}` 的区别
#### 1. \documentclass{ctexart}：全盘接管的“中文文档类”
当你使用 `\documentclass{ctexart}` 时，你是在告诉 LaTeX：“我要写一篇纯正的中文文章”。
- 功能： 它不仅为你加载了中文字体和中文换行规则，还彻底重写了文档的排版格式，使其符合中文排版习惯。
- 具体表现：
    - 章节标题会自动变成中文习惯，例如 \section{引言} 会渲染成 “第一节 引言” 或 “一、引言”，而不是默认的 “1 引言”。
    - 摘要标题会变成 “摘要”（而不是 Abstract）。
    - 图表标题会变成 “图 1” 和 “表 1”（而不是 Figure 1 和 Table 1）。
    - 首行会自动缩进两个中文字符。
- 适用场景： 从零开始写一份中文的期末论文、作业、或者没有特定格式要求的中文报告。
#### 2. `\usepackage{ctex}`：只负责语言支持的“中文宏包”
当你使用 `\documentclass{article} `或其他英文文档类，然后在导言区加上 `\usepackage{ctex}` 时，你是在告诉 LaTeX：“我使用的是英文排版格式，但我需要在里面打汉字”。
- 功能： 它主要负责加载中文字体，让你能够输入和显示中文，但尽量不改变原文档类的排版结构。
- 具体表现：
    - 你可以正常输入中文。
    - 但是，`\section{引言}` 仍然会显示为 “1 引言”（保留了英文 article 类的数字编号风格）。
    - 图表可能依然显示为 “Figure 1” 和 “Table 1”（取决于具体设置和底层文档类）。
- 适用场景： * 使用现成的官方模板： 比如你想投某个国内期刊，或者使用你们学校提供的学位论文模板（比如 `\documentclass{sjtuthesis}`）。这些模板本身已经定义好了标题和图表的样式，你只需要 `\usepackage{ctex}` 引入汉字支持即可，千万不要改成 `ctexart`，否则会破坏学校/期刊的格式。
    - 中英混排： 在一篇纯英文的 IEEE 或 Elsevier 论文模板中，需要输入几个中文人名或特定的中文参考文献。

**最佳用途：**
`\documentclass{ctexart}`       从零手写的纯中文文档
`\usepackage{ctex}`             配合学校/期刊提供的专属模板使用
## 2. 论文写作中的三个“杀手锏”
### A. 参考文献管理 (BibTeX)
不要再手动输入 [1], [2] 了。创建一个名为 `references.bib` 的文件，存放这类格式：
```
@article{example2024,
  author = {Zhang, San and Wang, Wu},
  title = {Future of E-commerce Logistics},
  journal = {Journal of Supply Chain Management},
  year = {2024},
  volume = {45},
  number = {2}
}
```
然后在正文用 \cite{...} 调用，LaTeX 会自动帮你排版并生成文末列表。
### B. 三线表 (Professional Tables)
在物流论文中，经常需要展示实验数据或对比。学术界公认最美观的是“三线表”：
```
\begin{table}[h]
\centering
\caption{不同配送模式的成本对比}
\begin{tabular}{lccc}
\toprule
模式 & 运输成本 & 仓储成本 & 响应时间 \\
\midrule
自营物流 & 高 & 中 & 快 \\
第三方物流 & 低 & 低 & 中 \\
\bottomrule
\end{tabular}
\end{table}
```
### C. 流程图与示意图
对于供应链流程，你可以使用 tikz 宏包直接画图，虽然初学有门槛，但画出的矢量图清晰度极高，缩放不失真。
## 3. 针对不同类型的论文建议
- 课程期末论文 / 学士学位论文：
重点在于格式规范。建议先查看学校是否有官方的 .cls (类文件) 或模板。如果没有，使用 article 类并配合 ctex 宏包即可。
- 投稿国际期刊（如 SCM 相关期刊）：
大多数国际知名期刊（如 Elsevier, Springer）都会提供自己的 LaTeX 模板。你只需去官网下载，把内容填进去，格式会自动符合期刊要求。
- 准备研究生申请的 Writing Sample：
这时 LaTeX 的专业感会给你加分不少。建议采用 1.5 倍行距，并使用 biblatex 生成符合国际规范的引文格式（如 APA 或 Harvard）。