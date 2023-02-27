---
---
# Experiment - ESPnet

<img src="/imgs/espnet_logo.png" class="w-50%"/>

* Speech processing toolkit for
  * speech recognition (Speech-to-Text)
  * Text-to-Speech
  * speech translation
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
* text translation from German to Swiss German (T5 Model)
* noise reduction
* trim silence at start and end
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
* text translation from German to Swiss German (T5 Model)
* ~~noise reduction~~
* trim silence at start and end
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
* only used best speaker for AG, BE, SG, ZH

<v-click>
  <table class="position-absolute top-100px right-5 w-500px!">
    <tr>
      <td>train</td>
      <td>12’948</td>
    </tr>
    <tr>
      <td>dev</td>
      <td>720</td>
    </tr>
    <tr>
      <td>test</td>
      <td>720</td>
    </tr>
  </table>
</v-click>

---
---
# Corpora
## SwissDial
* 8 dialects (AG, BE, BS, GR, LU, SG, VS, ZH).
* high quality

<v-click>
  <table class="my-10 w-500px!">
    <tr>
      <td>train</td>
      <td>27’828</td>
    </tr>
    <tr>
      <td>dev</td>
      <td>1’546</td>
    </tr>
    <tr>
      <td>test</td>
      <td>1’547</td>
    </tr>
  </table>
</v-click>

<v-click>
  <img src="/imgs/SwissDialDist.png" class="position-absolute w-50% top-250px right-5" />
</v-click>
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
<v-click>
  <table class="w-500px!">
    <tr>
      <td>train</td>
      <td>27’828</td>
    </tr>
    <tr>
      <td>dev</td>
      <td>1’546</td>
    </tr>
    <tr>
      <td>test</td>
      <td>1’547</td>
    </tr>
  </table>
</v-click>


---
---
# Training
- 4x NVIDIA A100-SXM4 40 GB
- SDS-200 and SwissDial 4 day training
- SlowSoft 1 day training
- SDS-200 only speaker with the most data and best quality were chosen
  - AG, BE, SG, ZH

---
---
<div class="flex flex-wrap justify-center">
  <img src="/imgs/sds200_mel_loss.png" class="w-50%"/>
  <img src="/imgs/SwissDial_generator_mel_loss.png" class="w-50%"/>
  <img src="/imgs/Slowsoft_mel_loss.png" class="w-50%"/>
</div>