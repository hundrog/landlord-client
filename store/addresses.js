export const state = () => ({
  localities: [
    {
      id: 1,
      cp: 45070,
      name: "Arboledas 1a Secc",
      city: "Zapopan",
      state: "Jalisco",
      stateId: 14,
      cityId: "120",
    },
    {
      id: 2,
      cp: 45070,
      name: "Arboledas 2a Secc",
      city: "Zapopan",
      state: "Jalisco",
      stateId: 14,
      cityId: "120",
    },
    {
      id: 3,
      cp: 45070,
      name: "El Colli Ejidal",
      city: "Zapopan",
      state: "Jalisco",
      stateId: 14,
      cityId: "120",
    },
    {
      id: 4,
      cp: 45070,
      name: "El Colli Urbano 1a. Sección",
      city: "Zapopan",
      state: "Jalisco",
      stateId: 14,
      cityId: "120",
    },
    {
      id: 5,
      cp: 45070,
      name: "La Calma",
      city: "Zapopan",
      state: "Jalisco",
      stateId: 14,
      cityId: "120",
    },
    {
      id: 6,
      cp: 45070,
      name: "Las Fuentes",
      city: "Zapopan",
      state: "Jalisco",
      stateId: 14,
      cityId: "120",
    },
    {
      id: 7,
      cp: 45070,
      name: "El Colli Urbano 2a. sección",
      city: "Zapopan",
      state: "Jalisco",
      stateId: 14,
      cityId: "120",
    },
    {
      id: 8,
      cp: 44630,
      name: "Circunvalación Américas",
      city: "Guadalajara",
      state: "Jalisco",
      stateId: 14,
      cityId: "039",
    },
    {
      id: 9,
      cp: 44630,
      name: "Providencia",
      city: "Guadalajara",
      state: "Jalisco",
      stateId: 14,
      cityId: "039",
    },
  ],
  postalCode: "",
  city: "",
  state: "",
});

export const mutations = {
  SET_CP(state, value) {
    state.postalCode = value
  },
  SET_CITY(state, value) {
    state.city = value
  },
  SET_STATE(state, value) {
    state.state = value
  },
}
