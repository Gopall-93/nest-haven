import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    id: null,
    title: "",
    category: "",
    description: "",
    location: {
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      coordinates: {
        lat: 0,
        lng: 0,
      },
    },
    price: 0,
    currency: "USD",
    guests: 0,
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    amenities: [],
    accessibility: [],
    features: [],
    images: [],
    hostId: "",
    reviews: [],
    availability: {
      availableFrom: null,
      availableTo: null,
    },
    bookingCount: 0,

    isFeatured: false,
    status: "pending",
  },
};

const list = createSlice({
  name: "list",
  initialState,
  reducers: {
    updateListId: (state, action) => {
      state.list.id = action.payload;
    },
    updateCategory: (state, action) => {
      state.list.category = action.payload;
    },
    updateDescription: (state, action) => {
      state.list.description = action.payload;
    },
  },
});
export const { updateCategory, updateListId, updateDescription } =
  list.actions;
export default list.reducer;
