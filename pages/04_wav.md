---
clicks: 2
preload: false
---
# Fourier transform
<MotionCanvas project_name="spec" :clicks_to_frames="{0: [0, 100], 1: [100, 480], 2: [480, Infinity]}" />

<!-- Decomposing frequencies form sound -->

---
clicks: 1
---
# Decibel
$$
\begin{array}{c}
dB = 20 * \log10(amplitude)
\end{array}
$$
<div v-click="1" class="mx-a items-center flex justify-center">
  <ul class="items-center">
    <li><b>60 dB</b> Normal conversation</li>
    <li><b>105 dB</b> Bulldozer</li>
    <li><b>140 dB</b> Jet engine at takeoff</li>
  </ul>
</div>

# Freqency Hz
Number of oscillation per second.
$$
\begin{array}{c}
f = \frac{1}{T}
\end{array}
$$
where $T$ is the time for one oscillation.