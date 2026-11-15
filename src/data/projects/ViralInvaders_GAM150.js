/** @type {import('./index').Project} */
const project = {
  id: 'gam150', category: 'GAM150 / GAMEPLAY & ANIMATION', title: 'Viral Invaders',
  description: 'A reverse tower-defence game where players deploy viruses and adapt to changing battlefield conditions.',
  role: 'Programmer', team: 'Code Crusaders', status: 'Completed',
  technologies: 'C++ · DigiPen Alpha Engine',
  cover: 'Capture an active battle with deployed viruses, target units, and individual health bars visible.',
  overview: 'Inspired by Plants vs. Zombies, Viral Invaders puts the player in control of the attacking forces. Players spend resources to deploy virus types across stages and waves. Randomised environmental events modify unit attributes, including health and attack rate, requiring players to adapt their strategy.',
  contributions: [
    'Spritesheet animation system — Designed and implemented a system for event animations, supporting nine-frame animations for each of the four events.',
    'Hand-drawn event assets — Drew all four event spritesheets, creating nine animation frames per event and connecting the artwork to the animation system.',
    'Dynamic health bars — Implemented individual health bars that reflect game objects’ current health and update as they take damage.',
    'Gameplay systems — Developed two virus types, implemented two gameplay events affecting unit attributes, and added a countdown timer.',
  ],
  spotlight: {
    title: 'Connecting animation and gameplay feedback',
    approach: 'Changing battlefield events needed visible animation, while units needed to communicate their changing health during combat. I built the event spritesheet animation system around nine-frame assets and implemented health bars driven by each object’s health. My work covered both the hand-drawn event frames and their in-game presentation.',
    takeaway: 'I gained experience building reusable C++ systems and connecting gameplay state to readable visual feedback, from an animation frame to a unit’s health display.',
  },
  media: [
    { kind: 'Video', title: 'Gameplay trailer', brief: 'Add the existing trailer or a short gameplay cut showing virus deployment, a wave of combat, and an environmental event.' },
    { kind: 'Image', title: 'Nine-frame event spritesheet', brief: 'Show one complete hand-drawn event spritesheet with frames numbered 1–9. Name the event and identify the artwork and animation system as your contributions.' },
    { kind: 'Video', title: 'Health bars and event effects', brief: 'Record 10–20 seconds of a unit taking damage and its health bar updating, followed by one of the two events you implemented. Caption the attribute changes actually shown.' },
  ],
};

export default project;
