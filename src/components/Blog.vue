<template>
        <div class="container">
          <div class="blog">
            <div class="titlebar">

              <div class="title">
                <img src='@/assets/likai_small.png'>
                <div class="title-content">
                  <h2>{{ blogposts[0].id }} - {{ blogposts[0].title }}</h2>
                  <p>{{ blogposts[0].date }}</p>
                </div>
              </div>
              
            </div>
               <div class="content">
                <p>{{ blogposts[0].content}}</p>
              </div>
          </div>
        </div>
</template>

<script>
// Blogs consist of Blogposts, and output as a navigable list to view Blogposts.
// Blogs attain a list of Blogposts from a source, like a text file.
import Blogpost from '@/components/Blogpost'
export default {
  data () {
    return{ // the return statement is required to be able to use the variables in the html above. 
      blogposts: [
        {
          title: "First Post",
          id: 1,
          date: "7/11/2019",
          content: "This is my first blog post, currently testing out Vue's component system!"},
        {
          title: "hello again",
          id: 2,
          date: "7/11/2019",
          content: "stuff here also!"
        }
      ]
       // import blogposts somehow later, perhaps from a text file.
    }
  },
  methods: {
   
  }
}
</script>

<style>

/* Default */
.container{
  display: flex;
  position: relative;
  flex-direction: column;
}

.titlebar{
align-items:center;
display: flex;
flex-direction: row;
border: 3px solid black;
max-height: 20%;
width: auto;
}

.title{
  display: flex;
  flex-direction: row;
  justify-content: left;
  border: 1px solid green;
  margin: auto;
  line-height: 5%;
  width: 100%;
}

.title img{ 
  display: flex;
  position: relative;
  flex-direction: row;
  max-width:20%;
  max-height:20%;
  border: 2px solid black;
  margin: 2%;
}

.title-content{
  display: flex;
  flex-direction: column;
}
.content{
  border: 1px solid black;
}

</style>