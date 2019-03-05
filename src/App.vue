
<template>


  <div id="app">

    <div id="mainmenu">
      <radial-menu
        style="margin: auto; margin-top: 300px; background-color: white"
        :itemSize="50"
        :radius="120"
        :angle-restriction="360">
          <radial-menu-item 
            v-for="(item, index) in items" 
            :key="index" 
            style="background-color: white" 
            @click="() => handleClick(item)">
            <span>{{item}}</span>
          </radial-menu-item>
        </radial-menu>
        <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">{{ lastClicked }}</div>
      </div>

      <video playsinline autoplay muted loop id="bgvid">
			  <source src="./asteroids.mp4" type="video/mp4">
		  </video>


  </div>
</template>

<script>
import RadialMenu from './components/menu.vue'
import RadialMenuItem from './components/menuitem.vue'


export default {
  name: 'app',
  components: {
    RadialMenu,
    RadialMenuItem,
  },
  data () {
    return {
      items: ['foo', 'bar', 'hello', 'world', 'more', 'items'],
      lastClicked: 'Click to Begin',
    }
  },
  methods: {
    handleClick (item) {
      this.lastClicked = item;
    }
  }
}
</script>


    
<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;
}

video#bgvid { 
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background-size: cover; 
}

#mainmenu {
  position: relative;
  top: 25%;
}

</style>

