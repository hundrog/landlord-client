<template>
  <v-select
    label="Locality"
    v-model="locality"
    :items="localities"
    item-text="name"
    item-value="id"
    return-object
    single-line
    @change="setLocality"
  ></v-select>
</template>

<script>
export default {
  data: () => ({
    locality: { id: 0, cp: 0, city: "", state: "", name: "" },
  }),
  computed: {
    localities() {
      let lcl = this.$store.state.addresses.localities;

      return lcl.filter(
        (locality) =>
          this.postalCode &&
          locality.cp.toString().match(this.postalCode.toString())
      );
    },
    postalCode() {
      return this.$store.state.addresses.postalCode;
    },
  },
  methods: {
    setLocality() {
      this.$store.commit("addresses/SET_CITY", this.locality.city);
      this.$store.commit("addresses/SET_STATE", this.locality.state);
    },
  },
};
</script>