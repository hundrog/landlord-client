<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ma-1" icon small v-bind="attrs" v-on="on">
        <v-icon>mdi-filter</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="6">
            <v-card-title>
              <span class="text-h5">Advanced Search</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <AddressStreet />
                <AddressPostalCode />
                <AddressLocality />
                <AddressState />
                <AddressCity />
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="secondary" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="accent" text @click="dialog = false"> Save </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>