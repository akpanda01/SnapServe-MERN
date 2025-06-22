import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    serviceProvider: {
      type: mongoose.Types.ObjectId,
      ref: "ServiceProvider", 
      required: true
    },
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true
    },
    booking: { 
      type: mongoose.Types.ObjectId,
      ref: "Booking",
      required: true
    },
    reviewText: {
      type: String,
      required: true,
      maxlength: 500 
    },
    rating: {
      type: Number,
      required: true,
      min: 1, 
      max: 5
    },
    serviceType: { 
      type: String,
      enum: ["plumbing", "electrical", "cleaning", "ac-repair", "carpentry", "painting"],
      required: true
    },
    photos: {  
      type: [String],  
      default: []
    },
    wouldRecommend: {  
      type: Boolean,
      default: true
    },
    response: {  
      text: String,
      respondedAt: Date
    }
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },  
    toObject: { virtuals: true }
  }
);

reviewSchema.index({ serviceProvider: 1 });
reviewSchema.index({ customer: 1 });
reviewSchema.index({ rating: 1 });

export default mongoose.model("Review", reviewSchema);