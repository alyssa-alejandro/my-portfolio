/** @type {import('./types').Project} */
const project = {
  summary: "A boss-combat game built with Caffeine Engine. I implemented game VFX.",
  highlights: ["Implemented door and player particle effects.","Created transition effects within the team’s game."],
  id: 'gam250', category: 'GAM250 / GAME VFX', title: 'Out of Memory',
  description: 'A narrative action game with two boss encounters, built in a team-developed C++ and OpenGL engine.',
  role: 'VFX Contributor', team: 'FueledByCaffiene', status: 'Completed',
  technologies: 'C++ · Lua · Caffeine Engine',
  cover: 'The player facing the car boss in Out of Memory’s first stage.',
  coverImage: '/images/works/gam250/level1_game.png',
  coverAlt: 'Out of Memory gameplay showing the player beside the car boss in a street arena, with health and stamina UI.',
  overview: 'A struggling game developer is pulled into a game after a car accident. Across two stages, the player faces a car boss and a traffic light boss, using melee and ranged attacks, stamina management, dodging, and environmental cover. Each victory awards a token and brings the protagonist closer to an emotional conclusion.',
  contributions: [
    'Door particle effects — Implemented particle effects for doors in the game.',
    'Transitions — Implemented transition effects for the game.',
    'Player particle effects — Implemented particle effects for the player.',
    'Team collaboration — Contributed my VFX work within a team-developed action game built on Caffeine Engine.',
  ],
  spotlight: {
    title: 'Visual effects in the game',
    approach: 'My game-side contributions were door particle effects, transitions, and player particle effects. This entry covers those effects in their gameplay context; the underlying rendering, camera, window, and lighting systems are described separately in the Caffeine Engine project.',
    takeaway: 'I gained experience applying graphics-related work in a playable team project and considering how visual effects appear within the game scene.',
  },
  media: [
    { kind: 'Video', title: 'Gameplay trailer', youtubeId: 'ObJkMefTWaE', brief: 'Team gameplay trailer for Out of Memory.' },
    { kind: 'Video', title: 'My VFX showcase', brief: 'To record: a personal VFX showcase of door particle effects, transitions, and player particle effects. Label each contribution and keep enough gameplay context to make it readable.' },
    { kind: 'Image', title: 'Level selection scene', src: '/images/works/gam250/levelselector_game.png', alt: 'Out of Memory level selection scene with the player beside a pink portal and a blue portal opposite.', brief: 'The level selection scene provides context for the game’s door effects and transitions. My game-side contributions include door particles, player particles, and transition effects; artwork and other systems are team work.' },
    { kind: 'Image', title: 'Effect breakdown', brief: 'Capture a door or player particle effect, or a sequence of transition frames, and annotate the visible behaviour. Add a relevant code excerpt if shareable. Include a before/after comparison only if you have a genuine matching capture.' },
  ],
};

export default project;

