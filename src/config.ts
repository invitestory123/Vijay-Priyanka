/**
 * ─────────────────────────────────────────────────────────────
 *  WEDDING INVITATION · MASTER CONFIGURATION
 * ─────────────────────────────────────────────────────────────
 *  Vijay & Priyanka — Holy Matrimony & Wedding Celebration
 *  Wednesday, 9th December 2026 · 5:15 PM
 *  Venue: S.V. Function Hall, J.N. Road, Rajahmundry
 */

export interface StoryMilestone {
  title: string
  date: string
  text: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface FamilySide {
  label: string
  title: string
  photo: string
  scripture?: {
    verse: string
    ref: string
  }
  greeting?: string
  grandparents?: string
  parents: string
  honoredMembers?: string
  invitedBy: string[]
  members: { name: string; relation: string }[]
}

export interface Officiant {
  name: string
  role?: string
  degrees?: string
  church: string
}

export interface InvitationConfig {
  couple: {
    bride: string
    groom: string
    brideShort: string
    groomShort: string
  }
  weddingDate: string
  displayDate: string
  tagline: string
  scriptures: {
    header: string
    headerRef: string
    proverb: string
    proverbRef: string
    greeting: string
    journey: string
  }
  hero: {
    childhoodBride: string
    childhoodGroom: string
    portraitBride: string
    portraitGroom: string
    bodyBride: string
    bodyGroom: string
  }
  story: StoryMilestone[]
  details: {
    ceremony: { title: string; venue: string; time: string; note: string }
    reception: { title: string; venue: string; time: string; note: string }
    officiants: {
      presiding: Officiant
      clergy: Officiant[]
    }
    dressCode: string
    blessingNote: string
    nearAndDear: string
  }
  venue: {
    name: string
    address: string
    mapQuery: string
    mapUrl: string
  }
  gallery: GalleryImage[]
  families: { bride: FamilySide; groom: FamilySide }
  calendar: {
    title: string
    description: string
    durationHours: number
  }
  music: {
    src: string
    label: string
  }
  theme: {
    gold: string
    background: string
    ink: string
    texture: "paper" | "plain"
  }
  fonts: {
    serif: string
    script: string
    sans: string
  }
  footer: {
    thanks: string
    blessing: string
    copyright: string
  }
  sections?: {
    story?: boolean
    countdown?: boolean
    events?: boolean
    venue?: boolean
    gallery?: boolean
    family?: boolean
  }
}

const config: InvitationConfig = {
  couple: {
    bride: "Priyanka",
    groom: "Vijay",
    brideShort: "Priyanka",
    groomShort: "Vijay",
  },
  weddingDate: "2026-12-09T17:15:00+05:30",
  displayDate: "Wednesday, December 9th, 2026 · 5:15 PM",
  tagline: "“This is the LORD’s doing; It is marvelous in our eyes”\nPsalm 118:23",
  scriptures: {
    header: "“This is the LORD’s doing; It is marvelous in our eyes”",
    headerRef: "Psalm 118:23",
    proverb: "“He who finds a wife finds what is good and receives favour from the LORD”",
    proverbRef: "Proverbs 18:22",
    greeting: "Greetings to you in the name of our LORD and Saviour JESUS CHRIST",
    journey: "As they begin their beautiful journey of love, faith and togetherness",
  },
  hero: {
    childhoodBride: "/images/childhood-bride.jpg",
    childhoodGroom: "/images/childhood-groom.jpg",
    portraitBride: "/images/portrait-bride.jpg",
    portraitGroom: "/images/portrait-groom.jpg",
    bodyBride: "/images/body-bride.png",
    bodyGroom: "/images/body-groom.png",
  },
  story: [
    {
      title: "God’s Divine Plan",
      date: "The Beginning",
      text: "“He who finds a wife finds what is good and receives favour from the LORD.” Guided by faith and the grace of Jesus Christ, our paths converged in perfect harmony.",
    },
    {
      title: "Growing in Love & Faith",
      date: "Shared Journey",
      text: "With shared prayers, cherished laughter, and the blessing of our families, our bond blossomed into a steadfast journey of love, faith, and companionship.",
    },
    {
      title: "United with Family Blessings",
      date: "The Engagement",
      text: "Surrounded by our loved ones and elders, with rings exchanged and heartfelt prayers, we committed our lives to each other under the Lord's sheltering wings.",
    },
    {
      title: "The Holy Matrimony",
      date: "December 9th, 2026",
      text: "“This is the LORD’s doing; It is marvelous in our eyes.” Join us as we exchange sacred vows before God, family, and cherished friends at S.V. Function Hall, Rajahmundry.",
    },
  ],
  details: {
    ceremony: {
      title: "The Marriage Ceremony",
      venue: "S.V. Function Hall, J.N. Road, Rajahmundry",
      time: "5:15 PM",
      note: "Officiated by Rev. K. Rajesh Kumar Garu, Parish Pastor, Epiphania Lutheran Church",
    },
    reception: {
      title: "Wedding Dinner & Blessings",
      venue: "S.V. Function Hall Banquet",
      time: "DINNER FOLLOWS",
      note: "Your presence and blessings will make our celebration truly special",
    },
    officiants: {
      presiding: {
        name: "Rev. K. Rajesh Kumar Garu",
        degrees: "M.A, B.Ed, DMS, BD",
        role: "Officiating Pastor",
        church: "Parish Pastor, Epiphania Lutheran Church, Rajahmundry",
      },
      clergy: [
        {
          name: "Rev. P. Martin Luther Garu",
          church: "Lutheran Church, Rakshnalayam, Suviseshapuram, Rajahmundry",
        },
        {
          name: "Rev. J. Nelson Francis Wesley Garu",
          church: "St. Peter’s Lutheran Church, Rajahmundry",
        },
        {
          name: "Rev. Ravi Babu Inti Garu",
          church: "St. Peter’s Lutheran Church, Gunupudi, Bhimavaram",
        },
        {
          name: "Mr. R.K. Reddy Garu",
          role: "Honorary Promotional Co-Ordinator",
          church: "Mission to the Blind, Kakinada",
        },
      ],
    },
    dressCode: "Traditional & Festive Formal Attire",
    blessingNote: "Your presence and blessings will make our celebration truly special.",
    nearAndDear: "With love and warm regards from Near and Dear",
  },
  venue: {
    name: "S.V. Function Hall",
    address: "J.N. Road, Rajahmundry, Andhra Pradesh",
    mapQuery: "S.V. Function Hall, J.N. Road, Rajahmundry",
    mapUrl: "https://maps.app.goo.gl/mUJ493UDR34B496H9?g_st=iwb",
  },
  gallery: [
    { src: "/images/gallery-1.jpg", alt: "Vijay & Priyanka · A Promise in the Sky" },
    { src: "/images/gallery-2.jpg", alt: "Twirling Into Forever · Joyful Moments" },
    { src: "/images/gallery-3.jpg", alt: "Together in Grace · Priya & Vijay" },
    { src: "/images/gallery-4.jpg", alt: "Hand in Hand · Walking Towards Our New Chapter" },
    { src: "/images/gallery-5.jpg", alt: "Sunset Whispers by the Water" },
    { src: "/images/gallery-6.jpg", alt: "United on Stage · Celebrating Togetherness" },
    { src: "/images/gallery-7.jpg", alt: "Blessed Rings · Symbols of an Eternal Covenant" },
    { src: "/images/gallery-8.jpg", alt: "Sweet Beginnings · With Pastoral Blessings" },
  ],
  families: {
    groom: {
      label: "Groom's Family",
      title: "Miriyala Family",
      photo: "/images/family-groom.jpg",
      scripture: {
        verse: "“This is the LORD’s doing; It is marvelous in our eyes”",
        ref: "Psalm 118:23",
      },
      grandparents: "Mr. Tirrey Bhaskara Rao (late), Retd. Audit Officer & Mrs. Santha Kumari, Retd. H.M.",
      parents: "Mr. Miriyala Vara Prasad & Mrs. Bhagya Lakshmi",
      invitedBy: [
        "Mr. Miriyala Vara Prasad & Mrs. Bhagya Lakshmi",
        "Mr. Kusume Vara Prasad & Mrs. Prathyusha",
        "Near and Dear",
      ],
      members: [
        { name: "Mr. Tirrey Bhaskara Rao (late)", relation: "Grandfather · Retd. Audit Officer" },
        { name: "Mrs. Santha Kumari", relation: "Grandmother · Retd. H.M." },
        { name: "Mr. Miriyala Vara Prasad (M.V. Prasad)", relation: "Father of the Groom" },
        { name: "Mrs. Bhagya Lakshmi", relation: "Mother of the Groom" },
        { name: "Mr. Kusume Vara Prasad & Mrs. Prathyusha", relation: "Lovingly Inviting Family" },
      ],
    },
    bride: {
      label: "Bride's Family",
      title: "Yarajarla Family",
      photo: "/images/family-bride.jpg",
      greeting: "Greetings to you in the name of our LORD and Saviour JESUS CHRIST",
      scripture: {
        verse: "“He who finds a wife finds what is good and receives favour from the LORD”",
        ref: "Proverbs 18:22",
      },
      parents: "Mr. Yarajarla Babu Rao & Mrs. Santhi, Rajahmundry",
      invitedBy: [
        "Mr. Y. Babu Rao & Mrs. Y. Santhi",
        "Near and Dear",
      ],
      members: [
        { name: "Mr. Y. Babu Rao", relation: "Father of the Bride · Rajahmundry" },
        { name: "Mrs. Y. Santhi", relation: "Mother of the Bride · Rajahmundry" },
        { name: "Near and Dear", relation: "Warm Regards & Blessings" },
      ],
    },
  },
  calendar: {
    title: "Vijay & Priyanka — Wedding Celebration",
    description: "Wedding celebration of Vijay & Priyanka at S.V. Function Hall, J.N. Road, Rajahmundry. Marriage ceremony at 5:15 PM, dinner follows.",
    durationHours: 4,
  },
  music: {
    src: "/invitation-audio.mp3",
    label: "Wedding Music",
  },
  theme: {
    gold: "#b98a4e",
    background: "#faf5ec",
    ink: "#46392c",
    texture: "paper",
  },
  fonts: {
    serif: "'Cormorant Garamond', Georgia, serif",
    script: "'Great Vibes', cursive",
    sans: "'Jost', 'Helvetica Neue', sans-serif",
  },
  footer: {
    thanks: "Your Presence & Blessings are our Greatest Gift",
    blessing: "With love and warm regards from Near and Dear",
    copyright: "Vijay & Priyanka · Soli Deo Gloria · Rajahmundry",
  },
  sections: {
    story: true,
    countdown: true,
    events: true,
    venue: true,
    gallery: true,
    family: true,
  },
}

export default config
