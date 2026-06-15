# VINAYAKA

**Multilingual Audio-Visual Hate Speech Detection via Cross-Modal Fusion in Hyperbolic Space**

**Accepted at Interspeech 2026**

Official project website for VINAYAKA.

---

## Overview

VINAYAKA is a multilingual audio-visual hate speech detection framework that operates solely on audio and visual signals without relying on textual transcriptions.

The framework leverages pretrained representations from **WavLM** and **ImageBind**, followed by **Cross-modal Fusion in Hyperbolic Space (CFHS)** to model interactions between paralinguistic audio cues and behavioral visual cues.

VINAYAKA demonstrates strong performance under:

* In-distribution evaluation
* Cross-lingual evaluation
* Cross-dataset evaluation
* Out-of-distribution evaluation

while remaining robust to Automatic Speech Recognition (ASR) error propagation.

---

## Abstract

In this work, we investigate the robustness of audio–visual (AV) cues for Multilingual Audio–Visual Hate Speech Detection (M-AVHSD).

We propose **VINAYAKA**, a novel framework for M-AVHSD that relies solely on AV cues for decision-making.

Along with WavLM and ImageBind, it employs Cross-modal Fusion in Hyperbolic Space (CFHS), which models the effective alignment between paralinguistic and behavioral AV cues to better capture hateful intent in temporal audio signals and corresponding visual scenes.

Empirical results demonstrate that the proposed framework achieves state-of-the-art performance in both in-distribution and out-of-distribution settings across cross-lingual and cross-dataset evaluations.

Furthermore, the results show that the framework remains robust to ASR error propagation.

---

## Authors

**Bhavinkumar Vinodbhai Kuwar**<sup>1,2</sup>
**Orchic Chetia Phukan**<sup>3</sup>
**Rajesh Sharma**<sup>1,4</sup>

<sup>1</sup> Plaksha University, India <sup>2</sup> IIIT Delhi, India <sup>3</sup> National Tsing Hua University (NTHU), Taiwan <sup>4</sup> University of Tartu, Estonia

---

## Website Structure

```text
VINAYAKA/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── architecture.png
│   ├── paper.pdf
│   └── favicon.png
│
└── README.md
```

---

## Setup

Clone the repository:

```bash
git clone https://github.com/USERNAME/VINAYAKA.git
cd VINAYAKA
```

Open:

```text
index.html
```

in your browser.

No additional dependencies are required.

---

## Deployment with GitHub Pages

1. Push the repository to GitHub.

2. Navigate to:

```text
Settings → Pages
```

3. Under **Build and Deployment**:

```text
Source: Deploy from Branch
```

4. Select:

```text
Branch: main
Folder: /root
```

5. Save.

Your website will become available at:

```text
https://USERNAME.github.io/VINAYAKA/
```

---

## Assets

Place the following files inside the `assets` directory:

```text
assets/
├── architecture.png
├── paper.pdf
└── favicon.png
```

---

## Paper

The camera-ready paper should be placed at:

```text
assets/paper.pdf
```

The Paper button on the website automatically links to this file.

---

## Code

Code release is currently marked as:

```text
Coming Soon
```

Once the repository is public, update the Code button in `index.html`.

---

## Contact

For questions regarding the paper or project:

**Bhavinkumar Vinodbhai Kuwar**

Email:

```text
bhavinkumar24212@iiitd.ac.in
```

---

## Citation

```bibtex
@inproceedings{vinayaka2026,
  title={Multilingual Audio-Visual Hate Speech Detection via Cross-Modal Fusion in Hyperbolic Space},
  author={Bhavinkumar Vinodbhai Kuwar and Orchic Chetia Phukan and Rajesh Sharma},
  booktitle={Interspeech},
  year={2026}
}
```

---

## License

Code and resources will be released upon publication.
