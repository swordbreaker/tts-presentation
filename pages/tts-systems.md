---
---
# Cascaded TTS systems - Acoustic models
## Tacotron 2
- proposed by Google in 2018
- consists of two parts
  - Encoder: 
    - Converts letter sequences to internal  
      feature representation.
  - Decoder: 
    - Converts feature representation to Mel spectrogram.
<img src="/imgs/tacotron-architecture.png" class="absolute right-20 top-30 w-80" />

---
---
# Cascaded TTS systems - Acoustic models
## FastSpeech 2
- proposed by Microsoft in 2019
- uses transformer
- uses variance adaptor to combat overfitting
<img src="/imgs/Fastspeech2Overview.png" class="absolute right-20 top-30 w-70" />

<!-- Duration predictor, Pitch predictor, Energy predictor -->

---
---
# Cascaded TTS systems - Vocoder
## WaveNet
- proposed by Google DeepMind in 2016
- uses dilated causal convolutions for autoregressive
<img src="/imgs/DilatedCasualConvolutions.png" class="w-80%" />

---
---
# Cascaded TTS systems - Vocoder
## MelGAN
- proposed by Lyrebird AI in 2019
- uses generative adversarial network (GAN)
<!-- <img src="/imgs/DilatedCasualConvolutions.png" class="w-80%" /> -->
