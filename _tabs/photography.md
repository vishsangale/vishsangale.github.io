---
title: Photography
icon: fas fa-camera
order: 3
---

<style>
  .photography-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    padding: 1.5rem 0;
  }

  .photo-item {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    border: 1px solid var(--main-border-color);
    display: flex;
    flex-direction: column;
  }

  .photo-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    border-color: #009efd;
  }

  .photo-link {
    display: block;
    width: 100%;
    height: 240px;
    overflow: hidden;
    cursor: zoom-in;
  }

  .photo-link img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .photo-item:hover .photo-link img {
    transform: scale(1.08);
  }

  .photo-info {
    padding: 1.25rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .photo-title {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    color: var(--text-color);
    display: block;
    transition: color 0.3s ease;
  }

  .photo-item:hover .photo-title {
    color: #009efd;
  }

  .photo-description {
    font-size: 0.9rem;
    color: var(--text-muted-color);
    line-height: 1.6;
    font-style: italic;
    margin: 0;
  }

  /* Dark mode enhancements */
  [data-theme='dark'] .photo-item {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }
  
  [data-theme='dark'] .photo-item:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 576px) {
    .photography-gallery {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .photo-link {
      height: 200px;
    }
  }
</style>

Through the lens, I explore the world's fleeting beauty, from the deep cosmos to the textures of everyday life. Each photograph is a moment captured, a story told in light and shadow.

## The Collection

<div class="photography-gallery">

  <div class="photo-item">
    <a href="/assets/img/photography/217A3388.jpg" class="photo-link">
      <img src="/assets/img/photography/217A3388.jpg" alt="Total Solar Eclipse" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Totality</span>
      <p class="photo-description">A fleeting alignment of celestial bodies, where day surrenders to night and the sun's hidden, ethereal corona dances in the sudden dark.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/217A6285.CR2.jpg" class="photo-link">
      <img src="/assets/img/photography/217A6285.CR2.jpg" alt="Comet NEOWISE" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Cosmic Wanderer</span>
      <p class="photo-description">Comet NEOWISE painting a transient stroke of ancient dust across the twilight, a silent visitor from the frozen edges of our solar system.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/217A6696.CR2.jpg" class="photo-link">
      <img src="/assets/img/photography/217A6696.CR2.jpg" alt="Lunar Details" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Silent Seas</span>
      <p class="photo-description">The harsh, unyielding beauty of the lunar surface, where every crater and basaltic sea tells a violent history frozen in a vacuum.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_20180909_204056_311.jpg" class="photo-link">
      <img src="/assets/img/photography/IMG_20180909_204056_311.jpg" alt="Camping under the Stars" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Canopy of Starlight</span>
      <p class="photo-description">Finding refuge beneath the ancient pines, as the galactic core spills its quiet light over a sleeping forest.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_20181218_164035-EFFECTS (1).jpg" class="photo-link">
      <img src="/assets/img/photography/IMG_20181218_164035-EFFECTS (1).jpg" alt="New York Skyline" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Steel and Gold</span>
      <p class="photo-description">The electric pulse of Lower Manhattan softening as the setting sun casts a fleeting, golden hue across the glass monoliths.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_20190731_074339_221.jpg" class="photo-link">
      <img src="/assets/img/photography/IMG_20190731_074339_221.jpg" alt="Milky Way and Headlamp" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">The Observer</span>
      <p class="photo-description">A solitary beam piercing the immediate dark, dwarfed by the incomprehensible scale and silent roar of the Milky Way.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_2560.JPG" class="photo-link">
      <img src="/assets/img/photography/IMG_2560.JPG" alt="Winter Camping" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Winter's Keep</span>
      <p class="photo-description">A fragile, resilient shelter standing against the deep freeze, where the silence of the snow is absolute.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_8091.JPG" class="photo-link">
      <img src="/assets/img/photography/IMG_8091.JPG" alt="Deep Space Milky Way" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Galactic Dust</span>
      <p class="photo-description">Looking toward the center of our island universe, where chaotic clouds of star-stuff obscure the supermassive black hole at the core.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_8402.JPG" class="photo-link">
      <img src="/assets/img/photography/IMG_8402.JPG" alt="Glowing Tents" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Mountain Hearth</span>
      <p class="photo-description">The warm, amber glow of human presence stark against the cold, infinite expanse of an alpine night.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_8721.JPG" class="photo-link">
      <img src="/assets/img/photography/IMG_8721.JPG" alt="Lunar Eclipse" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Crimson Shadow</span>
      <p class="photo-description">A blood moon hanging heavy over the San Francisco skyline, Earth's shadow casting a surreal, copper glow upon its nearest neighbor.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_8831.JPG" class="photo-link">
      <img src="/assets/img/photography/IMG_8831.JPG" alt="Lunar Craters" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">The Terminator Line</span>
      <p class="photo-description">Shadows stretching long across the lunar mountains, revealing the violent, scarred topology hidden in the stark contrast of light and dark.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_9027.JPG" class="photo-link">
      <img src="/assets/img/photography/IMG_9027.JPG" alt="Milky Way and Meteor" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">A Fleeting Spark</span>
      <p class="photo-description">A brilliant streak burning up in the upper atmosphere, a violent end for a solitary piece of space debris against a backdrop of eternal stars.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_9030.JPG" class="photo-link">
      <img src="/assets/img/photography/IMG_9030.JPG" alt="Saturn" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Lord of the Rings</span>
      <p class="photo-description">The gas giant suspended in the void, its delicate, icy rings a profound reminder of the delicate geometry of the outer solar system.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_9031.JPG" class="photo-link">
      <img src="/assets/img/photography/IMG_9031.JPG" alt="Telescope Rig" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Vessels of Light</span>
      <p class="photo-description">Bathed in the red light of an observation run, these instruments stand as our humble attempt to capture the photons of distant worlds.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_9033.JPG" class="photo-link">
      <img src="/assets/img/photography/IMG_9033.JPG" alt="Jupiter and Moons" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">The Jovian Court</span>
      <p class="photo-description">Jupiter burning fiercely in the dark, accompanied by its four Galilean moons—a miniature solar system playing out its orbital dance.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/IMG_9034.JPG" class="photo-link">
      <img src="/assets/img/photography/IMG_9034.JPG" alt="Jupiter Close-up" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Storms of Gas</span>
      <p class="photo-description">A turbulent atmosphere banded in chaotic winds, where the ancient Great Red Spot churns larger than the Earth itself.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/PANO_20191125_112113.vr.jpg" class="photo-link">
      <img src="/assets/img/photography/PANO_20191125_112113.vr.jpg" alt="Canadian Rockies Panorama" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">The High Divide</span>
      <p class="photo-description">The jagged, snow-dusted spine of the Canadian Rockies cutting into the blue, their immense scale mirrored in the cold, glacial waters below.</p>
    </div>
  </div>

  <div class="photo-item">
    <a href="/assets/img/photography/PSX_20200816_102124 (2).jpg" class="photo-link">
      <img src="/assets/img/photography/PSX_20200816_102124 (2).jpg" alt="Glowing Tent Milky Way" loading="lazy">
    </a>
    <div class="photo-info">
      <span class="photo-title">Bathing in Starlight</span>
      <p class="photo-description">An ethereal, blue-lit sanctuary resting in the profound stillness of the wild, guarded by the arc of our home galaxy.</p>
    </div>
  </div>

</div>
