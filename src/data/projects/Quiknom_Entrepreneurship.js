/** @type {import('./types').Project} */
const project = {
  summary: "A food-discovery app concept. Led the bootcamp team awarded Best Pitch.",
  highlights: ["Led the team developing the app concept and presentation.","Proposed a questionnaire-to-food-selection user journey."],
  leadership: true,
  id: 'quiknom', category: 'ENTREPRENEURSHIP / CONCEPT PROTOTYPE', title: 'QUIKNOM',
  description: 'A food-discovery app concept developed for RP’s Entrepreneurship Bootcamp, where our team received the Best Pitch award.',
  role: 'Team Lead', team: 'Republic Polytechnic Entrepreneurship Bootcamp team', status: 'Concept prototype', award: 'Best Pitch', period: '2022',
  technologies: 'App Mockups · User Flow Design · Entrepreneurship · Pitch Communication',
  cover: 'Our RP Entrepreneurship Bootcamp mini-pitch session and recognition.' ,
  coverImage: '/images/works/quiknom/quiknom_cover.jpg',
  coverAlt: 'Photo collage from the RP Entrepreneurship Bootcamp mini-pitch session and award presentation.',
  overview: 'QUIKNOM is a team-developed app concept exploring how to help people decide what to eat and find a restaurant. The proposed journey lets users browse outlets or answer a questionnaire about location, cuisine, dietary restrictions, appetite, and preferences. Mockups then show suggested food, restaurant selection, menu browsing, and booking or delivery-request forms. I led the group as we developed the concept during Republic Polytechnic’s Entrepreneurship Bootcamp in 2022, where our team was recognised with the Best Pitch award.',
  contributions: [
    'Team leadership — Led the group developing QUIKNOM for the RP Entrepreneurship Bootcamp, working together on the concept and its presentation.',
    'Supporting business exploration — Additional project notes explore young adults’ ready-made meal concerns, customer needs, competing food options, and possible social media content. These notes provide wider food-business context alongside the app concept.',
    'Pitch outcome — Our team received the Best Pitch award at the RP Entrepreneurship Bootcamp in 2022.',
  ],
  spotlight: {
    title: 'Developing and communicating a food-service concept',
    approach: 'Supporting notes explore affordability, convenience, taste, dietary options, and customisation through a value proposition canvas, competitor examples, and Instagram/TikTok content ideas. These are exploratory notes rather than validated customer findings or a delivered marketing campaign. Separately, the QUIKNOM mockups make the app concept concrete: users can browse food outlets or complete a questionnaire, then move from a suggested meal to restaurant details, menus, and a booking form. This sequence gives the team a way to communicate the proposed experience during a pitch. The supplied material documents screens and design intent; it does not demonstrate an implemented recommendation service or working reservations.',
    takeaway: 'Leading the group gave me experience developing an entrepreneurial idea collaboratively and communicating it to an audience. The supporting business exploration also helped me consider customer needs and how a food concept could be presented. Receiving Best Pitch was a memorable early milestone in my interest in product development and entrepreneurship.',
  },
  media: [
    { kind: 'Image', title: 'From preferences to food selection', images: [
      { src: '/images/works/quiknom/questionaire.png', alt: 'QUIKNOM questionnaire concept asking about location, cuisine, dietary restrictions, and appetite.', label: '1. Food questionnaire' },
      { src: '/images/works/quiknom/suggestedfood.png', alt: 'QUIKNOM suggested-food concept showing sushi, restaurant options, and menu images.', label: '2. Food selection' },
    ], brief: 'Team concept mockups showing the proposed journey from food preferences to a suggested meal and restaurant selection. Restaurant and menu imagery belongs to the respective brands.' },
    { kind: 'Image', title: 'Restaurant and booking concept', brief: 'Use the restaurant selection, menu, and booking mockups from pages 6–8. Explain the intended next steps without implying that booking, payments, or delivery were implemented. Credit third-party restaurant/menu imagery.' },
    { kind: 'Image', title: 'Supporting business exploration', brief: 'Create a readable summary of the ready-made meal notes: customer needs, value proposition canvas, competitor categories, and proposed social content. Label it supporting food-business exploration, distinct from the QUIKNOM screen flow. Present customer concerns as hypotheses and content as proposals.' },
    { kind: 'Image', title: 'Best Pitch recognition', src: '/images/works/quiknom/quiknom_cover.jpg', alt: 'Bootcamp mini-pitch session and award photo collage.', brief: 'Our team received Best Pitch at the RP Entrepreneurship Bootcamp in 2022. I led the group.' },
  ],
};

export default project;
