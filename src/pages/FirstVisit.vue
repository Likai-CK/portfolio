<template>

          <div class="content">
            <vue-headful
              title="More - Likai Codes"
              description="More of Likai.Codes!"/>

            <center>
                <img src='@/assets/likai_small.png'>
            </center>

          </div>

</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

/* Default */
.content {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%; 
  margin-bottom: 2%;
  border: 1px solid red;
  max-height: 60%;
  min-height: 60%;
}

/* For 1920x1080 */
@media screen and (max-width: 1921px){
  .content {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%; 
  margin-bottom: 2%;
  border: 1px solid red;
  min-height: 400px;
  max-height: 400px;
  }
}

/* For 1440p */
@media screen and (min-width: 1921px) and (max-width: 2560px){
  .content {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%; 
  margin-bottom: 2%;
  border: 1px solid red;
  min-height: 750px;
  max-height: 750px;
  }
}


.content img{ 
  display: flex;
  position: relative;
  flex-direction: row;
  max-width:20%;
  max-height:20%;
  border: 2px solid black;
  margin: 2%;
}

</style>