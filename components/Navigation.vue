<template>
  <v-navigation-drawer v-model="drawer" absolute bottom temporary>
    <v-list nav dense>
      <v-list-item-group v-model="group">
        <v-list-item
          v-for="item in links"
          :key="item.title"
          link
          nuxt
          :to="item.page"
          active-class="accent"
          color="grey darken-4"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer() {
      return this.$store.state.drawer;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>