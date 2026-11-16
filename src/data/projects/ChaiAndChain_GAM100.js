/** @type {import('./types').Project} */
const project = {
  leadership: true,
  id: 'gam100', category: 'GAM100 / PROJECT LEAD & GAMEPLAY', title: 'Chai & Chain',
  description: 'A two-player cooperative cooking game where a connecting chain and spoiling ingredients turn every order into a teamwork challenge.',
  role: 'Project Lead', team: 'Matcha-tea', status: 'Completed',
  technologies: 'C · DigiPen C Processing',
  cover: 'Two players connected by a chain, with ingredient kiosks and recipe stations visible.',
  coverImage: '/images/works/gam100/gameplay-cover.png',
  coverAlt: 'Chai & Chain gameplay with two players linked by a chain, ingredient kiosks, and two recipe stations.',
  overview: 'Players work together to fulfil customer orders by throwing ingredients between two sides of a kitchen and delivering them to recipe stations. Ingredients must be collected within 10 seconds before they spoil, and spoiled items must be discarded. A chain limits the distance between the players, making communication and coordinated movement central to completing each level.',
  contributions: [
    'Recipe randomisation — Contributed to the recipe randomisation system to introduce variation in the recipes presented during gameplay.',
    'Ingredient list display — Worked on displaying ingredient names alongside their images to help players identify the ingredients required.',
    'Player movement — Contributed to the movement system that lets players navigate the kitchen.',
    'Project leadership and trailer — Led team discussions, coordinated planning, facilitated brainstorming, and created the promotional trailer.',
  ],
  spotlight: {
    title: 'Supporting a coordinated cooking experience',
    approach: 'Players needed to identify ingredients and coordinate their movement while managing the chain and spoilage timer. My programming contributions supported recipe variation, ingredient identification, and player movement. As project lead, I also helped the team develop ideas and coordinate plans throughout production.',
    takeaway: 'This project introduced me to collaborative C game development, gameplay and UI implementation, and balancing programming contributions with project leadership.',
  },
  media: [
    { kind: 'Video', title: 'Promotional trailer', youtubeId: 'zWDvvzZvKeo', brief: 'The promotional trailer I created for Chai & Chain.' },
    { kind: 'Image', title: 'Earl Grey Milk Tea recipe UI', src: '/images/works/gam100/earl-grey-recipe.png', alt: 'Earl Grey Milk Tea recipe panel with ingredient icons, required quantities, and current counts.', brief: 'The recipe panel pairs the drink name with ingredient icons, required quantities, and current counts. I contributed to the ingredient-list display.' },
    { kind: 'Image', title: 'Matcha Tea recipe UI', src: '/images/works/gam100/matcha-recipe.png', alt: 'Matcha Tea recipe panel showing four matcha ingredients and two honey ingredients, with current counts.', brief: 'A second recipe panel showing a different ingredient combination. My contributions included recipe randomisation and the ingredient display.' },
    { kind: 'Video', title: 'Recipe variation and movement', brief: 'Show two different recipe selections and a short movement sequence. Use captions to distinguish your contributions from the team’s chain and throwing mechanics.' },
  ],
};

export default project;
