import { v4 as uuid } from "uuid";

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export const cities = [
  {
    id: uuid(),
    cityNa: "Buenos Aires",
  },
  {
    id: uuid(),
    cityNa: "Paris",
  },
  {
    id: uuid(),
    cityNa: "Rome",
  },
  {
    id: uuid(),
    cityNa: "Tokyo",
  },
  {
    id: uuid(),
    cityNa: "New York",
  },
  {
    id: uuid(),
    cityNa: "London",
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
    cityNa: "Moscow",
  },
  {
    id: uuid(),
    cityNa: "Singapore",
  },
  {
    id: uuid(),
    cityNa: "Dubai",
  },
  {
    id: uuid(),
    cityNa: "Sydney",
  },
  {
    id: uuid(),
    cityNa: "Istanbul",
  },
  {
    id: uuid(),
    cityNa: "Hong Kong",
  },
  {
    id: uuid(),
    cityNa: "Bangkok",
  },
  {
    id: uuid(),
    cityNa: "Seoul",
  },
  {
    id: uuid(),
    cityNa: "Shanghai",
  },
  {
    id: uuid(),
    cityNa: "Rio de Janeiro",
  },
  {
    id: uuid(),
    cityNa: "Mexico City",
  },
  {
    id: uuid(),
    cityNa: "Cairo",
  },
  {
    id: uuid(),
    cityNa: "Delhi",
  },
  {
    id: uuid(),
    cityNa: "Beijing",
  },
  {
    id: uuid(),
    cityNa: "Lima",
  },
  {
    id: uuid(),
    cityNa: "Bogotá",
  },
  {
    id: uuid(),
    cityNa: "Johannesburg",
  },
  {
    id: uuid(),
    cityNa: "São Paulo",
  },
  {
    id: uuid(),
    cityNa: "Budapest",
  },
  {
    id: uuid(),
    cityNa: "Warsaw",
  },
  {
    id: uuid(),
    cityNa: "Vienna",
  },
  {
    id: uuid(),
    cityNa: "Athens",
  },
  {
    id: uuid(),
    cityNa: "Stockholm",
  },
  {
    id: uuid(),
    cityNa: "Oslo",
  },
  {
    id: uuid(),
    cityNa: "Copenhagen",
  },
  {
    id: uuid(),
    cityNa: "Helsinki",
  },
  {
    id: uuid(),
    cityNa: "Amsterdam",
  },
  {
    id: uuid(),
    cityNa: "Brussels",
  },
  {
    id: uuid(),
    cityNa: "Dublin",
  },
  {
    id: uuid(),
    cityNa: "Lisbon",
  },
  {
    id: uuid(),
    cityNa: "Prague",
  },
  {
    id: uuid(),
    cityNa: "Edinburgh",
  },
  {
    id: uuid(),
    cityNa: "Zurich",
  },
  {
    id: uuid(),
    cityNa: "Vancouver",
  },
  {
    id: uuid(),
    cityNa: "Montreal",
  },
  {
    id: uuid(),
    cityNa: "Toronto",
  },
  {
    id: uuid(),
    cityNa: "Calgary",
  },
  {
    id: uuid(),
    cityNa: "Ottawa",
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
    cityNa: "Brisbane",
  },
  {
    id: uuid(),
    cityNa: "Perth",
  },
  {
    id: uuid(),
    cityNa: "Auckland",
  },
  {
    id: uuid(),
    cityNa: "Wellington",
  },
  {
    id: uuid(),
    cityNa: "Adelaide",
  },
  {
    id: uuid(),
    cityNa: "Gold Coast",
  },
  {
    id: uuid(),
    cityNa: "Canberra",
  },
  {
    id: uuid(),
    cityNa: "Christchurch",
  },
  {
    id: uuid(),
    cityNa: "Hobart",
  },
  {
    id: uuid(),
    cityNa: "Dhaka",
  },
  {
    id: uuid(),
    cityNa: "Kuala Lumpur",
  },
  {
    id: uuid(),
    cityNa: "Manila",
  },
  {
    id: uuid(),
    cityNa: "Ho Chi Minh City",
  },
  {
    id: uuid(),
    cityNa: "Jakarta",
  },
  {
    id: uuid(),
    cityNa: "Bangalore",
  },
  {
    id: uuid(),
    cityNa: "Chennai",
  },
  {
    id: uuid(),
    cityNa: "Hyderabad",
  },
  {
    id: uuid(),
    cityNa: "Pune",
  },
  {
    id: uuid(),
    cityNa: "Kolkata",
  },
  {
    id: uuid(),
    cityNa: "Surat",
  },
  {
    id: uuid(),
    cityNa: "Ahmedabad",
  },
  {
    id: uuid(),
    cityNa: "Jaipur",
  },
  {
    id: uuid(),
    cityNa: "Lucknow",
  },
  {
    id: uuid(),
    cityNa: "Kanpur",
  },
  {
    id: uuid(),
    cityNa: "Nagpur",
  },
  {
    id: uuid(),
    cityNa: "Indore",
  },
  {
    id: uuid(),
    cityNa: "Thane",
  },
  {
    id: uuid(),
    cityNa: "Bhopal",
  },
  {
    id: uuid(),
    cityNa: "Visakhapatnam",
  },
  {
    id: uuid(),
    cityNa: "Pimpri-Chinchwad",
  },
  {
    id: uuid(),
    cityNa: "Patna",
  },
  {
    id: uuid(),
    cityNa: "Vadodara",
  },
  {
    id: uuid(),
    cityNa: "Ghaziabad",
  },
  {
    id: uuid(),
    cityNa: "Ludhiana",
  },
  {
    id: uuid(),
    cityNa: "Agra",
  },
  {
    id: uuid(),
    cityNa: "Nashik",
  },
  {
    id: uuid(),
    cityNa: "Rajkot",
  },
  {
    id: uuid(),
    cityNa: "Meerut",
  },
  {
    id: uuid(),
    cityNa: "Kalyan-Dombivali",
  },
  {
    id: uuid(),
    cityNa: "Vasai-Virar",
  },
  {
    id: uuid(),
    cityNa: "Varanasi",
  },
  {
    id: uuid(),
    cityNa: "Srinagar",
  },
  {
    id: uuid(),
    cityNa: "Aurangabad",
  },
  {
    id: uuid(),
    cityNa: "Dhanbad",
  },
  {
    id: uuid(),
    cityNa: "Amritsar",
  },
  {
    id: uuid(),
    cityNa: "Navi Mumbai",
  },
  {
    id: uuid(),
    cityNa: "Allahabad",
  },
  {
    id: uuid(),
    cityNa: "Ranchi",
  },
  {
    id: uuid(),
    cityNa: "Haora",
  },
  {
    id: uuid(),
    cityNa: "Jabalpur",
  },
  {
    id: uuid(),
    cityNa: "Gwalior",
  },
  {
    id: uuid(),
    cityNa: "Vijayawada",
  },
  {
    id: uuid(),
    cityNa: "Jodhpur",
  },
  {
    id: uuid(),
    cityNa: "Madurai",
  },
  {
    id: uuid(),
    cityNa: "Raipur",
  },
  {
    id: uuid(),
    cityNa: "Kota",
  },
  {
    id: uuid(),
    cityNa: "Guwahati",
  },
  {
    id: uuid(),
    cityNa: "Chandigarh",
  },
  {
    id: uuid(),
    cityNa: "Solapur",
  },
  {
    id: uuid(),
    cityNa: "Hubli and Dharwad",
  },
  {
    id: uuid(),
    cityNa: "Bareilly",
  },
  {
    id: uuid(),
    cityNa: "Moradabad",
  },
  {
    id: uuid(),
    cityNa: "Mysore",
  },
  {
    id: uuid(),
    cityNa: "Gurgaon",
  },
  {
    id: uuid(),
    cityNa: "Aligarh",
  },
  {
    id: uuid(),
    cityNa: "Jalandhar",
  },
  {
    id: uuid(),
    cityNa: "Tiruchirappalli",
  },
  {
    id: uuid(),
    cityNa: "Bhubaneswar",
  },
  {
    id: uuid(),
    cityNa: "Salem",
  },
  {
    id: uuid(),
    cityNa: "Warangal",
  },
  {
    id: uuid(),
    cityNa: "Thiruvananthapuram",
  },
  {
    id: uuid(),
    cityNa: "Bhiwandi",
  },
  {
    id: uuid(),
    cityNa: "Saharanpur",
  },
  {
    id: uuid(),
    cityNa: "Gorakhpur",
  },
  {
    id: uuid(),
    cityNa: "Guntur",
  },
  {
    id: uuid(),
    cityNa: "Bikaner",
  },
  {
    id: uuid(),
    cityNa: "Amravati",
  },
  {
    id: uuid(),
    cityNa: "Noida",
  },
  {
    id: uuid(),
    cityNa: "Jamshedpur",
  },
  {
    id: uuid(),
    cityNa: "Bhilai Nagar",
  },
  {
    id: uuid(),
    cityNa: "Cuttack",
  },
  {
    id: uuid(),
    cityNa: "Firozabad",
  },
  {
    id: uuid(),
    cityNa: "Kochi",
  },
  {
    id: uuid(),
    cityNa: "Nellore",
  },
  {
    id: uuid(),
    cityNa: "Bhavnagar",
  },
  {
    id: uuid(),
    cityNa: "Dehradun",
  },
  {
    id: uuid(),
    cityNa: "Durgapur",
  },
  {
    id: uuid(),
    cityNa: "Asansol",
  },
  {
    id: uuid(),
    cityNa: "Rourkela",
  },
  {
    id: uuid(),
    cityNa: "Nanded",
  },
  {
    id: uuid(),
    cityNa: "Kolhapur",
  },
  {
    id: uuid(),
    cityNa: "Ajmer",
  },
  {
    id: uuid(),
    cityNa: "Akola",
  },
  {
    id: uuid(),
    cityNa: "Gulbarga",
  },
  {
    id: uuid(),
    cityNa: "Jamnagar",
  },
  {
    id: uuid(),
    cityNa: "Ujjain",
  },
  {
    id: uuid(),
    cityNa: "Loni",
  },
  {
    id: uuid(),
    cityNa: "Siliguri",
  },
  {
    id: uuid(),
    cityNa: "Jhansi",
  },
  {
    id: uuid(),
    cityNa: "Ulhasnagar",
  },
  {
    id: uuid(),
    cityNa: "Nellore",
  },
  {
    id: uuid(),
    cityNa: "Jammu",
  },
  {
    id: uuid(),
    cityNa: "Sangli-Miraj & Kupwad",
  },
  {
    id: uuid(),
    cityNa: "Belgaum",
  },
  {
    id: uuid(),
    cityNa: "Mangalore",
  },
  {
    id: uuid(),
    cityNa: "Ambattur",
  },
  {
    id: uuid(),
    cityNa: "Tirunelveli",
  },
  {
    id: uuid(),
    cityNa: "Malegaon",
  },
  {
    id: uuid(),
    cityNa: "Gaya",
  },
  {
    id: uuid(),
    cityNa: "Jalgaon",
  },
  {
    id: uuid(),
    cityNa: "Udaipur",
  },
  {
    id: uuid(),
    cityNa: "Maheshtala",
  },
  {
    id: uuid(),
    cityNa: "Tirupur",
  },
  {
    id: uuid(),
    cityNa: "Davanagere",
  },
  {
    id: uuid(),
    cityNa: "Kozhikode",
  },
  {
    id: uuid(),
    cityNa: "Akola",
  },
  {
    id: uuid(),
    cityNa: "Kurnool",
  },
  {
    id: uuid(),
    cityNa: "Rajpur Sonarpur",
  },
  {
    id: uuid(),
    cityNa: "Bokaro",
  },
  {
    id: uuid(),
    cityNa: "South Dumdum",
  },
  {
    id: uuid(),
    cityNa: "Bellary",
  },
  {
    id: uuid(),
    cityNa: "Patiala",
  },
  {
    id: uuid(),
    cityNa: "Gopalpur",
  },
  {
    id: uuid(),
    cityNa: "Agartala",
  },
  {
    id: uuid(),
    cityNa: "Bhagalpur",
  },
  {
    id: uuid(),
    cityNa: "Muzaffarnagar",
  },
  {
    id: uuid(),
    cityNa: "Bhatpara",
  },
  {
    id: uuid(),
    cityNa: "Panihati",
  },
  {
    id: uuid(),
    cityNa: "Latur",
  },
  {
    id: uuid(),
    cityNa: "Dhule",
  },
  {
    id: uuid(),
    cityNa: "Rohtak",
  },
  {
    id: uuid(),
    cityNa: "Korba",
  },
  {
    id: uuid(),
    cityNa: "Bhilwara",
  },
  {
    id: uuid(),
    cityNa: "Brahmapur",
  },
  {
    id: uuid(),
    cityNa: "Muzaffarpur",
  },
  {
    id: uuid(),
    cityNa: "Ahmednagar",
  },
  {
    id: uuid(),
    cityNa: "Mathura",
  },
  {
    id: uuid(),
    cityNa: "Kollam",
  },
  {
    id: uuid(),
    cityNa: "Avadi",
  },
  {
    id: uuid(),
    cityNa: "Kadapa",
  },
  {
    id: uuid(),
    cityNa: "Kamarhati",
  },
  {
    id: uuid(),
    cityNa: "Sambalpur",
  },
  {
    id: uuid(),
    cityNa: "Bilaspur",
  },
  {
    id: uuid(),
    cityNa: "Shahjahanpur",
  },
  {
    id: uuid(),
    cityNa: "Satara",
  },
  {
    id: uuid(),
    cityNa: "Bijapur",
  },
  {
    id: uuid(),
    cityNa: "Rampur",
  },
  {
    id: uuid(),
    cityNa: "Shimoga",
  },
  {
    id: uuid(),
    cityNa: "Chandrapur",
  },
  {
    id: uuid(),
    cityNa: "Junagadh",
  },
  {
    id: uuid(),
    cityNa: "Thrissur",
  },
  {
    id: uuid(),
    cityNa: "Alwar",
  },
  {
    id: uuid(),
    cityNa: "Bardhaman",
  },
  {
    id: uuid(),
    cityNa: "Kulti",
  },
  {
    id: uuid(),
    cityNa: "Kakinada",
  },
  {
    id: uuid(),
    cityNa: "Nizamabad",
  },
  {
    id: uuid(),
    cityNa: "Parbhani",
  },
  {
    id: uuid(),
    cityNa: "Tumkur",
  },
  {
    id: uuid(),
    cityNa: "Khammam",
  },
  {
    id: uuid(),
    cityNa: "Ozhukarai",
  },
  {
    id: uuid(),
    cityNa: "Bihar Sharif",
  },
  {
    id: uuid(),
    cityNa: "Panipat",
  },
  {
    id: uuid(),
    cityNa: "Darbhanga",
  },
  {
    id: uuid(),
    cityNa: "Bally",
  },
  {
    id: uuid(),
    cityNa: "Aizawl",
  },
  {
    id: uuid(),
    cityNa: "Dewas",
  },
  {
    id: uuid(),
    cityNa: "Ichalkaranji",
  },
  {
    id: uuid(),
    cityNa: "Karnal",
  },
  {
    id: uuid(),
    cityNa: "Bathinda",
  },
  {
    id: uuid(),
    cityNa: "Jalna",
  },
  {
    id: uuid(),
    cityNa: "Eluru",
  },
  {
    id: uuid(),
    cityNa: "Barasat",
  },
  {
    id: uuid(),
    cityNa: "Kirari Suleman Nagar",
  },
  {
    id: uuid(),
    cityNa: "Purnia",
  },
  {
    id: uuid(),
    cityNa: "Satna",
  },
  {
    id: uuid(),
    cityNa: "Mau",
  },
  {
    id: uuid(),
    cityNa: "Sonipat",
  },
  {
    id: uuid(),
    cityNa: "Farrukhabad",
  },
  {
    id: uuid(),
    cityNa: "Sagar",
  },
  {
    id: uuid(),
    cityNa: "Rourkela",
  },
  {
    id: uuid(),
    cityNa: "Durg",
  },
  {
    id: uuid(),
    cityNa: "Imphal",
  },
  {
    id: uuid(),
    cityNa: "Ratlam",
  },
  {
    id: uuid(),
    cityNa: "Hapur",
  },
  {
    id: uuid(),
    cityNa: "Arrah",
  },
  {
    id: uuid(),
    cityNa: "Anantapur",
  },
  {
    id: uuid(),
    cityNa: "Karimnagar",
  },
  {
    id: uuid(),
    cityNa: "Etawah",
  },
  {
    id: uuid(),
    cityNa: "Ambarnath",
  },
  {
    id: uuid(),
    cityNa: "North Dumdum",
  },
  {
    id: uuid(),
    cityNa: "Bharatpur",
  },
  {
    id: uuid(),
    cityNa: "Begusarai",
  },
  {
    id: uuid(),
    cityNa: "New Delhi",
  },
  {
    id: uuid(),
    cityNa: "Gandhidham",
  },
  {
    id: uuid(),
    cityNa: "Baranagar",
  },
  {
    id: uuid(),
    cityNa: "Tiruvottiyur",
  },
  {
    id: uuid(),
    cityNa: "Pondicherry",
  },
  {
    id: uuid(),
    cityNa: "Sikar",
  },
  {
    id: uuid(),
    cityNa: "Thoothukudi",
  },
  {
    id: uuid(),
    cityNa: "Rewa",
  },
  {
    id: uuid(),
    cityNa: "Mirzapur",
  },
  {
    id: uuid(),
    cityNa: "Raichur",
  },
  {
    id: uuid(),
    cityNa: "Pali",
  },
  {
    id: uuid(),
    cityNa: "Ramagundam",
  },
  {
    id: uuid(),
    cityNa: "Silchar",
  },
  {
    id: uuid(),
    cityNa: "Haridwar",
  },
  {
    id: uuid(),
    cityNa: "Vijayanagaram",
  },
  {
    id: uuid(),
    cityNa: "Tenali",
  },
  {
    id: uuid(),
    cityNa: "Nagercoil",
  },
  {
    id: uuid(),
    cityNa: "Sri Ganganagar",
  },
  {
    id: uuid(),
    cityNa: "Karawal Nagar",
  },
  {
    id: uuid(),
    cityNa: "Mango",
  },
  {
    id: uuid(),
    cityNa: "Thanjavur",
  },
  {
    id: uuid(),
    cityNa: "Bulandshahr",
  },
  {
    id: uuid(),
    cityNa: "Uluberia",
  },
  {
    id: uuid(),
    cityNa: "Katihar",
  },
  {
    id: uuid(),
    cityNa: "Sambhal",
  },
  {
    id: uuid(),
    cityNa: "Singrauli",
  },
  {
    id: uuid(),
    cityNa: "Nadiad",
  },
  {
    id: uuid(),
    cityNa: "Secunderabad",
  },
  {
    id: uuid(),
    cityNa: "Naihati",
  },
  {
    id: uuid(),
    cityNa: "Yamunanagar",
  },
  {
    id: uuid(),
    cityNa: "Bidar",
  },
  {
    id: uuid(),
    cityNa: "Pallavaram",
  },
  {
    id: uuid(),
    cityNa: "Munger",
  },
  {
    id: uuid(),
    cityNa: "Panchkula",
  },
  {
    id: uuid(),
    cityNa: "Burhanpur",
  },
  {
    id: uuid(),
    cityNa: "Raurkela Industrial Township",
  },
  {
    id: uuid(),
    cityNa: "Kharagpur",
  },
  {
    id: uuid(),
    cityNa: "Dindigul",
  },
  {
    id: uuid(),
    cityNa: "Gandhinagar",
  },
  {
    id: uuid(),
    cityNa: "Hospet",
  },
  {
    id: uuid(),
    cityNa: "Nangloi Jat",
  },
  {
    id: uuid(),
    cityNa: "Malda",
  },
  {
    id: uuid(),
    cityNa: "Ongole",
  },
  {
    id: uuid(),
    cityNa: "Deoghar",
  },
  {
    id: uuid(),
    cityNa: "Chapra",
  },
  {
    id: uuid(),
    cityNa: "Haldia",
  },
  {
    id: uuid(),
    cityNa: "Khandwa",
  },
  {
    id: uuid(),
    cityNa: "Nandyal",
  },
  {
    id: uuid(),
    cityNa: "Morena",
  },
  {
    id: uuid(),
    cityNa: "Amroha",
  },
  {
    id: uuid(),
    cityNa: "Anand",
  },
  {
    id: uuid(),
    cityNa: "Bhind",
  },
  {
    id: uuid(),
    cityNa: "Bhalswa Jahangir Pur",
  },
  {
    id: uuid(),
    cityNa: "Madhyamgram",
  },
  {
    id: uuid(),
    cityNa: "Bhiwani",
  },
  {
    id: uuid(),
    cityNa: "Berhampur",
  },
  {
    id: uuid(),
    cityNa: "Ambala",
  },
  {
    id: uuid(),
    cityNa: "Morbi",
  },
  {
    id: uuid(),
    cityNa: "Fatehpur",
  },
  {
    id: uuid(),
    cityNa: "Raebareli",
  },
  {
    id: uuid(),
    cityNa: "Khora",
  },
  {
    id: uuid(),
    cityNa: "Orai",
  },
  {
    id: uuid(),
    cityNa: "Bahraich",
  },
  {
    id: uuid(),
    cityNa: "Vellore",
  },
  {
    id: uuid(),
    cityNa: "Mehsana",
  },

  {
    id: uuid(),
    cityNa: "Raiganj",
  },
  {
    id: uuid(),
    cityNa: "Sirsa",
  },
  {
    id: uuid(),
    cityNa: "Danapur",
  },
  {
    id: uuid(),
    cityNa: "Serampore",
  },
  {
    id: uuid(),
    cityNa: "Sultan Pur Majra",
  },
  {
    id: uuid(),
    cityNa: "Guna",
  },
  {
    id: uuid(),
    cityNa: "Jaunpur",
  },
  {
    id: uuid(),
    cityNa: "Panvel",
  },
  {
    id: uuid(),
    cityNa: "Shivpuri",
  },
  {
    id: uuid(),
    cityNa: "Surendranagar Dudhrej",
  },
  {
    id: uuid(),
    cityNa: "Unnao",
  },
  {
    id: uuid(),
    cityNa: "Chinsurah",
  },
  {
    id: uuid(),
    cityNa: "Alleppey",
  },
  {
    id: uuid(),
    cityNa: "Kottayam",
  },
  {
    id: uuid(),
    cityNa: "Patiala",
  },
  {
    id: uuid(),
    cityNa: "Bhind",
  },
  {
    id: uuid(),
    cityNa: "Puruliya",
  },
  {
    id: uuid(),
    cityNa: "Hosur",
  },
  {
    id: uuid(),
    cityNa: "Karaikudi",
  },
  {
    id: uuid(),
    cityNa: "Madurai",
  },
  {
    id: uuid(),
    cityNa: "Kumbakonam",
  },
  {
    id: uuid(),
    cityNa: "Cuddalore",
  },
  {
    id: uuid(),
    cityNa: "Thiruvallur",
  },
  {
    id: uuid(),
    cityNa: "Chittoor",
  },
  {
    id: uuid(),
    cityNa: "Ranipet",
  },
  {
    id: uuid(),
    cityNa: "Aluva",
  },
  {
    id: uuid(),
    cityNa: "Udupi",
  },
  {
    id: uuid(),
    cityNa: "Rajapalaiyam",
  },
  {
    id: uuid(),
    cityNa: "Rishra",
  },
  {
    id: uuid(),
    cityNa: "Pudukkottai",
  },
  {
    id: uuid(),
    cityNa: "Tiruchengode",
  },
  {
    id: uuid(),
    cityNa: "Hosur",
  },
  {
    id: uuid(),
    cityNa: "Gandhidham",
  },
  {
    id: uuid(),
    cityNa: "Patan",
  },
  {
    id: uuid(),
    cityNa: "Valsad",
  },
  {
    id: uuid(),
    cityNa: "Ambur",
  },
  {
    id: uuid(),
    cityNa: "Bhuj",
  },
  {
    id: uuid(),
    cityNa: "Mangalore",
  },
  {
    id: uuid(),
    cityNa: "Cuttack",
  },
  {
    id: uuid(),
    cityNa: "Ramagundam",
  },
  {
    id: uuid(),
    cityNa: "Muzaffarnagar",
  },
  {
    id: uuid(),
    cityNa: "Cachar",
  },
  {
    id: uuid(),
    cityNa: "Kottayam",
  },
  {
    id: uuid(),
    cityNa: "Kohima",
  },
  {
    id: uuid(),
    cityNa: "Dibrugarh",
  },
  {
    id: uuid(),
    cityNa: "Ongole",
  },
  {
    id: uuid(),
    cityNa: "Durgapur",
  },
  {
    id: uuid(),
    cityNa: "Raiganj",
  },
  {
    id: uuid(),
    cityNa: "Silchar",
  },
  {
    id: uuid(),
    cityNa: "Giridih",
  },
  {
    id: uuid(),
    cityNa: "Kumbakonam",
  },
  {
    id: uuid(),
    cityNa: "Chhatarpur",
  },
  {
    id: uuid(),
    cityNa: "Kadapa",
  },
  {
    id: uuid(),
    cityNa: "Hathras",
  },
  {
    id: uuid(),
    cityNa: "Mahbubnagar",
  },
  {
    id: uuid(),
    cityNa: "Malerkotla",
  },
  {
    id: uuid(),
    cityNa: "Katihar",
  },
  {
    id: uuid(),
    cityNa: "Tiruvannamalai",
  },
  {
    id: uuid(),
    cityNa: "Miryalaguda",
  },
  {
    id: uuid(),
    cityNa: "Sawai Madhopur",
  },
  {
    id: uuid(),
    cityNa: "Anantapur",
  },
  {
    id: uuid(),
    cityNa: "Pali",
  },
  {
    id: uuid(),
    cityNa: "Viluppuram",
  },
  {
    id: uuid(),
    cityNa: "Tirunelveli",
  },
  {
    id: uuid(),
    cityNa: "Hindupur",
  },
  {
    id: uuid(),
    cityNa: "Aurangabad",
  },
  {
    id: uuid(),
    cityNa: "Sikar",
  },
  {
    id: uuid(),
    cityNa: "Ratnagiri",
  },
  {
    id: uuid(),
    cityNa: "Kakinada",
  },
  {
    id: uuid(),
    cityNa: "Godhra",
  },
  {
    id: uuid(),
    cityNa: "Alappuzha",
  },
  {
    id: uuid(),
    cityNa: "Purulia",
  },
  {
    id: uuid(),
    cityNa: "Sambhal",
  },
  {
    id: uuid(),
    cityNa: "Rishikesh",
  },
  {
    id: uuid(),
    cityNa: "Narasaraopet",
  },
  {
    id: uuid(),
    cityNa: "Rajsamand",
  },
  {
    id: uuid(),
    cityNa: "Hospet",
  },
  {
    id: uuid(),
    cityNa: "Navsari",
  },
  {
    id: uuid(),
    cityNa: "Kollam",
  },
  {
    id: uuid(),
    cityNa: "Hapur",
  },
  {
    id: uuid(),
    cityNa: "Vadakara",
  },
  {
    id: uuid(),
    cityNa: "Narayanpet",
  },
  {
    id: uuid(),
    cityNa: "Saharsa",
  },
  {
    id: uuid(),
    cityNa: "Dinapur Nizamat",
  },
  {
    id: uuid(),
    cityNa: "Bankura",
  },
  {
    id: uuid(),
    cityNa: "Durg",
  },
  {
    id: uuid(),
    cityNa: "Anantnag",
  },
  {
    id: uuid(),
    cityNa: "Khandwa",
  },
  {
    id: uuid(),
    cityNa: "Mormugao",
  },
  {
    id: uuid(),
    cityNa: "Chitradurga",
  },
  {
    id: uuid(),
    cityNa: "Buxar",
  },
  {
    id: uuid(),
    cityNa: "Srikakulam",
  },
  {
    id: uuid(),
    cityNa: "Amalner",
  },
  {
    id: uuid(),
    cityNa: "Tadepallegudem",
  },
  {
    id: uuid(),
    cityNa: "Kashipur",
  },
  {
    id: uuid(),
    cityNa: "Jalgaon",
  },
  {
    id: uuid(),
    cityNa: "Adilabad",
  },
  {
    id: uuid(),
    cityNa: "Yavatmal",
  },
  {
    id: uuid(),
    cityNa: "Gondiya",
  },
  {
    id: uuid(),
    cityNa: "Chhapra",
  },
  {
    id: uuid(),
    cityNa: "Dholpur",
  },
  {
    id: uuid(),
    cityNa: "Aizawl",
  },
  {
    id: uuid(),
    cityNa: "Hardoi ",
  },
  {
    id: uuid(),
    cityNa: "Badlapur",
  },
  {
    id: uuid(),
    cityNa: "Shivamogga",
  },
  {
    id: uuid(),
    cityNa: "Balurghat",
  },
  {
    id: uuid(),
    cityNa: "Basti",
  },
  {
    id: uuid(),
    cityNa: "Karad",
  },
  {
    id: uuid(),
    cityNa: "Siwan",
  },
  {
    id: uuid(),
    cityNa: "Dharmavaram",
  },
  {
    id: uuid(),
    cityNa: "Suryapet",
  },
  {
    id: uuid(),
    cityNa: "Bharuch",
  },
  {
    id: uuid(),
    cityNa: "Ganganagar",
  },
  {
    id: uuid(),
    cityNa: "Bulandshahr",
  },
  {
    id: uuid(),
    cityNa: "Santipur",
  },
  {
    id: uuid(),
    cityNa: "Bettiah",
  },
  {
    id: uuid(),
    cityNa: "Proddatur",
  },
  {
    id: uuid(),
    cityNa: "Vapi",
  },
  {
    id: uuid(),
    cityNa: "Sehore",
  },
  {
    id: uuid(),
    cityNa: "Sant Ravidas Nagar",
  },
  {
    id: uuid(),
    cityNa: "Chhindwara",
  },
  {
    id: uuid(),
    cityNa: "Sasaram",
  },
  {
    id: uuid(),
    cityNa: "Hinganghat",
  },
  {
    id: uuid(),
    cityNa: "Lakhimpur",
  },
  {
    id: uuid(),
    cityNa: "Dibrugarh",
  },
  {
    id: uuid(),
    cityNa: "Jorhat",
  },
  {
    id: uuid(),
    cityNa: "Kopargaon",
  },
  {
    id: uuid(),
    cityNa: "Puducherry",
  },
  {
    id: uuid(),
    cityNa: "Gangapur",
  },
  {
    id: uuid(),
    cityNa: "Mughalsarai",
  },
  {
    id: uuid(),
    cityNa: "Bhiwadi",
  },
  {
    id: uuid(),
    cityNa: "Mahendragarh",
  },
  {
    id: uuid(),
    cityNa: "Yavatmal",
  },
  {
    id: uuid(),
    cityNa: "Vrindavan",
  },
  {
    id: uuid(),
    cityNa: "Fatehabad",
  },
  {
    id: uuid(),
    cityNa: "Mandsaur",
  },
  {
    id: uuid(),
    cityNa: "Damoh",
  },
  {
    id: uuid(),
    cityNa: "Buxar",
  },
  {
    id: uuid(),
    cityNa: "Kanchrapara",
  },
  {
    id: uuid(),
    cityNa: "Dehri",
  },
  {
    id: uuid(),
    cityNa: "Gudur",
  },
  {
    id: uuid(),
    cityNa: "Sultanpur",
  },
  {
    id: uuid(),
    cityNa: "Kathua",
  },
  {
    id: uuid(),
    cityNa: "Shillong",
  },
  {
    id: uuid(),
    cityNa: "Churu",
  },
  {
    id: uuid(),
    cityNa: "Sambalpur",
  },
  {
    id: uuid(),
    cityNa: "Dhuri",
  },
  {
    id: uuid(),
    cityNa: "Sultanpur",
  },
  {
    id: uuid(),
    cityNa: "Krishnanagar",
  },
  {
    id: uuid(),
    cityNa: "Gonda",
  },
  {
    id: uuid(),
    cityNa: "Dibrugarh",
  },
  {
    id: uuid(),
    cityNa: "Malerkotla",
  },
  {
    id: uuid(),
    cityNa: "Wardha",
  },
  {
    id: uuid(),
    cityNa: "Chittaurgarh",
  },
  {
    id: uuid(),
    cityNa: "Anand",
  },
  {
    id: uuid(),
    cityNa: "Udupi",
  },
  {
    id: uuid(),
    cityNa: "Barnala",
  },
  {
    id: uuid(),
    cityNa: "Jorhat",
  },
  {
    id: uuid(),
    cityNa: "Deoria",
  },
  {
    id: uuid(),
    cityNa: "Mathura",
  },
  {
    id: uuid(),
    cityNa: "Firozpur",
  },
  {
    id: uuid(),
    cityNa: "Hazaribag",
  },
  {
    id: uuid(),
    cityNa: "Raebareli",
  },
  {
    id: uuid(),
    cityNa: "Pathankot",
  },
  {
    id: uuid(),
    cityNa: "Sirsa",
  },
  {
    id: uuid(),
    cityNa: "Shimla",
  },
  {
    id: uuid(),
    cityNa: "Bhadrak",
  },
  {
    id: uuid(),
    cityNa: "Kanpur",
  },
  {
    id: uuid(),
    cityNa: "Udgir",
  },
  {
    id: uuid(),
    cityNa: "Noida",
  },
  {
    id: uuid(),
    cityNa: "Chittorgarh",
  },
  {
    id: uuid(),
    cityNa: "Orai",
  },
  {
    id: uuid(),
    cityNa: "Basti",
  },
  {
    id: uuid(),
    cityNa: "Hazaribagh",
  },
  {
    id: uuid(),
    cityNa: "Balangir",
  },
  {
    id: uuid(),
    cityNa: "Deoghar",
  },
  {
    id: uuid(),
    cityNa: "Ballia",
  },
  {
    id: uuid(),
    cityNa: "Adoni",
  },
  {
    id: uuid(),
    cityNa: "Osmanabad",
  },
  {
    id: uuid(),
    cityNa: "Bhusawal",
  },
  {
    id: uuid(),
    cityNa: "Siwan",
  },
  {
    id: uuid(),
    cityNa: "Srinagar",
  },
  {
    id: uuid(),
    cityNa: "Pithoragarh",
  },
  {
    id: uuid(),
    cityNa: "Puruliya",
  },
  {
    id: uuid(),
    cityNa: "Bhalswa Jahangir Pur",
  },
  {
    id: uuid(),
    cityNa: "Udaipur",
  },
  {
    id: uuid(),
    cityNa: "Kollam",
  },
  {
    id: uuid(),
    cityNa: "Kamareddy",
  },
  {
    id: uuid(),
    cityNa: "Haldia",
  },
  {
    id: uuid(),
    cityNa: "Ambikapur",
  },
  {
    id: uuid(),
    cityNa: "Dibrugarh",
  },
  {
    id: uuid(),
    cityNa: "Raebareli",
  },
  {
    id: uuid(),
    cityNa: "Kharagpur",
  },
  {
    id: uuid(),
    cityNa: "Batala",
  },
  {
    id: uuid(),
    cityNa: "Gulbarga",
  },
  {
    id: uuid(),
    cityNa: "Gondia",
  },
  {
    id: uuid(),
    cityNa: "Gohana",
  },
  {
    id: uuid(),
    cityNa: "Bulandshahr",
  },
  {
    id: uuid(),
    cityNa: "Etawah",
  },
  {
    id: uuid(),
    cityNa: "Tenali",
  },
  {
    id: uuid(),
    cityNa: "Jagadhri",
  },
  {
    id: uuid(),
    cityNa: "Bharatpur",
  },
  {
    id: uuid(),
    cityNa: "Nandurbar",
  },
  {
    id: uuid(),
    cityNa: "Purnia",
  },
  {
    id: uuid(),
    cityNa: "Nagapattinam",
  },
  {
    id: uuid(),
    cityNa: "Machilipatnam",
  },
  {
    id: uuid(),
    cityNa: "Bokaro",
  },
  {
    id: uuid(),
    cityNa: "Dharwad",
  },
  {
    id: uuid(),
    cityNa: "Rourkela",
  },
  {
    id: uuid(),
    cityNa: "Bhimavaram",
  },
  {
    id: uuid(),
    cityNa: "Palwal",
  },
  {
    id: uuid(),
    cityNa: "Lakhimpur",
  },
  {
    id: uuid(),
    cityNa: "Hapur",
  },
  {
    id: uuid(),
    cityNa: "Dhaulpur",
  },
  {
    id: uuid(),
    cityNa: "Muzaffarpur",
  },
  {
    id: uuid(),
    cityNa: "Karnal",
  },
  {
    id: uuid(),
    cityNa: "Amaravati",
  },
  {
    id: uuid(),
    cityNa: "Gandhidham",
  },
  {
    id: uuid(),
    cityNa: "Etah",
  },
  {
    id: uuid(),
    cityNa: "Guntakal",
  },
  {
    id: uuid(),
    cityNa: "Barnala",
  },
  {
    id: uuid(),
    cityNa: "Khardaha",
  },
  {
    id: uuid(),
    cityNa: "Dehri",
  },
  {
    id: uuid(),
    cityNa: "Madhyamgram",
  },
  {
    id: uuid(),
    cityNa: "Guntur",
  },
  {
    id: uuid(),
    cityNa: "Lalitpur",
  },
  {
    id: uuid(),
    cityNa: "Ratnagiri",
  },
  {
    id: uuid(),
    cityNa: "Nangloi Jat",
  },
  {
    id: uuid(),
    cityNa: "Dibrugarh",
  },
  {
    id: uuid(),
    cityNa: "Gangapur",
  },
  {
    id: uuid(),
    cityNa: "Anand",
  },
  {
    id: uuid(),
    cityNa: "Bathinda",
  },
  {
    id: uuid(),
    cityNa: "Hazaribagh",
  },
  {
    id: uuid(),
    cityNa: "Raniganj",
  },
  {
    id: uuid(),
    cityNa: "Baranagar",
  },
  {
    id: uuid(),
    cityNa: "Guntakal",
  },
  {
    id: uuid(),
    cityNa: "Bhalswa Jahangir Pur",
  },
  {
    id: uuid(),
    cityNa: "Budaun",
  },
  {
    id: uuid(),
    cityNa: "Kathua",
  },
  {
    id: uuid(),
    cityNa: "Karimganj",
  },
  {
    id: uuid(),
    cityNa: "Guntur",
  },
  {
    id: uuid(),
    cityNa: "Barasat",
  },
  {
    id: uuid(),
    cityNa: "Unnao",
  },
  {
    id: uuid(),
    cityNa: "Tenali",
  },
  {
    id: uuid(),
    cityNa: "Dhule",
  },
  {
    id: uuid(),
    cityNa: "Nadiad",
  },
  {
    id: uuid(),
    cityNa: "Yamunanagar",
  },
  {
    id: uuid(),
    cityNa: "Deoghar",
  },
  {
    id: uuid(),
    cityNa: "Barasat",
  },
  {
    id: uuid(),
    cityNa: "Paris",
  },
  {
    id: uuid(),
    cityNa: "Sydney",
  },
  {
    id: uuid(),
    cityNa: "Dubai",
  },
  {
    id: uuid(),
    cityNa: "Rome",
  },
  {
    id: uuid(),
    cityNa: "Singapore",
  },
  {
    id: uuid(),
    cityNa: "Bangkok",
  },
  {
    id: uuid(),
    cityNa: "Istanbul",
  },
  {
    id: uuid(),
    cityNa: "Berlin",
  },

  {
    id: uuid(),
    cityNa: "Tokyo",
  },

  {
    id: uuid(),
    cityNa: "Moscow",
  },
  {
    id: uuid(),
    cityNa: "Los Angeles",
  },
  {
    id: uuid(),
    cityNa: "Barcelona",
  },
  {
    id: uuid(),
    cityNa: "Hong Kong",
  },
  {
    id: uuid(),
    cityNa: "Toronto",
  },
  {
    id: uuid(),
    cityNa: "Shanghai",
  },
  {
    id: uuid(),
    cityNa: "Seoul",
  },
  {
    id: uuid(),
    cityNa: "Amsterdam",
  },
  {
    id: uuid(),
    cityNa: "Vienna",
  },
  {
    id: uuid(),
    cityNa: "Dublin",
  },
  {
    id: uuid(),
    cityNa: "Munich",
  },
  {
    id: uuid(),
    cityNa: "Madrid",
  },
  {
    id: uuid(),
    cityNa: "Venice",
  },
  {
    id: uuid(),
    cityNa: "Athens",
  },
  {
    id: uuid(),
    cityNa: "Florence",
  },
  {
    id: uuid(),
    cityNa: "Prague",
  },
  {
    id: uuid(),
    cityNa: "Edinburgh",
  },
  {
    id: uuid(),
    cityNa: "Stockholm",
  },
  {
    id: uuid(),
    cityNa: "Lisbon",
  },
  {
    id: uuid(),
    cityNa: "Dubrovnik",
  },
  {
    id: uuid(),
    cityNa: "Hanoi",
  },
  {
    id: uuid(),
    cityNa: "Kuala Lumpur",
  },
  {
    id: uuid(),
    cityNa: "Budapest",
  },
  {
    id: uuid(),
    cityNa: "Copenhagen",
  },
  {
    id: uuid(),
    cityNa: "Kyoto",
  },
  {
    id: uuid(),
    cityNa: "Auckland",
  },
  {
    id: uuid(),
    cityNa: "Brussels",
  },
  {
    id: uuid(),
    cityNa: "Zurich",
  },
  {
    id: uuid(),
    cityNa: "Oslo",
  },
  {
    id: uuid(),
    cityNa: "Warsaw",
  },
  {
    id: uuid(),
    cityNa: "Manila",
  },
  {
    id: uuid(),
    cityNa: "Beijing",
  },

  {
    id: uuid(),
    cityNa: "Rio de Janeiro",
  },
  {
    id: uuid(),
    cityNa: "Cairo",
  },
  {
    id: uuid(),
    cityNa: "Jakarta",
  },
  {
    id: uuid(),
    cityNa: "Lima",
  },
  {
    id: uuid(),
    cityNa: "Mexico City",
  },
  {
    id: uuid(),
    cityNa: "Bangalore",
  },
  {
    id: uuid(),
    cityNa: "São Paulo",
  },
  {
    id: uuid(),
    cityNa: "Johannesburg",
  },
  {
    id: uuid(),
    cityNa: "Seoul",
  },
  {
    id: uuid(),
    cityNa: "Nairobi",
  },
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
    cityNa: "Manila",
  },
  {
    id: uuid(),
    cityNa: "Lagos",
  },
  {
    id: uuid(),
    cityNa: "Lahore",
  },
  {
    id: uuid(),
    cityNa: "Bangkok",
  },
  {
    id: uuid(),
    cityNa: "Baghdad",
  },
  {
    id: uuid(),
    cityNa: "Santiago",
  },

  {
    id: uuid(),
    cityNa: "Moscow",
  },
  {
    id: uuid(),
    cityNa: "Nairobi",
  },
  {
    id: uuid(),
    cityNa: "Berlin",
  },
  {
    id: uuid(),
    cityNa: "Vienna",
  },
  {
    id: uuid(),
    cityNa: "Cairo",
  },
  {
    id: uuid(),
    cityNa: "Toronto",
  },
  {
    id: uuid(),
    cityNa: "Beijing",
  },
  {
    id: uuid(),
    cityNa: "Sydney",
  },

  {
    id: uuid(),
    cityNa: "Buenos Aires",
  },
  {
    id: uuid(),
    cityNa: "Mexico City",
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
    cityNa: "Bangkok",
  },
  {
    id: uuid(),
    cityNa: "Manila",
  },
  {
    id: uuid(),
    cityNa: "Seoul",
  },
  {
    id: uuid(),
    cityNa: "Johannesburg",
  },
  {
    id: uuid(),
    cityNa: "Lagos",
  },
  {
    id: uuid(),
    cityNa: "Jakarta",
  },
  {
    id: uuid(),
    cityNa: "Lahore",
  },
  {
    id: uuid(),
    cityNa: "Delhi",
  },
  {
    id: uuid(),
    cityNa: "Istanbul",
  },
  {
    id: uuid(),
    cityNa: "São Paulo",
  },
  {
    id: uuid(),
    cityNa: "Karachi",
  },
  {
    id: uuid(),
    cityNa: "Kinshasa",
  },
  {
    id: uuid(),
    cityNa: "Tianjin",
  },
  {
    id: uuid(),
    cityNa: "Lima",
  },
  {
    id: uuid(),
    cityNa: "Nallasopara",
  },
  {
    id: uuid(),
    cityNa: "Virar",
  },
  {
    id: uuid(),
    cityNa: "Vasai",
  },
  {
    id: uuid(),
    cityNa: "Bhayander",
  },
  {
    id: uuid(),
    cityNa: "Mira Road",
  },
  {
    id: uuid(),
    cityNa: "Borivali",
  },
  {
    id: uuid(),
    cityNa: "Dadar",
  },
  {
    id: uuid(),
    cityNa: "Parel",
  },
  {
    id: uuid(),
    cityNa: "Churchgate",
  },
  {
    id: uuid(),
    cityNa: "Bandra",
  },
  {
    id: uuid(),
    cityNa: "Hoogly",
  },
  {
    id: uuid(),
    cityNa: "Marine Drive",
  },
  {
    id: uuid(),
    cityNa: "Malad",
  },
  {
    id: uuid(),
    cityNa: "Nilemore",
  },
  {
    id: uuid(),
    cityNa: "Bogotá",
  },
  {
    id: uuid(),
    cityNa: "Bangalore",
  },
  {
    id: uuid(),
    cityNa: "Ho Chi Minh City",
  },
  {
    id: uuid(),
    cityNa: "Tehran",
  },
  {
    id: uuid(),
    cityNa: "Shenzhen",
  },
  {
    id: uuid(),
    cityNa: "Rio de Janeiro",
  },
  {
    id: uuid(),
    cityNa: "Nanjing",
  },
  {
    id: uuid(),
    cityNa: "Taipei",
  },
  {
    id: uuid(),
    cityNa: "Cape Town",
  },
  {
    id: uuid(),
    cityNa: "Buenos Aires",
  },
  {
    id: uuid(),
    cityNa: "Jeddah",
  },
  {
    id: uuid(),
    cityNa: "Quito",
  },
  {
    id: uuid(),
    cityNa: "Shanghai",
  },
  {
    id: uuid(),
    cityNa: "Lima",
  },
  {
    id: uuid(),
    cityNa: "New Taipei City",
  },
  {
    id: uuid(),
    cityNa: "Nagoya",
  },
  {
    id: uuid(),
    cityNa: "Osaka",
  },

  {
    id: uuid(),
    cityNa: "Khartoum",
  },
  {
    id: uuid(),
    cityNa: "Busan",
  },
  {
    id: uuid(),
    cityNa: "Baghdad",
  },
  {
    id: uuid(),
    cityNa: "Lima",
  },
  {
    id: uuid(),
    cityNa: "Bogotá",
  },
  {
    id: uuid(),
    cityNa: "Algiers",
  },
  {
    id: uuid(),
    cityNa: "Accra",
  },
  {
    id: uuid(),
    cityNa: "Minsk",
  },
  {
    id: uuid(),
    cityNa: "Nairobi",
  },
  {
    id: uuid(),
    cityNa: "Baku",
  },
  {
    id: uuid(),
    cityNa: "Tehran",
  },
  {
    id: uuid(),
    cityNa: "Beirut",
  },
  {
    id: uuid(),
    cityNa: "Jakarta",
  },
  {
    id: uuid(),
    cityNa: "Hanoi",
  },
  {
    id: uuid(),
    cityNa: "Yangon",
  },
  {
    id: uuid(),
    cityNa: "Kuala Lumpur",
  },
  {
    id: uuid(),
    cityNa: "Colombo",
  },
  {
    id: uuid(),
    cityNa: "Karachi",
  },

  {
    id: uuid(),
    cityNa: "Islamabad",
  },
  {
    id: uuid(),
    cityNa: "Dhaka",
  },
  {
    id: uuid(),
    cityNa: "Lahore",
  },
  {
    id: uuid(),
    cityNa: "Makassar",
  },
  {
    id: uuid(),
    cityNa: "Medan",
  },
  {
    id: uuid(),
    cityNa: "Surabaya",
  },
  {
    id: uuid(),
    cityNa: "Palembang",
  },
  {
    id: uuid(),
    cityNa: "Bandung",
  },
  {
    id: uuid(),
    cityNa: "Semarang",
  },
  {
    id: uuid(),
    cityNa: "Tangerang",
  },
  {
    id: uuid(),
    cityNa: "Depok",
  },
  {
    id: uuid(),
    cityNa: "Padang",
  },
  {
    id: uuid(),
    cityNa: "Denpasar",
  },
  {
    id: uuid(),
    cityNa: "Malang",
  },
  {
    id: uuid(),
    cityNa: "Banjarmasin",
  },
  {
    id: uuid(),
    cityNa: "Jambi",
  },
  {
    id: uuid(),
    cityNa: "Surakarta",
  },
  {
    id: uuid(),
    cityNa: "Pontianak",
  },
  {
    id: uuid(),
    cityNa: "Balikpapan",
  },
  {
    id: uuid(),
    cityNa: "Manado",
  },
  {
    id: uuid(),
    cityNa: "Palu",
  },

  {
    id: uuid(),
    cityNa: "Kyoto",
  },
  {
    id: uuid(),
    cityNa: "Hiroshima",
  },
  {
    id: uuid(),
    cityNa: "Fukuoka",
  },
  {
    id: uuid(),
    cityNa: "Sapporo",
  },
  {
    id: uuid(),
    cityNa: "Sendai",
  },
  {
    id: uuid(),
    cityNa: "Yokohama",
  },
  {
    id: uuid(),
    cityNa: "Nagoya",
  },
  {
    id: uuid(),
    cityNa: "Kobe",
  },
  {
    id: uuid(),
    cityNa: "Nara",
  },
  {
    id: uuid(),
    cityNa: "Okinawa",
  },
  {
    id: uuid(),
    cityNa: "Kanazawa",
  },
  {
    id: uuid(),
    cityNa: "Nagasaki",
  },
  {
    id: uuid(),
    cityNa: "Kumamoto",
  },
  {
    id: uuid(),
    cityNa: "Naha",
  },
  {
    id: uuid(),
    cityNa: "Matsumoto",
  },
  {
    id: uuid(),
    cityNa: "Suzhou",
  },
  {
    id: uuid(),
    cityNa: "Hangzhou",
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
    cityNa: "Tianjin",
  },
  {
    id: uuid(),
    cityNa: "Chengdu",
  },
  {
    id: uuid(),
    cityNa: "Nanjing",
  },
  {
    id: uuid(),
    cityNa: "Wuhan",
  },
  {
    id: uuid(),
    cityNa: "Qingdao",
  },
  {
    id: uuid(),
    cityNa: "Dalian",
  },
  {
    id: uuid(),
    cityNa: "Xiamen",
  },
  {
    id: uuid(),
    cityNa: "Chongqing",
  },
  {
    id: uuid(),
    cityNa: "Xi'an",
  },
  {
    id: uuid(),
    cityNa: "Kunming",
  },
  {
    id: uuid(),
    cityNa: "Shenyang",
  },
  {
    id: uuid(),
    cityNa: "Changchun",
  },
  {
    id: uuid(),
    cityNa: "Harbin",
  },
  {
    id: uuid(),
    cityNa: "Taipei",
  },
  {
    id: uuid(),
    cityNa: "Taichung",
  },
  {
    id: uuid(),
    cityNa: "Tainan",
  },
  {
    id: uuid(),
    cityNa: "Kaohsiung",
  },
  {
    id: uuid(),
    cityNa: "Hsinchu",
  },
  {
    id: uuid(),
    cityNa: "Taoyuan",
  },
  {
    id: uuid(),
    cityNa: "Keelung",
  },
  {
    id: uuid(),
    cityNa: "Chiayi",
  },
  {
    id: uuid(),
    cityNa: "Taitung",
  },
  {
    id: uuid(),
    cityNa: "Hualien",
  },
  {
    id: uuid(),
    cityNa: "Pingtung",
  },
  {
    id: uuid(),
    cityNa: "Miaoli",
  },
  {
    id: uuid(),
    cityNa: "Nantou",
  },
  {
    id: uuid(),
    cityNa: "Yilan",
  },
  {
    id: uuid(),
    cityNa: "Penghu",
  },
  {
    id: uuid(),
    cityNa: "Kinmen",
  },
  {
    id: uuid(),
    cityNa: "Matsu",
  },
  {
    id: uuid(),
    cityNa: "Lienchiang",
  },
  {
    id: uuid(),
    cityNa: "Kuala Lumpur",
  },
  {
    id: uuid(),
    cityNa: "George Town",
  },
  {
    id: uuid(),
    cityNa: "Ipoh",
  },
  {
    id: uuid(),
    cityNa: "Kuching",
  },
  {
    id: uuid(),
    cityNa: "Johor Bahru",
  },
  {
    id: uuid(),
    cityNa: "Kota Kinabalu",
  },
  {
    id: uuid(),
    cityNa: "Malacca City",
  },
  {
    id: uuid(),
    cityNa: "Shah Alam",
  },
  {
    id: uuid(),
    cityNa: "Putrajaya",
  },
  {
    id: uuid(),
    cityNa: "Alor Setar",
  },
  {
    id: uuid(),
    cityNa: "Kangar",
  },
  {
    id: uuid(),
    cityNa: "Kuala Terengganu",
  },
  {
    id: uuid(),
    cityNa: "Kuantan",
  },
  {
    id: uuid(),
    cityNa: "Seremban",
  },
  {
    id: uuid(),
    cityNa: "Labuan",
  },
  {
    id: uuid(),
    cityNa: "Kuala Selangor",
  },
  {
    id: uuid(),
    cityNa: "Batu Pahat",
  },
  {
    id: uuid(),
    cityNa: "Muar",
  },
  {
    id: uuid(),
    cityNa: "Kuala Kangsar",
  },
  {
    id: uuid(),
    cityNa: "Teluk Intan",
  },
  {
    id: uuid(),
    cityNa: "Taiping",
  },
  {
    id: uuid(),
    cityNa: "Bidor",
  },
  {
    id: uuid(),
    cityNa: "Temerloh",
  },
  {
    id: uuid(),
    cityNa: "Kuantan",
  },
  {
    id: uuid(),
    cityNa: "Kerteh",
  },
  {
    id: uuid(),
    cityNa: "Dungun",
  },
  {
    id: uuid(),
    cityNa: "Pekan",
  },
  {
    id: uuid(),
    cityNa: "Kuala Lipis",
  },
  {
    id: uuid(),
    cityNa: "Gua Musang",
  },
  {
    id: uuid(),
    cityNa: "Johor Bahru",
  },
  {
    id: uuid(),
    cityNa: "Kota Tinggi",
  },
  {
    id: uuid(),
    cityNa: "Mersing",
  },
  {
    id: uuid(),
    cityNa: "Segamat",
  },
  {
    id: uuid(),
    cityNa: "Batu Pahat",
  },
];

// Shuffle the cities array randomly
export const shuffledCities = shuffleArray(cities);
