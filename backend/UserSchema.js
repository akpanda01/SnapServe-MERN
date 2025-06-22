import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'] 
  },
  password: { 
    type: String, 
    required: true,
    minlength: 6 
  },
  name: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true,
    match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Please enter a valid phone number']
  },
  photo: { 
    type: String, 
    default: "default-avatar.jpg" 
  },
  role: {
    type: String,
    enum: ["customer", "provider", "admin"], 
    default: "customer",
    required: true
  },
  address: {  
    street: String,
    city: String,
    postalCode: String,
    coordinates: {  
      lat: Number,
      lng: Number
    }
  },
 
  savedProviders: [{  
    type: mongoose.Types.ObjectId, 
    ref: "ServiceProvider" 
  }],
  
  providerProfile: {
    serviceType: {
      type: String,
      enum: ["plumbing", "electrical", "cleaning", "ac-repair", "carpentry", "painting"]
    },
    skills: [String],
    tools: [String],
    experienceYears: Number
  },
  bookings: [{ 
    type: mongoose.Types.ObjectId, 
    ref: "Booking" 
  }],
  paymentMethods: [{  
    cardLastFour: String,
    cardBrand: String,
    isDefault: Boolean
  }],
  notifications: [{  
    type: {
      title: String,
      message: String,
      read: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now }
    }
  }],
  lastActive: { type: Date }  
}, { 
  timestamps: true,
  discriminatorKey: 'role'  
});

UserSchema.index({ email: 1 });
UserSchema.index({ "address.coordinates": "2dsphere" }); 

export default mongoose.model("User", UserSchema);