<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <!-- <v-sheet rounded="lg" color="grey darken-3">
          <SearchSimple />
        </v-sheet> -->
      </v-col>

      <v-col cols="12" sm="6">
        <v-sheet rounded="lg" color="grey darken-3">
          <ReviewsList />
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="3" class="d-none d-md-block">
        <!-- <v-sheet rounded="lg" color="grey darken-3">
          <ReviewsNew />
        </v-sheet> -->
      </v-col>
    </v-row>
  </v-container>
</template>