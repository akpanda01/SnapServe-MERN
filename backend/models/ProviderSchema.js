import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: { 
    type: String, 
    required: true,
    minlength: 8
  },
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  phone: { 
    type: String, 
    required: true,
    match: [/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Please enter a valid phone number']
  },
  photo: { 
    type: String, 
    default: "default-avatar.jpg",
    validate: {
      validator: function(v) {
        return /\.(jpg|jpeg|png)$/i.test(v);
      },
      message: props => `${props.value} is not a valid image file!`
    }
  },
  hourlyRate: {  
    type: Number, 
    required: true,
    min: 5
  },
  role: {
    type: String,
    default: "provider",
    immutable: true
  },
  serviceType: {  
    type: String,
    required: true,
    enum: ["plumbing", "electrical", "cleaning", "ac-repair", "carpentry", "painting"]
  },
  certifications: {  
    type: [String], 
    default: [],
    validate: [arrayLimit(10), 'Certifications exceeds the limit of 10']
  },
  tools: { 
    type: [String],
    default: [],
    validate: [arrayLimit(15), 'Tools exceeds the limit of 15']
  },
  experienceYears: {  
    type: Number,
    default: 0,
    min: 0,
    max: 50
  },
  bio: { 
    type: String, 
    maxlength: 100,
    trim: true
  },
  serviceAreas: {  
    type: [String],
    required: true,
    validate: [arrayLimit(5), 'Cannot serve more than 5 areas']
  },
  availability: {  
    type: Map,
    of: [String],
    validate: {
      validator: function(v) {
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        return Object.keys(v).every(key => days.includes(key.toLowerCase()));
      },
      message: 'Invalid day in availability'
    }
  },
  reviews: [{ 
    type: mongoose.Types.ObjectId, 
    ref: "Review" 
  }],
  averageRating: {
    type: Number,
    default: null,
    min: 0,
    max: 5,
    set: v => v === 0 ? null : v
  },
  totalJobs: {  
    type: Number,
    default: 0,
    min: 0
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
    default: false,
    required: function() {
      return this.serviceType === 'electrical' || this.serviceType === 'plumbing';
    }
  },
  vehicle: {  
    type: String,
    required: function() {
      return this.serviceType === 'cleaning' || this.serviceType === 'painting';
    }
  }
}, { 
  timestamps: true,
  collection: 'serviceproviders',
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Array length validator function
function arrayLimit(limit) {
  return function(val) {
    return val.length <= limit;
  };
}

// Indexes
providerSchema.index({ email: 1 }, { unique: true });
providerSchema.index({ serviceType: 1 });
providerSchema.index({ serviceAreas: 1 });
providerSchema.index({ status: 1 });
providerSchema.index({ averageRating: -1 });

// Virtual for review count
providerSchema.virtual('reviewCount').get(function() {
  return this.reviews.length;
});

export default mongoose.model('Provider', providerSchema);