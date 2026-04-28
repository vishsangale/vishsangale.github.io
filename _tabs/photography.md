---
title: Photography
icon: fas fa-camera
order: 3
---

<style>
  /* Mosaic grid */
  .gallery {
    padding: 48px 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
  }
  .ph {
    position: relative;
    overflow: hidden;
    background: #0a0d18;
    border-radius: 4px;
    margin: 0;
  }
  .ph .surface {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .ph:hover .surface { transform: scale(1.04); }
  .ph .meta {
    position: absolute; left: 14px; bottom: 14px; right: 14px;
    display: flex; justify-content: space-between; align-items: flex-end;
    color: rgba(255,255,255,0.92); pointer-events: none;
    opacity: 0; transform: translateY(6px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 2;
  }
  .ph:hover .meta, .ph:focus-within .meta { opacity: 1; transform: translateY(0); }
  .ph .meta .t {
    font-family: "Source Serif 4", Georgia, serif; font-style: italic; font-size: 17px;
    line-height: 1.2; max-width: 80%;
    text-shadow: 0 2px 12px rgba(0,0,0,0.6);
  }
  .ph .meta .n {
    font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: 0.1em;
    text-transform: uppercase;
    text-shadow: 0 1px 6px rgba(0,0,0,0.6);
  }
  .ph::after {
    content: ""; position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 45%);
    opacity: 0; transition: opacity 0.3s ease;
    z-index: 1;
  }
  .ph:hover::after { opacity: 1; }

  /* Spans */
  .span-3 { grid-column: span 3; aspect-ratio: 4/5; }
  .span-4 { grid-column: span 4; aspect-ratio: 1/1; }
  .span-5 { grid-column: span 5; aspect-ratio: 4/3; }
  .span-6 { grid-column: span 6; aspect-ratio: 3/2; }
  .span-7 { grid-column: span 7; aspect-ratio: 3/2; }
  .span-8 { grid-column: span 8; aspect-ratio: 16/9; }
  .span-12 { grid-column: span 12; aspect-ratio: 21/9; }

  @media (max-width: 880px) {
    .gallery { grid-template-columns: repeat(6, 1fr); gap: 8px; }
    .ph { grid-column: span 6 !important; aspect-ratio: 4/3 !important; }
  }
</style>

<div class="gallery" id="gallery">
  <figure class="ph span-6">
    <img class="surface" src="{{ '/assets/img/photography/217A3388.jpg' | relative_url }}" alt="Total solar eclipse — totality" loading="lazy" />
    <figcaption class="meta"><span class="t">Totality</span><span class="n">N° 01</span></figcaption>
  </figure>
  <figure class="ph span-6">
    <img class="surface" src="{{ '/assets/img/photography/217A6285.CR2.jpg' | relative_url }}" alt="Comet NEOWISE" loading="lazy" />
    <figcaption class="meta"><span class="t">Cosmic Wanderer</span><span class="n">N° 02</span></figcaption>
  </figure>

  <figure class="ph span-4">
    <img class="surface" src="{{ '/assets/img/photography/217A6696.CR2.jpg' | relative_url }}" alt="Lunar surface details" loading="lazy" />
    <figcaption class="meta"><span class="t">Silent Seas</span><span class="n">N° 03</span></figcaption>
  </figure>
  <figure class="ph span-4">
    <img class="surface" src="{{ '/assets/img/photography/IMG_20180909_204056_311.jpg' | relative_url }}" alt="Camping under the stars" loading="lazy" />
    <figcaption class="meta"><span class="t">Canopy of Starlight</span><span class="n">N° 04</span></figcaption>
  </figure>
  <figure class="ph span-4">
    <img class="surface" src="{{ '/assets/img/photography/IMG_20181218_164035-EFFECTS (1).jpg' | relative_url }}" alt="New York skyline at golden hour" loading="lazy" />
    <figcaption class="meta"><span class="t">Steel and Gold</span><span class="n">N° 05</span></figcaption>
  </figure>

  <figure class="ph span-12">
    <img class="surface" src="{{ '/assets/img/photography/IMG_20190731_074339_221.jpg' | relative_url }}" alt="Milky Way and headlamp" loading="lazy" />
    <figcaption class="meta"><span class="t">The Observer</span><span class="n">N° 06 · milky way</span></figcaption>
  </figure>

  <figure class="ph span-3">
    <img class="surface" src="{{ '/assets/img/photography/IMG_8402.JPG' | relative_url }}" alt="Glowing tents at altitude" loading="lazy" />
    <figcaption class="meta"><span class="t">Mountain Hearth</span><span class="n">N° 07</span></figcaption>
  </figure>
  <figure class="ph span-3">
    <img class="surface" src="{{ '/assets/img/photography/IMG_9030.JPG' | relative_url }}" alt="Saturn and rings" loading="lazy" />
    <figcaption class="meta"><span class="t">Lord of the Rings</span><span class="n">N° 08</span></figcaption>
  </figure>
  <figure class="ph span-3">
    <img class="surface" src="{{ '/assets/img/photography/IMG_9034.JPG' | relative_url }}" alt="Jupiter close-up showing bands" loading="lazy" />
    <figcaption class="meta"><span class="t">Storms of Gas</span><span class="n">N° 09</span></figcaption>
  </figure>
  <figure class="ph span-3">
    <img class="surface" src="{{ '/assets/img/photography/IMG_8721.JPG' | relative_url }}" alt="Lunar eclipse over San Francisco" loading="lazy" />
    <figcaption class="meta"><span class="t">Crimson Shadow</span><span class="n">N° 10</span></figcaption>
  </figure>

  <figure class="ph span-7">
    <img class="surface" src="{{ '/assets/img/photography/PANO_20191125_112113.vr.jpg' | relative_url }}" alt="Canadian Rockies panorama" loading="lazy" />
    <figcaption class="meta"><span class="t">The High Divide</span><span class="n">N° 11 · canadian rockies</span></figcaption>
  </figure>
  <figure class="ph span-5">
    <img class="surface" src="{{ '/assets/img/photography/IMG_8091.JPG' | relative_url }}" alt="Deep-space Milky Way detail" loading="lazy" />
    <figcaption class="meta"><span class="t">Galactic Dust</span><span class="n">N° 12</span></figcaption>
  </figure>

  <figure class="ph span-4">
    <img class="surface" src="{{ '/assets/img/photography/IMG_2560.JPG' | relative_url }}" alt="Winter camping" loading="lazy" />
    <figcaption class="meta"><span class="t">Winter's Keep</span><span class="n">N° 13</span></figcaption>
  </figure>
  <figure class="ph span-4">
    <img class="surface" src="{{ '/assets/img/photography/IMG_8831.JPG' | relative_url }}" alt="Lunar craters at the terminator line" loading="lazy" />
    <figcaption class="meta"><span class="t">The Terminator Line</span><span class="n">N° 14</span></figcaption>
  </figure>
  <figure class="ph span-4">
    <img class="surface" src="{{ '/assets/img/photography/IMG_9027.JPG' | relative_url }}" alt="Milky Way with meteor" loading="lazy" />
    <figcaption class="meta"><span class="t">A Fleeting Spark</span><span class="n">N° 15</span></figcaption>
  </figure>

  <figure class="ph span-6">
    <img class="surface" src="{{ '/assets/img/photography/PSX_20200816_102124 (2).jpg' | relative_url }}" alt="Glowing tent under the Milky Way" loading="lazy" />
    <figcaption class="meta"><span class="t">Bathing in Starlight</span><span class="n">N° 16</span></figcaption>
  </figure>
  <figure class="ph span-6">
    <img class="surface" src="{{ '/assets/img/photography/IMG_9033.JPG' | relative_url }}" alt="Jupiter with Galilean moons" loading="lazy" />
    <figcaption class="meta"><span class="t">The Jovian Court</span><span class="n">N° 17</span></figcaption>
  </figure>
  <figure class="ph span-6">
    <img class="surface" src="{{ '/assets/img/photography/IMG_9031.JPG' | relative_url }}" alt="Telescope rig under red light" loading="lazy" />
    <figcaption class="meta"><span class="t">Vessels of Light</span><span class="n">N° 18</span></figcaption>
  </figure>
</div>

<p style="font-family: 'Source Serif 4', Georgia, serif; font-style: italic; font-size: 20px; line-height: 1.55; color: var(--text-muted-color); text-wrap: pretty; margin-top: 48px;">
  <span style="font-family: 'JetBrains Mono', monospace; font-style: normal; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--text-muted-color); display: block; margin-bottom: 12px;">/ note</span>
  Most of these were taken with patience, a tripod, and very long
  stacks. Click a frame for the full-resolution version.
</p>
