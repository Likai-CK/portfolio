
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
          </div>

          
          <router-view></router-view>
          

          <div class="footer">

            <div class="footer-box-left">
              <VueScriptComponent script='<script type="text/javascript" src="//rf.revolvermaps.com/0/0/6.js?i=5ajs75d2o2z&amp;m=7&amp;s=270&amp;c=e63100&amp;cr1=ffffff&amp;f=arial&amp;l=0&amp;bv=90&amp;lx=-420&amp;ly=420&amp;hi=20&amp;he=7&amp;hc=a8ddff&amp;rs=80" async="async"></script>'/>
            </div>

            <div class="footer-box-bottom">
              <p>footer-bottom</p>
            </div>

          </div>

      </div>

  </div>
</template>

<script>
import VueScriptComponent from 'vue-script-component'

export default {
  name: 'app',
  components: {
    VueScriptComponent
  },
  data () {
    return {
      active: 'home'
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
  min-height: 55%;
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
  display: flex;
  flex-direction: row;

}
.footer-box-left{
  display: inline-flex;
  align-self: flex-start; 
  width: 325px;
  height: 270px;
  margin-left: 2%;
  background-color: gray;
  border: 4px solid purple;
}

.footer-box-bottom{
  display: flex;
  width: 100%;
  margin-right: 2%;
  justify-content:flex-start;
  align-items:flex-start;
  background-color: gray;
  border: 3px solid purple;
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
