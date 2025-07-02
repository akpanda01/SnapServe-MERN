import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    serviceProvider: {
      type: mongoose.Types.ObjectId,
      ref: "ServiceProvider", 
      required: true,
    },
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    serviceType: {  
      type: String,
      required: true,
      enum: ["plumbing", "electrical", "cleaning", "ac-repair", "carpentry"],
    },
    serviceCharge: {  
      type: Number,  
      required: true,
    },
    address: {  
      type: String,
      required: true,
    },
    appointmentSlot: {  
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],  
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: false,  
    },
    paymentMethod: {  
      type: String,
      enum: ["cash", "online", "card"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);