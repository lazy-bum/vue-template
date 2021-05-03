<template>
  <iframe :src="props.src" class="base-iframe" ref="baseIframe" />
</template>

<script setup>
import { onMounted, defineProps, ref } from 'vue'
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const props = defineProps({
  src: {
    type: String, default: '//pichengxian.com'
  }
})

const baseIframe = ref(null)

NProgress.configure({ showSpinner: false });
onMounted(() => {
  load()
  resize()
})

// 显示等待框
function show() {
  NProgress.start();
}

// 隐藏等待框
function hide() {
  NProgress.done();
}
// 加载浏览器窗口变化自适应
function resize() {
  window.onresize = () => {
    iframeInit();
  };
}

// 加载组件
function load() {
  show();
  let time = 3;
  const timeFunc = setInterval(() => {
    time--;
    if (time === 0) {
      hide();
      clearInterval(timeFunc);
    }
  }, 1000);
  iframeInit();
}

//iframe窗口初始化
function iframeInit() {
  const iframe = baseIframe.value;
  if (!iframe) return;
  iframe.style.height = `100%`;
  if (iframe.attachEvent) {
    iframe.attachEvent("onload", () => {
      hide();
    });
  } else {
    iframe.onload = () => {
      hide();
    };
  }
}

</script>

<style lang="scss">
.base-iframe {
  width: 100%;
  height: 100%;
  border: 0;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
