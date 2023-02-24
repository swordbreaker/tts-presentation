---
---
# Experiment - EPSnet

<img src="/imgs/espnet_logo.png" class="w-50%"/>

* Speech processing toolkit for 
  * speech recognition (Speech-to-text)
  * text-to-speech
  * speech translation.
  * PyTorch
  * Kaldi for data processing

---
---
# Experiment
## Models
* Tacotron 2 
* Fast-Speech 2
* VITS

## Preprocessing
* Grapheme-to-Phoneme (G2P) for German vs character encoding
* Text translation form German to Swiss German (T5 Model)
* Noise reduction
* Trimm silence at start and end
* X-Vector Embedding for speaker embedding

---
---
# Experiment
## Models
* ~~Tacotron 2~~
* ~~Fast-Speech 2~~
* VITS

## Preprocessing
* ~~Grapheme-to-Phoneme (G2P) for German~~ vs character encoding
* Text translation form German to Swiss German (T5 Model)
* ~~Noise reduction~~
* Trimm silence at start and end
* X-Vector Embedding for speaker embedding

---
---
# Corpora
## SDS-200
* 200 hours audio
* all dialects
* have been crowdsourced
* compressed audio files
* background noise


---
---
# Corpora
## SwissDial
* 8 dialects (AG, BE, BS, GR, LU, SG, VS, ZH).
* 3 hours of audio
* high quality
---
---
# Corpora
## SlowSoft
- only “Bündnerdeutsch”
- 1.98 hours of audio
- phonemic transcriptions

<v-click>

"D Entrümpelig bringt au chance"

"tent.[1]rym.p@.lig [3]birgt [3]?a_u [3]Sa~.s_s@"

</v-click>

---
---
# Training
- NVIDIA A100-SXM4 40 GB
- SDS-200 and SwissDial 4 day training
- SlowSoft 1 day training
- SDS-200 only speaker with the most data and best quality where choosen
  - AG, BE, SG, ZH

---
---
<div class="flex flex-wrap justify-center">
  <img src="/imgs/sds200_mel_loss.png" class="w-50%"/>
  <img src="/imgs/SwissDial generator mel loss.png" class="w-50%"/>
  <img src="/imgs/Slowsoft_mel_loss.png" class="w-50%"/>
</div>