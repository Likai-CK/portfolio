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
                <h1>hey there!</h1>
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
  justify-content:space-around;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%; 
  margin-bottom: 2%;
  min-height: 70%;
  max-height: 70%;
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

</style>