/** @type {import('./types').Project} */
const project = {
  id: 'gam200', category: 'GAM200 / GAME VFX', title: 'Out of Memory',
  description: 'A narrative action game with two boss encounters, built in a team-developed C++ and OpenGL engine.',
  role: 'VFX Contributor', team: 'FueledByCaffiene', status: 'Completed',
  technologies: 'C++ · Caffeine Engine',
  cover: 'Capture a boss encounter with the player, environment, lighting, and effects visible.',
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
    { kind: 'Video', title: 'Gameplay trailer', brief: 'Add the existing trailer. Include both boss encounters, dodging, and environmental cover so viewers can understand the game quickly.' },
    { kind: 'Video', title: 'My VFX showcase', brief: 'Use your existing contribution recording. Show door particle effects, a transition, and player particle effects in a short sequence. Label each contribution and keep enough gameplay context to make it readable.' },
    { kind: 'Image', title: 'Effect breakdown', brief: 'Capture a door or player particle effect, or a sequence of transition frames, and annotate the visible behaviour. Add a relevant code excerpt if shareable. Include a before/after comparison only if you have a genuine matching capture.' },
  ],
};

export default project;
