<template>
  <v-app id="landord">
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color="accent">Landlord</v-toolbar-title>
      <v-spacer></v-spacer>
      <ReviewsNew />
      <v-menu
        bottom
        offset-y
        left
        :close-on-content-click="false"
        min-width="300"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>

        <SearchSimple />
      </v-menu>

      <SearchAdvanced />
    </v-app-bar>

    <v-main class="grey darken-4">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="item in links"
            :key="item.title"
            link
            nuxt
            :to="item.page"
            active-class="primary"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Reviews", icon: "mdi-home", page: "/" },
      { title: "Inspire", icon: "mdi-thought-bubble", page: "inspire" },
    ],
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>