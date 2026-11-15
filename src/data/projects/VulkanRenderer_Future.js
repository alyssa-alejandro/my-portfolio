/** @type {import('./types').Project} */
const project = {
  id: 'vulkan-renderer', category: 'FUTURE PROJECT / RENDERING', title: 'Vulkan Renderer',
  solo: true, status: 'Planned', role: 'Personal Project', team: 'Independent project',
  description: 'A planned C++ renderer for learning Vulkan and exploring explicit graphics programming.',
  technologies: 'Planned: C++ · Vulkan · GLSL',
  cover: 'Future image: the renderer’s first working scene. No implementation preview yet.',
  overview: 'I plan to build a renderer in C++ using Vulkan to deepen my understanding of how a graphics application manages rendering resources and submits work to the GPU. This entry records the project’s intended direction; implementation details and results will be added as development progresses.',
  contributions: [
    'Learn the Vulkan setup and rendering workflow through a small standalone renderer.',
    'Start with a basic rendered scene and expand the project in manageable stages.',
    'Document implementation decisions and progress as the renderer develops.',
  ],
  spotlight: {
    title: 'Learning explicit graphics programming',
    approach: 'The initial goal is to understand Vulkan’s rendering workflow and resource management by implementing a small working example. Further features will be scoped once that foundation is in place.',
    takeaway: 'Build a practical understanding of Vulkan and strengthen my C++ graphics programming skills.',
  },
  media: [
    { kind: 'Image', title: 'First rendered scene', brief: 'Add an actual screenshot once the renderer produces its first scene. Caption what works at that milestone.' },
  ],
};

export default project;

