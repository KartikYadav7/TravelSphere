const packages = [
  {
    location: "Switzerland",
    price: "1,000 $",
    priceUnit: "Per Couple",
    description: "Ex optio sequi et quos praesentium in nostrum labore...",
    details: [
      { title: "Destination", desc: "Zurich, Switzerland" },
      { title: "Departure", desc: "Main Square, New City" },
      { title: "Departure Time", desc: " 08:00 AM" },
      { title: "Return Time", desc: " 07:30 PM" },
    ],
    includedItems: ["5 star Accommodations", "Travel Convenience", "Personal Guide"],
    tourDays: [
      { day: '01', title: 'Arrival in Zurich', desc: 'Welcome, check-in and explore the city.' },
      { day: '02', title: 'Lucerne & Mt. Pilatus', desc: 'Scenic day trip and mountain views.' },
      { day: '03', title: 'Interlaken & Jungfrau', desc: 'Adventure and panoramic Alps.' },
      { day: '04', title: 'Bern City Tour', desc: 'Explore historic sites and museums.' },
      { day: '05', title: 'Departure', desc: 'Check-out and return home.' }
    ]
  },
  {
    location: "Berlin",
    price: "850 $",
    priceUnit: "Per Couple",
    description: "Experience the vibrant history and culture of Berlin...",
    details: [
      { title: "Destination", desc: "Berlin, Germany" },
      { title: "Departure", desc: "Central Station, Capital City" },
      { title: "Departure Time", desc: "09:00 AM" },
      { title: "Return Time", desc: "06:00 PM" },
    ],
    includedItems: ["City Tour", "Museum Pass", "Private Transport","Personal Guide"],
     tourDays: [
      { day: '01', title: 'Arrival & Check-in', desc: 'Welcome dinner near Brandenburg Gate.' },
      { day: '02', title: 'Museum Island Tour', desc: 'Explore historic art and architecture.' },
      { day: '03', title: 'Berlin Wall & East Side', desc: 'Iconic graffiti and Cold War sites.' },
      { day: '04', title: 'Charlottenburg & Shopping', desc: 'Relax and shop in west Berlin.' },
      { day: '05', title: 'Tiergarten & Departure', desc: 'Park walk and departure.' }
    ]
  },
  {
    location: "Maldives",
    price: "2,200 $",
    priceUnit: "Per Couple",
    description: "Relax on pristine beaches and swim in crystal-clear waters...",
    details: [
      { title: "Destination", desc: "Male, Maldives" },
      { title: "Departure", desc: "International Airport" },
      { title: "Departure Time", desc: " 07:00 AM" },
      { title: "Return Time", desc: "08:00 PM" },
    ],
    includedItems: ["Overwater Bungalow", "Snorkeling Gear", "All Meals Included"],
     tourDays: [
      { day: '01', title: 'Arrival & Leisure', desc: 'Resort check-in and relax on the beach.' },
      { day: '02', title: 'Snorkeling Adventure', desc: 'Explore coral reefs and sea life.' },
      { day: '03', title: 'Island Hopping', desc: 'Visit nearby islands and sandbanks.' },
      { day: '04', title: 'Spa & Sunset Cruise', desc: 'Relax and enjoy a luxury sunset ride.' },
      { day: '05', title: 'Departure', desc: 'Breakfast and return home.' }
    ]
  },
  {
    location: "Baku",
    price: "900 $",
    priceUnit: "Per Couple",
    description: "Explore the fusion of old and new in Azerbaijan's capital...",
    details: [
      { title: "Destination", desc: "Baku, Azerbaijan" },
      { title: "Departure", desc: "City Center, Old Town" },
      { title: "Departure Time", desc: "10:00 AM" },
      { title: "Return Time", desc: "08:30 PM" },
    ],
    includedItems: ["Hotel Stay", "Historical Tours", "Local Cuisine Experience"],
    tourDays: [
      { day: '01', title: 'Arrival & Flame Towers', desc: 'Night view of Baku skyline.' },
      { day: '02', title: 'Old City Exploration', desc: 'Visit Maiden Tower & historical spots.' },
      { day: '03', title: 'Gobustan Rocks & Volcanoes', desc: 'Natural wonders day trip.' },
      { day: '04', title: 'Fire Temple & Yanar Dag', desc: 'Explore Azerbaijan’s fire heritage.' },
      { day: '05', title: 'Shopping & Departure', desc: 'Nizami Street walk and return.' }
    ]
  },
  {
    location: "Varanasi",
    price: "400 $",
    priceUnit: "Per Couple",
    description: "Witness spiritual rituals and ancient temples by the Ganges...",
    details: [
      { title: "Destination", desc: "Varanasi, India" },
      { title: "Departure", desc: "Kashi Vishwanath Corridor" },
      { title: "Departure Time", desc: "05:30 AM" },
      { title: "Return Time", desc: "08:00 PM" },
    ],
    includedItems: ["Boat Ride at Sunrise", "Temple Visits", "Cultural Guide"],
     tourDays: [
      { day: '01', title: 'Evening Ganga Aarti', desc: 'Spiritual start at Dashashwamedh Ghat.' },
      { day: '02', title: 'Temple Tour', desc: 'Kashi Vishwanath, Sankat Mochan, Durga Kund.' },
      { day: '03', title: 'Sarnath Day Trip', desc: 'Buddhist relics and historical sites.' },
      { day: '04', title: 'Local Market Tour', desc: 'Silk shopping and street food.' },
      { day: '05', title: 'Morning Meditation', desc: 'Ghat meditation and departure.' }
    ],

  },
  {
    location: "Goa",
    price: "600 $",
    priceUnit: "Per Couple",
    description: "Enjoy the vibrant nightlife and serene beaches of Goa...",
    details: [
      { title: "Destination", desc: "Goa, India" },
      { title: "Departure", desc: "Panaji Bus Terminal" },
      { title: "Departure Time", desc: "08:00 AM" },
      { title: "Return Time", desc: "07:00 PM" },
    ],
    includedItems: ["Beach Resort", "Water Sports", "City Sightseeing"],
     tourDays: [
      { day: '01', title: 'North Goa Chill', desc: 'Calangute beach and flea market.' },
      { day: '02', title: 'Water Adventure', desc: 'Parasailing, banana boat rides.' },
      { day: '03', title: 'South Goa Culture', desc: 'Church visits and Palolem beach.' },
      { day: '04', title: 'Nightlife & Cruise', desc: 'Sunset cruise and clubbing.' },
      { day: '05', title: 'Brunch & Departure', desc: 'Relaxed morning and check-out.' }
    ]
  },
  {
    location: "Shimla",
    price: "500 $",
    priceUnit: "Per Couple",
    description: "Breathe in the fresh mountain air and scenic beauty of Shimla...",
    details: [
      { title: "Destination", desc: "Shimla, India" },
      { title: "Departure", desc: "Kalka Railway Station" },
      { title: "Departure Time", desc: "06:30 AM" },
      { title: "Return Time", desc: "06:00 PM" },
    ],
    includedItems: ["Hill View Hotel", "Toy Train Ride", "Nature Walks","Personal Guide"],
    tourDays: [
      { day: '01', title: 'Toy Train Journey', desc: 'Reach Shimla via Kalka-Shimla train.' },
      { day: '02', title: 'City Tour', desc: 'Mall Road, The Ridge, Jakhoo Temple.' },
      { day: '03', title: 'Kufri Excursion', desc: 'Snow sports and yak rides.' },
      { day: '04', title: 'Chail Day Trip', desc: 'Palace, cricket ground, and serenity.' },
      { day: '05', title: 'Return Journey', desc: 'Pack and travel back to Kalka.' }
    ]
  },
];
