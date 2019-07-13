<template>
          <div class="content">
              <image></image>
              <name></name>
              <text></text>
          </div>
</template>

<script>
export default {
  name: 'Lorem Ipsum',
  image: 'im4g/likai_small.png',
  text: 'lorem ipsum'
}
</script>

<style>

/* Default */
.content {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content:space-between;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%; 
  margin-bottom: 2%;
  border: 1px solid purple;
  max-height: 60%;
  min-height: 60%;
}

</style>