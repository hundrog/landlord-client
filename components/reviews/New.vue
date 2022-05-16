<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ma-1 d-md-block" icon v-bind="attrs" v-on="on">
        <v-icon>mdi-plus-thick</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="6">
            <v-card-title>
              <span class="text-h5">Write Review</span>
            </v-card-title>
            <v-card-text>
              <v-select
                v-model="category"
                :items="items"
                item-text="name"
                item-value="id"
                label="Category"
                return-object
                single-line
              ></v-select>
              <v-text-field label="Title" v-model="title"></v-text-field>
              <AddressStreet />
              <AddressPostalCode />
              <AddressLocality />
              <AddressState />
              <AddressCity />
              <v-textarea
                label="Review"
                v-model="content"
                hint="Your review"
              ></v-textarea>
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
    title: "",
    category: { name: "", id: "" },
    items: [
      { name: "Place", id: "1", icon: "mdi-home-city" },
      { name: "Landlord", id: "2", icon: "mdi-account" },
      { name: "Tennant", id: "3", icon: "mdi-account-multiple" },
      { name: "Roomie", id: "4", icon: "mdi-account-group" },
    ],
    content: "",
  }),
  computed: {
    size() {
      const size = { xs: true, sm: true, lg: false, xl: false }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
  },
};
</script>