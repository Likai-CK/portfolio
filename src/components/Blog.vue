<template>
        <div class="container">
          <div class="blog">
            <div class="titlebar">

              <div class="avatar">
                <img src='@/assets/likai_small.png'>
              </div>

              <div class="title">
                <h2>{{ blogposts[0].id }} - {{ blogposts[0].title }}</h2>
                <p>{{ blogposts[0].date }}</p>
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
justify-content:center;
align-items:center;
display: flex;
flex-direction: row;
border: 3px solid black;
max-height: 20%;
}



.title{
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid green;
  margin: 1%;
  line-height: 10%;
  width: 100%;
}

.avatar{
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100px;
}
img{ 
  max-width:85%;
  max-height:85%;
  width: auto;
  height: auto;
  border: 2px solid black;
  margin: 3%;
}

.content{
  border: 1px solid black;
}

</style>