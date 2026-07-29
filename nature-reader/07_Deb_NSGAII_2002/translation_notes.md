# Translation and extraction notes — Deb 等：NSGA-II 多目标遗传算法

## 构建状态

- 模式：全文结构化重建稿。
- 文本来源：原始 PDF 的可提取文本层。
- 中文来源：项目中既有的逐条机器翻译底稿。
- 审校状态：未完成人工逐句审校；不得将本稿标为官方译文。

## 覆盖与置信度

- 读取既有双语条目：585
- 合并后的正文块：260
- 高置信度页码映射：18
- 中置信度页码映射：11
- 低置信度页码映射：231
- 检出的图/表资产：14
- 需要人工复核的自动裁剪：14

## 已知限制

- 旧译文按 PDF 抽取碎片生成，本次将碎片合并为可读块，但不擅自补写缺失句子。
- 双栏论文、公式和带上下标文本可能出现阅读顺序或字符丢失问题。
- 参考文献列表也保留在全文映射中，但专名译法未逐条统一。
- 图表通过图注位置自动裁剪；裁剪置信度已写入 `source_map.json` 和 `paper.md`。
- 所有 low-confidence 块应在论文写作或精确引用前回看原 PDF。

## 术语决策

| Canonical term | 中文 | 决策 |
|---|---|---|
| nondominated sorting genetic algorithm II (NSGA-II) | 非支配排序遗传算法 II（NSGA-II） | 保留标准算法名 |
| multiobjective evolutionary algorithm (MOEA) | 多目标进化算法（MOEA） | 首次出现给出全称 |
| nondominated sorting | 非支配排序 | 核心排序过程 |
| crowding distance | 拥挤距离 | 多样性保持指标 |
| elitism | 精英保留 | 算法特征 |
| Pareto-optimal front | Pareto 最优前沿 | Pareto 首字母大写 |
