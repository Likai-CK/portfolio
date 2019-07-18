<template>
<div class="RecentActivity">

<!-- https://vuetifyjs.com/en/components/lists#examples used for ref-->
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>

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

<style>


.RecentActivity img {
    height: 40px;
    width: 40px;
}

</style>