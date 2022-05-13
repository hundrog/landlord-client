<template>
  <v-container>
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      min-height="200"
      transition="fade-transition"
    >
      <v-card class="mx-auto" color="primary" dark>
        <v-card-title>
          <v-icon large left> {{ review.icon }} </v-icon>
          <span class="text-h6 font-weight-light"> {{ review.title }} </span>
        </v-card-title>

        <v-card-text>
          <div class="text-subtitle-2">
            {{ review.address }}
          </div>
          <div class="text-h5 font-weight-bold">
            {{ review.content }}
          </div>
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img class="elevation-6" alt="" :src="review.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ review.name }}</v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-icon class="mr-1" @click="likeReview" :color="iconColor">
                mdi-heart
              </v-icon>
              <span class="subheading mr-2">{{ review.likes }}</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-lazy>
    <div class="pa-1"></div>
  </v-container>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: ["review"],
  data: () => ({
    isActive: false,
  }),
  computed: {
    iconColor() {
      return this.review.liked ? "error" : "blue-grey lighten-5";
    },
  },
  methods: {
    likeReview() {
      if (!this.review.liked) {
        this.$store.commit("reviews/LIKE", this.review);
      } else {
        this.$store.commit("reviews/DISLIKE", this.review);
      }
    },
  },
};
</script>