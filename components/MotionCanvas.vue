<script setup lang="ts">
import { Project} from "@motion-canvas/core"
import { onMounted, ref } from "vue";
// const promise = import("/project.632c4285.js");
import * as project from "/project.632c4285.js";

const DEF_DELAY = 1000;
const canvas = ref();
let p : Project | null = null;

// defineProps({
//     project_file: {
//         default: "",
//     },
// })

onMounted(async () => {
    p = project.default();
    if(p == null) return;
    p.setCanvas(canvas.value);
    p.framerate = 60;
    await p.recalculate();
    const size = p.getSize();
    // p.seek(0);
    await sleep(1000);
    play();
});

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

async function play(){
    if(p == null) return;

    p.seek(0);
    let isFinished = false;
    while(!isFinished){
        isFinished = await p.next();
        await p.render();
        await sleep(1/p.framerate*100);
    }
}
</script>

<template>
    <canvas style="aspect-ratio: 16 / 9; max-width: 100%; max-height: 100%;" ref="canvas">
    </canvas>
</template>