
<template>


  <div id="app">
      <video playsinline autoplay muted loop id="bgvid">
			  <source src="./asteroids.mp4" type="video/mp4">
		  </video>

      <div class="boxed">
          <div class="menu">

            <div class="item">
            <router-link to="/">Home</router-link>
            </div>
            <div class="item">
            <router-link to="/about">About</router-link>
            </div>
            <div class="item">
              <router-link to="/code">Code</router-link>
            </div>
            <div class="item">
              <router-link to="/more">More</router-link>
            </div>
          </div>

          
          <router-view></router-view>
          

          <div class="footer">

            <div class="footer-box-left">
              <VueScriptComponent script='<script type="text/javascript" src="//rf.revolvermaps.com/0/0/3.js?i=5ajs75d2o2z&amp;b=0&amp;s=40&amp;m=0&amp;cl=ff00ff&amp;co=000000&amp;cd=54ff00&amp;v0=60&amp;v1=1&amp;r=1" async="async"></script>'/>
            </div>

            <div class="footer-box-bottom">
              <h4> Welcome to my portfolio! --ticker--</h4>
            </div>

          </div>

      </div>

  </div>
</template>

<script>
import VueScriptComponent from 'vue-script-component' // This lets me run scripts inside of components straight-up. Like embeds and stuff.

export default {
  name: 'app',
  components: {
    VueScriptComponent
  },
  data () {
    return {
      active: 'home',
    }
  },
  methods: {
   
  }

}
</script>


    
<style>
html,
body {
  margin: 0;
  padding: 0;
}


.item {
  margin: 2%
}
.boxed {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 65%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid green;
}

.menu {
justify-content:center;
align-items:center;
display: flex;
flex-direction: row;
font:30px/1.1 'Open Sans', sans-serif;
margin-top: 3%;
margin-left: 3%;
min-height: 40px;
margin-right: 3%;
position: relative;
border: 1px solid green;
}



.footer {
  margin-top: -1%;
  margin-bottom: 1%;
  margin-left: 1%;
  margin-right: 1%;
  display: flex;
  height: 50px;
  flex-direction: row;

}
.footer-box-left{
  display: inline-flex;
  align-self: flex-start; 
  margin-left: 2%;
  height: 40px;
  background-color: gray;
  border: 3px solid purple;
}

.footer-box-bottom{
  display: flex;
  width: 100%;
  height: 40px;
  margin-right: 2%;
  justify-content:flex-start;
  align-items:flex-start;
  background-color: gray;
  border: 3px solid purple;
  line-height: 0; /* This centers the text vertically! */
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


</style>
