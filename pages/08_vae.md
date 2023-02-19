---
preload: false
clicks: 3
---
<div v-if="$slidev.nav.clicks == 0">
  <h1>Auto encoder</h1>
</div>
<div v-if="$slidev.nav.clicks == 1">
  <h1>Auto encoder</h1>
</div>
<div v-if="$slidev.nav.clicks == 2">
  <h1>Variational autoencoder (VAE)</h1>
</div>
<div v-if="$slidev.nav.clicks == 3">
  <h1>Conditional variational autoencoder (CVAE)</h1>
</div>
<MotionCanvas project_name="vae" :clicks_to_frames="{0: [0, 96], 1: [96, 208], 2: [208, 270], 3: [270, Infinity]}" :page="$slidev.nav.currentPage"/>