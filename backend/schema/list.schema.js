import mongoose from "mongoose";


const imageSchema = mongoose.Schema({
  url: { type: String },
  public_id: { type: String },
});

const reviewSchema = mongoose.Schema({
  reviewer_name: String,
  rating: Number,
  comment: String,
  date: Date,
});

const listSchema = mongoose.Schema(
  {
    name: { type: String },

    category: { type: String },

    description: { type: String },

    location: {
      address: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalCode: { type: String },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },

    price: { type: Number },

    currency: { type: String, default: "USD" },

    guests: Number,

    bedrooms: Number,

    beds: Number,

    bathrooms: Number,

    amenities: [String],

    accessibility: [String],

    features: [String],

    images: [imageSchema],

    hostId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

    reviews: [reviewSchema],

    availability: {
      availableFrom: Date,
      availableTo: Date,
    },

    bookingCount: { type: Number, default: 0 },

    views: { type: Number, default: 0 },

    status: {
      type: String,
      enum: ["active", "inactive", "pending", "rejected"],
      default: "pending",
    },

    isFeatured: { type: Boolean, default: false },

    policies: {
      cancellation: String,
      houseRules: String,
    },
    discount: [
      {
        label: { type: String },
        value: { type: String },
      },
    ],
  },

  { timestamps: true }
);

const List = mongoose.model("List", listSchema);
export default List;
