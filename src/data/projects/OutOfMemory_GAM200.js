/** @type {import('./index').Project} */
const project = {
  id: 'gam200', category: 'GAM200 / GRAPHICS PROGRAMMING', title: 'Out of Memory',
  description: 'A narrative action game with two boss encounters, built in a team-developed C++ and OpenGL engine.',
  role: 'Graphics & Rendering Programmer', team: 'FueledByCaffiene', status: 'Completed',
  technologies: 'C++ · Lua · OpenGL · GLSL · GLM · GLFW',
  cover: 'Capture a boss encounter with the player, environment, lighting, and effects visible.',
  overview: 'A struggling game developer is pulled into a game after a car accident. Across two stages, the player faces a car boss and a traffic light boss, using melee and ranged attacks, stamina management, dodging, and environmental cover. Each victory awards a token and brings the protagonist closer to an emotional conclusion.',
  contributions: [
    'Rendering and graphics — Contributed to the render pipeline, graphics setup, and window management in Caffeine Engine, our team’s custom engine.',
    'Camera system — Worked with transformations to control the camera’s position and view of the scene.',
    'VFX and lighting — Contributed to the visual effects and lighting systems that support the game’s visual presentation.',
    'Debugging and display consistency — Traced crashes to potentially problematic commits, investigated an animation-related crash, troubleshot resolution differences across PCs, and fixed development warnings.',
  ],
  spotlight: {
    title: 'Rendering within a custom engine',
    approach: 'Working in a team-built engine meant developing graphics systems alongside the game. My work connected scene rendering, camera transformations, window setup, and visual effects. I also investigated regressions through commit history and troubleshot how the game appeared at different resolutions.',
    takeaway: 'I gained experience contributing to a custom OpenGL engine and understanding how rendering, camera behaviour, and display handling affect the final game.',
  },
  media: [
    { kind: 'Video', title: 'Gameplay trailer', brief: 'Add the existing trailer. Include both boss encounters, dodging, and environmental cover so viewers can understand the game quickly.' },
    { kind: 'Video', title: 'VFX and lighting showcase', brief: 'Use your existing contribution recording. Select 15–30 seconds where lighting or effects are clearly visible; caption the systems you worked on.' },
    { kind: 'Image', title: 'Rendering breakdown', brief: 'Capture one scene and annotate the camera view, lighting, and effects you contributed to. Add a relevant code excerpt only after checking authorship and whether it can be shared.' },
  ],
};

export default project;
