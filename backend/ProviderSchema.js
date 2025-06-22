import mongoose from "mongoose";

const ServiceProviderSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  photo: { 
    type: String, 
    default: "default-avatar.jpg" 
  },
  hourlyRate: {  
    type: Number, 
    required: true 
  },
  role: {
    type: String,
    default: "provider" 
  },


  serviceType: {  
    type: String,
    required: true,
    enum: ["plumbing", "electrical", "cleaning", "ac-repair", "carpentry", "painting"]
  },
  certifications: {  
    type: [String], 
    default: [] 
  },
  tools: { 
    type: [String],
    default: []
  },
  experienceYears: {  
    type: Number,
    default: 0
  },
  bio: { 
    type: String, 
    maxLength: 100  
  },
  serviceAreas: {  
    type: [String],
    required: true
  },
  availability: {  
    type: Map,
    of: [String]
  },
  reviews: [{ 
    type: mongoose.Types.ObjectId, 
    ref: "Review" 
  }],
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalJobs: {  
    type: Number,
    default: 0
  },
  status: {  
    type: String,
    enum: ["pending", "approved", "blocked"],
    default: "pending"
  },
  bookings: [{
    type: mongoose.Types.ObjectId, 
    ref: "Booking" 
  }],
  insurance: {  
    type: Boolean,
    default: false
  },
  vehicle: {  
    type: String
  }
}, { timestamps: true });

export default mongoose.model("ServiceProvider", ServiceProviderSchema);