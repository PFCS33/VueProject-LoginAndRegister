<template>
  <InitialPage></InitialPage>
</template>

<script>
import InitialPage from "./components/InitialPage.vue";
export default {
  components: { InitialPage },
};
</script>

<style>
/*
--------------------------------------------------------------------------
--- 01 TYPOGRAPHY SYSTEM 【字体设置】
- Font sizes(px): 【字体大小】
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
- Font Weight:【字体粗细】
Default:400
- Line Height: 【行高】
Default:1
--------------------------------------------------------------------------
--- 02 COLORS 【颜色系统】
- Primary【主颜色】

- Greys:  【灰色】
#555
- Tints:  【浅色系】
- Shades: 【深色系】
- Acents: 【其他颜色】
--------------------------------------------------------------------------
--- 03 SHADOWS 【阴影设置】  
--------------------------------------------------------------------------
--- 04 BORDER-RADIUS 【边界圆润度】
--------------------------------------------------------------------------
--- 05 WHITESPACE 【空格等级】
- SPACEING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  /* Set rem */
  /* percentage of user-browser setting */
  font-size: 62.5%;
}

body {
  /* ------------------------------ Initial setup ----------------------------- */
  font-family: sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #555;
  /* -------------------------------------------------------------------------- */
}
</style>
