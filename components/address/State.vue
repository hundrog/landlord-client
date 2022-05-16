<template>
  <!-- <v-select
    v-model="state"
    :items="items"
    item-text="state"
    item-value="abbr"
    label="State"
    return-object
    single-line
  ></v-select> -->
  <v-text-field label="State" v-model="state"></v-text-field>
</template>

<script>
export default {
  // data: () => ({
  //   state: { state: "", abbr: "" },
  //   items: [
  //     { state: "Mexico City", abbr: "CDMX" },
  //     { state: "Jalisco", abbr: "JAL" },
  //     { state: "Monterey", abbr: "MTY" },
  //   ],
  // }),
  computed: {
    state() {
      return this.$store.state.addresses.state;
    },
  },
};
</script>