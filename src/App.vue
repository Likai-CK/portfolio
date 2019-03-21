
<template>


  <div id="app">

      <video playsinline autoplay muted loop id="bgvid">
			  <source src="./asteroids.mp4" type="video/mp4">
		  </video>

      <div class="boxed">

          <div class="menu">
            <p>menu here</p>
          </div>

          <div class="content">

            <div class="left">
              <h2>Likai Kuroi</h2>
              <h3>My blog post!</h3>
              <p>asdasdasdasdsddsdasd</p>
            </div>

            <div class="middle">

            </div>
            
            <div class="right">
              <p>afdsafdsfsfsdfasfdsfasdfsdfsdf</p>
            </div>
             
          </div>

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
import world from './components/world'
import VueScriptComponent from 'vue-script-component'

export default {
  name: 'app',
  components: {
    VueScriptComponent
  },
  data () {
    return {

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

.boxed {
  display: flex;
  flex-direction: column;
  margin: 0;
  position: relative;
  width: 65%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid green;
}

.menu {
display: flex;
flex-direction: row;
background-color: darkblue;
margin-top: 3%;
margin-left: 3%;
margin-right: 3%;
position: relative;
border: 1px solid green;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%; 
  margin-bottom: 2%;
  min-height: 60%;
  max-height: 60%;
  border: 1px solid red;
}

.left {
  display: flex;
  flex-direction: column;
  background-color: gray;
  text-align: left;
  width: 75%;
  margin-right: 2%;
  border: 1px solid yellow;
}

.middle {
display: flex;
flex-direction: column;
background-color: white;
width: 1%;

}

.right {
  display: flex;
  flex-direction: column;
  background-color: gray;
  text-align: right;
  width: 75%;
  margin-left: 2%;
  border: 1px solid yellow;
}

.footer {
  display: flex;
  flex-direction: row;
}
.footer-box-left{
  display: flex;
  flex-direction: column;
  align-self: flex-start; 
  width: 325px;
  height: 270px;
  margin-bottom: 3%;
  margin-left: 3%;
  background-color: gray;
  border: 4px solid purple;
}

.footer-box-bottom{
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 35%;
  justify-content:flex-end;
  align-items:flex-start;
  background-color: gray;
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

