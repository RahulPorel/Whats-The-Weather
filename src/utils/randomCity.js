import { v4 as uuid } from "uuid";

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Original cities array
export const cities = [
  {
    id: uuid(),
    cityNa: "Mumbai",
  },
  {
    id: uuid(),
    cityNa: "Buenos Aires",
  },
  {
    id: uuid(),
    cityNa: "Istanbul",
  },
  {
    id: uuid(),
    cityNa: "Lagos",
  },
  {
    id: uuid(),
    cityNa: "Dhaka",
  },
  {
    id: uuid(),
    cityNa: "Bangkok",
  },
  {
    id: uuid(),
    cityNa: "Kolkata",
  },
  {
    id: uuid(),
    cityNa: "Kinshasa",
  },
  {
    id: uuid(),
    cityNa: "Seoul",
  },
  {
    id: uuid(),
    cityNa: "Jakarta",
  },
  {
    id: uuid(),
    cityNa: "Tokyo",
  },
  {
    id: uuid(),
    cityNa: "Delhi",
  },
  {
    id: uuid(),
    cityNa: "Cairo",
  },
  {
    id: uuid(),
    cityNa: "Mexico City",
  },
  {
    id: uuid(),
    cityNa: "Lima",
  },
  {
    id: uuid(),
    cityNa: "London",
  },
  {
    id: uuid(),
    cityNa: "New York City",
  },
  {
    id: uuid(),
    cityNa: "Los Angeles",
  },
  {
    id: uuid(),
    cityNa: "Chicago",
  },
  {
    id: uuid(),
    cityNa: "Paris",
  },
  {
    id: uuid(),
    cityNa: "Moscow",
  },
  {
    id: uuid(),
    cityNa: "Berlin",
  },
  {
    id: uuid(),
    cityNa: "Madrid",
  },
  {
    id: uuid(),
    cityNa: "Toronto",
  },
  {
    id: uuid(),
    cityNa: "Rio de Janeiro",
  },
  {
    id: uuid(),
    cityNa: "Bogota",
  },
  {
    id: uuid(),
    cityNa: "Santiago",
  },
  {
    id: uuid(),
    cityNa: "Sydney",
  },
  {
    id: uuid(),
    cityNa: "Melbourne",
  },
  {
    id: uuid(),
    cityNa: "Bangalore",
  },
  {
    id: uuid(),
    cityNa: "Singapore",
  },
  {
    id: uuid(),
    cityNa: "Kuala Lumpur",
  },
  {
    id: uuid(),
    cityNa: "Hong Kong",
  },
  {
    id: uuid(),
    cityNa: "Shanghai",
  },
  {
    id: uuid(),
    cityNa: "Beijing",
  },
  {
    id: uuid(),
    cityNa: "Guangzhou",
  },
  {
    id: uuid(),
    cityNa: "Shenzhen",
  },
  {
    id: uuid(),
    cityNa: "Istanbul",
  },
  {
    id: uuid(),
    cityNa: "Cairo",
  },
  {
    id: uuid(),
    cityNa: "Tehran",
  },
  {
    id: uuid(),
    cityNa: "Riyadh",
  },
  {
    id: uuid(),
    cityNa: "Baghdad",
  },
  {
    id: uuid(),
    cityNa: "Kuwait City",
  },
  {
    id: uuid(),
    cityNa: "Dubai",
  },
  {
    id: uuid(),
    cityNa: "Doha",
  },
  {
    id: uuid(),
    cityNa: "Abu Dhabi",
  },
  {
    id: uuid(),
    cityNa: "Johannesburg",
  },
  {
    id: uuid(),
    cityNa: "Cape Town",
  },
  {
    id: uuid(),
    cityNa: "Durban",
  },
  {
    id: uuid(),
    cityNa: "Pretoria",
  },
  {
    id: uuid(),
    cityNa: "Nairobi",
  },
  {
    id: uuid(),
    cityNa: "Lagos",
  },
  {
    id: uuid(),
    cityNa: "Accra",
  },
  {
    id: uuid(),
    cityNa: "Nairobi",
  },
  {
    id: uuid(),
    cityNa: "Kigali",
  },
  {
    id: uuid(),
    cityNa: "Addis Ababa",
  },
  {
    id: uuid(),
    cityNa: "Khartoum",
  },
  {
    id: uuid(),
    cityNa: "Casablanca",
  },
  {
    id: uuid(),
    cityNa: "Algiers",
  },
  {
    id: uuid(),
    cityNa: "Tunis",
  },
  {
    id: uuid(),
    cityNa: "Jerusalem",
  },
  {
    id: uuid(),
    cityNa: "Tel Aviv",
  },
  {
    id: uuid(),
    cityNa: "Amman",
  },
  {
    id: uuid(),
    cityNa: "Athens",
  },
  {
    id: uuid(),
    cityNa: "Rome",
  },
  {
    id: uuid(),
    cityNa: "Milan",
  },
  {
    id: uuid(),
    cityNa: "Naples",
  },
  {
    id: uuid(),
    cityNa: "Venice",
  },
  {
    id: uuid(),
    cityNa: "Florence",
  },
  {
    id: uuid(),
    cityNa: "Turin",
  },
  {
    id: uuid(),
    cityNa: "Bologna",
  },
  {
    id: uuid(),
    cityNa: "Warsaw",
  },
  {
    id: uuid(),
    cityNa: "Krakow",
  },
  {
    id: uuid(),
    cityNa: "Wroclaw",
  },
  {
    id: uuid(),
    cityNa: "Gdansk",
  },
  {
    id: uuid(),
    cityNa: "Poznan",
  },
  {
    id: uuid(),
    cityNa: "Brussels",
  },
  {
    id: uuid(),
    cityNa: "Antwerp",
  },
  {
    id: uuid(),
    cityNa: "Ghent",
  },
  {
    id: uuid(),
    cityNa: "Bruges",
  },
  {
    id: uuid(),
    cityNa: "Liege",
  },
  {
    id: uuid(),
    cityNa: "Barcelona",
  },
  {
    id: uuid(),
    cityNa: "Madrid",
  },
  {
    id: uuid(),
    cityNa: "Valencia",
  },
  {
    id: uuid(),
    cityNa: "Seville",
  },
  {
    id: uuid(),
    cityNa: "Zaragoza",
  },
  {
    id: uuid(),
    cityNa: "Malaga",
  },
  {
    id: uuid(),
    cityNa: "Bilbao",
  },
  {
    id: uuid(),
    cityNa: "Granada",
  },
  {
    id: uuid(),
    cityNa: "San Sebastian",
  },
  {
    id: uuid(),
    cityNa: "Palma",
  },
  {
    id: uuid(),
    cityNa: "Toledo",
  },
  {
    id: uuid(),
    cityNa: "Santander",
  },
  {
    id: uuid(),
    cityNa: "Cadiz",
  },
  {
    id: uuid(),
    cityNa: "Alicante",
  },
  {
    id: uuid(),
    cityNa: "Ibiza",
  },
  {
    id: uuid(),
    cityNa: "Mallorca",
  },
  {
    id: uuid(),
    cityNa: "Menorca",
  },
  {
    id: uuid(),
    cityNa: "Valletta",
  },
  {
    id: uuid(),
    cityNa: "Nicosia",
  },
  {
    id: uuid(),
    cityNa: "Limassol",
  },
  {
    id: uuid(),
    cityNa: "Larnaca",
  },
  {
    id: uuid(),
    cityNa: "Paphos",
  },
  {
    id: uuid(),
    cityNa: "Helsinki",
  },
  {
    id: uuid(),
    cityNa: "Tampere",
  },
  {
    id: uuid(),
    cityNa: "Turku",
  },
  {
    id: uuid(),
    cityNa: "Oulu",
  },
  {
    id: uuid(),
    cityNa: "Espoo",
  },
  {
    id: uuid(),
    cityNa: "Vantaa",
  },
  {
    id: uuid(),
    cityNa: "Rovaniemi",
  },
  {
    id: uuid(),
    cityNa: "Jyvaskyla",
  },
  {
    id: uuid(),
    cityNa: "Kuopio",
  },
  {
    id: uuid(),
    cityNa: "Lahti",
  },
  {
    id: uuid(),
    cityNa: "Vaasa",
  },
  {
    id: uuid(),
    cityNa: "Joensuu",
  },
  {
    id: uuid(),
    cityNa: "Pori",
  },
  {
    id: uuid(),
    cityNa: "Lappeenranta",
  },
  {
    id: uuid(),
    cityNa: "Kouvola",
  },
  {
    id: uuid(),
    cityNa: "Hameenlinna",
  },
  {
    id: uuid(),
    cityNa: "Savonlinna",
  },
  {
    id: uuid(),
    cityNa: "Mariehamn",
  },
  {
    id: uuid(),
    cityNa: "Tampere",
  },
  {
    id: uuid(),
    cityNa: "Turku",
  },
  {
    id: uuid(),
    cityNa: "Oulu",
  },
  {
    id: uuid(),
    cityNa: "Espoo",
  },
  {
    id: uuid(),
    cityNa: "Vantaa",
  },
  {
    id: uuid(),
    cityNa: "Rovaniemi",
  },
  {
    id: uuid(),
    cityNa: "Jyvaskyla",
  },
  {
    id: uuid(),
    cityNa: "Kuopio",
  },
  {
    id: uuid(),
    cityNa: "Lahti",
  },
  {
    id: uuid(),
    cityNa: "Vaasa",
  },
  {
    id: uuid(),
    cityNa: "Joensuu",
  },
  {
    id: uuid(),
    cityNa: "Pori",
  },
  {
    id: uuid(),
    cityNa: "Lappeenranta",
  },
  {
    id: uuid(),
    cityNa: "Kouvola",
  },
  {
    id: uuid(),
    cityNa: "Hameenlinna",
  },
  {
    id: uuid(),
    cityNa: "Savonlinna",
  },
  {
    id: uuid(),
    cityNa: "Mariehamn",
  },
];

// Shuffle the cities array randomly
export const shuffledCities = shuffleArray(cities);
