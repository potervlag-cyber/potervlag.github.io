# Translation and extraction notes — Ajzen：计划行为理论（TPB）

## 构建状态

- 模式：全文结构化重建稿。
- 文本来源：原始 PDF 的可提取文本层。
- 中文来源：项目中既有的逐条机器翻译底稿。
- 审校状态：未完成人工逐句审校；不得将本稿标为官方译文。

## 覆盖与置信度

- 读取既有双语条目：495
- 合并后的正文块：272
- 高置信度页码映射：36
- 中置信度页码映射：8
- 低置信度页码映射：228
- 检出的图/表资产：1
- 需要人工复核的自动裁剪：1

## 已知限制

- 旧译文按 PDF 抽取碎片生成，本次将碎片合并为可读块，但不擅自补写缺失句子。
- 双栏论文、公式和带上下标文本可能出现阅读顺序或字符丢失问题。
- 参考文献列表也保留在全文映射中，但专名译法未逐条统一。
- 图表通过图注位置自动裁剪；裁剪置信度已写入 `source_map.json` 和 `paper.md`。
- 所有 low-confidence 块应在论文写作或精确引用前回看原 PDF。

## 术语决策

| Canonical term | 中文 | 决策 |
|---|---|---|
| theory of planned behavior (TPB) | 计划行为理论（TPB） | 全文统一使用 TPB |
| behavioral intention | 行为意向 | 不与实际行为混用 |
| attitude toward the behavior | 行为态度 | TPB 前因变量 |
| subjective norm | 主观规范 | TPB 前因变量 |
| perceived behavioral control (PBC) | 感知行为控制（PBC） | 首次出现给出全称 |
