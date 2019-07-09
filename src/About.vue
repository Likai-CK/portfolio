
<template>


  <div id="app">

      <video playsinline autoplay muted loop id="bgvid">
			  <source src="./asteroids.mp4" type="video/mp4">
		  </video>

      <div class="boxed">

          <div class="menu">
            <nav v-bind:class="active" v-on:click.prevent>
              <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
              <a href="#" class="code" v-on:click="makeActive('home')">Code</a>
            </nav>
          </div>

          <div class="content">

            <div class="left">
              <h2>Likai Kuroi</h2>
              <h3>My blog post!</h3>
              <p>asdasdasdasdsddsdasd</p>
              <p>also: {{ active }} is selected.</p>
            </div>

            <div class="middle">

            </div>
            
            <div class="right">
              <p>afdsafdsfsfsdfasfdsfasdfsdfsdf</p>
              <p>afdsafdsfsfsdfasfdsfasdfsdfsdf</p>
              <p>afdsafdsfsfsdfasfdsfasdfsdfsdf</p>
              <p>afdsafdsfsfsdfasfdsfasdfsdfsddasdasdasdasdadsdsdasdasdasdasdasdasdasf</p>
              <p>afdsafdsfsfsdfasfdsfasdfsdfsdf</p>
              <p>afdsafdsfsfsdfasfdsfasdfsdfsdf</p>
              <p>afdsafdsfsfsdfasfdsfasdfsdfsdf</p>
              <p>afdsafdsfsfsdfasfdsfasdfsdfsdf</p>
              <p>afdsafdsfsfsdfasfdsfasdfsdfsdf</p>
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
    makeActive: function(item){
      this.active = item;
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


nav{
    display:inline-block;
    margin:60px auto 45px;
    background-color:#5597b4;
    box-shadow:0 1px 1px #ccc;
    border-radius:2px;
}

nav a{
    display:inline-block;
    padding: 18px 30px;
    color:#fff !important;
    font-weight:bold;
    font-size:16px;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;

    -webkit-transition:background-color 0.25s;
    -moz-transition:background-color 0.25s;
    transition:background-color 0.25s;
}

nav a:first-child{
    border-radius:2px 0 0 2px;
}

nav a:last-child{
    border-radius:0 2px 2px 0;
}

nav.home .home,
nav.code, nav.contact{
    background-color:#e35885;
}


.boxed {
  display: flex;
  flex-direction: column;
  margin: 0;
  position: relative;
  width: 65%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid green;
}

.menu {
justify-content:center;
display: flex;
flex-direction: row;
font:30px/1.3 'Open Sans', sans-serif;
margin-top: 3%;
margin-left: 3%;
margin-right: 3%;
position: relative;
border: 1px solid green;
}

.content {
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%; 
  margin-bottom: 2%;
  border: 1px solid red;
}

.left {  
  display: inline-flex;
  flex-direction: column;
  background-color: gray;
  text-align: left;
  min-width: 50%;
  max-width: 50%;
  overflow: auto;
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
  display: inline-flex;
  flex-direction: column;
  background-color: gray;
  text-align: right;
  min-width: 50%;
  max-width: 50%;
  margin-left: 2%;
  overflow: auto;
  border: 1px solid yellow;
}

.footer {
  margin-top: -1%;
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

