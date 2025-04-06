import User from "./model/user.model.js";
import Destination from "./model/destination.model.js";
import bcrypt from "bcryptjs";

// Podaci za korisnike
const users = [
  {
    fullname: "Admin 1",
    email: "admin1@example.com",
    password: "admin123", 
    isAdmin: true,
  },
  {
    fullname: "Admin 2",
    email: "admin2@example.com",
    password: "admin123",
    isAdmin: true,
  },
  {
    fullname: "User",
    email: "user1@example.com",
    password: "user123",
    isAdmin: false,
  },
];

// Podaci za destinacije
const destinations = [
  {
    destination_id: 1,
    name: "Paris, France",
    details: "City of lights and love. Famous for the Eiffel Tower.",
    price: 1200,
    category: "Europe",
    image: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    destination_id: 2,
    name: "Rome, Italy",
    details: "Anticity meets modernity. Known for the Colosseum.",
    price: 1500,
    category: "Europe",
    image: "https://www.pexels.com/photo/trevi-fountain-2225442/",
  },
  {
    destination_id: 3,
    name: "Tokyo, Japan",
    details: "Modern city with rich history. Famous for sushi and cherry blossoms.",
    price: 1500,
    category: "Asia",
    image: "https://images.pexels.com/photos/2337927/pexels-photo-2337927.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    destination_id: 4,
    name: "New York, SAD",
    details: "Known as the Big Apple. Famous for Times Square and Central Park.",
    price: 1700,
    category: "North America",
    image: "https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&w=300",
  },
  {
    destination_id: 5,
    name: "Sydney, Australia",
    details: "Sydney Opera House and beautiful beaches.",
    price: 1800,
    category: "Oceania",
    image: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    destination_id: 6,
    name: "Barcelona, Spain",
    details: "Barcelona is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.",
    price: 1100,
    category: "Europe",
    image: "https://images.pexels.com/photos/1386444/pexels-photo-1386444.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    destination_id: 7,
    name: "Cairo, Egypt",
    details: "Pyramids and ancient history. Known for the Nile River.",
    price: 950,
    category: "Africa",
    image: "https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    destination_id: 8,
    name: "Dubai, UAE",
    details: "Modern architecture and luxury shopping. Known for the Burj Khalifa.",
    price: 1600,
    category: "Asia",
    image: "https://images.pexels.com/photos/1467300/pexels-photo-1467300.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    destination_id: 9,
    name: "Rio de Janeiro, Brazil",
    details: "Famous for its Copacabana and Ipanema beaches, and the giant Christ the Redeemer statue atop Corcovado mountain.",
    price: 1400,
    category: "South America",
    image: "https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    destination_id: 10,
    name: "Cape Town, South Africa",
    details: "Known for its harbor, natural setting in the Cape Floristic Region, and landmarks like Table Mountain.",
    price: 1300,
    category: "Africa",
    image: "https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    destination_id: 11,
    name: "Dubai, UAE",
    details: "Modern architecture and luxury shopping. Known for the Burj Khalifa.",
    price: 1300,
    category: "disc",
    image: "https://images.pexels.com/photos/1467300/pexels-photo-1467300.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    destination_id: 12,
    name: "Rio de Janeiro, Brazil",
    details: "Famous for its Copacabana and Ipanema beaches, and the giant Christ the Redeemer statue atop Corcovado mountain.",
    price: 1200,
    category: "disc",
    image: "https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    destination_id: 13,
    name: "Cape Town, South Africa",
    details: "Known for its harbor, natural setting in the Cape Floristic Region, and landmarks like Table Mountain.",
    price: 1100,
    category: "disc",
    image: "https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const seedUsers = async () => {
  try {

    // Seeding korisnici
    for (const userData of users) {
      const exists = await User.findOne({ email: userData.email });

      if (!exists) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = new User({
          ...userData,
          password: hashedPassword,
        });
        await user.save();
        console.log(`User inserted: ${userData.email}`);
      } else {
        console.log(`User already exists: ${userData.email}`);
      }
    }

    // Seeding destinacije
    const existingDestinations = await Destination.find();
    if (existingDestinations.length === 0) {
      await Destination.insertMany(destinations);
      console.log("Destinations added.");
    } else {
      console.log("Destinations already exist.");
    }

  } catch (error) {
    console.error("Seeding failed:", error);
  }
};

export default seedUsers;