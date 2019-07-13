<template>
          <div class="content">
            <vue-headful
              title="Home - Likai Codes"
              description="Homepage of Likai.Codes!"/>

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
// Blogs consist of Blogposts, and output as a navigable list to view Blogposts.
// Blogs attain a list of Blogposts from a source, like a text file.
import Blogpost from '@/components/Blogpost'
export default {
  name: 'Blog',
   components: {
    Blogpost
  },
  data () {
    return {
      blogposts: [] // import blogposts somehow later, perhaps from a text file.
    }
  },
  methods: {
   
  }
}
</script>

<style>

/* Default */
.content {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content:space-between;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%; 
  margin-bottom: 2%;
  border: 1px solid red;
  max-height: 60%;
  min-height: 60%;
}

</style>