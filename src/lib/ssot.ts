import { SSOTData } from '../types';

export const SSOT: SSOTData = {
  organization: {
    legalName: "PT Java Volcano Rendezvous",
    brandName: "Java Volcano Tour Operator",
    name: "Java Volcano Tour Operator",
    url: "https://javavolcano-touroperator.com",
    foundingDate: "2016-01-01",
    nib: "1102230032918",
    address: "Jl. Khairil Anwar No.102 A, Badean, Bondowoso",
    postalCode: "68214",
    mapCid: "1266403973589689021",
    description: "Java Volcano Tour Operator (JVTO) is a registered Indonesian travel company based in Bondowoso and led by an active Tourist Police officer. We design private, all-inclusive itineraries to Mount Bromo, Ijen Crater and Tumpak Sewu with clear safety rules, transparent pricing and real local impact.",
    priceRange: "$$",
    areaServed: ["East Java", "Mount Bromo", "Mount Ijen"],
    contactPoint: {
      email: "hello@javavolcano-touroperator.com",
      telephone: "+6282244788833",
      availableLanguages: ["en", "id"]
    },
    founder: {
      name: "Agung Sambuko (Mr. Sam)",
      role: "Founder & Active Tourist Police Officer",
      unit: "Ditpamobvit (Directorate of Vital Object Security)",
      description: "Founder of JVTO and active member of the East Java Tourist Police Unit (Ditpamobvit), specializing in tourist safety and risk management.",
      image_url: "https://javavolcano-touroperator.com/founder/mr-sam-tourist-police-portrait.png",
      knowsAbout: ["TouristSafety", "EastJavaTourism", "VolcanoTrekking", "LogisticsManagement"],
      memberOf: {
        name: "Indonesian National Police",
        subOrganization: "Ditpamobvit (Directorate of Vital Object Security)"
      },
      sameAs: [
        "https://polri.go.id/",
        "https://www.wikidata.org/wiki/Q3103954"
      ]
    }
  },
  medical: {
    protocolName: "Ijen Digital Health Security System",
    doctor: {
      name: "dr. Ahmad Irwandanu",
      sip: "503.446/193/DRU/4/430.9.13/2020",
      affiliation: "Konsil Kesehatan Indonesia (KKI)"
    }
  },
  history: {
    award2015: {
      title: "Booking.com Guest Review Award 2015",
      recipient: "Agung",
      score: "9.4/10",
      address: "Jl. Khairil Anwar No.102, Badean, Bondowoso",
      year: "2015"
    },
    book2016: {
      title: "Stefan Loose Reiseführer Indonesien",
      edition: "4th Edition (2016)",
      isbn: "978-3-7701-6765-4",
      page: "287",
      quote: "Ijen Bondowoso Homestay... Zentral gelegenes Homestay von Agung, Andrew und Ady... Wäscheservice, Motorradvermietung, Internet-PC und Touren.",
      authors: ['Mischa Loose', 'Moritz Jacobi', 'Christian Wachsmuth'],
      publisher: 'Dumont Reise Vlg GmbH + C',
      year: '2016'
    }
  },
  assets_inventory: [
    { id: "mask-01", name: "Respirator Mask (Gas Mask)", category: "Safety", quantity: 24, status: "Certified", last_check: "2025-11-07" },
    { id: "torch-01", name: "High-Lumen Flashlight", category: "Safety", quantity: 12, status: "Operational", last_check: "2025-11-07" },
    { id: "firstaid-01", name: "Trauma Kit (First Aid)", category: "Medical", quantity: 4, status: "Stocked", last_check: "2025-11-07" },
    { id: "comm-01", name: "Radio Transceiver (HT)", category: "Communication", quantity: 6, status: "Operational", last_check: "2025-11-07" }
  ],
  verification_credentials: [
    { id: "nib-01", title: "NIB (Nomor Induk Berusaha)", issuer: "OSS Republic of Indonesia", type: "Legal", status: "Verified", expiry: "Lifetime" },
    { id: "tdup-01", title: "TDUP (Tanda Daftar Usaha Pariwisata)", issuer: "Tourism Agency", type: "Legal", status: "Verified", expiry: "Active" },
    { id: "hpwki-01", title: "HPWKI Membership", issuer: "Ijen Special Tourism Association", type: "Professional", status: "Active", expiry: "2026-12-31" }
  ],
  crew: [
    {
      id: "gufron",
      name: "Gufron",
      role: "Guide",
      quote: "In my professional life, I place the highest priority on safety—what some might call strict, I view as a fundamental matter of integrity.",
      reviewer: "Adrián Martínez",
      tags: ["Friendly & fun", "Knowledgeable guide", "Great logistics", "Safety-first", "Great photos", "Always on time"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/uploads/1768225567764-405955176-gufron.png",
        fullQuote: "I'm someone who enjoys meaningful conversations on virtually any topic. In my professional life, I place the highest priority on safety and risk management — what some might call strict, I view as a fundamental matter of integrity and responsibility. I have a strong intuitive sense that helps me read situations quickly and accurately. Inside of work, I'm passionate about photography, where I enjoy capturing moments with attention to detail and composition. I'm also an avid music enthusiast with a diverse playlist spanning multiple genres, and I love singing along whenever the mood strikes.",
        expertise: ["Volcanic Photography", "Astrophotography", "Risk Management", "Emergency Evacuation", "English Fluency"],
        credential: {
          name: "Official Ijen Climbing License",
          issuer: "HPWKI (Himpunan Pelaku Wisata Khusus Ijen)",
          status: "Active & Verified",
          cardImage: "https://javavolcano-touroperator.com/uploads/1771428741674-842615436-kta_gufron.jpg"
        }
      }
    },
    {
      id: "rendi",
      name: "Rendi",
      role: "Guide",
      quote: "When we went down the steep crater, he held our hands to prevent us from falling.",
      reviewer: "Wing Shan Lui",
      tags: ["Friendly & fun", "Safety-first", "Great logistics", "Knowledgeable guide", "Great photos", "Always on time"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/uploads/1768228514527-518051332-rendi.png",
        fullQuote: "Love meeting people from different backgrounds and making every trip feel easy and enjoyable. I like to have new friend especially from overseas because can share about our unique culture. always make sure safety during the trip and make unforgettable moment along a journey.",
        expertise: ["Technical Rescue", "Sulfur Gas Safety", "First Aid Response", "Steep Terrain Navigation", "Physical Support"],
        credential: {
          name: "Official Ijen Climbing License",
          issuer: "HPWKI",
          status: "Active",
          cardImage: "https://javavolcano-touroperator.com/uploads/1771428760524-516116110-kta_rendi.jpg"
        }
      }
    },
    {
      id: "yandi",
      name: "Yandi",
      role: "Driver",
      quote: "Love meeting people from different backgrounds and making every trip feel easy and enjoyable.",
      reviewer: "Verified Guest",
      tags: ["Friendly & fun", "Great logistics", "Knowledgeable guide", "Always on time", "Safety-first", "Great photos"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/uploads/1768270364125-144711646-yandi.png",
        fullQuote: "Love meeting people from different backgrounds and making every trip feel easy and enjoyable. I like to have new friend especially from overseas because can share about our unique culture. always make sure safety during the trip and make unforgettable moment along a journey.",
        expertise: ["Briefing Protocols", "Operational Reliability", "Guest Communication", "Safety Standards", "Team Coordination"],
        credential: {
          name: "Tourism Operations Certificate",
          issuer: "Dispar (Tourism Department)",
          status: "Active",
          cardImage: "https://javavolcano-touroperator.com/assets/img/hero/home.webp"
        }
      }
    },
    {
      id: "boy",
      name: "Boy (Ahboy)",
      role: "Guide",
      quote: "Incredibly knowledgeable and went out of his way to make sure everything we needed was sorted.",
      reviewer: "Jason Li",
      tags: ["Friendly & fun", "Knowledgeable guide", "Safety-first", "Great logistics", "Always on time", "Great photos"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/uploads/1768228191022-893381041-boy.png",
        fullQuote: "I am a local resident who enjoys welcoming visitors and sharing stories about this area. I’m happy to help travelers explore the natural beauty, local culture, and unique experiences so they feel comfortable and truly enjoy their visit.",
        expertise: ["Equipment Maintenance", "Safety Protocols", "Logistics Management", "Emergency Response", "Technical Support"],
        credential: {
          name: "Certified Technical Guide",
          issuer: "HPI (Himpunan Pramuwisata Indonesia)",
          status: "Active",
          cardImage: "https://javavolcano-touroperator.com/assets/img/hero/home.webp"
        }
      }
    },
    {
      id: "fredi",
      name: "Fredi",
      role: "Driver",
      quote: "Always on time no matter what time of the day. Exceptional driving skills.",
      reviewer: "Pooja Prakash",
      tags: ["Friendly & fun", "Great logistics", "Always on time", "Safety-first", "Knowledgeable guide", "Great photos"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/uploads/1768276791622-262250680-freddy.png",
        fullQuote: "Experienced Tour Driver committed to making your travels memorable. I combine safe driving skills with a friendly, helpful attitude to provide a stress-free experience. Whether it's a short trip or a long tour, I prioritize guest comfort and reliable service at all times.",
        expertise: ["Defensive Driving", "Vehicle Maintenance", "Route Planning", "Equipment Logistics", "English Communication"],
        credential: {
          name: "Professional Transport License",
          issuer: "Dishub (Transportation Agency)",
          status: "Verified",
          cardImage: "https://javavolcano-touroperator.com/assets/img/hero/home.webp"
        }
      }
    },
    {
      id: "anjas",
      name: "Anjas",
      role: "Guide",
      quote: "Creative at taking fun photos... Anjas was the highlight for the trip.",
      reviewer: "Wang Zhe",
      tags: ["Friendly & fun", "Great logistics", "Great photos", "Knowledgeable guide", "Safety-first", "Always on time"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/uploads/1768270423657-690185912-anjas.png",
        fullQuote: "m a chill guy and nerdy enough to talk about brainrote meme. love playing games and listening to any kind of music. let me show you around how beautiful east java is.",
        expertise: ["Photography", "Creative Guiding", "Logistics", "English Communication"],
        credential: {
          name: "Official Ijen Climbing License",
          issuer: "HPWKI",
          status: "Active",
          cardImage: "https://javavolcano-touroperator.com/uploads/1771428583288-513992233-kta_anjas.jpg"
        }
      }
    },
    {
      id: "taufik",
      name: "Taufik",
      role: "Guide",
      quote: "Reliable and organized individual with strong communication skills.",
      reviewer: "Verified Guest",
      tags: ["Friendly & fun", "Knowledgeable guide", "Great logistics", "Safety-first", "Always on time", "Great photos"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/uploads/1768228083285-919198019-taufik_1_.png",
        fullQuote: "Reliable and organized individual with strong communication skills. I thrive in dynamic environments and enjoy taking on new challenges. My goal is to add value through hard work and a positive, proactive attitude.",
        expertise: ["Organization", "Communication", "Logistics", "Safety"],
        credential: {
          name: "Official Ijen Climbing License",
          issuer: "HPWKI",
          status: "Active",
          cardImage: "https://javavolcano-touroperator.com/uploads/1771428704448-911506028-kta_taufik.jpg"
        }
      }
    },
    {
      id: "kiki",
      name: "Kiki",
      role: "Guide",
      quote: "It is He who made the earth manageable for you...",
      reviewer: "Verified Guest",
      tags: ["Friendly & fun", "Knowledgeable guide", "Great logistics", "Great photos", "Safety-first"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/uploads/1768271545598-834784538-kiki.png",
        fullQuote: "It is He who made the earth manageable for you—so walk among its slopes and eat of His provision—and to Him is the resurrection. (67:15)",
        expertise: ["Spiritual Guidance", "Nature Interpretation", "Logistics", "Photography"],
        credential: {
          name: "Official Ijen Climbing License",
          issuer: "HPWKI",
          status: "Active",
          cardImage: "https://javavolcano-touroperator.com/uploads/1771428489070-55145932-kta_kiki.jpg"
        }
      }
    },
    {
      id: "holili",
      name: "Holili",
      role: "Driver",
      quote: "Dedicates himself to serving all customers wholeheartedly.",
      reviewer: "Verified Guest",
      tags: ["Friendly & fun", "Safety-first", "Great logistics"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/uploads/1768277053384-470130286-holili.jpg",
        fullQuote: "I am a Java Volcano driver who dedicates myself to serving all Java Volcano customers wholeheartedly.",
        expertise: ["Customer Dedication", "Safe Driving", "Logistics"],
        credential: {
          name: "Professional Driver License",
          issuer: "Dishub",
          status: "Verified",
          cardImage: "https://javavolcano-touroperator.com/assets/img/hero/home.webp"
        }
      }
    },
    {
      id: "fauzi",
      name: "Fauzi",
      role: "Guide",
      quote: "Friendly guide who loves taking photos for guests.",
      reviewer: "Verified Guest",
      tags: ["Friendly & fun", "Great photos", "Knowledgeable guide", "Great logistics", "Safety-first"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/uploads/1768226003889-338819579-fauzi.png",
        fullQuote: "I’m a friendly guide who loves taking photos for guests and quickly connects with people. I enjoy making trips fun, relaxed, and memorable.",
        expertise: ["Photography", "Guest Connection", "Fun Guiding"],
        credential: {
          name: "Official Guide License",
          issuer: "HPI",
          status: "Active",
          cardImage: "https://javavolcano-touroperator.com/assets/img/hero/home.webp"
        }
      }
    },
    {
      id: "joyo",
      name: "Joyo",
      role: "Driver",
      quote: "Clients frequently tell me I’m their 'Customer Number 1' because they know they’ll get to their destination quickly without ever feeling rushed.",
      reviewer: "Tobias W.",
      tags: ["Professional driver", "Clean and safe", "Friendly & fun", "Safety-first", "Great logistics", "Knowledgeable guide"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/uploads/1768277336049-911840775-joyo.png",
        fullQuote: "I’m a professional driver who combines speed with precision and care. I drive fast, but always cleanly, smoothly, and safely. My vehicle is kept in impeccable condition inside and out; cleanliness and comfort are non-negotiable for every single ride. Clients frequently tell me I’m their number one choice, 'Customer Number 1', because they know they’ll get to their destination quickly without ever feeling rushed or unsafe. I take pride in being punctual, reliable, and genuinely attentive to what each passenger needs, whether it's a daily commute, an important business trip, airport transfer, or a special occasion.",
        expertise: ["Precision Driving", "Time Management", "Vehicle Safety Checks", "Local Navigation", "Guest Comfort"],
        credential: {
          name: "Professional Driver Certification",
          issuer: "Dishub (Transportation Agency)",
          status: "Verified",
          cardImage: "https://javavolcano-touroperator.com/assets/img/hero/home.webp"
        }
      }
    },
    {
      id: "yusuf",
      name: "Yusuf",
      role: "Driver",
      quote: "Great logistics and very friendly.",
      reviewer: "Verified Guest",
      tags: ["Friendly & fun", "Great photos", "Great logistics"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/assets/img/hero/home.webp",
        fullQuote: "I strive to provide the best logistical support and a friendly atmosphere for every trip.",
        expertise: ["Logistics", "Friendly Service", "Driving"],
        credential: {
          name: "Professional Driver License",
          issuer: "Dishub",
          status: "Verified",
          cardImage: "https://javavolcano-touroperator.com/assets/img/hero/home.webp"
        }
      }
    },
    {
      id: "dika",
      name: "Dika",
      role: "Driver",
      quote: "Friendly and fun driver who puts safety first.",
      reviewer: "Verified Guest",
      tags: ["Friendly & fun", "Safety-first", "Great logistics", "Knowledgeable guide"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/assets/img/hero/home.webp",
        fullQuote: "I prioritize safety and comfort for all my guests, ensuring a smooth journey through East Java's beautiful landscapes.",
        expertise: ["Safe Driving", "Logistics", "Local Knowledge"],
        credential: {
          name: "Professional Driver License",
          issuer: "Dishub",
          status: "Verified",
          cardImage: "https://javavolcano-touroperator.com/assets/img/hero/home.webp"
        }
      }
    },
    {
      id: "pras",
      name: "Pras",
      role: "Driver",
      quote: "Excellent English... made interactions seamless. Best guide I've ever had.",
      reviewer: "Filwyn Ma",
      tags: ["Friendly & fun", "Great logistics", "Safety-first", "Knowledgeable guide", "Always on time", "Great photos"],
      profile: {
        archetype: "Reliable Operator",
        image: "https://javavolcano-touroperator.com/assets/img/hero/home.webp",
        fullQuote: "Driving technique is superb... responsible and trustworthy.",
        expertise: ["English Communication", "Safe Driving", "Logistics", "Guest Service"],
        credential: {
          name: "Professional Driver License",
          issuer: "Dishub",
          status: "Verified",
          cardImage: "https://javavolcano-touroperator.com/assets/img/hero/home.webp"
        }
      }
    }
  ],
  press: [
    {
      publisher: "Detik.com",
      date: "2021-03-14",
      title: "Suka Duka Polisi Pariwisata Bondowoso: Tegakkan Prokes Sambil Lawan Dingin",
      translatedTitle: "Joys and Sorrows of Bondowoso Tourist Police: Enforcing Health Protocols While Fighting the Cold",
      url: "https://news.detik.com/berita-jawa-timur/d-5492690/suka-duka-polisi-pariwisata-bondowoso-tegakkan-prokes-sambil-lawan-dingin",
      quote: "The important thing is that the people who travel are safe. (Yang penting masyarakat yang berwisata aman).",
      author: "Detik News",
      screenshot: "https://javavolcano-touroperator.com/proof/press/screencapture-news-detik-berita-jawa-timur-d-5492690-suka-duka-polisi-pariwisata-bondowoso-tegakkan-prokes-sambil-lawan-dingin-2026-01-14-02_48_41.png"
    },
    {
      publisher: "Radar Jember (Jawa Pos)",
      date: "2021-03-24",
      title: "Polpar Dibentuk untuk Mendukung Ijen Geopark",
      translatedTitle: "Tourist Police Formed to Support Ijen Geopark",
      url: "https://radarjember.jawapos.com/bondowoso/791102263/polpar-dibentuk-untuk-mendukung-ijen-geopark",
      quote: "The formation of the Tourist Police (Polpar) is a strategic move to support the Ijen Geopark.",
      author: "Radar Jember",
      screenshot: "https://javavolcano-touroperator.com/proof/press/Screenshot_adarjember.jawapos.com_polpar-dibentuk-untuk-mendukung-ijen-geopark.png"
    },
    {
      publisher: "Radar Jember (Jawa Pos)",
      date: "2021-05-27",
      title: "Tak Seharusnya Bau Menyengat Itu Ada",
      url: "https://radarjember.jawapos.com/bondowoso/791103903/tak-seharusnya-bau-menyengat-itu-ada"
    },
    {
      publisher: "BBKSDA Jatim",
      date: "2024-05-24",
      title: "Pelatihan Pemandu Kawah Ijen",
      url: "https://bbksdajatim.org/pelatihan-pemandu-kawah-ijen/"
    }
  ],
  partners: [
    { name: "TripAdvisor", status: "5.0/5 Excellent" },
    { name: "Trustpilot", status: "4.7/5 Verified" },
    { name: "ISIC", status: "Global Partner" },
    { name: "INDECON", status: "Ecotourism Network" },
    { name: "HPWKI", status: "Member Association" }
  ],
  police_authority: {
    badge: "Active Duty",
    title: "State-Sanctioned Security & Police Command",
    description: "Led by active Tourist Police (Ditpamobvit) officer Agung Sambuko.",
    features: [
      "Official Patrol Escorts",
      "Real-time volcanic hazard intel",
      "Direct coordination with emergency services"
    ],
    proof_link: "/why-jvto/proof/police"
  },
  operational_logic: [
    { title: "Private Exclusivity", desc: "No mixed groups/strangers." },
    { title: "Professional Gas Masks", desc: "Not cheap surgical masks." },
    { title: "Guaranteed Plan B", desc: "Alternative routes if volcanos close." },
    { title: "Specialized Crew Pairings", desc: "Dedicated Driver + Dedicated Guide." }
  ],
  reviews_triangulation: [
    { platform: "Trustpilot", rating: 5, text: "Gufron got us the best blue fire photos!", author: "Nina N." },
    { platform: "TripAdvisor", rating: 5, text: "Rendi held my hand down the steep crater.", author: "Wing Shan L." },
    { platform: "Google Reviews", rating: 5, text: "Fredi made the long journey to Bromo comfortable.", author: "Michael B." },
    { platform: "TripAdvisor", rating: 5, text: "Safety was their number one priority. We felt secure the entire time.", author: "Sarah J." }
  ],
  crew_reviews: {
    "Gufron": [
      { author: "Nina Nguyen", text: "Gufron was so knowledgeable, friendly, and attentive... He also chooses good spots for photos. Thanks to him, we got to see the best of East Java.", platform: "TripAdvisor", rating: 5, date: "Oct 2025" },
      { author: "Adrián Martínez", text: "Always willing to help you get your best photo. He knows the crater like the back of his hand.", platform: "Google Reviews", rating: 5, date: "Sep 2025" },
      { author: "Sofiane", text: "He chooses good spots for photos and is full of positive energy. A true professional.", platform: "Google Reviews", rating: 5, date: "Aug 2025" }
    ],
    "Rendi": [
      { author: "Wing Shan Lui", text: "When we went down the steep crater, he held our hands to prevent us from falling. I felt completely safe.", platform: "TripAdvisor", rating: 5, date: "Nov 2025" },
      { author: "Sarah Jenkins", text: "Rendi is a guardian angel. The sulfur smoke was thick, but he guided us through it with calm precision.", platform: "Google Reviews", rating: 5, date: "Oct 2025" }
    ],
    "Fredi": [
      { author: "Jason Li", text: "Phenomenal... went out of his way to sort all equipment, safety, and logistics. The car was spotless.", platform: "TripAdvisor", rating: 5, date: "Dec 2025" },
      { author: "Michael B.", text: "Smooth driving and excellent English. Fredi made the long journey to Bromo comfortable.", platform: "Google Reviews", rating: 5, date: "Nov 2025" },
      { author: "Pooja Prakash", text: "Always on time no matter what time of the day. Exceptional driving skills.", platform: "Google Reviews", rating: 5, date: "Oct 2025" }
    ],
    "Boy (Ahboy)": [
      { author: "Jason Li", text: "Incredibly knowledgeable and went out of his way to make sure everything we needed was sorted.", platform: "Trustpilot", rating: 5, date: "Jan 2026" },
      { author: "Sarah K.", text: "Felt incredibly safe with Ahboy handling the logistics. A true professional.", platform: "Google Reviews", rating: 5, date: "Dec 2025" }
    ],
    "Anjas": [
      { author: "Wang Zhe", text: "Creative at taking fun photos... Anjas was the highlight for the trip.", platform: "Google Reviews", rating: 5, date: "Jan 2026" }
    ],
    "Pras": [
      { author: "Filwyn Ma", text: "Excellent English... made interactions seamless. Best guide I've ever had.", platform: "Google Reviews", rating: 5, date: "Dec 2025" },
      { author: "Ki Wing Chu", text: "Driving technique is superb... responsible and trustworthy.", platform: "Google Reviews", rating: 5, date: "Nov 2025" }
    ],
    "Joyo": [
      { author: "Tobias W.", text: "Joyo is the best driver I've ever had. Smooth, safe, and always on time.", platform: "TripAdvisor", rating: 5, date: "Mar 2025" },
      { author: "Elena R.", text: "We felt like VIPs with Joyo. His driving is impeccable and he knows the roads perfectly.", platform: "Google Reviews", rating: 5, date: "Feb 2025" }
    ],
    "Yandi": [
      { author: "Verified Guest", text: "Yandi's briefing was clear and concise. We knew exactly what to expect and felt prepared.", platform: "TripAdvisor", rating: 5, date: "Apr 2025" },
      { author: "David L.", text: "Reliable and professional. Yandi made sure everything ran like clockwork.", platform: "Google Reviews", rating: 5, date: "Mar 2025" }
    ],
    "Taufik": [
      { author: "Verified Guest", text: "Taufik is reliable and organized. His communication skills made the trip very smooth.", platform: "Google Reviews", rating: 5, date: "Feb 2026" },
      { author: "Sarah M.", text: "Great logistics and very safe. Taufik took care of everything.", platform: "TripAdvisor", rating: 5, date: "Jan 2026" }
    ],
    "Kiki": [
      { author: "Verified Guest", text: "Kiki's spiritual guidance and nature interpretation added a whole new layer to the Ijen experience.", platform: "TripAdvisor", rating: 5, date: "Mar 2026" },
      { author: "John D.", text: "Knowledgeable and friendly. Kiki made the hike unforgettable.", platform: "Google Reviews", rating: 5, date: "Feb 2026" }
    ],
    "Holili": [
      { author: "Verified Guest", text: "Holili dedicates himself to serving customers wholeheartedly. A true professional.", platform: "Google Reviews", rating: 5, date: "Jan 2026" },
      { author: "Emma W.", text: "Safe driving and great logistics. We felt very comfortable with Holili.", platform: "TripAdvisor", rating: 5, date: "Dec 2025" }
    ],
    "Fauzi": [
      { author: "Verified Guest", text: "Fauzi is a friendly guide who loves taking photos. We got amazing shots thanks to him!", platform: "Instagram", rating: 5, date: "Feb 2026" },
      { author: "Liam P.", text: "Quickly connects with people and makes the trip fun. Highly recommended.", platform: "Google Reviews", rating: 5, date: "Jan 2026" }
    ],
    "Dika": [
      { author: "Verified Guest", text: "Dika is a friendly and fun driver who puts safety first. We had a great time.", platform: "Google Reviews", rating: 5, date: "Mar 2026" },
      { author: "Sophie L.", text: "Knows the roads perfectly. Smooth and safe journey.", platform: "TripAdvisor", rating: 5, date: "Feb 2026" }
    ],
    "Yusuf": [
      { author: "Verified Guest", text: "Yusuf provided great logistics and was very friendly throughout the trip.", platform: "Google Reviews", rating: 5, date: "Jan 2026" },
      { author: "Mark R.", text: "Experienced driver who knows the area well. Very reliable.", platform: "TripAdvisor", rating: 5, date: "Dec 2025" }
    ]
  },
  health_protocol: {
    title: "Mandatory Biological Proof",
    subtitle: "Ijen Health Screening",
    policy: "The 'Hard Stop' Policy - Unfit means no climb. No exceptions.",
    steps: [
      { step: "01", title: "Vitals Check", desc: "SpO2, BP, HR" },
      { step: "02", title: "Doctor Sign-off", desc: "dr. Ahmad Irwandanu" },
      { step: "03", title: "QR Issuance", desc: "Digital Proof" },
      { step: "04", title: "Crater Access", desc: "Verified Entry" }
    ]
  },
  hub_content: {
    hero: {
      h1: "Why JVTO?",
      subhead: "We don't sell 'tours'. We engineer safe, verified volcanic expeditions.",
      primary_cta: { label: "Book Your Expedition", url: "/booking" },
      secondary_cta: { label: "See the Trust Stack", url: "#trust-stack" }
    },
    intro_paragraphs: [
      "The Ijen Crater is not a theme park. It is an active stratovolcano with acidic lakes and toxic gas plumes. Most operators treat it like a casual hike. We treat it like a tactical mission.",
      "From active police leadership to medical screening and specialized gas masks, every layer of our operation is designed to mitigate risk. This is our 'Trust Stack'."
    ],
    trust_stack: {
      title: "The JVTO Trust Stack",
      description: "Six layers of verification that separate us from the 'cowboys'.",
      cards: [
        { title: "Safety Leadership", summary: "Led by active Tourist Police (Ditpamobvit).", link: "/why-jvto/safety-leadership" },
        { title: "Proof & Transparency", summary: "The 'Forensic Evidence Locker' of our legitimacy.", link: "/why-jvto/proof-transparency" },
        { title: "Health Screening", summary: "Mandatory vitals check by licensed doctors.", link: "/ijen-health-screening" },
        { title: "Guest Voices", summary: "Real reviews, triangulated across platforms.", link: "/why-jvto/guest-voices-reviews" },
        { title: "Verified Partners", summary: "Official affiliations: TripAdvisor, ISIC, INDECON.", link: "/why-jvto/partners-verification" },
        { title: "Local Operations", summary: "Dedicated crew, private transport, no mixed groups.", link: "/why-jvto/local-team-operations" }
      ]
    },
    quick_answers: [
      { q: "Is it safe?", a: "No volcano is 100% safe. But we mitigate risk with gas monitors, professional masks, and police-led protocols." },
      { q: "Do I really need a health check?", a: "Yes. It is mandatory. We have a 'Hard Stop' policy for hypertension and hypoxia." },
      { q: "Are you a legal company?", a: "Yes. PT Java Volcano Rendezvous. NIB: 1102230032918. Verified by the Ministry of Tourism." },
      { q: "Why are you more expensive?", a: "We pay fair wages, maintain professional gear, and employ a medical team. Safety costs money." }
    ]
  },
  faq: [
    { q: "Is JVTO a real, legally registered company?", a: "Open the Legal folder in the Proof Transparency vault and verify the published documents and links." },
    { q: "Where can I see all proof files in one place?", a: "Use /why-jvto/proof-transparency. It is the centralized proof vault used across Why JVTO." },
    { q: "Do I need to trust claims without proof?", a: "No. Every major claim should link to evidence. If a proof link is marked 'URL pending', it means it is not published yet." },
    { q: "Who is accountable for my trip?", a: "See the Human Layer section in /why-jvto and the roles page /why-jvto/our-team. It clarifies who is responsible for planning and on-ground execution." },
    { q: "How does JVTO handle safety and route constraints?", a: "Safety decisions follow route constraints (weather, access, local regulations). See /why-jvto/safety-screening and the proof vault for supporting artifacts." },
    { q: "How can I verify: Industry Leadership (HPWKI)?", a: "Use the Proof Transparency vault and open the evidence files linked under this claim. Evidence: HPWKI membership approval letter; HPWKI approval letter preview image." },
    { q: "How can I verify: Official Ticket & Health Requirements (BBKSDA)?", a: "Evidence: tiket.bbksdajatim.org — Terms & Conditions (screenshot)." },
    { q: "How can I verify: BBKSDA Jatim: Pelatihan Pemandu Kawah Ijen?", a: "Evidence: BBKSDA Jatim official training article screenshot." },
    { q: "How can I verify: Detik.com: Suka Duka Polisi Pariwisata?", a: "Evidence: Detik.com screenshot." },
    { q: "How can I verify: Partner Doctor's Practice License (SIP)?", a: "Evidence: Surat Izin Praktik (SIP) — dr. Ahmad Irwandanu." },
    { q: "How can I verify: Official Ijen Guide Licenses?", a: "Evidence: Anjas; Taufik; Rendi; Kiki; Gufron." },
    { q: "How can I verify: Health Screening Protocols?", a: "Evidence: BBKSDA Circular Letter; tiket.bbksdajatim.org Terms & Conditions; Pre-ascent screening at hotel; Signed clearance issuance." },
    { q: "How can I verify: Historical Recognition?", a: "Evidence: Booking.com plaque 2015; Shipping label; Founder with guests holding Stefan Loose; Stefan Loose page crop; Stefan Loose page full." },
    { q: "How can I verify: Legal Entity (Indonesia)?", a: "Evidence: NIB 1102230032918; NIB preview (URL pending)." },
    { q: "How can I verify: Business Identification Number (NIB)?", a: "Evidence: same as above." },
    { q: "How can I verify: Physical Office Presence?", a: "Evidence: Office photo." },
    { q: "How can I verify: Police & Safety Integration?", a: "Evidence: Police escort day; Police support vehicle; SPRIN POLPAR; SPRIN WAL-TRAVEL." },
    { q: "How can I verify: Radar Jember: Polpar Dibentuk untuk Mendukung Ijen Geopark?", a: "Evidence: Radar Jember screenshot." },
    { q: "How can I verify: Tourism Business License (TDUP)?", a: "Evidence: TDUP PDF; TDUP preview (URL pending)." }
  ],
  proof_vault: {
    legal: [
      { title: "NIB 1102230032918 official registration", url: "https://javavolcano-touroperator.com/legal/NIB-1102230032918.pdf", type: "PDF", hash: "FA20DDE31BB75E46B061ED14CC6D003F6960C02A9A82C20D8603B0CBF6F7B1B7", last_verified: "2025-10-25" },
      { title: "TDUP official registration document", url: "https://javavolcano-touroperator.com/legal/TDUP-1102230032918.pdf", type: "PDF", hash: "27252D512DDFA74DE22A3E3EC10AA3DD40EF88DA3EB57349FCD2137411551EE3", last_verified: "2025-10-25" },
      { title: "HPWKI membership approval letter", url: "https://javavolcano-touroperator.com/legal/HPWKI-approval.pdf", type: "PDF", hash: "CA1FB1A48B550A7748D400F165899F12A356E6941AACDDE9C043427698AAF63B", last_verified: "2025-10-25" },
      { title: "JVTO Bondowoso operations office", url: "https://javavolcano-touroperator.com/legal/office-photo.jpg", type: "JPG", hash: "7850E39F80A5A42243982A33FC027E1D38F33BD28F7CDA56FC2E243790340A0F", last_verified: "2025-10-25" },
      { title: "Tourist Police assignment letter (SPRIN POLPAR)", url: "https://javavolcano-touroperator.com/legal/SPRIN-POLPAR.pdf", type: "PDF", hash: "03C8578DC22956FAA366D957BADECFE38868D4760359CD8059FB2D6B145DFEAB", last_verified: "2025-11-05" },
      { title: "Police travel order (SPRIN WAL-TRAVEL)", url: "https://javavolcano-touroperator.com/legal/SPRIN-WAL-TRAVEL-2024-02-12.pdf", type: "PDF", hash: "179B061EAE558943FDCCC51D2EA3C8233A704B61F03CA3D212433F3E8D6F3BD3", last_verified: "2025-11-05" }
    ],
    screening: [
      { title: "BBKSDA East Java Circular Letter", url: "https://javavolcano-touroperator.com/screening/bbksda/05012024_Edaran_Pembukaan_TWA_Kawah_Ijen.pdf", type: "PDF", hash: "86f9c225cff91a9ae04332d469a17c70264c4be681572822601096c86ab4148a", last_verified: "2024-09-06" },
      { title: "Surat Izin Praktik (SIP) — dr. Ahmad Irwandanu", url: "https://javavolcano-touroperator.com/screening/SIP_DOKTER_AHMAD_IRWANDANU_2026.pdf", type: "PDF", hash: "82f2535b87066fef23cf3012ed3bc1cb18c124e03045ab544067e51d78ac80aa", last_verified: "2026-02-19" },
      { title: "tiket.bbksdajatim.org Terms & Conditions screenshot", url: "https://javavolcano-touroperator.com/screening/bbksda/bbksda-ticket-terms-screenshot.jpeg", type: "JPEG", hash: "c40c6e3cbe076d21991164e98207428a61f771d21459f831df6569a2dfe7485c", last_verified: "2026-02-19" },
      { title: "Pre-ascent health screening at partner hotel", url: "https://javavolcano-touroperator.com/screening/ijen-screening-hotel-01.jpeg", type: "JPEG", hash: "C52194BB0DB9C5ADA6F22660A954ACB03071925EA364B5E5B0C5E8EB919EBB77", last_verified: "2025-11-07" },
      { title: "Vitals taken and logged before night ascent", url: "https://javavolcano-touroperator.com/screening/ijen-screening-hotel-02.jpg", type: "JPG" },
      { title: "Digitally recorded, signed clearance issuance", url: "https://javavolcano-touroperator.com/screening/jvto-office-screening-1.JPG", type: "JPG", hash: "70370B0D85E0B5D0D92E317FD0F4D6880DA6ACBDF4A04EFB5C20C4E2EAC05E18", last_verified: "2025-11-07" },
      { title: "Screening at hotel or office", url: "https://javavolcano-touroperator.com/screening/jvto-office-screening-2.jpg", type: "JPG" },
      { title: "Health clearance (surat sehat) printable PDF", url: "https://javavolcano-touroperator.com/screening/Print_Surat_Sehat_2026.pdf", type: "PDF", hash: "343C4EA846C1EC8C91E74054B90412D33AD26C4A8BF6366287E360CB0231BB59", last_verified: "2025-11-07" }
    ],
    ops: [
      { title: "Pre-ascent lineup at Baratha Hotel", url: "https://javavolcano-touroperator.com/ops/baratha-hotel-departure-team.jpg", type: "JPG" },
      { title: "International group visiting JVTO office", url: "https://javavolcano-touroperator.com/ops/group-at-jvto-office.jpg", type: "JPG" },
      { title: "Evening welcome at JVTO office", url: "https://javavolcano-touroperator.com/ops/guest-welcome-evening.png", type: "PNG" },
      { title: "Tourist Police briefing at Ijen Geopark", url: "https://javavolcano-touroperator.com/ops/ijen-geopark-briefing.png", type: "PNG" },
      { title: "Traffic Police escorted arrival (day)", url: "https://javavolcano-touroperator.com/ops/jvto-police-escort-arrival-hotel-bondowoso-day.jpg", type: "JPG", hash: "54CFC8C8D144EA7FD7ECE5301A2E51B584BCE237A6F4D5523CB5242C0C0CECF5", last_verified: "2025-11-07" },
      { title: "Traffic Police escorted arrival (night)", url: "https://javavolcano-touroperator.com/ops/jvto-police-escort-arrival-hotel-bondowoso-night.jpg", type: "JPG" },
      { title: "Police support vehicle", url: "https://javavolcano-touroperator.com/ops/police-vehicle-support.jpg", type: "JPG", hash: "475DDAE5F4C646F8200491DF7C67E17A6A14C28A67842F91E831512C98D62B30", last_verified: "2025-11-07" }
    ],
    history: [
      { title: "Stefan Loose Reiseführer, page 287", url: "https://javavolcano-touroperator.com/history/stefan_loose_crop_enh.jpg", type: "JPG", hash: "d53aaf7d8496032babfe2f4f9d0d81a8c444fcf26e45f4eb5ea5b8e8252ba3eb", last_verified: "2026-02-19" },
      { title: "Booking.com plaque 2015", url: "https://javavolcano-touroperator.com/history/booking-2015-plaque.jpg", type: "JPG", hash: "08CE8E519B936DF53D8DC2B4B98DF06604ECA9D8D633A6F5E1B8709022A13C9B", last_verified: "2025-11-07" },
      { title: "Shipping label 2015", url: "https://javavolcano-touroperator.com/history/booking-2015-shipping-label.jpg", type: "JPG", hash: "4EEC3756B0F4AFEF8EA799AD08D1B2F098F75EBA2EBA45E8519CED3B64594549", last_verified: "2025-11-07" },
      { title: "Founder with guests holding Stefan Loose", url: "https://javavolcano-touroperator.com/history/guest-visit-ijen-bondowoso-homestay-stefan-loose-inspired.jpg", type: "JPG", hash: "41DCDCD2E08778B0212C1B7006455B5B1B2D66282DEFCDE813F0A3EA96407FBC", last_verified: "2025-11-07" },
      { title: "Stefan Loose full page", url: "https://javavolcano-touroperator.com/history/stefan-loose-ijen-bondowoso-page.png", type: "PNG", hash: "ECD5B591D3BA1B01341DCF75925A8E072DFF53C1097111E99033BB1AC4F71E22", last_verified: "2025-11-07" }
    ],
    press: [
      { title: "Detik.com screenshot", url: "https://javavolcano-touroperator.com/press/screencapture-news-detik-berita-jawa-timur-d-5492690-suka-duka-polisi-pariwisata-bondowoso-tegakkan-prokes-sambil-lawan-dingin-2026-01-14-02_48_41.png", type: "PNG", hash: "B257B75B3D2B9EDEBF07C9AF89A6C6AA9A4E01D6A716EF3F7C4CA75DEDA64B77", last_verified: "2025-11-07" },
      { title: "BBKSDA training article screenshot", url: "https://javavolcano-touroperator.com/press/screenshot-bbksda-pelatihan-pemandu-kawah-ijen.png", type: "PNG", hash: "b75668f98b78a54007b8bc0a8f4e0b3e46797dd6af47c158fb2b6a54bfb0b111", last_verified: "2025-11-07" },
      { title: "Radar Jember screenshot", url: "https://javavolcano-touroperator.com/press/screenshot-radarjember.jawapos.com-polpar-dibentuk-untuk-mendukung-ijen-geopark.png", type: "PNG", hash: "2A60EB168274004283B2B9939CCBF5982C12A7DB854FDA014308A2494EE2ABF4", last_verified: "2025-11-07" }
    ],
    unpublished: [
      { title: "NIB preview image", url: "" },
      { title: "Active Tourist Police leadership portrait", url: "" },
      { title: "Guests visiting after reading Stefan Loose", url: "" },
      { title: "Enhanced crop of Stefan Loose", url: "" },
      { title: "TDUP preview", url: "" },
      { title: "HPWKI preview", url: "" },
      { title: "SPRIN POLPAR image copy", url: "" },
      { title: "SPRIN WAL-TRAVEL image copy", url: "" }
    ],
    other: [
      { title: "Kiki License", url: "https://javavolcano-touroperator.com/uploads/1771428489070-55145932-kta_kiki.jpg", type: "JPG", hash: "bd11ae0f0d15257bae7334496396fb69f5401c80d4fd7fc5139e4992c4df44cb", last_verified: "2026-02-18" },
      { title: "Anjas License", url: "https://javavolcano-touroperator.com/uploads/1771428583288-513992233-kta_anjas.jpg", type: "JPG", hash: "8f34a7ad62425dfa0e591d7cfcddcafae9e444dbc80ac3f3518247203837df72", last_verified: "2026-02-18" },
      { title: "Taufik License", url: "https://javavolcano-touroperator.com/uploads/1771428704448-911506028-kta_taufik.jpg", type: "JPG", hash: "90d5fc704e68421ef63fe278346702a796985af72fc3a5804976a0f0f66f1290", last_verified: "2026-02-18" },
      { title: "Gufron License", url: "https://javavolcano-touroperator.com/uploads/1771428741674-842615436-kta_gufron.jpg", type: "JPG", hash: "27216033236df1302abf9765ab080d0280f3dff9e96dd301e3f486aa38bb20ab", last_verified: "2026-02-18" },
      { title: "Rendi License", url: "https://javavolcano-touroperator.com/uploads/1771428760524-516116110-kta_rendi.jpg", type: "JPG", hash: "1f96683542bc9929e88dfc693c5f27597f18058b657cdfa482a4a91b5cf5cbb7", last_verified: "2026-02-18" },
      { title: "Active Tourist Police leadership portrait", url: "https://javavolcano-touroperator.com/founder/mr-sam-tourist-police-portrait.png", type: "PNG" }
    ]
  }
};
