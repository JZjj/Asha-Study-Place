# Efficient AI &amp; ML Systems — Study Notes

Student revision notes for the efficient–deep-learning course (**NYU SAI Lab, Spring 2026**), covering model compression, LLM efficiency, distributed training, and hardware accelerators. Each lecture is distilled into a single, self-contained HTML page with the key formulas, trade-offs, and an exam recap.

**▶ Live site:** _(GitHub Pages URL added after deploy)_

## Contents

| # | Lecture | Topics |
|---|---------|--------|
| 04 | Pruning Strategies | MACs, sparse encodings, criteria, lottery ticket, token/head pruning |
| 05 | Quantization | INT/FP/BFP formats, symmetric/asymmetric, PTQ vs QAT, STE, PACT/QIL |
| 06 | Distillation, Low-Rank, NAS &amp; Dynamic Computing | KD, DARTS/ProxylessNAS/OFA, SVD, conditional compute |
| 07 | Efficiency Strategies for LLMs | KV cache, outliers, SmoothQuant/AWQ/QuaRot, Wanda, StreamingLLM |
| 08 | Efficient DNN Training | training memory, PEFT/LoRA, BFP, speculative decoding |
| 09 | Distributed Machine Learning | FedAvg, ring all-reduce, pipeline parallelism, distributed inference |
| 10 | AI Compiler &amp; CNN Accelerator | graph IR, fusion, im2col/GEMM, tiling, systolic arrays |
| 11 | Transformer &amp; LLM Accelerators | systolic dataflows, column combining, term quant, Eyeriss/DianNao |
| 12 | Transformer &amp; DNN Training Accelerators | backward-pass dataflows, non-matmul HW, BFP/FAST, RevNet |

## Structure

- `index.html` — landing page linking every note
- `lecture-NN.html` — one self-contained study note per lecture
- `style.css` — shared stylesheet (light/dark themes)
- `theme.js` — floating light/dark toggle

Plain static HTML — open `index.html` locally, or browse the hosted GitHub Pages site. No build step.

## Note

These summarize the lecture decks for revision. The original slides and the papers they cite are the source of record.
