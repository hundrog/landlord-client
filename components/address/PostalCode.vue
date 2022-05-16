<template>
  <v-text-field
    label="Postal Code"
    @input="getLocalities"
    v-model="postalCode"
  ></v-text-field>
</template>
<script>
export default {
  data: () => ({
    postalCode: "",
  }),
  methods: {
    getLocalities() {
      this.$store.commit("addresses/SET_CP", this.postalCode);
    },
  },
};
</script>