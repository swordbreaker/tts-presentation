<script setup lang="ts">
import { Project} from "@motion-canvas/core"
import { onMounted, onUnmounted, ref, getCurrentInstance, watchEffect, } from "vue";
// const promise = import("/project.632c4285.js");
// import * as project from "/project.3c8dab6e.js";
import { projects } from "./motion-projects";

// const self = getCurrentInstance();

const DEF_DELAY = 1000;
const canvas = ref();
let p : Project | null = null;
let isPlaying = false;
let isMounted = false;
let currentClick = -1;
let currentPage = -1;
let activePage = -1;

let mutex = false;

// see https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts
const nav = $slidev.nav as {clicks: number, currentPage: number, isPrintWithClicks: boolean};

const props = defineProps({
    project_name: {
        default: "vae",
    },
    clicks_to_frames:{
        default: {0: [0, 0]},
    }
});

onMounted(async () => {
    console.log("mounted");

    currentClick = nav.clicks;
    currentPage = nav.currentPage;
    activePage = nav.currentPage;

    p = projects[props.project_name].default();
    if(p == null) return;
    p.setCanvas(canvas.value);
    p.framerate = 60;
    p.speed = 1;
    await p.recalculate();
    const size = p.getSize();
    isMounted = true;
    // p.seek(0);
    await sleep(1000);
    await onClickChanged(-1, currentClick);
    await watch();
});

onUnmounted(() =>{
    console.log("unmounted");

    isMounted = false;
});

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

// async function play(){
//     if(p == null) return;

//     p.seek(props.clicks_to_frame[nav.clicks]);
//     resume();
// }

async function watch(){
    while(isMounted){
        if(currentClick != nav.clicks){
            console.log("watch" + nav.clicks);
            await onClickChanged(currentClick, nav.clicks);
            currentClick = nav.clicks;
        }
        if(currentPage != nav.currentPage){
            console.log("page changes");
            onPageChanged(nav.currentPage);
            currentPage = nav.currentPage;
        }

        await sleep(100);
    }
}

async function onClickChanged(oldClick: number, newClick: number){
    if(mutex) return;
    mutex = true;

    isPlaying = false;
    await sleep(1/60*100);
    
    let fs = props.clicks_to_frames[newClick];
    play(fs[0], fs[1]);
    mutex = false;
}

async function onPageChanged(page:number) {
    if(page == activePage){
        let fs = props.clicks_to_frames[nav.clicks];
        play(fs[0], fs[1]);
    }
    else{
        isPlaying = false;
    }
}

async function play(startFrame: number, endFrame:number){
    if(p == null || isPlaying) return;
    isPlaying = true;

    console.log("start: " + startFrame + " end: " + endFrame);
    await p.seek(startFrame);
    let isFinished = await p.next();
    while(!isFinished && p.frame < endFrame){
        await p.render();
        await sleep(1/p.framerate*100);
        isFinished = await p.next();
    }
    isPlaying = false;
}
</script>

<template>
    <canvas style="aspect-ratio: 16 / 9; max-width: 90%; max-height: 90%; margin: auto" ref="canvas">
    </canvas>
</template>