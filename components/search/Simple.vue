<template>
  <v-form>
    <v-container>
      <v-text-field
        label="Search"
        prepend-inner-icon="mdi-magnify"
        v-model="query"
        @input="searchBy"
      ></v-text-field>

      <SearchAdvanced />
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    query: "",
  }),
  methods: {
    searchBy() {
      this.$store.commit("reviews/SEARCH", this.query);
    },
  },
};
</script>