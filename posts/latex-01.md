
## 1.LaTeX 文档的基本骨架
每一个 `.tex` 文件都由“导言区”和“正文区”组成：
```
\documentclass{article} % 声明文档类型（如 article, report, book）

% --- 导言区 (Preamble) ---
\usepackage[utf8]{inputenc} % 支持编码
\usepackage{amsmath}        % 处理复杂数学公式的必选包

\title{我的第一份 LaTeX 文档}
\author{Gemini}
\date{\today}

% --- 正文区 ---
\begin{document}

\maketitle % 生成标题页

\section{介绍}
这是我的第一个段落。LaTeX 会自动处理缩进和行间距。

\section{数学之美}
这里我们可以插入公式。

\end{document}
```
## 2. 核心：数学公式
这是 LaTeX 的杀手锏。公式分为两种模式：
A. 行内公式 (Inline)
使用 `$...$ `包裹。例如：`$E=mc^2$`会显示在句子中间。
会显示$E=mc^2$在句子中间
B. 独立行公式 (Display)
使用 $$...$$ 包裹。公式会居中并独占一行。
例如：`$$\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$`
$$\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
**常用符号速查表**
类型|效果|代码|
|:---:|:---:|:---:|
分数| $\frac{分子}{分母}$|`frac{分子}{分母}`|
上标/下标| $x^2, a_n$|`x^2, a_n`|
根号|$ \sqrt{x}$|`sqrt{x}`|
希腊字母|$ \alpha$, $\beta$,$\gamma$|`alpha, beta, gamma`|
求和/积分| $\sum_{i=1}^n$, $\int_a^b$|`sum_{i=1}^n, int_a^b`|
## 3. 必看的小贴士
- 空格与换行：在 LaTeX 中，敲一个空格和敲十个空格效果一样。想要另起一段，需要空一行。

- 特殊字符：像 %, $, &, # 有特殊用途。如果你只想输入这些符号本身，需要加反斜杠，例如 \%。

- 中文支持：如果你需要写中文，请将第一行改为 \documentclass{ctexart}。