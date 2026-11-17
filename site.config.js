// ==============================================================================
// NUHAA COOL FIX - CENTRAL CONFIGURATION FILE (site.config.js)
// ==============================================================================
// This is the SINGLE file to edit for all site content, contact info,
// theme colors, services, sub-services, slides, process steps, and translations.
// ==============================================================================

window.SITE = {
  // Default language on first visit ('ta' for Tamil, 'en' for English).
  // The user's preference is automatically saved in localStorage.
  defaultLang: 'ta',

  // 1. Business Contact & Location Details
  business: {
    name: {
      en: 'Nuha Cool Fix',
      ta: 'நுஹா கூல் ஃபிக்ஸ்'
    },
    tagline: {
      en: "Madurai's Trusted Home Appliance Repair",
      ta: 'மதுரையின் நம்பகமான வீட்டு உபகரண சர்வீஸ்'
    },
    phone: '919999999999',
    phoneDisplay: '+91 99999 99999',
    address: {
      en: 'Sellur, Madurai, Tamil Nadu 625002',
      ta: 'செல்லூர், மதுரை, தமிழ்நாடு 625002'
    },
    hours: {
      en: 'Everyday: 8:00 AM – 9:00 PM',
      ta: 'தினமும்: காலை 8:00 – இரவு 9:00 வரை'
    },
    topBarNotice: {
      en: 'Doorstep service available across Madurai and surrounding areas | Same-day visit guaranteed',
      ta: 'இன்றே சர்வீஸ் கிடைக்கும் | மதுரை மற்றும் செல்லூர் சுற்றுவட்டாரம் முழுவதும்'
    },
    mapQuery: 'Sellur, Madurai, Tamil Nadu',
    logo: 'images/logo.svg'
  },

  // 2. Global Theme Colors
  theme: {
    primary: '#2563eb',       // Modern vibrant blue
    primaryDark: '#1e3a8a',   // Deep navy blue
    primaryDeep: '#0f172a',   // Slate-950 for dark accents & topbar
    accent: '#f97316',        // Orange for primary Call Now buttons & highlights
    accentHover: '#ea580c',   // Darker orange hover
    bg: '#f8fafc',            // Light slate background
    card: '#ffffff',          // Pure white card surfaces
    text: '#0f172a',          // High-contrast slate-900 text
    textMuted: '#64748b',     // Slate-500 secondary text
    border: '#e2e8f0',        // Slate-200 border
    whatsapp: '#22c55e',      // WhatsApp emerald green
    whatsappDark: '#16a34a'   // WhatsApp hover green
  },

  // 3. Navigation Links (Header)
  nav: [
    { id: 'services', label: { en: 'Services', ta: 'சேவைகள்' } },
    { id: 'why-us', label: { en: 'Why Us?', ta: 'ஏன் நாங்கள்?' } },
    { id: 'process', label: { en: 'How It Works', ta: 'பணி முறை' } },
    { id: 'testimonials', label: { en: 'Testimonials', ta: 'வாடிக்கையாளர் கருத்து' } },
    { id: 'contact', label: { en: 'Contact', ta: 'தொடர்புக்கு' } }
  ],

  // 4. Hero Section (Home Page)
  hero: {
    badge: {
      en: "Madurai's #1 Trusted Home Service Hub",
      ta: 'மதுரையின் முதன்மையான நம்பகமான ஹோம் சர்வீஸ் மையம்'
    },
    title: {
      en: 'AC, Fridge, Washing Machine, Water Heater & TV Repair - At Your Doorstep',
      ta: 'ஏசி, பிரிட்ஜ், வாஷிங் மெஷின், ஹீட்டர் & டிவி சர்வீஸ் - உங்கள் வீடு தேடி வருகிறோம்'
    },
    sub: {
      en: 'Fast, affordable, and certified doorstep repair services across Sellur and entire Madurai. Expert technicians at your home in just one phone call.',
      ta: 'செல்லூர் மற்றும் மதுரை முழுவதும் விரைவான, நியாயமான, நம்பிக்கையான வீட்டு சர்வீஸ். ஒரே போன் காலில் நிபுணத்துவ டெக்னீசியன் வருகை.'
    },
    callBtn: {
      en: 'Call Now',
      ta: 'இப்போதே அழைக்க'
    },
    whatsappBtn: {
      en: 'Book via WhatsApp',
      ta: 'வாட்ஸ்அப் பதிவு'
    },
    whatsappDefaultMsg: {
      en: 'Hello Nuha Cool Fix, I would like to book a home appliance repair service in Madurai.',
      ta: 'வணக்கம் நுஹா கூல் ஃபிக்ஸ், எனக்கு மதுரையில் வீட்டு உபகரண சர்வீஸ் தேவைப்படுகிறது.'
    },
    metrics: [
      {
        val: { en: '60 Mins', ta: '60 நிமிடம்' },
        label: { en: 'Doorstep Arrival', ta: 'நேரடி வருகை' }
      },
      {
        val: { en: '100% Genuine', ta: '100% அசல்' },
        label: { en: 'Spare Parts', ta: 'உதிரிபாகங்கள்' }
      },
      {
        val: { en: '90 Days', ta: '90 நாட்கள்' },
        label: { en: 'Service Warranty', ta: 'சர்வீஸ் உத்தரவாதம்' }
      }
    ],
    quickBooking: {
      tag: { en: 'Instant Help', ta: 'உடனடி உதவி' },
      title: { en: 'Quick Service Booking', ta: 'உடனடி சர்வீஸ் முன்பதிவு' },
      sub: {
        en: 'Fill out the details below, technician will call within 10 minutes.',
        ta: 'விவரங்களை உள்ளிடவும், 10 நிமிடங்களில் டெக்னீசியன் அழைப்பார்.'
      },
      applianceLabel: { en: 'Select Appliance *', ta: 'உபகரணத்தைத் தேர்ந்தெடுக்கவும் *' },
      phoneLabel: { en: 'Phone Number *', ta: 'தொலைபேசி எண் *' },
      locationLabel: { en: 'Madurai Area / Location *', ta: 'பகுதி / முகவரி *' },
      locationPlaceholder: { en: 'e.g., Sellur, Anna Nagar, KK Nagar', ta: 'எ.கா., செல்லூர், அண்ணா நகர், கே.கே. நகர்' },
      submitBtn: { en: 'Book Technician Now', ta: 'டெக்னீசியனை உடனே புக் செய்க' },
      perks: [
        { en: 'Lowest Rates Guaranteed', ta: 'குறைந்த கட்டண உத்தரவாதம்' },
        { en: 'Instant Free Cancellation', ta: 'மறைமுக கட்டணம் இல்லை' }
      ],
      successMsg: {
        en: 'Thank you! Your booking request has been received. Our technician will call you within 10 minutes.',
        ta: 'நன்றி! உங்கள் முன்பதிவு கோரிக்கை பெறப்பட்டது. 10 நிமிடங்களில் எங்கள் டெக்னீசியன் உங்களை அழைப்பார்.'
      }
    }
  },

  // 5. "Why Choose Us" Section
  why: [
    {
      iconClass: 'fa-solid fa-bolt',
      iconFallback: '⚡',
      colorBg: '#fef3c7',
      colorIcon: '#f59e0b',
      title: { en: 'Same Day Fast Service', ta: 'அதே நாளில் துரித சேவை' },
      desc: {
        en: 'Quick response team reaching Sellur and Madurai locations within hours of booking.',
        ta: 'செல்லூர் மற்றும் மதுரை பகுதி முழுவதும் அழைத்த சில மணி நேரங்களில் நேரடி வருகை.'
      }
    },
    {
      iconClass: 'fa-solid fa-user-gear',
      iconFallback: '👨‍🔧',
      colorBg: '#dbeafe',
      colorIcon: '#2563eb',
      title: { en: 'Certified Expert Technicians', ta: 'அனுபவம் வாய்ந்த டெக்னீசியன்கள்' },
      desc: {
        en: 'Skilled multi-brand specialists trained to diagnose and fix faults accurately.',
        ta: 'அனைத்து முன்னணி பிராண்ட் உபகரணங்களையும் துல்லியமாக பழுது நீக்கும் திறமை.'
      }
    },
    {
      iconClass: 'fa-solid fa-receipt',
      iconFallback: '🏷️',
      colorBg: '#ffedd5',
      colorIcon: '#f97316',
      title: { en: 'Transparent Upfront Pricing', ta: 'வேலைக்கு முன் தெளிவான கட்டணம்' },
      desc: {
        en: 'Complete price quotation shared after inspection. No hidden costs or surprises.',
        ta: 'பரிசோதனை செய்த பின் கட்டண விவரம் வெளிப்படையாக கூறப்படும். மறைமுக கட்டணங்கள் இல்லை.'
      }
    },
    {
      iconClass: 'fa-solid fa-shield-check',
      iconFallback: '🛡️',
      colorBg: '#dcfce7',
      colorIcon: '#16a34a',
      title: { en: 'Warranty & Genuine Spares', ta: 'சர்வீஸ் உத்தரவாதம் & அசல் பாகங்கள்' },
      desc: {
        en: 'Repairs backed with warranty and 100% genuine replacement parts for peace of mind.',
        ta: 'தரமான உதிரிபாகங்கள் மற்றும் நம்பகமான சர்வீஸ் உத்தரவாதத்துடன் முழு திருப்தி.'
      }
    }
  ],

  // 6. Home Process (3-Step Quick Process)
  homeProcess: {
    tag: { en: 'Simple 3-Step Process', ta: 'எளிய 3 படிமுறை' },
    title: { en: 'How It Works', ta: 'பணி செய்யும் முறை' },
    steps: [
      {
        num: '1',
        title: { en: '1. Select Appliance Issue', ta: '1. பழுது விபரம் பகிர்தல்' },
        desc: {
          en: 'Report your appliance fault via phone call or quick WhatsApp booking.',
          ta: 'போன் கால் அல்லது வாட்ஸ்அப் மூலம் உங்கள் உபகரண பழுது விபரத்தைக் கூறவும்.'
        }
      },
      {
        num: '2',
        title: { en: '2. Schedule Inspection Time', ta: '2. வருகை நேரம் தேர்வு' },
        desc: {
          en: 'Pick a convenient doorstep time slot with same-day availability.',
          ta: 'உங்களுக்கு வசதியான நேரத்தைத் தேர்வு செய்யுங்கள்; அதே நாளில் டெக்னீசியன் வருகை.'
        }
      },
      {
        num: '3',
        title: { en: '3. Doorstep Repair & Testing', ta: '3. பழுது நீக்கம் & சோதனை' },
        desc: {
          en: 'Our technician visits your home, fixes the issue, and tests before sign-off.',
          ta: 'எங்கள் டெக்னீசியன் வீட்டிற்கு வந்து பழுது நீக்கி, முழுமையாக பரிசோதித்து ஒப்படைப்பார்.'
        }
      }
    ]
  },

  // 7. Customer Testimonials
  testimonials: {
    tag: { en: 'Customer Satisfaction', ta: 'வாடிக்கையாளர் நற்சான்றிதழ்' },
    title: {
      en: 'Trusted by 3,500+ Happy Customers in Madurai',
      ta: 'மதுரையில் 3,500+ திருப்திகரமான வாடிக்கையாளர்கள்'
    },
    ratingVal: '4.9 / 5',
    ratingLabel: { en: 'Average Rating', ta: 'சராசரி மதிப்பீடு' },
    reviews: [
      {
        name: 'Ramanathan',
        initial: 'R',
        location: { en: 'Sellur, Madurai', ta: 'செல்லூர், மதுரை' },
        text: {
          en: '"Quickly arrived at Sellur and fixed my refrigerator cooling issue in under an hour. Fair and honest pricing."',
          ta: '"செல்லூரில் அழைத்த ஒரு மணி நேரத்திற்குள் வந்து பிரிட்ஜ் கூலிங் பிரச்சனையை சரிசெய்தார்கள். மிக நியாயமான கட்டணம்."'
        }
      },
      {
        name: 'Suresh Babu',
        initial: 'S',
        location: { en: 'Anna Nagar, Madurai', ta: 'அண்ணா நகர், மதுரை' },
        text: {
          en: '"Washing machine drum was making heavy noise. They replaced with genuine parts and gave warranty. Excellent service!"',
          ta: '"வாஷிங் மெஷின் ட்ரம் அதிக சத்தம் போட்டது. அசல் பாகங்களை மாற்றி உத்தரவாதமும் தந்தார்கள். சிறந்த சேவை!"'
        }
      },
      {
        name: 'Meenakshi Sundaram',
        initial: 'M',
        location: { en: 'Simmakkal, Madurai', ta: 'சிம்மக்கல், மதுரை' },
        text: {
          en: '"AC jet water service was done very neatly with zero water mess in the room. Highly recommend Nuha Cool Fix."',
          ta: '"ரூமில் தண்ணீர் சிந்தாமல் மிக நேர்த்தியாக ஏசி ஜெட் வாஷ் சர்வீஸ் செய்தார்கள். நுஹா கூல் ஃபிக்ஸ் மிகவும் நம்பகமானது."'
        }
      }
    ]
  },

  // 8. Urgent CTA Banner
  urgentCta: {
    title: {
      en: 'Have an urgent repair or questions?',
      ta: 'அவசர பழுது அல்லது சந்தேகங்கள் உள்ளதா?'
    },
    sub: {
      en: 'Our support team is active everyday from 8:00 AM to 9:00 PM.',
      ta: 'எங்கள் உதவி மையம் தினமும் காலை 8:00 முதல் இரவு 9:00 வரை செயல்படுகிறது.'
    },
    callLabel: { en: 'Call Now', ta: 'இப்போதே அழைக்க' },
    waLabel: { en: 'WhatsApp Message', ta: 'வாட்ஸ்அப் செய்தி' }
  },

  // 9. Floating WhatsApp Chat Widget Configuration
  chat: {
    title: { en: 'WhatsApp Support', ta: 'வாட்ஸ்அப் உதவி' },
    subtitle: { en: 'Online | Sellur, Madurai', ta: 'ஆன்லைன் | செல்லூர், மதுரை' },
    greeting: {
      en: 'Hello! Welcome to Nuha Cool Fix. How can we help you with your home appliance today?',
      ta: 'வணக்கம்! நுஹா கூல் ஃபிக்ஸ்-க்கு வரவேற்கிறோம். இன்று உங்கள் வீட்டு உபகரணத்திற்கு என்ன சர்வீஸ் தேவை?'
    },
    presets: [
      {
        en: 'Hi, I need urgent AC cooling / gas filling service.',
        ta: 'வணக்கம், எனக்கு அவசரமாக ஏசி கூலிங் / கேஸ் நிரப்பும் சர்வீஸ் தேவை.'
      },
      {
        en: 'Hi, I need a repair quote for my home appliance.',
        ta: 'வணக்கம், என் வீட்டு உபகரண பழுது நீக்க உத்தேச விலை தெரிய வேண்டும்.'
      }
    ],
    placeholder: {
      en: 'Type your message here...',
      ta: 'உங்கள் தேவையை இங்கே தட்டச்சு செய்யவும்...'
    },
    send: {
      en: 'Send',
      ta: 'அனுப்பு'
    }
  },

  // 10. General UI Labels & Localized Strings
  ui: {
    servicesHeading: { en: 'Home Appliance Repair & Maintenance', ta: 'வீட்டு உபகரண சர்வீஸ் & பழுது நீக்கம்' },
    servicesTag: { en: 'Our Services', ta: 'எங்கள் சேவைகள்' },
    servicesSub: {
      en: 'Choose your required repair service to view options and book directly via WhatsApp or call.',
      ta: 'விவரங்கள் பார்க்க மற்றும் வாட்ஸ்அப்பில் புக் செய்ய சேவையைத் தேர்ந்தெடுக்கவும்.'
    },
    whyHeading: { en: 'Why Choose Nuha Cool Fix?', ta: 'ஏன் நுஹா கூல் ஃபிக்ஸ்?' },
    whySub: {
      en: 'Safe, reliable, and verified doorstep appliance repairs for your family in Madurai.',
      ta: 'உங்கள் குடும்பத்திற்கு பாதுகாப்பான, நம்பிக்கையான நேரடி வீட்டு சர்வீஸ்.'
    },
    contactHeading: { en: 'Contact & Timings', ta: 'தொடர்பு & வேலை நேரம்' },
    contactSub: {
      en: 'Serving Sellur, Goripalayam, Simmakkal, Anna Nagar, KK Nagar, and all of Madurai.',
      ta: 'செல்லூர், கோரிப்பாளையம், சிம்மக்கல், அண்ணா நகர் உட்பட மதுரை முழுவதும் சேவை.'
    },
    backToHome: { en: 'Back to Home', ta: 'முகப்புக்குத் திரும்பு' },
    selectServiceTitle: { en: 'Select an Option / Package', ta: 'சேவை பேக்கேஜைத் தேர்ந்தெடுக்கவும்' },
    selectServiceSub: {
      en: 'Fixed upfront pricing with no hidden charges. Choose to view details.',
      ta: 'மறைமுக கட்டணங்கள் இல்லாத நிலையான விலை. விவரம் பார்க்க கிளிக் செய்க.'
    },
    howItWorksBtn: { en: 'View Detailed Process Popup', ta: 'விரிவான பணி முறை பார்க்க' },
    processSectionTitle: { en: 'How It Works: Our 4-Step Process', ta: 'எங்கள் 4-படி சர்வீஸ் பணி முறை' },
    processSectionTag: { en: 'Standard Operating Procedure', ta: 'தரமான பணி நெறிமுறை' },
    processModalTitle: { en: 'Our Service Process', ta: 'எங்கள் சர்வீஸ் செயல்முறை' },
    processModalSub: {
      en: 'Standard 4-step procedure for every doorstep visit.',
      ta: 'ஒவ்வொரு விசிட்டிலும் நாங்கள் பின்பற்றும் 4 எளிய வழிமுறைகள்.'
    },
    transparencyTitle: { en: "What's Included vs Excluded", ta: 'எவை உள்ளடங்கியவை & எவை இல்லை' },
    transparencyTag: { en: 'Pure Honesty Guarantee', ta: 'வெளிப்படையான உத்தரவாதம்' },
    transparencySub: {
      en: 'Nuha Cool Fix believes in 100% upfront pricing without surprise bills.',
      ta: 'மறைமுக கட்டணங்கள் இல்லாத 100% வெளிப்படையான கட்டண உத்தரவாதம்.'
    },
    includedTitle: { en: 'What is Included', ta: 'இதில் உள்ளடங்கியவை' },
    excludedTitle: { en: 'What is Excluded (Clear Rate Card)', ta: 'விலைப்பட்டியல் படி கூடுதல் கட்டணம்' },
    reviewsHeading: { en: 'Verified Madurai Customer Reviews', ta: 'மதுரை வாடிக்கையாளர் மதிப்புரைகள்' },
    earliestSlot: { en: 'Earliest Slot: Today, within 2h', ta: 'அடுத்த ஸ்லாட்: இன்றே, 2 மணி நேரத்தில்' },
    closeModal: { en: 'Close', ta: 'மூடு' },
    bookOnWhatsApp: { en: 'Book on WhatsApp', ta: 'வாட்ஸ்அப்பில் புக் செய்ய' },
    callNow: { en: 'Call Now', ta: 'இப்போதே அழைக்க' },
    openInMaps: { en: 'Open in Google Maps', ta: 'கூகுள் மேப்பில் பார்க்க' },
    addressLabel: { en: 'Address', ta: 'முகவரி' },
    hoursLabel: { en: 'Working Hours', ta: 'வேலை நேரம்' },
    phoneLabel: { en: 'Phone Support', ta: 'தொலைபேசி' },
    servicesOfferedLabel: { en: 'Services Offered', ta: 'வழங்கப்படும் சேவைகள்' },
    copyright: { en: 'All rights reserved.', ta: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' },
    viewDetails: { en: 'Details & Book Now', ta: 'விவரங்கள் & புக் செய்ய' },
    whatsAppPrefix: { en: 'Hello Nuha Cool Fix, I would like to book: ', ta: 'வணக்கம் நுஹா கூல் ஃபிக்ஸ், நான் புக் செய்ய விரும்புவது: ' },
    selectedService: { en: 'Selected', ta: 'தேர்ந்தெடுக்கப்பட்டது' },
    stepLabel: { en: 'Step', ta: 'படி' },
    reviewsLabel: { en: 'reviews', ta: 'மதிப்பீடுகள்' },
    prevSlide: { en: 'Previous Slide', ta: 'முந்தைய படம்' },
    nextSlide: { en: 'Next Slide', ta: 'அடுத்த படம்' }
  },

  // 11. Services Master Array (With Two-Way Sync Data for Packages & Slides)
  services: [
    // --------------------------------------------------------------------------
    // 1. AIR CONDITIONER (AC)
    // --------------------------------------------------------------------------
    {
      id: 'ac',
      icon: '❄️',
      iconClass: 'fa-solid fa-snowflake',
      accentColor: '#0284c7',
      accentBg: '#e0f2fe',
      priceTag: { en: 'From ₹299', ta: '₹299 முதல்' },
      title: {
        en: 'Air Conditioner (AC)',
        ta: 'ஏர் கண்டிஷனர் (AC)'
      },
      shortDesc: {
        en: 'Jet pump water wash, gas leak & refill, cooling issue diagnosis, installation/uninstallation.',
        ta: 'ஜெட் பம்ப் வாட்டர் வாஷ், கேஸ் லீக் & ரீஃபில், கூலிங் பழுது மற்றும் ஏசி பொருத்துதல்.'
      },
      features: [
        { en: 'Split & Window AC experts', ta: 'ஸ்பிளிட் & விண்டோ ஏசி ஸ்பெஷலிஸ்ட்' },
        { en: 'Copper pipe & gas leak inspection', ta: 'காப்பர் பைப் & கேஸ் லீக் சோதனை' }
      ],
      badge: {
        en: 'Same Day Service Available',
        ta: 'அதே நாளில் சர்வீஸ்'
      },
      rating: { value: 4.9, count: '1,240+' },
      subServices: [
        {
          id: 'jet-foam-wash',
          icon: '🧼',
          duration: { en: '45 Mins', ta: '45 நிமிடம்' },
          price: '₹499',
          originalPrice: '₹799',
          label: {
            en: 'Jet Foam Deep Service',
            ta: 'ஜெட் ஃபோர்ம் வாஷ்'
          },
          desc: {
            en: 'High-pressure foam wash for indoor & outdoor units. 2x airflow boost.',
            ta: 'உட்புறம் & வெளிப்புற யூனிட்களுக்கு ஆழமான ஜெட் வாஷ்.'
          }
        },
        {
          id: 'gas-leak-refill',
          icon: '💨',
          duration: { en: '60 Mins', ta: '60 நிமிடம்' },
          price: '₹1,499',
          originalPrice: '₹1,999',
          label: {
            en: 'Gas Leak Check & Refill',
            ta: 'கேஸ் கசிவு & ரீஃபில்'
          },
          desc: {
            en: 'Nitrogen pressure testing, leak sealing & 100% pure R32/R410A gas refill.',
            ta: 'நைட்ரஜன் பிரஷர் சோதனை, கசிவு சீலிங் & கேஸ் நிரப்புதல்.'
          }
        },
        {
          id: 'cooling-pcb-repair',
          icon: '🔧',
          duration: { en: 'Diagnostic', ta: 'பரிசோதனை' },
          price: '₹299',
          originalPrice: '₹499',
          label: {
            en: 'Cooling & PCB Repair',
            ta: 'கூலிங் & PCB பழுது'
          },
          desc: {
            en: 'Fix not cooling, sensor error codes, inverter motherboard & fan noise.',
            ta: 'கூலிங் இன்மை, சென்சார் பிழைகள், இன்வெர்ட்டர் மதர்போர்டு பழுது.'
          }
        },
        {
          id: 'install-uninstall',
          icon: '📦',
          duration: { en: 'Installation', ta: 'பொருத்துதல்' },
          price: '₹699',
          originalPrice: '₹999',
          label: {
            en: 'Install / Relocation',
            ta: 'பொருத்துதல் / மாற்றுதல்'
          },
          desc: {
            en: 'Safe dismounting, core cutting, outdoor bracket fitment & vacuuming.',
            ta: 'பாதுகாப்பான ஏசி கழற்றுதல் மற்றும் புதிய இடத்தில் பொருத்துதல்.'
          }
        }
      ],
      slides: [
        {
          image: 'images/ac-slide-1.svg',
          headline: {
            en: 'AC Deep Jet Wash Cleaning',
            ta: 'ஏசி ஜெட் பம்ப் ஆழமான வாஷ் சர்வீஸ்'
          },
          priceLine: { en: 'Package: ₹499 (Save ₹300)', ta: 'விலை: ₹499 (₹300 சேமிப்பு)' },
          perks: [
            { en: 'Sellur & Madurai (Doorstep Visit)', ta: 'செல்லூர் & மதுரை (நேரடி வருகை)' },
            { en: 'Within 60 Mins (Rapid Dispatch)', ta: '60 நிமிடங்களில் விரைவு வருகை' },
            { en: 'Upfront Price (No Hidden Fees)', ta: 'வேலைக்கு முன் வெளிப்படையான விலை' },
            { en: '30-Day Warranty (Cooling Guarantee)', ta: '30 நாட்கள் சர்வீஸ் உத்தரவாதம்' }
          ],
          spotlightTag: { en: 'Nuha Cool Fix Signature Care', ta: 'நுஹா கூல் ஃபிக்ஸ் சிறப்பு சேவை' }
        },
        {
          image: 'images/ac-slide-2.svg',
          headline: {
            en: 'Accurate Gas Leak Check & Pure Refrigerant Refill',
            ta: 'துல்லியமான கேஸ் கசிவு சோதனை & கேஸ் ரீஃபில்'
          },
          priceLine: { en: 'Package: ₹1,499 (Save ₹500)', ta: 'விலை: ₹1,499 (₹500 சேமிப்பு)' },
          perks: [
            { en: '100% Pure R32 / R410A Refrigerant', ta: '100% அசல் R32 / R410A கேஸ்' },
            { en: 'Nitrogen Leak Detection Test', ta: 'நைட்ரஜன் கசிவு பரிசோதனை' },
            { en: 'Flare Nut & Pipe Braze Sealing', ta: 'காப்பர் பைப் வெல்டிங் & சீலிங்' },
            { en: '30-Day Cooling Assurance', ta: '30 நாட்கள் கூலிங் உத்தரவாதம்' }
          ],
          spotlightTag: { en: '100% Genuine Gas Guarantee', ta: 'அசல் கேஸ் நிரப்பும் உத்தரவாதம்' }
        },
        {
          image: 'images/ac-slide-3.svg',
          headline: {
            en: 'Inverter PCB Board & Compressor Diagnostics',
            ta: 'இன்வெர்ட்டர் PCB போர்டு & கம்ப்ரசர் சர்வீஸ்'
          },
          priceLine: { en: 'Inspection: ₹299 (Fixed Rate)', ta: 'ஆய்வுக் கட்டணம்: ₹299' },
          perks: [
            { en: 'Multi-Brand PCB Micro-Soldering', ta: 'அனைத்து பிராண்ட் போர்டு பழுது' },
            { en: 'Capacitor & Sensor Replacement', ta: 'சென்சார் மற்றும் கெபாசிட்டர் மாற்றுதல்' },
            { en: 'Accurate Error Code Resolution', ta: 'டிஜிட்டல் எர்ரர் கோட் தீர்வு' },
            { en: 'Clear Estimate Before Part Replace', ta: 'பாகங்கள் மாற்றும் முன் விலை தகவல்' }
          ],
          spotlightTag: { en: 'Expert Electronics Repair', ta: 'நிபுணத்துவ எலக்ட்ரானிக்ஸ் பழுது' }
        },
        {
          image: 'images/ac-slide-4.svg',
          headline: {
            en: 'Hassle-Free Split & Window AC Installation',
            ta: 'பாதுகாப்பான ஏசி பொருத்துதல் & மாற்றுதல்'
          },
          priceLine: { en: 'Starts at ₹699 (Save ₹300)', ta: 'விலை: ₹699 முதல்' },
          perks: [
            { en: 'Heavy-Duty Anti-Rust Outdoor Stand', ta: 'துருப்பிடிக்காத பலமான ஸ்டாண்ட்' },
            { en: 'Vibration-Free Copper Piping Work', ta: 'அதிர்வற்ற காப்பர் பைப் பிட்டிங்' },
            { en: 'Nitrogen Vacuuming Before Startup', ta: 'இயக்கும் முன் வேக்குவம் செய்தல்' },
            { en: 'Neat & Clean Wall Finishing', ta: 'சுவரில் எவ்வித சேதமுமின்றி பினிஷிங்' }
          ],
          spotlightTag: { en: 'Safe Sturdy Mounting', ta: 'பாதுகாப்பான ஏசி பொருத்துதல்' }
        }
      ],
      process: [
        {
          title: { en: 'Pre-Service Health Check', ta: 'முன் ஆய்வு & வெப்பநிலை சோதனை' },
          text: {
            en: 'Technician checks current airflow rate, thermostat cooling temperature & outdoor vibration.',
            ta: 'ஏசியின் காற்றின் வேகம், தற்போதைய குளுமை அளவு மற்றும் வெளிப்புற யூனிட் அதிர்வை சோதிக்கிறோம்.'
          },
          image: 'images/process-step-1.svg'
        },
        {
          title: { en: 'Waterproof Wall Jacket Fitting', ta: 'நீர்ப்புகா சுவர் பாதுகாப்பு உறை' },
          text: {
            en: 'A heavy-duty waterproof apron is mounted around indoor unit so not a single drop touches your wall or bed.',
            ta: 'உங்கள் வீட்டு சுவரிலோ மெத்தையிலோ ஒரு சொட்டு நீர் கூட சிந்தாமல் முழு பாதுகாப்பு உறை பொருத்தப்படும்.'
          },
          image: 'images/process-step-2.svg'
        },
        {
          title: { en: 'High-Pressure Foam Jet Cleaning', ta: 'உயரழுத்த ஜெட் ஃபோர்ம் வாஷ்' },
          text: {
            en: 'Non-corrosive detergent sprayed across coils, blower fan, and condenser followed by high-pressure rinse.',
            ta: 'பிரத்யேக கெமிக்கல் அற்ற ஃபோர்ம் தெளித்து ஜெட் பம்ப் மூலம் அழுக்குகள் முழுமையாக கழுவப்படும்.'
          },
          image: 'images/process-step-3.svg'
        },
        {
          title: { en: 'Post-Check & Cooling Warranty', ta: 'குளிர்ச்சி சோதனை & உத்தரவாத அட்டை' },
          text: {
            en: 'Digital temperature test verifying 2°C to 4°C drop, workspace cleaning and warranty card activation.',
            ta: 'குளிர்ச்சி 2°C முதல் 4°C வரை அதிகரிப்பதை உறுதிசெய்து 30 நாள் உத்தரவாத அட்டை வழங்குகிறோம்.'
          },
          image: 'images/process-step-4.svg'
        }
      ],
      transparency: {
        included: [
          { en: 'Indoor & outdoor unit high-pressure jet cleaning', ta: 'உட்புற மற்றும் வெளிப்புற யூனிட் முழு ஜெட் வாஷ்' },
          { en: 'Specialized AC foam wash for stubborn coil dust', ta: 'கூலிங் காயில்களுக்கான சிறப்பு ஃபோர்ம் வாஷ்' },
          { en: 'Drain tray & pipe flush to stop water leakage', ta: 'தண்ணீர் கசிவை நீக்கும் டிரைன் பைப் சுத்தம்' },
          { en: 'Free health & electrical amperage load check', ta: 'மின்சார சுமை மற்றும் செயல்பாட்டு பரிசோதனை' }
        ],
        excluded: [
          { en: 'Refrigerant (gas) refill if gas leak is found', ta: 'கேஸ் கசிவு இருப்பின் கேஸ் நிரப்புவதற்கான கட்டணம்' },
          { en: 'Replacement spare parts (capacitors, sensors, PCB)', ta: 'புதிய உதிரிபாகங்கள் (கெபாசிட்டர், போர்டு போன்றவை)' },
          { en: 'High-rise scaffolding without balcony access', ta: 'பால்கனி வசதி இல்லாத உயரமான வெளிப்புற சுவர் வேலைகள்' }
        ]
      },
      reviews: [
        {
          name: 'Senthil Kumar',
          loc: { en: 'Sellur, Madurai • Voltas 1.5T', ta: 'செல்லூர், மதுரை • வோல்டாஸ் 1.5T' },
          text: {
            en: '"Best AC service in Sellur. The technician brought a waterproof plastic kit so there wasn\'t a single drop of dirty water on my sofa. Cooling is back like day one!"',
            ta: '"செல்லூரில் மிகச் சிறந்த ஏசி சர்வீஸ். வாட்டர்ப்ரூப் கவர் மாட்டி ரூமில் துளி நீரும் சிந்தாமல் சர்வீஸ் செய்தார்கள். முதல் நாள் வாங்கியது போல குளிர்கிறது!"'
          }
        },
        {
          name: 'Rajeshwari M.',
          loc: { en: 'KK Nagar, Madurai • Daikin Split', ta: 'கே.கே. நகர், மதுரை • டைகின் ஏசி' },
          text: {
            en: '"Booked at 10 AM on WhatsApp, technician reached my flat in KK Nagar by 11:15 AM. Found a micro gas leak in flare nut and solved it immediately."',
            ta: '"வாட்ஸ்அப்பில் காலை 10 மணிக்கு புக் செய்தேன், 11:15-க்குள் வீட்டுக்கே வந்து நட்டிலிருந்த கேஸ் கசிவை உடனே சரிசெய்தார்."'
          }
        },
        {
          name: 'Anwar Ali',
          loc: { en: 'Goripalayam, Madurai • LG Inverter', ta: 'கோரிப்பாளையம், மதுரை • எல்ஜி இன்வெர்ட்டர்' },
          text: {
            en: '"Very genuine technicians. Other mechanics told me my AC PCB was dead. Nuha technician only replaced a small capacitor for ₹550. Saved my money."',
            ta: '"மிக நேர்மையான சர்வீஸ். மற்றவர்கள் போர்டு போச்சுன்னு 4000 கேட்டாங்க. இவர் வெறும் கெபாசிட்டர் மட்டும் மாற்றி 550 ரூபாயில் முடித்துவிட்டார்."'
          }
        }
      ]
    },

    // --------------------------------------------------------------------------
    // 2. REFRIGERATOR (FRIDGE)
    // --------------------------------------------------------------------------
    {
      id: 'fridge',
      icon: '🧊',
      iconClass: 'fa-solid fa-temperature-low',
      accentColor: '#2563eb',
      accentBg: '#dbeafe',
      priceTag: { en: 'From ₹199', ta: '₹199 முதல்' },
      title: {
        en: 'Refrigerator (Fridge)',
        ta: 'பிரிட்ஜ் (Refrigerator)'
      },
      shortDesc: {
        en: 'Single & double door cooling issues, gas refill, compressor & thermostat repairs.',
        ta: 'சிங்கிள் & டபுள் டோர் கூலிங் பிரச்சனை, கேஸ் கசிவு, கம்ப்ரசர் மற்றும் டீஃப்ராஸ்ட் சரிசெய்தல்.'
      },
      features: [
        { en: 'Inverter & Non-Inverter models', ta: 'இன்வெர்ட்டர் & சாதாரண மாடல்கள்' },
        { en: 'Original compressor warranty', ta: 'அசல் கம்ப்ரசர் சர்வீஸ் உத்தரவாதம்' }
      ],
      badge: {
        en: 'At-Home Service Available',
        ta: 'வீட்டிலேயே சர்வீஸ்'
      },
      rating: { value: 4.9, count: '980+' },
      subServices: [
        {
          id: 'not-cooling',
          icon: '❄️',
          duration: { en: '45 Mins', ta: '45 நிமிடம்' },
          price: '₹299',
          originalPrice: '₹499',
          label: {
            en: 'Not Cooling Problem',
            ta: 'குளிர்ச்சி இல்லை'
          },
          desc: {
            en: 'Defrost timer, fan motor, cooling coil choke & thermostat calibration.',
            ta: 'டீஃப்ராஸ்ட் டைமர், ஃபேன் மோட்டார் மற்றும் தெர்மோஸ்டாட் பழுது.'
          }
        },
        {
          id: 'gas-charging',
          icon: '💨',
          duration: { en: '60 Mins', ta: '60 நிமிடம்' },
          price: '₹1,299',
          originalPrice: '₹1,699',
          label: {
            en: 'Gas Leak & Charging',
            ta: 'கேஸ் சார்ஜிங்'
          },
          desc: {
            en: '100% genuine R134a/R600a charging with copper dryer filter renewal.',
            ta: 'அசல் R134a/R600a கேஸ் சார்ஜிங் மற்றும் டிரையர் ஃபில்டர் மாற்றம்.'
          }
        },
        {
          id: 'compressor-relay',
          icon: '⚙️',
          duration: { en: 'Diagnostic', ta: 'பரிசோதனை' },
          price: '₹399',
          originalPrice: '₹599',
          label: {
            en: 'Compressor & Noise',
            ta: 'கம்ப்ரசர் / சத்தம்'
          },
          desc: {
            en: 'Overload protector, starter relay & inverter drive board inspection.',
            ta: 'கம்ப்ரசர் ரிலே, ஓவர்லோடு சுவிட்ச் மற்றும் அதீத சத்தம் சரிசெய்தல்.'
          }
        },
        {
          id: 'inverter-defrost',
          icon: '🚪',
          duration: { en: '40 Mins', ta: '40 நிமிடம்' },
          price: '₹449',
          originalPrice: '₹649',
          label: {
            en: 'Door Gasket & Defrost',
            ta: 'கதவு சீல் & டீஃப்ராஸ்ட்'
          },
          desc: {
            en: 'Magnetic door rubber replacement and drain hole ice block cleaning.',
            ta: 'காந்த கதவு சீல் மாற்றுதல் மற்றும் ஐஸ் கட்டி அடைப்பு நீக்கம்.'
          }
        }
      ],
      slides: [
        {
          image: 'images/fridge-slide-1.svg',
          headline: {
            en: 'Single & Double Door Cooling Restoration',
            ta: 'பிரிட்ஜ் கூலிங் பிரச்சனைக்கு நேரடி தீர்வு'
          },
          priceLine: { en: 'Starts at ₹299 (Save ₹200)', ta: 'விலை: ₹299 முதல்' },
          perks: [
            { en: 'Freezer Chilling Guaranteed', ta: 'உடனடி ஐஸ் உருவாக்கம் உறுதி' },
            { en: 'Doorstep Technician in Sellur', ta: 'செல்லூரில் விரைவான வீட்டு வருகை' },
            { en: 'Genuine Thermostat Replacement', ta: 'அசல் தெர்மோஸ்டாட் பாகங்கள்' },
            { en: '30-Day Service Assurance', ta: '30 நாள் சர்வீஸ் உத்தரவாதம்' }
          ],
          spotlightTag: { en: 'Instant Cooling Recovery', ta: 'துரித குளிர்ச்சி தீர்வு' }
        },
        {
          image: 'images/fridge-slide-2.svg',
          headline: {
            en: '100% Original R134a & R600a Gas Refill',
            ta: 'அசல் தரமான பிரிட்ஜ் கேஸ் சார்ஜிங்'
          },
          priceLine: { en: 'Package: ₹1,299 (Save ₹400)', ta: 'விலை: ₹1,299 (சேமிப்பு ₹400)' },
          perks: [
            { en: 'Nitrogen Leak Detection Test', ta: 'நைட்ரஜன் பிரஷர் சோதனை' },
            { en: 'Brand Matched Pure Refrigerant', ta: 'பிராண்ட் ஏற்ற 100% தூய கேஸ்' },
            { en: 'New Copper Filter Dryer', ta: 'புதிய காப்பர் ஃபில்டர் மாற்றம்' },
            { en: 'Long-Lasting Cooling Cycle', ta: 'நீண்ட காலம் உழைக்கும் கூலிங்' }
          ],
          spotlightTag: { en: 'Safe Refrigerant Recharging', ta: 'பாதுகாப்பான கேஸ் நிரப்புதல்' }
        },
        {
          image: 'images/fridge-slide-3.svg',
          headline: {
            en: 'Compressor Relay & Start Capacitor Service',
            ta: 'கம்ப்ரசர் ரிலே மற்றும் ஸ்டார்ட்டர் சர்வீஸ்'
          },
          priceLine: { en: 'Diagnosis: ₹399', ta: 'ஆய்வு: ₹399' },
          perks: [
            { en: 'Overload Thermal Cutout Check', ta: 'ஓவர்லோடு பாதுகாப்பு சுவிட்ச் ஆய்வு' },
            { en: 'Inverter Circuit Drive Test', ta: 'இன்வெர்ட்டர் சர்க்யூட் போர்டு ஆய்வு' },
            { en: 'Low-Noise Vibration Arrest', ta: 'சத்தமற்ற சீரான இயக்கம்' },
            { en: 'Honest Upfront Price', ta: 'வெளிப்படையான செலவு விபரம்' }
          ],
          spotlightTag: { en: 'Reliable Compressor Fix', ta: 'கம்ப்ரசர் பழுது நீக்கம்' }
        },
        {
          image: 'images/fridge-slide-4.svg',
          headline: {
            en: 'Magnetic Door Gasket & Defrost Drain Solution',
            ta: 'கதவு காந்த சீல் & தண்ணீர் கசிவு தீர்வு'
          },
          priceLine: { en: 'Starts at ₹449', ta: 'விலை: ₹449 முதல்' },
          perks: [
            { en: 'Airtight Magnetic Rubber Seal', ta: 'காற்று புகாத காந்த ரப்பர் சீல்' },
            { en: 'Defrost Heater & Bimetal Sensor', ta: 'டீஃப்ராஸ்ட் ஹீட்டர் சென்சார்' },
            { en: 'No Water Spilling on Kitchen Floor', ta: 'சமையலறையில் தண்ணீர் கசியாது' },
            { en: 'Electricity Consumption Drop', ta: 'மின்சார விரயம் முற்றிலும் தடுப்பு' }
          ],
          spotlightTag: { en: '100% Airtight Guarantee', ta: 'ஏர்டைட் கதவு சீல் உறுதி' }
        }
      ],
      process: [
        {
          title: { en: 'Kitchen Doorstep Diagnosis', ta: 'வீட்டிலேயே ஆய்வு செய்தல்' },
          text: {
            en: 'Technician examines compressor ampere draw, condenser coil temperature & thermostat in your kitchen.',
            ta: 'உங்கள் சமையலறையிலேயே கம்ப்ரசர், ஃபேன் மோட்டார் மற்றும் தெர்மோஸ்டாட் நிலையை ஆய்வு செய்கிறோம்.'
          },
          image: 'images/process-step-1.svg'
        },
        {
          title: { en: 'Transparent Part Estimate', ta: 'உதிரிபாகங்கள் விலை விபரம்' },
          text: {
            en: 'Clear itemized cost shared before touching parts. No extra charge without permission.',
            ta: 'வேலை தொடங்கும் முன்பே கட்டண விபரம் தெளிவாக கூறப்படும்; அனுமதி இன்றி கூடுதல் கட்டணம் இல்லை.'
          },
          image: 'images/process-step-2.svg'
        },
        {
          title: { en: 'On-Spot Repair & Spares', ta: 'நேரடி பழுது நீக்கம்' },
          text: {
            en: 'Most issues resolved in your home within 1 hour using genuine relays and copper filters.',
            ta: 'பெரும்பாலான பிரச்சனைகள் ஒரு மணி நேரத்தில் உங்கள் வீட்டிலேயே சரிசெய்யப்படும்.'
          },
          image: 'images/process-step-3.svg'
        },
        {
          title: { en: 'Chilling Test & Handover', ta: 'ஐஸ் உருவாக்கம் சோதனை' },
          text: {
            en: 'We confirm solid ice formation, door vacuum seal, and provide service warranty card.',
            ta: 'ஐஸ் உருவாவதை உறுதிசெய்து, கதவு சீலை சரிபார்த்து உத்தரவாத அட்டை தருகிறோம்.'
          },
          image: 'images/process-step-4.svg'
        }
      ],
      transparency: {
        included: [
          { en: 'Complete electrical, relay & sensor diagnostics', ta: 'முழுமையான மின்சாரம், ரிலே மற்றும் சென்சார் சோதனை' },
          { en: 'Thermostat calibration and cooling airflow tuning', ta: 'தெர்மோஸ்டாட் அளவு மற்றும் காற்று வழித்தட சீரமைப்பு' },
          { en: 'Condenser dust cleanout and drain tray flush', ta: 'கண்டென்சர் தூசி அகற்றுதல் மற்றும் டிரைன் சுத்தம்' },
          { en: 'Freezer temperature reading and door seal check', ta: 'பிரீசர் குளுமை அளவு மற்றும் கதவு சீல் பரிசோதனை' }
        ],
        excluded: [
          { en: 'Cost of replacement compressor (if burnt)', ta: 'கம்ப்ரசர் முற்றிலும் பழுதானால் புதிய கம்ப்ரசர் விலை' },
          { en: 'Gas refill if pipe puncture is found', ta: 'கேஸ் கசிவு இருந்தால் அதற்கான ரீஃபில்லிங் கட்டணம்' },
          { en: 'Plastic internal shelves or body panels', ta: 'உட்புற பிளாஸ்டிக் தட்டுகள் அல்லது வெளிப்புற பாடி பாகங்கள்' }
        ]
      },
      reviews: [
        {
          name: 'Ramanathan K.',
          loc: { en: 'Sellur, Madurai • Samsung Double Door', ta: 'செல்லூர், மதுரை • சாம்சங் டபுள் டோர்' },
          text: {
            en: '"Quickly arrived at Sellur and fixed my refrigerator cooling issue in under an hour. Fair and honest pricing."',
            ta: '"செல்லூரில் அழைத்த ஒரு மணி நேரத்திற்குள் வந்து பிரிட்ஜ் கூலிங் பிரச்சனையை சரிசெய்தார்கள். மிக நியாயமான கட்டணம்."'
          }
        },
        {
          name: 'Revathi S.',
          loc: { en: 'Simmakkal, Madurai • Whirlpool Single Door', ta: 'சிம்மக்கல், மதுரை • வேர்ல்பூல்' },
          text: {
            en: '"Gas charging was done neatly. Ice formed in the freezer within 30 minutes of repair. Highly recommended!"',
            ta: '"கேஸ் சார்ஜ் செய்த அரை மணி நேரத்திலேயே பிரீசரில் ஐஸ் கட்ட துவங்கிவிட்டது. மிக துரிதமான சர்வீஸ்!"'
          }
        },
        {
          name: 'Deepa M.',
          loc: { en: 'Koodal Nagar, Madurai • LG Inverter Frost Free', ta: 'கூடல் நகர், மதுரை • எல்ஜி இன்வெர்ட்டர்' },
          text: {
            en: '"Water leakage inside fridge was fixed with proper defrost drain cleaning. No mess in the kitchen. Very polite mechanic."',
            ta: '"பிரிட்ஜுக்குள் தண்ணீர் வடிந்த பிரச்சனையை மிக சுத்தமாக சரிசெய்தார்கள். சமையலறையில் எந்த அழுக்கும் இன்றி நேர்த்தியான வேலை."'
          }
        }
      ],
      transparency: {
        included: [
          { en: 'Complete electrical, relay & sensor diagnostics', ta: 'முழுமையான மின்சாரம், ரிலே மற்றும் சென்சார் சோதனை' },
          { en: 'Thermostat calibration and cooling airflow tuning', ta: 'தெர்மோஸ்டாட் அளவு மற்றும் காற்று வழித்தட சீரமைப்பு' },
          { en: 'Condenser dust cleanout and drain tray flush', ta: 'கண்டென்சர் தூசி அகற்றுதல் மற்றும் டிரைன் சுத்தம்' },
          { en: 'Freezer temperature reading and door seal check', ta: 'பிரீசர் குளுமை அளவு மற்றும் கதவு சீல் பரிசோதனை' }
        ],
        excluded: [
          { en: 'Cost of replacement compressor (if burnt)', ta: 'கம்ப்ரசர் முற்றிலும் பழுதானால் புதிய கம்ப்ரசர் விலை' },
          { en: 'Gas refill if pipe puncture is found', ta: 'கேஸ் கசிவு இருந்தால் அதற்கான ரீஃபில்லிங் கட்டணம்' },
          { en: 'Plastic internal shelves or body panels', ta: 'உட்புற பிளாஸ்டிக் தட்டுகள் அல்லது வெளிப்புற பாடி பாகங்கள்' }
        ]
      },
      reviews: [
        {
          name: 'Ramanathan K.',
          loc: { en: 'Sellur, Madurai • Samsung Double Door', ta: 'செல்லூர், மதுரை • சாம்சங் டபுள் டோர்' },
          text: {
            en: '"Quickly arrived at Sellur and fixed my refrigerator cooling issue in under an hour. Fair and honest pricing."',
            ta: '"செல்லூரில் அழைத்த ஒரு மணி நேரத்திற்குள் வந்து பிரிட்ஜ் கூலிங் பிரச்சனையை சரிசெய்தார்கள். மிக நியாயமான கட்டணம்."'
          }
        },
        {
          name: 'Revathi S.',
          loc: { en: 'Simmakkal, Madurai • Whirlpool Single Door', ta: 'சிம்மக்கல், மதுரை • வேர்ல்பூல்' },
          text: {
            en: '"Gas charging was done neatly. Ice formed in the freezer within 30 minutes of repair. Highly recommended!"',
            ta: '"கேஸ் சார்ஜ் செய்த அரை மணி நேரத்திலேயே பிரீசரில் ஐஸ் கட்ட துவங்கிவிட்டது. மிக துரிதமான சர்வீஸ்!"'
          }
        }
      ]
    },

    // --------------------------------------------------------------------------
    // 3. WASHING MACHINE
    // --------------------------------------------------------------------------
    {
      id: 'washing-machine',
      icon: '🧺',
      iconClass: 'fa-solid fa-soap',
      accentColor: '#4f46e5',
      accentBg: '#e0e7ff',
      priceTag: { en: 'From ₹249', ta: '₹249 முதல்' },
      title: {
        en: 'Washing Machine',
        ta: 'வாஷிங் மெஷின்'
      },
      shortDesc: {
        en: 'Fully automatic & top load, drum not rotating, water drain problems, excessive noise check.',
        ta: 'முழு ஆட்டோமேட்டிக், டாப் லோடு, ட்ரம் சுழலவில்லை, தண்ணீர் வெளியேறவில்லை, சத்தம் சரிசெய்தல்.'
      },
      features: [
        { en: 'Front Load & Top Load issues', ta: 'ஃபிரண்ட் லோடு & டாப் லோடு பழுது' },
        { en: 'Motor & motherboard repair', ta: 'மோட்டார் & மதர்போர்டு சர்வீஸ்' }
      ],
      badge: {
        en: 'Genuine Spares Guaranteed',
        ta: 'அசல் பாகங்கள்'
      },
      rating: { value: 4.8, count: '890+' },
      subServices: [
        {
          id: 'not-spinning-draining',
          icon: '🔄',
          duration: { en: '45 Mins', ta: '45 நிமிடம்' },
          price: '₹349',
          originalPrice: '₹599',
          label: {
            en: 'Spin & Drain Issue',
            ta: 'ட்ரம் சுழலவில்லை / டிரைன்'
          },
          desc: {
            en: 'Drum not rotating, drain pump clog, belt slip & lid lock switch repair.',
            ta: 'ட்ரம் சுழலாமை, டிரைன் பம்ப் அடைப்பு மற்றும் லிட் சுவிட்ச் பழுது.'
          }
        },
        {
          id: 'vibration-noise',
          icon: '🔊',
          duration: { en: '60 Mins', ta: '60 நிமிடம்' },
          price: '₹499',
          originalPrice: '₹799',
          label: {
            en: 'Vibration & Heavy Noise',
            ta: 'அதிர்வு & அதிக சத்தம்'
          },
          desc: {
            en: 'Shock absorber renewal, suspension rod calibration & drum bearing fix.',
            ta: 'சஸ்பென்ஷன் ராடு, ஷாக் அப்சார்பர் மாற்றம் மற்றும் சத்தம் சரிசெய்தல்.'
          }
        },
        {
          id: 'water-inlet-leak',
          icon: '💧',
          duration: { en: '45 Mins', ta: '45 நிமிடம்' },
          price: '₹299',
          originalPrice: '₹499',
          label: {
            en: 'Water Leak & Inlet Valve',
            ta: 'தண்ணீர் கசிவு & இன்லெட்'
          },
          desc: {
            en: 'Inlet solenoid valve replacement, pipe leakage & pressure sensor tune.',
            ta: 'தண்ணீர் உள்ளிழுக்கும் வால்வு பழுது மற்றும் தரை கசிவு சரிசெய்தல்.'
          }
        },
        {
          id: 'motor-pcb-fix',
          icon: '🔌',
          duration: { en: 'Diagnostic', ta: 'பரிசோதனை' },
          price: '₹599',
          originalPrice: '₹899',
          label: {
            en: 'Motor & Circuit PCB',
            ta: 'மோட்டார் & மதர்போர்டு'
          },
          desc: {
            en: 'Front load & top load microcontroller board micro-soldering.',
            ta: 'மெயின் மதர்போர்டு மற்றும் டிரைவ் மோட்டார் பழுது நீக்கம்.'
          }
        }
      ],
      slides: [
        {
          image: 'images/washing-slide-1.svg',
          headline: {
            en: 'Fast Drum Spin & Drain Pump Troubleshooting',
            ta: 'ட்ரம் சுழற்சி மற்றும் தண்ணீர் வெளியேற்றும் பம்ப் தீர்வு'
          },
          priceLine: { en: 'Starts at ₹349 (Save ₹250)', ta: 'விலை: ₹349 முதல்' },
          perks: [
            { en: 'Original Drain Pump Replacement', ta: 'அசல் டிரைன் பம்ப் பாகங்கள்' },
            { en: 'Doorstep Washing Machine Visit', ta: 'வீட்டிலேயே விரைவான நேரடி சர்வீஸ்' },
            { en: 'Full Wash & Rinse Cycle Test', ta: 'முழுமையான வாஷ் சுழற்சி சோதனை' },
            { en: '30-Day Service Guarantee', ta: '30 நாட்கள் சர்வீஸ் உத்தரவாதம்' }
          ],
          spotlightTag: { en: 'Instant Drum Recovery', ta: 'ட்ரம் சுழற்சி தீர்வு' }
        },
        {
          image: 'images/washing-slide-2.svg',
          headline: {
            en: 'Suspension Rod & Bearing Renewal to Stop Shaking',
            ta: 'அதிர்வு மற்றும் பலத்த சத்தத்தை நீக்கும் சஸ்பென்ஷன் சர்வீஸ்'
          },
          priceLine: { en: 'Package: ₹499 (Save ₹300)', ta: 'விலை: ₹499 (சேமிப்பு ₹300)' },
          perks: [
            { en: 'Heavy-Duty Suspension Rods', ta: 'உயர்தர சஸ்பென்ஷன் ஸ்பிரிங் ராடுகள்' },
            { en: 'Drum Balance Calibration', ta: 'ட்ரம் பேலன்ஸ் துல்லிய சீரமைப்பு' },
            { en: 'Zero Machine Shaking Guarantee', ta: 'மெஷின் ஆடாத அமைதியான இயக்கம்' },
            { en: 'Genuine Brand Spare Parts', ta: 'பிராண்ட் அசல் உதிரிபாகங்கள்' }
          ],
          spotlightTag: { en: 'Anti-Vibration Specialist', ta: 'அதிர்வு நீக்கும் நிபுணர்' }
        },
        {
          image: 'images/washing-slide-3.svg',
          headline: {
            en: 'Water Inlet Valve & Pressure Sensor Service',
            ta: 'தண்ணீர் உள்ளிழுக்கும் வால்வு & சென்சார் பழுது'
          },
          priceLine: { en: 'Starts at ₹299', ta: 'விலை: ₹299 முதல்' },
          perks: [
            { en: 'Instant Water Intake Restoration', ta: 'சீரான தண்ணீர் வரத்து உறுதி' },
            { en: 'Pipe Leakage & Clamp Sealing', ta: 'பைப் கசிவு முழுமையான சீலிங்' },
            { en: 'Water Level Error Fix (PE/1E)', ta: 'வாட்டர் லெவல் எர்ரர் தீர்வு' },
            { en: 'Upfront Transparent Rates', ta: 'முன்கூட்டியே தெளிவான விலை' }
          ],
          spotlightTag: { en: 'Leak-Free Plumbing Check', ta: 'கசிவற்ற பிளம்பிங் சோதனை' }
        },
        {
          image: 'images/washing-slide-4.svg',
          headline: {
            en: 'Front & Top Load Electronic Motherboard Care',
            ta: 'எலக்ட்ரானிக் மதர்போர்டு மற்றும் சர்க்யூட் பழுது'
          },
          priceLine: { en: 'Diagnosis: ₹599', ta: 'ஆய்வு: ₹599' },
          perks: [
            { en: 'Micro-Soldering IC Chip Repair', ta: 'ஐசி சிப் நுணுக்க சாலிடரிங்' },
            { en: 'Touch Panel & Display Repair', ta: 'டச் பேனல் மற்றும் டிஸ்ப்ளே பழுது' },
            { en: 'Motor Drive Inverter Fix', ta: 'மோட்டார் டிரைவர் சர்க்யூட் சீரமைப்பு' },
            { en: 'Affordable Alternative to New PCB', ta: 'புதிய போர்டு வாங்காமல் குறைந்த செலவு' }
          ],
          spotlightTag: { en: 'PCB Repair Specialists', ta: 'போர்டு பழுது நீக்கும் சிறப்பு குழு' }
        }
      ],
      process: [
        {
          title: { en: 'Diagnostic Test Cycle', ta: 'டெஸ்ட் சுழற்சி சோதனை' },
          text: {
            en: 'We run a test cycle to isolate motor capacitor, drain valve, and drum suspension defects.',
            ta: 'மெஷினை இயக்கி மோட்டார், டிரைன் வால்வு மற்றும் ட்ரம் அமைப்பை ஆய்வு செய்கிறோம்.'
          },
          image: 'images/process-step-1.svg'
        },
        {
          title: { en: 'Upfront Parts Quotation', ta: 'உதிரிபாகங்கள் விலை விபரம்' },
          text: {
            en: 'Clear itemized estimate for genuine parts (pump, belt, valve) before touching any screw.',
            ta: 'தேவையான அசல் உதிரிபாகங்கள் மற்றும் சர்வீஸ் கட்டணத்தை வெளிப்படையாகக் கூறுகிறோம்.'
          },
          image: 'images/process-step-2.svg'
        },
        {
          title: { en: 'Careful Doorstep Servicing', ta: 'பாதுகாப்பான பழுது நீக்கம்' },
          text: {
            en: 'Precision repair or parts replacement executed with dedicated tools ensuring no scratches to machine body.',
            ta: 'மெஷினுக்கு எவ்வித சேதமும் இன்றி பிரத்யேக கருவிகள் கொண்டு பழுது நீக்குகிறோம்.'
          },
          image: 'images/process-step-3.svg'
        },
        {
          title: { en: 'Spin & Drain Handover', ta: 'சுழற்சி சோதனை & ஒப்படைப்பு' },
          text: {
            en: 'We verify spin balance, water intake, high-speed spin, and dry cycle before handover.',
            ta: 'தண்ணீர் வரத்து, ட்ரம் சுழற்சி மற்றும் டிரையர் செயல்பாட்டை சரிபார்த்து தருகிறோம்.'
          },
          image: 'images/process-step-4.svg'
        }
      ],
      transparency: {
        included: [
          { en: 'Complete motor, drain pump & suspension diagnosis', ta: 'மோட்டார், பம்ப் மற்றும் சஸ்பென்ஷன் முழு ஆய்வு' },
          { en: 'Drum belt tension adjustment and lint filter clean', ta: 'பெல்ட் டென்ஷன் மற்றும் லிண்ட் பில்டர் சுத்தம்' },
          { en: 'Door switch and water level sensor calibration', ta: 'கதவு சுவிட்ச் மற்றும் வாட்டர் லெவல் சென்சார் சீரமைப்பு' },
          { en: 'Full test cycle run for spin & dry balance', ta: 'ட்ரம் பேலன்ஸ் மற்றும் டிரையர் செயல்பாடு சோதனை' }
        ],
        excluded: [
          { en: 'Replacement motor cost (if motor is burnt)', ta: 'மோட்டார் சுருள் எரிந்திருந்தால் புதிய மோட்டார் விலை' },
          { en: 'Replacement main PCB motherboard cost', ta: 'முழு மதர்போர்டு மாற்ற வேண்டியிருந்தால் அதன் விலை' },
          { en: 'Outer stainless steel drum replacement', ta: 'முழு துருப்பிடிக்காத ட்ரம் மாற்ற வேண்டிய நிலை' }
        ]
      },
      reviews: [
        {
          name: 'Suresh Babu',
          loc: { en: 'Anna Nagar, Madurai • IFB Front Load', ta: 'அண்ணா நகர், மதுரை • ஐஎஃப்பி ஃபிரண்ட் லோடு' },
          text: {
            en: '"Washing machine drum was making heavy noise. They replaced with genuine parts and gave warranty. Excellent service!"',
            ta: '"வாஷிங் மெஷின் ட்ரம் அதிக சத்தம் போட்டது. அசல் பாகங்களை மாற்றி உத்தரவாதமும் தந்தார்கள். சிறந்த சேவை!"'
          }
        },
        {
          name: 'Kavitha Rajan',
          loc: { en: 'K.K. Nagar, Madurai • LG Smart Inverter', ta: 'கே.கே. நகர், மதுரை • எல்ஜி ஸ்மார்ட் இன்வெர்ட்டர்' },
          text: {
            en: '"Spin cycle was not draining water. Technician diagnosed clogged pump in 10 minutes and cleared it at low cost. Very transparent."',
            ta: '"துணி துவைத்த பின் தண்ணீர் வெளியேறவில்லை. 10 நிமிடத்தில் மோட்டார் அடைப்பை நீக்கி குறைவான செலவில் முடித்துக் கொடுத்தார்கள்."'
          }
        },
        {
          name: 'Alagarsamy M.',
          loc: { en: 'Goripalayam, Madurai • Bosch 7kg Front Load', ta: 'கோரிப்பாளையம், மதுரை • பாஷ் 7kg' },
          text: {
            en: '"Error code E18 showed continuously. The technician arrived with original drain filter and fixed it immediately. Genuine and honest people."',
            ta: '"மெஷினில் E18 எரர் வந்தது. ஒரிஜினல் ஃபில்டர் மாற்றி உடனே சரிசெய்து கொடுத்தார்கள். நம்பகமான சர்வீஸ்."'
          }
        }
      ],
      transparency: {
        included: [
          { en: 'Complete motor, drain pump & suspension diagnosis', ta: 'மோட்டார், பம்ப் மற்றும் சஸ்பென்ஷன் முழு ஆய்வு' },
          { en: 'Drum belt tension adjustment and lint filter clean', ta: 'பெல்ட் டென்ஷன் மற்றும் லிண்ட் பில்டர் சுத்தம்' },
          { en: 'Door switch and water level sensor calibration', ta: 'கதவு சுவிட்ச் மற்றும் வாட்டர் லெவல் சென்சார் சீரமைப்பு' },
          { en: 'Full test cycle run for spin & dry balance', ta: 'ட்ரம் பேலன்ஸ் மற்றும் டிரையர் செயல்பாடு சோதனை' }
        ],
        excluded: [
          { en: 'Replacement motor cost (if motor is burnt)', ta: 'மோட்டார் சுருள் எரிந்திருந்தால் புதிய மோட்டார் விலை' },
          { en: 'Replacement main PCB motherboard cost', ta: 'முழு மதர்போர்டு மாற்ற வேண்டியிருந்தால் அதன் விலை' },
          { en: 'Outer stainless steel drum replacement', ta: 'முழு துருப்பிடிக்காத ட்ரம் மாற்ற வேண்டிய நிலை' }
        ]
      },
      reviews: [
        {
          name: 'Suresh Babu',
          loc: { en: 'Anna Nagar, Madurai • IFB Front Load', ta: 'அண்ணா நகர், மதுரை • ஐஎஃப்பி ஃபிரண்ட் லோடு' },
          text: {
            en: '"Washing machine drum was making heavy noise. They replaced with genuine parts and gave warranty. Excellent service!"',
            ta: '"வாஷிங் மெஷின் ட்ரம் அதிக சத்தம் போட்டது. அசல் பாகங்களை மாற்றி உத்தரவாதமும் தந்தார்கள். சிறந்த சேவை!"'
          }
        }
      ]
    },

    // --------------------------------------------------------------------------
    // 4. WATER HEATER / GEYSER
    // --------------------------------------------------------------------------
    {
      id: 'heater',
      icon: '🔥',
      iconClass: 'fa-solid fa-fire-burner',
      accentColor: '#d97706',
      accentBg: '#fef3c7',
      priceTag: { en: 'From ₹199', ta: '₹199 முதல்' },
      title: {
        en: 'Water Heater (Geyser)',
        ta: 'வாட்டர் ஹீட்டர் (கீசர்)'
      },
      shortDesc: {
        en: 'Heating coil replacement, thermostat repair, tank leakage fix, new geyser installation.',
        ta: 'ஹீட்டிங் காயில் மாற்றுதல், தெர்மோஸ்டாட் பழுது, டேங்க் கசிவு சரிசெய்தல் மற்றும் புதிய கீசர் பொருத்துதல்.'
      },
      features: [
        { en: 'Safe electrical wiring check', ta: 'பாதுகாப்பான வயரிங் & எர்த்திங் சோதனை' },
        { en: 'Instant heating element inspection', ta: 'விரைவான ஹீட்டிங் காயில் பரிசோதனை' }
      ],
      badge: {
        en: 'Quick 60-Min Arrival',
        ta: 'விரைவான தீர்வு'
      },
      rating: { value: 4.9, count: '650+' },
      subServices: [
        {
          id: 'no-heating-issue',
          icon: '♨️',
          duration: { en: '30 Mins', ta: '30 நிமிடம்' },
          price: '₹199',
          originalPrice: '₹349',
          label: {
            en: 'Water Not Heating',
            ta: 'தண்ணீர் சூடாகவில்லை'
          },
          desc: {
            en: 'Power supply wiring, indicator lights & thermal safety cutout check.',
            ta: 'மின் வயரிங், இண்டிகேட்டர் லைட் மற்றும் தெர்மல் கட்அவுட் சோதனை.'
          }
        },
        {
          id: 'heating-element',
          icon: '🪛',
          duration: { en: '45 Mins', ta: '45 நிமிடம்' },
          price: '₹399',
          originalPrice: '₹649',
          label: {
            en: 'Heating Element Replace',
            ta: 'ஹீட்டிங் காயில் மாற்றுதல்'
          },
          desc: {
            en: 'High-grade copper/incoloy element fitting with internal tank descaling.',
            ta: 'உயர்தர காயில் பொருத்துதல் மற்றும் உப்பு படிவம் நீக்குதல்.'
          }
        },
        {
          id: 'tank-valve-leak',
          icon: '🚰',
          duration: { en: '40 Mins', ta: '40 நிமிடம்' },
          price: '₹349',
          originalPrice: '₹549',
          label: {
            en: 'Tank Leak & Valve Fix',
            ta: 'டேங்க் கசிவு & வால்வு'
          },
          desc: {
            en: 'Multifunctional pressure relief valve & silicone gasket replacement.',
            ta: 'பிரஷர் ரிலீப் வால்வு மற்றும் சிலிகான் கேஸ்கட் மாற்றுதல்.'
          }
        },
        {
          id: 'geyser-installation',
          icon: '🛠️',
          duration: { en: 'Installation', ta: 'பொருத்துதல்' },
          price: '₹449',
          originalPrice: '₹699',
          label: {
            en: 'Geyser Wall Mounting',
            ta: 'சுவரில் கீசர் பொருத்துதல்'
          },
          desc: {
            en: 'Safe wall bracket fixing, inlet-outlet plumbing connection & earth test.',
            ta: 'சுவரில் பலமாக மாட்டுதல் மற்றும் பிளம்பிங் இணைப்பு அமைத்தல்.'
          }
        }
      ],
      slides: [
        {
          image: 'images/heater-slide-1.svg',
          headline: {
            en: 'Rapid Water Heating Restoration & Safety Check',
            ta: 'விரைவான தண்ணீர் சூடேற்றம் மற்றும் பாதுகாப்பு சோதனை'
          },
          priceLine: { en: 'Checkup: ₹199', ta: 'ஆய்வு: ₹199' },
          perks: [
            { en: 'Earthing & Shock Prevention Test', ta: 'ஷாப் அடிக்காத எர்த்திங் பரிசோதனை' },
            { en: 'Doorstep Service in 60 Mins', ta: '60 நிமிடங்களில் நேரடி வருகை' },
            { en: 'Auto Thermal Cutout Verification', ta: 'ஆட்டோ கட் சுவிட்ச் சரிபார்த்தல்' },
            { en: 'Safe for Bathroom Use', ta: 'குளியலறைக்கு 100% பாதுகாப்பானது' }
          ],
          spotlightTag: { en: 'Electrical Safety First', ta: 'பாதுகாப்பான மின் இணைப்பு' }
        },
        {
          image: 'images/heater-slide-2.svg',
          headline: {
            en: 'High-Grade Copper Element & Tank Descaling',
            ta: 'உயர்தர காயில் மற்றும் டேங்க் உப்பு நீக்கம்'
          },
          priceLine: { en: 'Package: ₹399 (Save ₹250)', ta: 'விலை: ₹399 (சேமிப்பு ₹250)' },
          perks: [
            { en: 'Corrosion-Resistant Incoloy Coil', ta: 'துருப்பிடிக்காத உயர்தர காயில்' },
            { en: 'Hard Water Salt Scale Flushing', ta: 'உப்பு படிவம் முழுமையாக அகற்றுதல்' },
            { en: 'Superfast Heating Performance', ta: 'விரைவாக தண்ணீர் சூடாகும் வேகம்' },
            { en: 'Genuine Parts Warranty', ta: 'அசல் பாகங்களுக்கான உத்தரவாதம்' }
          ],
          spotlightTag: { en: 'Original Spare Parts', ta: 'அசல் தரமான காயில்கள்' }
        },
        {
          image: 'images/heater-slide-3.svg',
          headline: {
            en: 'Pressure Relief Valve & Leak Arresting Service',
            ta: 'பிரஷர் வால்வு மற்றும் தண்ணீர் கசிவு தீர்வு'
          },
          priceLine: { en: 'Starts at ₹349', ta: 'விலை: ₹349 முதல்' },
          perks: [
            { en: 'High-Pressure Safety Valve Check', ta: 'அதிக பிரஷர் தடுக்கும் பாதுகாப்பு வால்வு' },
            { en: 'Silicone Gasket Sealing', ta: 'கசிவை தடுக்கும் சிலிகான் கேஸ்கட்' },
            { en: 'Plumbing Connection Tightening', ta: 'பிளம்பிங் இணைப்புகள் இறுக்குதல்' },
            { en: 'No Water Drop Leaks', ta: 'துளி நீரும் சொட்டாத தீர்வு' }
          ],
          spotlightTag: { en: 'Zero Leakage Guarantee', ta: 'கசிவற்ற முழு உத்தரவாதம்' }
        },
        {
          image: 'images/heater-slide-4.svg',
          headline: {
            en: 'Sturdy Wall Bracket Mounting & Plumbing Connection',
            ta: 'பாதுகாப்பான சுவரில் கீசர் பொருத்துதல் & பிளம்பிங்'
          },
          priceLine: { en: 'Installation: ₹449', ta: 'பொருத்துதல்: ₹449' },
          perks: [
            { en: 'Heavy-Duty Wall Anchor Bolts', ta: 'பலமான ஆங்கர் போல்ட் பொருத்துதல்' },
            { en: 'Inlet & Outlet Braided Hoses', ta: 'இன்லெட் & அவுட்லெட் பைப் இணைப்பு' },
            { en: 'Pre-Commissioning Test Run', ta: 'இயக்கி சூடாவதை உறுதிசெய்தல்' },
            { en: 'Neat & Clean Tile Fitting', ta: 'டைல்ஸ் உடையாமல் நேர்த்தியான வேலை' }
          ],
          spotlightTag: { en: 'Expert Wall Mounting', ta: 'நேர்த்தியான பொருத்துதல்' }
        }
      ],
      process: [
        {
          title: { en: 'Electrical Earthing Check', ta: 'எர்த்திங் & மின்சார சோதனை' },
          text: {
            en: 'We check earthing, heating coil resistance, safety valve, and internal scaling with proper tools.',
            ta: 'எர்த்திங், ஹீட்டிங் காயில் மற்றும் உப்பு படிமங்களை துல்லியமாக பரிசோதிக்கிறோம்.'
          },
          image: 'images/process-step-1.svg'
        },
        {
          title: { en: 'Upfront Safety Assessment', ta: 'பாதுகாப்பு & கட்டண விபரம்' },
          text: {
            en: 'We explain any safety risks, scale buildup, or wiring issues, and quote fair charges upfront.',
            ta: 'பாதுகாப்பு அம்சங்கள் மற்றும் பழுது நீக்கத் தேவையான கட்டணத்தை தெளிவாகக் கூறுகிறோம்.'
          },
          image: 'images/process-step-2.svg'
        },
        {
          title: { en: 'Descaling & Genuine Element Fitting', ta: 'காயில் மாற்றம் & உப்பு அகற்றுதல்' },
          text: {
            en: 'We descale hard water sediment and install high-efficiency corrosion-resistant heating elements.',
            ta: 'டேங்க் உப்பை அகற்றி, தரமான துருப்பிடிக்காத புதிய காயில் மற்றும் கேஸ்கட் பொருத்துகிறோம்.'
          },
          image: 'images/process-step-3.svg'
        },
        {
          title: { en: 'Hot Water & Auto-Cut Test', ta: 'சூடான தண்ணீர் & ஆட்டோ கட் சோதனை' },
          text: {
            en: 'We test rapid heating, verify auto-cutoff when desired temperature is reached, and check for leaks.',
            ta: 'தண்ணீர் சூடாவதையும், ஆட்டோ-கட் ஆவதையும் உறுதிசெய்து கசிவுகள் இல்லாமல் ஒப்படைக்கிறோம்.'
          },
          image: 'images/process-step-4.svg'
        }
      ],
      transparency: {
        included: [
          { en: 'Electrical continuity, earthing & resistance check', ta: 'மின்சார இணைப்பு, எர்த்திங் மற்றும் எதிர்ப்புத் திறன் சோதனை' },
          { en: 'Thermostat cutoff calibration at 65°C', ta: '65 டிகிரியில் தெர்மோஸ்டாட் ஆட்டோ-கட் ஆவதை உறுதிசெய்தல்' },
          { en: 'Safety valve opening and sediment flush', ta: 'பாதுகாப்பு வால்வு மற்றும் டேங்க் உப்பு படிவம் சுத்தம்' },
          { en: 'Hot water output flow test', ta: 'சூடான தண்ணீர் வரத்து மற்றும் வேகம் சரிபார்த்தல்' }
        ],
        excluded: [
          { en: 'Cost of replacement heating element coil', ta: 'புதிய ஹீட்டிங் காயிலுக்கான உதிரிபாக கட்டணம்' },
          { en: 'New plumbing flexible angle valves / hoses', ta: 'புதிய ஆங்கிள் வால்வு அல்லது பிளம்பிங் குழாய்கள் விலை' },
          { en: 'Rusted inner tank body welding', ta: 'துருப்பிடித்த உள் டேங்க் மெட்டல் வெல்டிங் வேலைகள்' }
        ]
      },
      reviews: [
        {
          name: 'Muruganandam P.',
          loc: { en: 'Villapuram, Madurai • AO Smith 15L', ta: 'வில்லாபுரம், மதுரை • ஏஓ ஸ்மித்' },
          text: {
            en: '"Geyser stopped heating suddenly in winter. Nuha Cool Fix arrived within 45 mins and changed the coil on the spot. Great service."',
            ta: '"குளிர்காலத்தில் கீசர் வேலை செய்யவில்லை. 45 நிமிடத்தில் வந்து புதிய காயில் மாற்றி சுடுதண்ணீர் வர வைத்துவிட்டார்கள்."'
          }
        },
        {
          name: 'Lakshmi Narayanan',
          loc: { en: 'Thallakulam, Madurai • Racold 25L', ta: 'தல்லாகுளம், மதுரை • ராகோல்ட் 25லி' },
          text: {
            en: '"Severe water dripping from bottom valve. They descaled the entire tank and replaced the safety valve. Water is hot within 10 minutes now."',
            ta: '"கீசரின் கீழே தண்ணீர் சொட்டிக்கொண்டே இருந்தது. டேங்க் முழுவதையும் கிளீன் செய்து புதிய வால்வு மாற்றி கொடுத்தார்கள்."'
          }
        },
        {
          name: 'Subashini T.',
          loc: { en: 'Bibikulam, Madurai • Bajaj 10L Instant', ta: 'பீபிகுளம், மதுரை • பஜாஜ் 10லி' },
          text: {
            en: '"Tripping power mains whenever geyser was switched on. The technician fixed the thermostat earthing issue safely. Very experienced technician."',
            ta: '"கீசர் போட்டால் மெயின் ட்ரிப் ஆனது. தெர்மோஸ்டாட் வயரிங் சரிசெய்து பாதுகாப்பாக இயங்க வைத்தார்கள்."'
          }
        }
      ],
      transparency: {
        included: [
          { en: 'Electrical continuity, earthing & resistance check', ta: 'மின்சார இணைப்பு, எர்த்திங் மற்றும் எதிர்ப்புத் திறன் சோதனை' },
          { en: 'Thermostat cutoff calibration at 65°C', ta: '65 டிகிரியில் தெர்மோஸ்டாட் ஆட்டோ-கட் ஆவதை உறுதிசெய்தல்' },
          { en: 'Safety valve opening and sediment flush', ta: 'பாதுகாப்பு வால்வு மற்றும் டேங்க் உப்பு படிவம் சுத்தம்' },
          { en: 'Hot water output flow test', ta: 'சூடான தண்ணீர் வரத்து மற்றும் வேகம் சரிபார்த்தல்' }
        ],
        excluded: [
          { en: 'Cost of replacement heating element coil', ta: 'புதிய ஹீட்டிங் காயிலுக்கான உதிரிபாக கட்டணம்' },
          { en: 'New plumbing flexible angle valves / hoses', ta: 'புதிய ஆங்கிள் வால்வு அல்லது பிளம்பிங் குழாய்கள் விலை' },
          { en: 'Rusted inner tank body welding', ta: 'துருப்பிடித்த உள் டேங்க் மெட்டல் வெல்டிங் வேலைகள்' }
        ]
      },
      reviews: [
        {
          name: 'Muruganandam P.',
          loc: { en: 'Villapuram, Madurai • AO Smith 15L', ta: 'வில்லாபுரம், மதுரை • ஏஓ ஸ்மித்' },
          text: {
            en: '"Geyser stopped heating suddenly in winter. Nuha Cool Fix arrived within 45 mins and changed the coil on the spot. Great service."',
            ta: '"குளிர்காலத்தில் கீசர் வேலை செய்யவில்லை. 45 நிமிடத்தில் வந்து புதிய காயில் மாற்றி சுடுதண்ணீர் வர வைத்துவிட்டார்கள்."'
          }
        }
      ]
    },

    // --------------------------------------------------------------------------
    // 5. TELEVISION (TV)
    // --------------------------------------------------------------------------
    {
      id: 'tv',
      icon: '📺',
      iconClass: 'fa-solid fa-tv',
      accentColor: '#e11d48',
      accentBg: '#ffe4e6',
      priceTag: { en: 'From ₹249', ta: '₹249 முதல்' },
      title: {
        en: 'LED & Smart TV',
        ta: 'எல்இடி & ஸ்மார்ட் டிவி'
      },
      shortDesc: {
        en: 'Sound working but no display, backlight issue, power board & motherboard repair, wall mounting.',
        ta: 'சத்தம் கேட்கிறது படம் தெரியவில்லை, எல்இடி பேக்லைட், பவர் போர்டு மற்றும் வால் மவுண்டிங்.'
      },
      features: [
        { en: '32" to 65" & 4K Smart TVs', ta: '32 முதல் 65 இன்ச் & 4K டிவிக்கள்' },
        { en: 'Backlight & panel board repair', ta: 'பேக்லைட் & போர்டு நுணுக்க பழுது' }
      ],
      badge: {
        en: 'Careful Handling Specialist',
        ta: 'கவனமான சர்வீஸ்'
      },
      rating: { value: 4.8, count: '740+' },
      subServices: [
        {
          id: 'sound-no-display',
          icon: '💡',
          duration: { en: 'Diagnostic', ta: 'பரிசோதனை' },
          price: '₹499',
          originalPrice: '₹799',
          label: {
            en: 'Sound OK, No Display',
            ta: 'சத்தம் வருது, படம் இல்லை'
          },
          desc: {
            en: 'Backlight inverter driver, T-Con board & LVDS ribbon cable check.',
            ta: 'டிவி கருப்பு திரை, டி-கான் போர்டு மற்றும் சிக்னல் கேபிள் ஆய்வு.'
          }
        },
        {
          id: 'backlight-strip',
          icon: '🔆',
          duration: { en: '60 Mins', ta: '60 நிமிடம்' },
          price: '₹799',
          originalPrice: '₹1,299',
          label: {
            en: 'LED Backlight Strip Fix',
            ta: 'எல்இடி பேக்லைட் மாற்றுதல்'
          },
          desc: {
            en: 'Brand-matched original LED strips with optical diffuser alignment.',
            ta: 'முழு செட் அசல் எல்இடி ஸ்ட்ரிப்கள் பொருத்தி பிரகாசமான படம் மீட்டல்.'
          }
        },
        {
          id: 'power-board-fix',
          icon: '⚡',
          duration: { en: '60 Mins', ta: '60 நிமிடம்' },
          price: '₹599',
          originalPrice: '₹899',
          label: {
            en: 'No Power / Board Repair',
            ta: 'பவர் ஆன் ஆகவில்லை / போர்டு'
          },
          desc: {
            en: 'Dead TV, red standby blink, capacitor replacement & motherboard soldering.',
            ta: 'பவர் சப்ளை போர்டு, ரெட்காட் பிளிங்க் மற்றும் மதர்போர்டு பழுது.'
          }
        },
        {
          id: 'tv-wall-mount',
          icon: '🧱',
          duration: { en: '30 Mins', ta: '30 நிமிடம்' },
          price: '₹349',
          originalPrice: '₹499',
          label: {
            en: 'Wall Mount Installation',
            ta: 'சுவரில் டிவி மாட்டுதல்'
          },
          desc: {
            en: 'Fixed or swivel heavy-duty bracket mounting with leveler alignment.',
            ta: 'சுவரில் பாதுகாப்பான டிவி வால் மவுண்ட் பொருத்துதல்.'
          }
        }
      ],
      slides: [
        {
          image: 'images/tv-slide-1.svg',
          headline: {
            en: 'Black Screen Audio-Only Repair & Display Diagnostics',
            ta: 'கருப்பு திரை மற்றும் சத்தம் மட்டும் வரும் பிரச்சனைக்கு தீர்வு'
          },
          priceLine: { en: 'Diagnosis: ₹499', ta: 'ஆய்வு: ₹499' },
          perks: [
            { en: 'Precision Panel Diagnosis', ta: 'டிஸ்ப்ளே பேனல் துல்லிய ஆய்வு' },
            { en: 'Dust-Free Careful Handling', ta: 'தூசியற்ற கவனமான சர்வீஸ்' },
            { en: 'Multi-Brand Brand Expertise', ta: 'சோனி, சாம்சங், எல்ஜி, எம்ஐ ஸ்பெஷலிஸ்ட்' },
            { en: 'Clear Estimate Before Work', ta: 'வேலைக்கு முன் தெளிவான விலை' }
          ],
          spotlightTag: { en: 'Careful Display Handling', ta: 'பாதுகாப்பான டிஸ்ப்ளே சர்வீஸ்' }
        },
        {
          image: 'images/tv-slide-2.svg',
          headline: {
            en: 'Full Set Original LED Backlight Replacement for Bright Picture',
            ta: 'முழு செட் அசல் எல்இடி பேக்லைட் மாற்றுதல்'
          },
          priceLine: { en: 'Starts at ₹799 (Save ₹500)', ta: 'விலை: ₹799 முதல்' },
          perks: [
            { en: 'High Brightness Uniform Lighting', ta: 'சீரான பிரகாசமான வண்ணங்கள்' },
            { en: 'Zero Blue-Tint Guarantee', ta: 'நீல நிற மங்கல் இல்லாத தெளிவான படம்' },
            { en: 'Long-Life LED Strips', ta: 'நீண்ட காலம் உழைக்கும் எல்இடி' },
            { en: '30-Day Picture Warranty', ta: '30 நாள் டிஸ்ப்ளே உத்தரவாதம்' }
          ],
          spotlightTag: { en: 'Original Backlight Kits', ta: 'அசல் எல்இடி கிட்' }
        },
        {
          image: 'images/tv-slide-3.svg',
          headline: {
            en: 'Motherboard & Power Supply Board Micro-Soldering',
            ta: 'மதர்போர்டு மற்றும் பவர் சப்ளை போர்டு துல்லிய பழுது நீக்கம்'
          },
          priceLine: { en: 'Package: ₹599 (Save ₹300)', ta: 'விலை: ₹599 (சேமிப்பு ₹300)' },
          perks: [
            { en: 'Standby Blinking Light Fix', ta: 'ரெட் லைட் பிளிங்க் பிரச்சனை தீர்வு' },
            { en: 'HDMI Port & Sound IC Repair', ta: 'எச்டிஎம்ஐ மற்றும் ஆடியோ ஐசி பழுது' },
            { en: 'Surge Protection Capacitor Renewal', ta: 'வோல்டேஜ் பாதுகாப்பு பாகங்கள் மாற்றம்' },
            { en: 'Affordable Board Recovery', ta: 'குறைந்த செலவில் போர்டு மீட்பு' }
          ],
          spotlightTag: { en: 'Motherboard Specialists', ta: 'மதர்போர்டு பழுது குழு' }
        },
        {
          image: 'images/tv-slide-4.svg',
          headline: {
            en: 'Safe Fixed or Tilt Wall Mount Installation on Any Wall',
            ta: 'அனைத்து வகை சுவர்களிலும் பாதுகாப்பான டிவி வால் மவுண்ட்'
          },
          priceLine: { en: 'Installation: ₹349', ta: 'பொருத்துதல்: ₹349' },
          perks: [
            { en: 'Heavy-Gauge Steel Brackets', ta: 'தடிமனான தரமான ஸ்டீல் பிராக்கெட்டுகள்' },
            { en: 'Spirit Leveler Horizontal Alignment', ta: 'சரியான மட்டத்தில் நேர்த்தியான பொருத்துதல்' },
            { en: 'Concealed Cable Routing Guidance', ta: 'ஒயர்கள் அசிங்கமாக தெரியாமல் சீரமைப்பு' },
            { en: 'Fits 32" to 75" LED/Smart TVs', ta: '32 முதல் 75 இன்ச் டிவிக்களுக்கு பொருத்தம்' }
          ],
          spotlightTag: { en: 'Precision Mounting', ta: 'துல்லியமான வால் மவுண்டிங்' }
        }
      ],
      process: [
        {
          title: { en: 'Screen & Power Signal Diagnostics', ta: 'ஸ்கிரீன் & பவர் சிக்னல் ஆய்வு' },
          text: {
            en: 'We test backlight voltage, motherboard signals, HDMI ports, and standby circuit without scratching the screen.',
            ta: 'டிவி திரை சேதமடையாமல் பவர் சப்ளை, பேக்லைட் மற்றும் மதர்போர்டு சிக்னல்களை சோதிக்கிறோம்.'
          },
          image: 'images/process-step-1.svg'
        },
        {
          title: { en: 'Upfront Component Estimate', ta: 'உதிரிபாகங்கள் விலை விபரம்' },
          text: {
            en: 'We provide an upfront cost breakdown for LED strips or circuit components before initiating work.',
            ta: 'பேக்லைட் அல்லது போர்டு பழுதுக்குத் தேவையான உத்தேச செலவை வெளிப்படையாக விளக்குகிறோம்.'
          },
          image: 'images/process-step-2.svg'
        },
        {
          title: { en: 'Dust-Free Careful Service', ta: 'தூசியற்ற கவனமான சர்வீஸ்' },
          text: {
            en: 'Careful disassembly of optical diffuser sheets and replacement with brand-matched LED strips.',
            ta: 'டிவி டிஸ்ப்ளே ஷீட்களை கவனமாக கையாண்டு புதிய எல்இடி ஸ்ட்ரிப்களை நேர்த்தியாக மாற்றுகிறோம்.'
          },
          image: 'images/process-step-3.svg'
        },
        {
          title: { en: 'Color, Sound & Port Testing', ta: 'நிறம், ஒலி & போர்ட் சோதனை' },
          text: {
            en: 'We calibrate brightness, test speakers, verify Wi-Fi / HDMI inputs, and provide service warranty.',
            ta: 'பிரகாசம், ஸ்பீக்கர் சத்தம் மற்றும் அனைத்து போர்ட்களையும் பரிசோதித்து உத்தரவாதம் அளிக்கிறோம்.'
          },
          image: 'images/process-step-4.svg'
        }
      ],
      transparency: {
        included: [
          { en: 'Complete panel backlight and power supply diagnosis', ta: 'பேனல் பேக்லைட் மற்றும் பவர் சப்ளை முழு ஆய்வு' },
          { en: 'HDMI, USB, speaker audio and Wi-Fi signal test', ta: 'எச்டிஎம்ஐ, ஸ்பீக்கர் மற்றும் வைஃபை சிக்னல் சோதனை' },
          { en: 'Standby circuit voltage and diode testing', ta: 'ஸ்டாண்ட்பை சர்க்யூட் வோல்டேஜ் பரிசோதனை' },
          { en: 'Color calibration and picture sharpness check', ta: 'வண்ண பிரகாசம் மற்றும் படத்தெளிவு சோதனை' }
        ],
        excluded: [
          { en: 'Replacement LED backlight kit price (parts cost)', ta: 'புதிய எல்இடி பேக்லைட் ஸ்ட்ரிப் பாகங்கள் விலை' },
          { en: 'Cracked or physically broken glass LCD display panel', ta: 'உடைந்த அல்லது கீறல் விழுந்த கண்ணாடி டிஸ்ப்ளே கிளாஸ்' },
          { en: 'New replacement remote controls', ta: 'புதிய டிவி ரிமோட் கண்ட்ரோல் விலை' }
        ]
      },
      reviews: [
        {
          name: 'Nagarajan V.',
          loc: { en: 'Goripalayam, Madurai • Mi 43" 4K', ta: 'கோரிப்பாளையம், மதுரை • எம்ஐ 43 இன்ச்' },
          text: {
            en: '"Sound was working but screen was totally dark. Nuha technician replaced the backlight strips at my home and restored picture like new. Very skilled!"',
            ta: '"சத்தம் மட்டும் வந்தது, படம் தெரியவில்லை. வீட்டிற்கே வந்து எல்இடி ஸ்ட்ரிப் மாற்றி புதிய டிவி போல ஆக்கிவிட்டார். அருமையான வேலை!"'
          }
        },
        {
          name: 'Karthikeyan S.',
          loc: { en: 'Koodal Nagar, Madurai • Samsung 50" Crystal 4K', ta: 'கூடல் நகர், மதுரை • சாம்சங் 50 இன்ச்' },
          text: {
            en: '"Wall mount installation was done with laser level precision. Hidden cable routing looks super clean in our living room."',
            ta: '"சுவரில் மிக துல்லியமாக மவுண்ட் செய்து கொடுத்தார்கள். வயர்கள் எதுவும் வெளியே தெரியாத வண்ணம் நேர்த்தியாக அமைத்தார்கள்."'
          }
        },
        {
          name: 'Meenakshi Sundaram',
          loc: { en: 'Simmakkal, Madurai • Sony Bravia 43"', ta: 'சிம்மக்கல், மதுரை • சோனி பிராவியா 43 இன்ச்' },
          text: {
            en: '"TV was stuck in continuous boot loop logo. They serviced the motherboard and updated software at 1/3rd of brand service center quotation."',
            ta: '"சோனி டிவி லோகோவிலேயே நின்றுவிட்டது. மதர்போர்டு ரிப்பேர் செய்து குறைவான செலவில் சரிசெய்தார்கள்."'
          }
        }
      ],
      transparency: {
        included: [
          { en: 'Complete panel backlight and power supply diagnosis', ta: 'பேனல் பேக்லைட் மற்றும் பவர் சப்ளை முழு ஆய்வு' },
          { en: 'HDMI, USB, speaker audio and Wi-Fi signal test', ta: 'எச்டிஎம்ஐ, ஸ்பீக்கர் மற்றும் வைஃபை சிக்னல் சோதனை' },
          { en: 'Standby circuit voltage and diode testing', ta: 'ஸ்டாண்ட்பை சர்க்யூட் வோல்டேஜ் பரிசோதனை' },
          { en: 'Color calibration and picture sharpness check', ta: 'வண்ண பிரகாசம் மற்றும் படத்தெளிவு சோதனை' }
        ],
        excluded: [
          { en: 'Replacement LED backlight kit price (parts cost)', ta: 'புதிய எல்இடி பேக்லைட் ஸ்ட்ரிப் பாகங்கள் விலை' },
          { en: 'Cracked or physically broken glass LCD display panel', ta: 'உடைந்த அல்லது கீறல் விழுந்த கண்ணாடி டிஸ்ப்ளே கிளாஸ்' },
          { en: 'New replacement remote controls', ta: 'புதிய டிவி ரிமோட் கண்ட்ரோல் விலை' }
        ]
      },
      reviews: [
        {
          name: 'Nagarajan V.',
          loc: { en: 'Goripalayam, Madurai • Mi 43" 4K', ta: 'கோரிப்பாளையம், மதுரை • எம்ஐ 43 இன்ச்' },
          text: {
            en: '"Sound was working but screen was totally dark. Nuha technician replaced the backlight strips at my home and restored picture like new. Very skilled!"',
            ta: '"சத்தம் மட்டும் வந்தது, படம் தெரியவில்லை. வீட்டிற்கே வந்து எல்இடி ஸ்ட்ரிப் மாற்றி புதிய டிவி போல ஆக்கிவிட்டார். அருமையான வேலை!"'
          }
        }
      ]
    }
  ]
};
