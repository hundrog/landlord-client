<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <v-text-field label="Street" v-model="street"></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-text-field label="Ext" v-model="externalNumber"></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-text-field label="Int" v-model="interalNumber"></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>
