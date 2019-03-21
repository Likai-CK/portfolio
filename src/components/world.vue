<template>
    <div id="world">
        Loading!
        <div v-el:script-holder></div>
    </div>
</template>

<script>
    // https://stackoverflow.com/questions/45561612/ads-with-script-tags-in-template-vue-js
    export default {
        data () {
            return {};
        },
        ready() {
             let scriptEl = document.createElement('script');
             scriptEl.setAttribute('src', '//rf.revolvermaps.com/0/0/6.js?i=5ajs75d2o2z&amp;m=7&amp;s=270&amp;c=e63100&amp;cr1=ffffff&amp;f=arial&amp;l=0&amp;bv=90&amp;lx=-420&amp;ly=420&amp;hi=20&amp;he=7&amp;hc=a8ddff&amp;rs=80');
             scriptEl.async = true;
             this.$els.scriptHolder.appendChild(scriptEl);
        },
    }
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
