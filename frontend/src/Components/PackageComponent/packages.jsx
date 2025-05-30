import Slider from "react-slick";
import React from "react";
const plans = [
  {
    title:"Switzerland",
    location: "Switzerland",
    category: ["International","vacations", "honeymoon"],
    price: "5100 $",
    priceUnit: "Per Couple",
    rating:4.0,
    description: "Explore the Swiss Alps with guided tours."
    ,
    longDescription: "From the stunning landscapes of Zurich to the majestic peaks of Jungfrau, this tour offers a perfect blend of adventure and relaxation.",
    details: [
      { title: "Destination", desc: "Zurich, Switzerland" },
      { title: "Departure", desc: "New Delhi,India" },
      { title: "Departure Time", desc: "08:00 AM" },
      { title: "Return Time", desc: "07:30 PM" },
    ],
    includedItems: ["3 star Accommodations", "Travel Convenience", "Personal Guide","Airline Tickets"],
      images: [
          "https://images.unsplash.com/photo-1689717850353-92c66a4f1441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1715357171008-8f95dbc18add?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1626884620975-33a0fe8eef6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1647063058046-e9f4bb6e1906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHp1cmljaCUyQ3N3aXR6ZXJsYW5kfGVufDB8fDB8fHww",
          "https://images.unsplash.com/photo-1600872843916-97c0aaf21e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHp1cmljaCUyQ3N3aXR6ZXJsYW5kfGVufDB8fDB8fHww",
          "https://images.unsplash.com/photo-1651438457255-32c071644dd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHp1cmljaCUyQ3N3aXR6ZXJsYW5kfGVufDB8fDB8fHww",
        ],
    tourDays: [
      {
        day: '01',
        title: 'Arrival in Zurich',
        desc: 'Welcome, check-in and explore the city.',
        activities: [
          "Airport pickup and hotel transfer",
          "Check-in and rest",
          "Evening walk in Old Town Zurich"
        ]
      },
      {
        day: '02',
        title: 'Lucerne & Mt. Pilatus',
        desc: 'Scenic day trip and mountain views.',
        activities: [
          "Drive to Lucerne",
          "Boat ride to Mt. Pilatus",
          "Cogwheel railway and alpine views"
        ]
      },
      {
        day: '03',
        title: 'Interlaken & Jungfrau',
        desc: 'Adventure and panoramic Alps.',
        activities: [
          "Train ride to Interlaken",
          "Visit Jungfrau via cable car",
          "Lunch with a mountain view"
        ]
      },
      {
        day: '04',
        title: 'Bern City Tour',
        desc: 'Explore historic sites and museums.',
        activities: [
          "UNESCO Old Town tour",
          "Visit Zytglogge clock tower",
          "Einstein Museum exploration"
        ]
      },
      {
        day: '05',
        title: 'Departure',
        desc: 'Check-out and return home.',
        activities: [
          "Breakfast at hotel",
          "Final shopping",
          "Airport drop-off"
        ]
      }
    ]
  },
  {
    title: "Berlin",
    location: "Berlin",
    price: "850 $",
    rating: 4.7,
    category: ["international","vacations"],
    priceUnit: "Per Couple",
    description:"Historical sites and vibrant culture.",
    longDescription: "Experience the vibrant history and culture of Berlin...",
    details: [
      { title: "Destination", desc: "Berlin, Germany" },
      { title: "Departure", desc: "Mumbai,India" },
      { title: "Departure Time", desc: "09:00 AM" },
      { title: "Return Time", desc: "06:00 PM" },
    ],
    includedItems: ["City Tour", "Museum Pass", "Private Transport", "Personal Guide","Airline Tickets"],
    images: ["https://images.unsplash.com/photo-1597932552386-ad91621e4c8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVybGlufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVybGlufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1546726747-421c6d69c929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlcmxpbnxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1540224485413-4c7939106f3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlcmxpbnxlbnwwfHwwfHx8MA%3D%3D",
    ],
    tourDays: [
      {
        day: '01',
        title: 'Arrival & Check-in',
        desc: 'Welcome dinner near Brandenburg Gate.',
        activities: [
          "Arrival and hotel check-in",
          "Short walk around Mitte",
          "Dinner at German restaurant"
        ]
      },
      {
        day: '02',
        title: 'Museum Island Tour',
        desc: 'Explore historic art and architecture.',
        activities: [
          "Visit Pergamon Museum",
          "Altes Museum and Berliner Dom",
          "Lunch by the Spree"
        ]
      },
      {
        day: '03',
        title: 'Berlin Wall & East Side',
        desc: 'Iconic graffiti and Cold War sites.',
        activities: [
          "Walk along East Side Gallery",
          "Checkpoint Charlie visit",
          "DDR Museum tour"
        ]
      },
      {
        day: '04',
        title: 'Charlottenburg & Shopping',
        desc: 'Relax and shop in west Berlin.',
        activities: [
          "Charlottenburg Palace tour",
          "Shopping at Kurfürstendamm",
          "Coffee at a Berlin café"
        ]
      },
      {
        day: '05',
        title: 'Tiergarten & Departure',
        desc: 'Park walk and departure.',
        activities: [
          "Morning stroll in Tiergarten",
          "Final souvenir shopping",
          "Check-out and airport transfer"
        ]
      }
    ]
  },
  {
    title: "Maldives",
    location: "Maldives",
    price: "2,200 $",
    rating: 4.2,
    category: ["tropical","international","vacations"],
    priceUnit: "Per Couple",
    description: "Relax on pristine beaches.",
    longDescription: "Experience the ultimate tropical getaway in the Maldives...",
    images: ["https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1558281050-4c33200099c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG1hbGRpdmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGRpdmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1591211014896-25983a0990e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1hbGRpdmVzfGVufDB8fDB8fHww"
    ],
    details: [
      { title: "Destination", desc: "Male, Maldives" },
      { title: "Departure", desc: "Delhi,India" },
      { title: "Departure Time", desc: "07:00 AM" },
      { title: "Return Time", desc: "08:00 PM" },
    ],
    includedItems: ["3 star accomodation", "Airline Tickets", "All Meals Included","Private Transport"],
    tourDays: [
      {
        day: '01',
        title: 'Arrival & Leisure',
        desc: 'Resort check-in and relax on the beach.',
        activities: [
          "Arrival at Male airport",
          "Speedboat transfer to resort",
          "Welcome drink & sunset relaxation"
        ]
      },
      {
        day: '02',
        title: 'Snorkeling Adventure',
        desc: 'Explore coral reefs and sea life.',
        activities: [
          "Snorkeling gear briefing",
          "Reef snorkeling tour",
          "Beach picnic lunch"
        ]
      },
      {
        day: '03',
        title: 'Island Hopping',
        desc: 'Visit nearby islands and sandbanks.',
        activities: [
          "Boat trip to local islands",
          "Cultural experience with locals",
          "Explore uninhabited sandbank"
        ]
      },
      {
        day: '04',
        title: 'Spa & Sunset Cruise',
        desc: 'Relax and enjoy a luxury sunset ride.',
        activities: [
          "Full-body massage at resort spa",
          "Sunset cruise on a catamaran",
          "Candlelight dinner by the ocean"
        ]
      },
      {
        day: '05',
        title: 'Departure',
        desc: 'Breakfast and return home.',
        activities: [
          "Farewell breakfast",
          "Speedboat back to Male",
          "Departure flight"
        ]
      }
    ]
  },
  {
   
    title: "Baku",
    location: "Baku",
    rating: 3.5,
    category: ["international"],
    price: "900 $",
    priceUnit: "Per Couple",
    description: "Culture, sea, and skyline blend.",
    longDescription: "Discover the rich history and modern architecture of Baku...",
    details: [
      { title: "Destination", desc: "Baku, Azerbaijan" },
      { title: "Departure", desc: "Delhi,India" },
      { title: "Departure Time", desc: "10:00 AM" },
      { title: "Return Time", desc: "08:30 PM" },
    ],
    includedItems: ["Airline Tickets","Accomodations" ,"Historical Tours", "Local Cuisine Experience"],
    images: ["https://images.unsplash.com/photo-1642856761437-5b5efcb36d81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFrdXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1622314621630-0d24bcb5aa67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJha3V8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1706741876331-9030d6d01a75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJha3V8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1614623796638-f6da34cd277c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJha3V8ZW58MHx8MHx8fDA%3D",],
    tourDays: [
      {
        day: '01',
        title: 'Arrival & Flame Towers',
        desc: 'Night view of Baku skyline.',
        activities: [
          "Airport transfer",
          "Hotel check-in",
          "Evening view of Flame Towers"
        ]
      },
      {
        day: '02',
        title: 'Old City Exploration',
        desc: 'Visit Maiden Tower & historical spots.',
        activities: [
          "Icherisheher tour",
          "Maiden Tower visit",
          "Caravanserai lunch"
        ]
      },
      {
        day: '03',
        title: 'Gobustan Rocks & Volcanoes',
        desc: 'Natural wonders day trip.',
        activities: [
          "Gobustan rock art reserve",
          "Mud volcano experience",
          "Visit Bibi-Heybat Mosque"
        ]
      },
      {
        day: '04',
        title: 'Fire Temple & Yanar Dag',
        desc: 'Explore Azerbaijan’s fire heritage.',
        activities: [
          "Ateshgah Fire Temple",
          "Yanar Dag burning mountain",
          "Dinner at a fire-themed restaurant"
        ]
      },
      {
        day: '05',
        title: 'Shopping & Departure',
        desc: 'Nizami Street walk and return.',
        activities: [
          "Stroll along Nizami Street",
          "Local souvenir shopping",
          "Return to airport"
        ]
      }
    ]
  },
  {
  title: "Varanasi",
  location: "Varanasi",
  price: "400 $",
  rating:4.5,
  category:["religious","indian"],
    priceUnit: "Per Head",
   description: "Religious experience on the holy river.",
   longDescription: "Experience the spiritual heart of India in Varanasi...",
  details: [
    { title: "Destination", desc: "Varanasi, India" },
    { title: "Departure", desc: "Delhi,India" },
    { title: "Departure Time", desc: "05:30 AM" },
    { title: "Return Time", desc: "08:00 PM" },
  ],
  includedItems: ["Accomodation", "Private Transport", "Cultural Guide"],
  images: ["https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1614164974666-057a7c713ba6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZhcmFuYXNpfGVufDB8fDB8fHww","https://plus.unsplash.com/premium_photo-1726873285702-23dc311a8728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZhcmFuYXNpfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1608412525537-662195e817c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZhcmFuYXNpfGVufDB8fDB8fHww",],
  tourDays: [
    {
      day: '01',
      title: 'Evening Ganga Aarti',
      desc: 'Spiritual start at Dashashwamedh Ghat.',
      activities: [
        "Hotel check-in and rest",
        "Evening Aarti at Dashashwamedh Ghat",
        "Boat ride on the Ganges"
      ]
    },
    {
      day: '02',
      title: 'Temple Tour',
      desc: 'Kashi Vishwanath, Sankat Mochan, Durga Kund.',
      activities: [
        "Visit Kashi Vishwanath Temple",
        "Explore Sankat Mochan Hanuman Temple",
        "Durga Kund and Tulsi Manas Mandir"
      ]
    },
    {
      day: '03',
      title: 'Sarnath Day Trip',
      desc: 'Buddhist relics and historical sites.',
      activities: [
        "Drive to Sarnath",
        "Visit Dhamek Stupa and Sarnath Museum",
        "Meditation at Ashokan Pillar site"
      ]
    },
    {
      day: '04',
      title: 'Local Market Tour',
      desc: 'Silk shopping and street food.',
      activities: [
        "Explore Godowlia Market",
        "Buy Banarasi silk sarees",
        "Try Kachori and Malaiyo"
      ]
    },
    {
      day: '05',
      title: 'Morning Meditation',
      desc: 'Ghat meditation and departure.',
      activities: [
        "Early morning meditation on ghats",
        "Final blessings at Assi Ghat",
        "Check-out and travel back"
      ]
    }
  ]
}
,{
  title: "Goa",
  location: "Goa",
  category: ["indian","tropical","honeymoon","vacations"],
  price: "600 $",
  rating: 4.8,
  description:"A tropical vacation spot in India.",
  priceUnit: "Per Couple",
  longDescription: "Enjoy the vibrant nightlife and serene beaches of Goa...",
  details: [
    { title: "Destination", desc: "Goa, India" },
    { title: "Departure", desc: "Delhi,India" },
    { title: "Departure Time", desc: "08:00 AM" },
    { title: "Return Time", desc: "07:00 PM" },
  ],
  includedItems: ["AirLine Tickets", "3 star Accomodation", "Personal Guide"],
  images:["https://images.unsplash.com/photo-1591957190485-cb718dc9812c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvYXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1648043353527-5b64e5396fb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvYXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1590393275627-0c48482c60e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdvYXxlbnwwfHwwfHx8MA%3D%3D",],
  tourDays: [
    {
      day: '01',
      title: 'North Goa Chill',
      desc: 'Calangute beach and flea market.',
      activities: [
        "Check-in to beach resort",
        "Visit Calangute and Baga beaches",
        "Explore Anjuna flea market"
      ]
    },
    {
      day: '02',
      title: 'Water Adventure',
      desc: 'Parasailing, banana boat rides.',
      activities: [
        "Parasailing at Baga",
        "Banana boat & jet ski",
        "Relax on the beachside shack"
      ]
    },
    {
      day: '03',
      title: 'South Goa Culture',
      desc: 'Church visits and Palolem beach.',
      activities: [
        "Visit Basilica of Bom Jesus",
        "See Se Cathedral and churches",
        "Sunset at Palolem Beach"
      ]
    },
    {
      day: '04',
      title: 'Nightlife & Cruise',
      desc: 'Sunset cruise and clubbing.',
      activities: [
        "Evening Mandovi River cruise",
        "Visit Casino Royale (optional)",
        "Nightclub experience in Tito's Lane"
      ]
    },
    {
      day: '05',
      title: 'Brunch & Departure',
      desc: 'Relaxed morning and check-out.',
      activities: [
        "Beachside brunch",
        "Last-minute shopping",
        "Hotel check-out and return trip"
      ]
    }
  ]
}
,
{
  title: "Shimla",
  location: "Shimla",
  rating: 4.0,
  category: ["indian","vacations","honeymoon"],
  price: "500 $",
  priceUnit: "Per Couple",
  description: "Breathe in the fresh mountain air.",
  longDescription: "Breathe in the fresh mountain air and scenic beauty of Shimla...",
  details: [
    { title: "Destination", desc: "Shimla, India" },
    { title: "Departure", desc: "Delhi,India" },
    { title: "Departure Time", desc: "06:30 AM" },
    { title: "Return Time", desc: "06:00 PM" },
  ],
  includedItems: ["Hill View Hotel", "3 star Accomodation", "Nature Walks", "Personal Guide"],
  images: ["https://media.istockphoto.com/id/1091491850/photo/view-of-shimla-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=N6BDcZrRroOPEG7vz0faxhpPmUb82pkYx8OERcJdEng=","https://plus.unsplash.com/premium_photo-1697729733902-f8c92710db07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpbWxhfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1600065755981-a7f7f560ab04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaW1sYXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1593183981460-e9276b5a5587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaW1sYXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1610178008162-a08e088e8e4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaW1sYXxlbnwwfHwwfHx8MA%3D%3D",],
  tourDays: [
    {
      day: '01',
      title: 'Toy Train Journey',
      desc: 'Reach Shimla via Kalka-Shimla train.',
      activities: [
        "Board Kalka–Shimla heritage train",
        "Enjoy scenic mountain views",
        "Check-in to hotel and relax"
      ]
    },
    {
      day: '02',
      title: 'City Tour',
      desc: 'Mall Road, The Ridge, Jakhoo Temple.',
      activities: [
        "Walk on Mall Road and The Ridge",
        "Jakhoo Temple ropeway visit",
        "Evening shopping and café visit"
      ]
    },
    {
      day: '03',
      title: 'Kufri Excursion',
      desc: 'Snow sports and yak rides.',
      activities: [
        "Drive to Kufri",
        "Snow activity park",
        "Horse or yak ride to Mahasu Peak"
      ]
    },
    {
      day: '04',
      title: 'Chail Day Trip',
      desc: 'Palace, cricket ground, and serenity.',
      activities: [
        "Visit Chail Palace",
        "World’s highest cricket ground",
        "Lunch in the hills"
      ]
    },
    {
      day: '05',
      title: 'Return Journey',
      desc: 'Pack and travel back to Kalka.',
      activities: [
        "Pack and check-out",
        "Scenic return via car/train",
      ]
    }
  ]
}

];
const allDestinations = [
  {
    title: "Switzerland",
    description: "Explore beautiful mountains & lakes.",
    price: 5100,
    rating: 5.0,
    category: ["international","vacations"],
    image: "https://media.istockphoto.com/id/459401895/photo/zurich-cityscape-switzerland.webp?a=1&b=1&s=612x612&w=0&k=20&c=7cTl8i4UDOnXCAoArUgKf8qh56o3oeJ9LPIMqC1PEnM=",
  
  },
  {
    title: "Berlin",
    description: "Historical sites and vibrant culture.",
    price: 3000,
    rating: 4.8,
    category:["international"],
    image: "https://images.unsplash.com/photo-1597932552386-ad91621e4c8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVybGlufGVufDB8fDB8fHww",
  },
  {
    title: "Maldives",
    description: "Luxury tropical vacation island.",
    price: 2100,
    rating: 4.9,
    category: ["tropical","international","vacations"],
    image: "https://plus.unsplash.com/premium_photo-1680497811614-4f93025d7e57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
  },
 
  {
    title: "Baku",
    description: "Culture, sea, and skyline blend.",
    price: 1000,
    rating: 4.6,
    category: ["international"],
    image: "https://plus.unsplash.com/premium_photo-1678373455012-865e09abdb45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFrdSUyQ2luZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  
  {
    title: "Varanasi",
    description: "Religious experience on the holy river.",
    price:400,
    rating: 4.5,
    category: ["indian","religious"],
    image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Goa",
    description: "A tropical vacation spot in India.",
    price: 1200,
    rating: 4.7,
    category: ["indian","tropical","honeymoon","vacations"],
    image: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww",
  },
  {
    title: "Shimla",
    description: "Romantic city perfect for honeymoons.",
    price: 1300,
    rating: 4.9,
    category: ["honeymoon","indian","vacations",],
    image: "https://plus.unsplash.com/premium_photo-1697729729075-3e56242aef49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpbWxhfGVufDB8fDB8fHww",
  },
];
const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <Slider {...settings}>
      {images.map((imgSrc, i) => (
        <div key={i}>
          <img
            src={imgSrc}
            alt={`Gallery ${i + 1}`}
            className="rounded  w-full h-96 object-contain mx-auto"
          />
        </div>
      ))}
    </Slider>
  );
};
export { plans, allDestinations,ImageCarousel };
