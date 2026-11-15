/** @type {import('./types').Project} */
const project = {
  id: 'caffeine-engine', category: 'GAM200 / CUSTOM ENGINE', title: 'Caffeine Engine',
  description: 'The team-developed C++ and OpenGL engine behind Out of Memory, with my contributions focused on graphics and rendering systems.',
  role: 'Graphics & Rendering Programmer', team: 'FueledByCaffiene', status: 'Completed',
  technologies: 'C++ · OpenGL · GLSL · GLM · GLFW',
  cover: 'Show a rendered scene from Caffeine Engine. Label it as an engine demonstration using Out of Memory assets and highlight the graphics systems you contributed to.',
  overview: 'Caffeine Engine is the custom engine our team developed for GAM200 to support Out of Memory. My work focused on graphics infrastructure: rendering game scenes, graphics and window setup, camera transformations, and lighting. This entry covers engine systems separately from the selected game VFX I implemented in Out of Memory.',
  contributions: [
    'Rendering pipeline — Contributed to the pipeline responsible for rendering game objects and displaying the scene.',
    'Graphics setup and window management — Worked on graphics initialisation and window handling to support displaying the game.',
    'Camera system — Worked with transformations to control the camera position and view of the scene.',
    'Lighting — Contributed to the engine lighting system used for the game’s visual presentation.',
    'Debugging and display consistency — Investigated regressions through commit history, including an animation-related crash, troubleshot resolution differences across PCs, and fixed development warnings.',
  ],
  spotlight: {
    title: 'Graphics systems within a team-built engine',
    approach: 'Developing engine systems alongside a game required coordinating scene rendering, camera transformations, and window configuration with the rest of the team. My work also included investigating crashes and display inconsistencies, connecting graphics development with practical integration and debugging.',
    takeaway: 'I gained experience contributing to a custom OpenGL engine and understanding how rendering, cameras, lighting, and display handling work together to support a game.',
  },
  media: [
    { kind: 'Video', title: 'Engine graphics demonstration', brief: 'Record a scene that demonstrates the rendering, camera, and lighting systems you worked on. Clearly identify your contributions and credit the team’s game assets.' },
    { kind: 'Image', title: 'Rendering and camera breakdown', brief: 'Annotate a scene or diagram to explain the rendering and camera flow. Use source excerpts only where authorship is confirmed; do not invent pipeline stages.' },
    { kind: 'Image', title: 'Lighting or display handling', brief: 'Show a documented lighting example or matching captures at different resolutions. Explain the actual implementation or issue you addressed without claiming unsupported performance results.' },
  ],
};

export default project;
