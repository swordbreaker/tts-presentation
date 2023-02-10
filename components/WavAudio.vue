<script setup lang="ts">
import { onMounted, onBeforeMount, Ref, ref, onUnmounted } from "vue";
import WaveSurfer from "wavesurfer";
import SpectrogramPlugin from "wavesurfer.js/src/plugin/spectrogram";
import createColormap from "colormap";
import { v4 as uuidv4 } from 'uuid';
// import np from "@d4c/numjs"; 
// import Plotly from "plotly.js"

const props = defineProps({
    audio: {
        default: "",
    },
    name: {
      default: uuidv4() as string,
    }
});

const wavesurfer = ref(null) as Ref<any>;

onMounted(() => {
    wavesurfer.value?.destroy();

    const colors = createColormap({
        colormap: "magma",
        nshades: 256,
        format: "float",
    }) as any;

    wavesurfer.value = WaveSurfer.create({
        container: "#waveform" + props.name,
        waveColor: "violet",
        progressColor: "purple",
        normalize: true,
        responsive: true,
        plugins: [
            SpectrogramPlugin.create({
                container: "#wave-spectrogram" + props.name,
                labels: true,
                height: 256,
                colorMap: colors,
            }),
        ],
    });

    wavesurfer.value?.load(props.audio ?? "");
});

onUnmounted(() =>{
  wavesurfer.value?.destroy();
})

function play() {
    wavesurfer.value?.play();
}
</script>

<template>
    <div>
        <a class="btn btn-primary w-100" @click="play()"> Play</a>
        <div :id="'waveform' + props.name"></div>
        <div :id="'wave-spectrogram' + props.name"></div>
    </div>
</template>