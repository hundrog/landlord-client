<template>
  <v-container>
    <v-responsive class="overflow-y-auto" max-height="90vh">
      <div class="pa-2 text-center">Reviews</div>
      <ReviewsShow v-for="(review, i) in reviews" :review="review" :key="i" />
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  computed: {
    reviews() {
      let reviews = this.$store.state.reviews.reviews;
      return reviews.filter(
        (review) =>
          review.content.toLowerCase().includes(this.searchBy.toLowerCase()) ||
          review.name.toLowerCase().includes(this.searchBy.toLowerCase()) ||
          review.address.toLowerCase().includes(this.searchBy.toLowerCase())
      );
    },
    searchBy() {
      return this.$store.state.reviews.searchBy;
    },
  },
};
</script>
