<template>

          <div class="content3">
            <vue-headful
              title="Likai Codes"
              description="Likai.Codes!"/>

            <center>
                <img src= '@/assets/cic.png'>
            </center>

          </div>

</template>

<script>
export default {

}
</script>

<style>

/* Default */
.content3 {
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
  .content3 {
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
  .content3 {
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


.content3 img{ 
  display: block;
  position: relative;
  max-width:50%;
  max-height:50%;

}

</style>