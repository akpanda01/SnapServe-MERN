import electricianImg from "../images/electrician-img.jpg";
import plumberImg from "../images/plumber-img.jpg";
import cleanerImg from "../images/cleaner-img.jpg";
import acTechImg from "../images/ac-tech-img.jpg";
import carpenterImg from "../images/carpenter-img.jpg";

export const serviceProviders = [
  {
    id: "01",
    name: "Rajesh Kumar",
    specialty: "Electrician",
    avgRating: 4.7,
    totalRating: 185,
    photo: electricianImg,
    totalJobs: 1200,
    location: "Delhi NCR",
    experience: "10+ years",
    serviceCharge: "₹300/hr",
  },
  {
    id: "02",
    name: "Vijay Patel",
    specialty: "Plumber",
    avgRating: 4.9,
    totalRating: 224,
    photo: plumberImg,
    totalJobs: 950,
    location: "Mumbai",
    experience: "8+ years",
    serviceCharge: "₹250/hr",
  },
  {
    id: "03",
    name: "Priya Sharma",
    specialty: "Home Cleaner",
    avgRating: 4.8,
    totalRating: 198,
    photo: cleanerImg,
    totalJobs: 800,
    location: "Bangalore",
    experience: "6+ years",
    serviceCharge: "₹200/hr",
  },
  {
    id: "04",
    name: "Sanjay Gupta",
    specialty: "AC Technician",
    avgRating: 4.6,
    totalRating: 167,
    photo: acTechImg,
    totalJobs: 700,
    location: "Hyderabad",
    experience: "12+ years",
    serviceCharge: "₹400/hr",
  },
  {
    id: "05",
    name: "Arun Mishra",
    specialty: "Carpenter",
    avgRating: 4.5,
    totalRating: 142,
    photo: carpenterImg,
    totalJobs: 600,
    location: "Pune",
    experience: "9+ years",
    serviceCharge: "₹350/hr",
  },
];