---
---
# Metrics
## MCD
- Mel-cepstral distortion
- measures how different two sequences of mel cepstra are
- the smaller the MCD the closer the synthesized speech

## log-F0 RMSE
- Log-F0 root-mean-square error
- (F0) is closely related to pitch

---
---
# Metrics
## CER and WER
- Character or Word Error Rate
- hit ($H$)
- substitution ($S$)
- deletion ($D$)
- insertion ($I$)


$$

\begin{array}{c}
    CER = \frac{S + D + I}{H + S + D} = \frac{N_{mod}}{N_{GT}}
\end{array}
 
$$

- $N_{GT}$ the number of characters in the ground-truth
- $N_{mod}$ the number of characters which needed modification

---
---
# Metrics
## BLEU
- Bilingual Evaluation Understudy Score
- counts the matching n-grams
- perfect match <material-symbols-arrow-back :rotate="180" /> 1.0
- perfect mismatch <material-symbols-arrow-back :rotate="180" /> 0.0

---
---
# Metrics
## Vocoder Discriminator Score
- vocoder GAN Architecture
- take discriminator
- input synthesized data
- can we fool the discriminator?

---
---
# Parallel WaveGAN
<img src="/imgs/pgan.png" class="h-90% mx-auto"/>

---
---
# MelGAN
<img src="/imgs/melgan.png" class="h-90% mx-auto" />

---
---
# Results
<img src="/imgs/Results.png" class="h-90% mx-auto"/>