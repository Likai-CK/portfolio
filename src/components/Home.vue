<template>
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
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.content {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content:space-between;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%; 
  margin-bottom: 2%;
  height: 500px;
  border: 1px solid red;
}

.left {  
  display: inline-flex;
  flex-direction: column;
  background-color: gray;
  text-align: left;
  overflow: auto;
  width: 55%;
  margin-right: 2%;
  border: 1px solid yellow;
}

.middle {
display: flex;
flex-direction: column;
background-color: white;
width: 1%;
margin-left: 1%;
margin-right: 1%;

}

.right {
  display: inline-flex;
  flex-direction: column;
  background-color: gray;
  text-align: right;
  width: 55%;
  margin-left: 2%;
  overflow: auto;
  border: 1px solid yellow;
}

</style>