<template>
<div class="RecentActivity">

<!-- https://vuetifyjs.com/en/components/lists#examples used for ref-->
  <v-layout column>
    <v-flex>
      <v-card>
        <v-toolbar color="purple" dark>

          <v-toolbar-title>Recent Activity</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>

        </v-toolbar>

        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click=""
          >

            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </div>

</template>

<script>

  export default {
    data () {
      return {
        items: [
          { icon: true, title: 'GitHub Commit', avatar: 'https://cdn.iconscout.com/icon/free/png-256/github-92-437562.png' },
          { title: 'GitHub Commit', avatar: 'https://cdn.iconscout.com/icon/free/png-256/github-92-437562.png' },
          { title: 'GitHub Commit', avatar: 'https://cdn.iconscout.com/icon/free/png-256/github-92-437562.png' }
        ]
      }
    }
  }
</script>

<!-- https://github.com/vuetifyjs/vuetify/issues/2083 we imported material-design-icons-iconfont/dist/material-design-icons.css from npm -->

<style scoped>
@import 'vuetify/dist/vuetify.min.css';
@import 'material-design-icons-iconfont/dist/material-design-icons.css'; 


.RecentActivity img {
    height: 40px;
    width: 40px;
}

</style>