export const state = () => ({
  reviews: [
    {
      id: 1,
      avatar:
        "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
      icon: "mdi-home-city",
      title: "A Bad Place to Live",
      name: "Evan You",
      address: "Mariano Otero 5561",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quaerat facilis voluptates",
      likes: 21,
      comments: 18,
      liked: false
    },
    {
      id: 2,
      avatar:
        "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairShavedSides&accessoriesType=Prescription01&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Blue01&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Pale",
      icon: "mdi-account",
      title: "Bad Landlord",
      name: "Christina Fitz",
      address: "Orion 3985",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quaerat facilis voluptates",
      likes: 12,
      comments: 0,
      liked: true
    },
    {
      id: 3,
      avatar:
        "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Kurt&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerShirt&clotheColor=PastelRed&eyeType=Cry&eyebrowType=Angry&mouthType=Serious&skinColor=Light",
      icon: "mdi-home-city",
      title: "A Bad Place to Live",
      name: "Mark Thous",
      address: "Milan 2808",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quaerat facilis voluptates",
      likes: 5,
      comments: 8,
      liked: false
    },
  ],
  searchBy: ""
});

export const mutations = {
  ADD(state, review) {
    state.reviews.unshift({
      icon: "mdi-account",
      title: "Bad Landlord",
      name: "Christina Fitz",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quaerat facilis voluptates",
      likes: 12,
      comments: 0,
    });
  },
  LIKE(state, review) {
    review.likes++
    review.liked = !review.liked
  },
  DISLIKE(state, review) {
    review.likes--
    review.liked = !review.liked
  },
  SEARCH(state, query) {
    state.searchBy = query
  }
};
