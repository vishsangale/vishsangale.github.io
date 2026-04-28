---
title: Research
icon: fas fa-flask
order: 2
---

<style>
  /* Stats section */
  .stats {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
    padding: 56px 0; border-bottom: 1px solid var(--main-border-color);
  }
  .stat .num {
    font-family: "Source Serif 4", Georgia, serif; font-style: italic; font-weight: 350;
    font-size: clamp(38px, 4.6vw, 56px); line-height: 1;
    letter-spacing: -0.02em; color: var(--heading-color);
  }
  .stat .label {
    margin-top: 10px; font-family: "JetBrains Mono", monospace; font-size: 11px;
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted-color);
  }

  /* Topic groupings */
  .group {
    padding: 64px 0 16px;
    border-bottom: 1px solid var(--main-border-color);
  }
  .group-head {
    display: grid; grid-template-columns: 200px 1fr; gap: 48px;
    align-items: baseline; margin-bottom: 32px;
  }
  .group-num {
    font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: 0.16em;
    color: var(--text-muted-color); text-transform: uppercase;
  }
  .group-title {
    font-family: "Source Serif 4", Georgia, serif; font-style: italic; font-weight: 400;
    font-size: clamp(28px, 3.4vw, 40px); margin: 0; letter-spacing: -0.01em;
    color: var(--heading-color);
  }
  .group-title small {
    display: block;
    font-family: "JetBrains Mono", monospace; font-style: normal; font-size: 12px;
    letter-spacing: 0.04em; color: var(--text-muted-color); margin-top: 8px;
  }

  .pub {
    display: grid; grid-template-columns: 200px 1fr 120px; gap: 48px;
    padding: 28px 0; border-top: 1px dashed var(--main-border-color);
    align-items: baseline;
  }
  .pub-side {
    font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: 0.04em;
    color: var(--text-muted-color); display: flex; flex-direction: column; gap: 6px;
  }
  .pub-side .year {
    font-family: "Source Serif 4", Georgia, serif; font-style: italic; font-size: 28px;
    color: var(--heading-color); letter-spacing: -0.01em;
  }
  .pub-title {
    font-family: "Source Serif 4", Georgia, serif; font-size: 22px; line-height: 1.3;
    color: var(--heading-color); font-weight: 500; text-wrap: balance;
    margin: 0 0 10px;
  }
  .pub-authors {
    font-family: "Source Serif 4", Georgia, serif; font-size: 15px; color: var(--text-muted-color);
    line-height: 1.5; margin-bottom: 8px;
  }
  .pub-authors b { color: var(--heading-color); font-weight: 600; font-style: italic; }
  .pub-venue {
    font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: 0.04em;
    color: var(--text-muted-color);
  }
  .pub-links {
    display: flex; gap: 8px; justify-content: flex-end; flex-wrap: wrap;
  }
  .pub-links a {
    font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: 0.04em;
    padding: 6px 10px; border: 1px solid var(--main-border-color);
    color: var(--text-muted-color); border-radius: 4px;
    transition: all 0.2s;
    text-decoration: none;
  }
  .pub-links a:hover { color: #d97c3a; border-color: #d97c3a; }

  @media (max-width: 880px) {
    .group-head { grid-template-columns: 1fr; gap: 8px; }
    .pub { grid-template-columns: 1fr; gap: 16px; }
    .pub-links { justify-content: flex-start; }
    .stats { grid-template-columns: repeat(2, 1fr); }
  }
</style>

<section class="stats">
  <div class="stat"><div class="num">5</div><div class="label">peer-reviewed papers</div></div>
  <div class="stat"><div class="num">4</div><div class="label">research arenas</div></div>
  <div class="stat"><div class="num">9</div><div class="label">open implementations</div></div>
  <div class="stat"><div class="num">13<span style="font-size:0.5em">yr</span></div><div class="label">since first publication</div></div>
</section>

<!-- ============ GROUP: RECSYS ============ -->
<section class="group" data-tag="recsys">
  <div class="group-head">
    <div class="group-num">N° 01 / 04</div>
    <h2 class="group-title">Recommendation Systems
      <small>scaling, retrieval, slate optimization</small>
    </h2>
  </div>

  <article class="pub" data-tag="recsys">
    <div class="pub-side">
      <span class="year">2022</span>
      <span>KDD · proc.</span>
      <span>first author</span>
    </div>
    <div>
      <h3 class="pub-title">NxtPost: User-to-Post Recommendations in Facebook Groups</h3>
      <p class="pub-authors"><b>Sangale, V.</b>, et al.</p>
      <p class="pub-venue">Proc. ACM SIGKDD (KDD), 2022, pp. 3792–3800.</p>
    </div>
    <div class="pub-links">
      <a href="https://dl.acm.org/doi/10.1145/3534678.3539075">DOI ↗</a>
    </div>
  </article>
</section>

<!-- ============ GROUP: CAUSAL ============ -->
<section class="group" data-tag="causal">
  <div class="group-head">
    <div class="group-num">N° 02 / 04</div>
    <h2 class="group-title">Causal Inference
      <small>treatment effects, sequential randomization, ad-load policy</small>
    </h2>
  </div>

  <article class="pub" data-tag="causal">
    <div class="pub-side">
      <span class="year">2025</span>
      <span>NeurIPS COML</span>
      <span>workshop</span>
    </div>
    <div>
      <h3 class="pub-title">Causal-Informed Hybrid Online Adaptive Optimization for Ad-Load Personalization in Large-Scale Social Networks</h3>
      <p class="pub-authors">Mishra, A., Xu, Q., Hua, Z., <b>Sangale, V.</b>, Zhang, J., et al.</p>
      <p class="pub-venue">NeurIPS 2025 Workshop on Constrained Optimization for Machine Learning (COML).</p>
    </div>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2602.10129">arXiv ↗</a>
    </div>
  </article>

  <article class="pub" data-tag="causal">
    <div class="pub-side">
      <span class="year">2025</span>
      <span>arXiv · preprint</span>
    </div>
    <div>
      <h3 class="pub-title">Treatment Effect Learning Under Sequential Randomization</h3>
      <p class="pub-authors">Friedberg, R., Mudd, R., Johnstone, P., Pothen, M., Vaingankar, V., <b>Sangale, V.</b>, &amp; Zaidi, A.</p>
      <p class="pub-venue">arXiv preprint, 2025.</p>
    </div>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2510.20078">arXiv ↗</a>
    </div>
  </article>
</section>

<!-- ============ GROUP: CV ============ -->
<section class="group" data-tag="cv">
  <div class="group-head">
    <div class="group-num">N° 03 / 04</div>
    <h2 class="group-title">Computer Vision
      <small>shape-prior segmentation, template networks</small>
    </h2>
  </div>

  <article class="pub" data-tag="cv">
    <div class="pub-side">
      <span class="year">2019</span>
      <span>IEEE TMI</span>
      <span>journal</span>
    </div>
    <div>
      <h3 class="pub-title">TeTrIS: Template Transformer Networks for Image Segmentation With Shape Priors</h3>
      <p class="pub-authors"><b>Sangale, V.</b>, et al.</p>
      <p class="pub-venue">IEEE Transactions on Medical Imaging (TMI), 38(11):2596–2606.</p>
    </div>
    <div class="pub-links">
      <a href="https://ieeexplore.ieee.org/document/8693891">IEEE ↗</a>
    </div>
  </article>
</section>

<!-- ============ GROUP: ROBOTICS ============ -->
<section class="group" data-tag="robotics">
  <div class="group-head">
    <div class="group-num">N° 04 / 04</div>
    <h2 class="group-title">Robotics
      <small>localization, state estimation</small>
    </h2>
  </div>

  <article class="pub" data-tag="robotics">
    <div class="pub-side">
      <span class="year">2013</span>
      <span>IEEE ICACC</span>
      <span>conference</span>
    </div>
    <div>
      <h3 class="pub-title">Localization of a Mobile Autonomous Robot Using Extended Kalman Filter</h3>
      <p class="pub-authors"><b>Sangale, V.</b>, et al.</p>
      <p class="pub-venue">IEEE International Conference on Advances in Computing, Communication and Control (ICACC), 2013.</p>
    </div>
    <div class="pub-links">
      <a href="https://ieeexplore.ieee.org/document/6707324">IEEE ↗</a>
    </div>
  </article>
</section>

<p style="font-family: 'Source Serif 4', Georgia, serif; font-style: italic; font-size: 22px; line-height: 1.5; color: var(--text-muted-color); max-width: 50ch; text-wrap: pretty; margin-top: 72px;">
  Long-form notes that don't (yet) belong in a paper live next door, in
  <a class="link" href="{{ '/posts/' | relative_url }}" style="color: var(--heading-color); font-style: normal; font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: 0.04em; text-decoration: none;">/notes&nbsp;→</a>
</p>
