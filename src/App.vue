<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  (function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>= 720){
                // docEl.style.fontSize = '100px';
                docEl.setAttribute('style', 'font-size: 100px !important')
            }else{
              // docEl.style.setAttribute('font')
              const target = parseInt(100 * (clientWidth / 720))
              docEl.setAttribute('style', `font-size: ${target}px !important`)
                // docEl.style.fontSize =  target + 'px !important';
            }
            console.log(docEl.style.fontSize)
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
},
}
</script>

<style >
 * { touch-action: pan-y; } 
html,body,ul,input{
  margin: 0;
  padding: 0;
}
#app {
  
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 100px; */
}
</style>
