<template>
  <v-text-field label="City" v-model="city"></v-text-field>
</template>

<script>
export default {
  data: () => ({
    // city: "",
  }),
  computed: {
    city() {
      return this.$store.state.addresses.city;
    },
  },
};
</script>