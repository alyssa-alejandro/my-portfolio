/** @type {import('./types').Project} */
const project = {
  leadership: true,
  id: 'caffeine-engine', category: 'GAM200 / CUSTOM ENGINE', title: 'Caffeine Engine',
  description: 'The team-developed C++ and OpenGL engine behind Out of Memory, combining my graphics programming work with team coordination and build-stability support.',
  role: 'Graphics Programmer & Project Coordination', team: 'FueledByCaffiene', status: 'Completed',
  technologies: 'C++ · OpenGL · GLSL · GLM · GLFW',
  cover: 'Show a rendered scene from Caffeine Engine. Label it as an engine demonstration using Out of Memory assets and highlight the graphics systems you contributed to.',
  overview: 'Caffeine Engine is the custom engine our team developed for GAM200 to support Out of Memory. My work focused on graphics infrastructure: rendering game scenes, graphics and window setup, camera transformations, and lighting. Alongside programming, I helped the group keep track of progress, complete milestone deliverables, and respond to unstable engine builds. This entry covers engine systems and shared production work separately from the selected game VFX I implemented in Out of Memory.',
  contributions: [
    'Rendering pipeline — Contributed to the pipeline responsible for rendering game objects and displaying the scene.',
    'Graphics setup and window management — Worked on graphics initialisation and window handling to support displaying the game.',
    'Camera system — Worked with transformations to control the camera position and view of the scene.',
    'Lighting — Contributed to the engine lighting system used for the game’s visual presentation.',
    'Progress and task coordination — Checked in on teammates, helped when they were blocked, delegated video tasks, and stepped in to finish outstanding work.',
    'Milestone and submission preparation — Helped complete Individual Milestone Report (IMR) line-of-code records, rubric documentation, and presentation slides. Created a deliverables checklist with consistent file naming so submission materials were easy to find.',
    'Build-stability support — Regularly checked the engine for crashes, alerted the group to problems, and suggested temporary branches or working locations so teammates could continue without building on a broken branch.',
    'Playtest follow-up — Compiled game-testing feedback into an improvement list and contributed ideas for the team’s next changes to Out of Memory.',
    'Debugging and display consistency — Investigated regressions through commit history, including an animation-related crash, troubleshot resolution differences across PCs, and fixed development warnings.',
  ],
  spotlight: {
    title: 'Keeping development moving alongside engine work',
    approach: 'Developing the engine alongside Out of Memory meant that an unstable build could interrupt the group’s work. I regularly checked for crashes, communicated problems, and suggested temporary working branches or locations while fixes were in progress. I also checked teammates’ progress, assisted with unfinished tasks, and organised milestone materials and submission filenames. After playtests, I compiled feedback and proposed improvements for the game. These responsibilities complemented my rendering, camera, window, and lighting contributions.',
    takeaway: 'I learned that supporting a team involves more than completing my own code: communicating build problems, helping blocked teammates, and keeping deliverables organised all matter. The project combined custom OpenGL engine development with practical experience coordinating shared work.',
  },
  media: [
    { kind: 'Video', title: 'My contribution video', youtubeId: 'icwPeipj3DU', brief: 'My contribution video for Caffeine Engine.' },
    { kind: 'Video', title: 'Game editor demonstration', youtubeId: 'yo9KOp4WQIY', brief: 'A demonstration of the team’s game editor, showing more of the systems I worked on.' },
    { kind: 'Image', title: 'Rendering and camera breakdown', brief: 'Annotate a scene or diagram to explain the rendering and camera flow. Use source excerpts only where authorship is confirmed; do not invent pipeline stages.' },
    { kind: 'Image', title: 'Team coordination and deliverables', brief: 'Show a readable excerpt of your submission checklist, naming convention, progress tracking, or playtest improvement list. Explain how you used it to coordinate the team. Remove private teammate details and label proposed game changes separately from completed ones.' },
    { kind: 'Image', title: 'Lighting or display handling', brief: 'Show a documented lighting example or matching captures at different resolutions. Explain the actual implementation or issue you addressed without claiming unsupported performance results.' },
  ],
};

export default project;
