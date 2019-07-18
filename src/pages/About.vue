<template>

          <div class="content4">
            <vue-headful
              title="Likai Codes"
              description="Likai.Codes!"/>

            <center>
                <h4>
                  I am an enthusiast who is always passionate about emerging technologies. I regularly work on web projects with HTML, CSS, and VueJS, as well as other projects using Python and Google's AI library, Tensor Flow. Security is a passion of mine, and I enjoy incorporating it into my work through backend scripts in PHP and C#. I aspire to work on projects that are useful, secure, and accessible! 
                </h4>
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
.content4 {
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
  .content4 {
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
  .content4 {
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
.content4 img{ 
  display: block;
  position: relative;
  border-radius: 200px;
  max-width:15%;
  max-height:15%;
  border: 5px solid purple;
  margin: 2%;
}

</style>