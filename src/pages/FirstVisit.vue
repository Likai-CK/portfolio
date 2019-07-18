<template>

          <div class="content2">
            <vue-headful
              title="Likai Codes"
              description="Likai.Codes!"/>

            <center>
                <img src='@/assets/likai_small.png'>

                <h1> Welcome! </h1>
                <h3>I'm a software developer, and this is my portfolio!</h3>
                <h4>Use the above menu to navigate!</h4>
            </center>

          </div>

</template>

<script>
export default {
    created(){
        setTimeout( () => this.$router.push({path: '/news'}), 5000);
    }
}
</script>

<style>

/* Default */
.content2 {
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
  .content2 {
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
  .content2 {
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


.content2 img{ 
  display: block;
  position: relative;
  border-radius: 200px;
  max-width:15%;
  max-height:15%;
  border: 5px solid purple;
  margin: 2%;
}

</style>