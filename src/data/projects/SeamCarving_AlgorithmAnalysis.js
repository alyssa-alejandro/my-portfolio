/** @type {import('./types').Project} */
const project = {
  leadership: true,
  id: 'seam-carving', category: 'ALGORITHM ANALYSIS / GROUP PROJECT', title: 'Seam Carving',
  description: 'A C++ content-aware image resizing project comparing greedy and graph-cut seam selection, with an OpenCV-based image-processing pipeline.',
  role: 'Project Setup & Task Coordination', team: 'Algorithm Analysis project group', status: 'In development',
  technologies: 'C++17 · OpenCV · CMake · vcpkg · Ninja · Visual Studio',
  cover: 'Show the original image beside resized outputs from the greedy and graph-cut methods. Label each method and the image dimensions.',
  overview: 'This algorithm analysis group project explores content-aware image resizing through seam carving. The program calculates a Sobel-based energy map, removes seams, and produces resized images and seam overlays. The current team implementation runs greedy and graph-cut methods and reports timing and seam-cost measurements for comparison. My focus was organising the initial tasks and establishing the project’s build and dependency setup.',
  contributions: [
    'Task coordination — Split the project work into tasks so the group could develop different parts of the application.',
    'CMake project setup — Established the C++17 build configuration, including the executable target, project headers, and OpenCV linking.',
    'Dependency integration — Set up OpenCV through a vcpkg dependency manifest and a CMake toolchain preset, avoiding manual library-path configuration.',
    'Team development workflow — Configured automatic discovery of source files under src and a post-build step that copies test assets beside the executable, supporting the group as new modules were added.',
  ],
  spotlight: {
    title: 'A shared build foundation for parallel development',
    approach: 'Before the group could integrate separate algorithm modules, the project needed a consistent way to build and find its dependencies. I set up CMake to compile C++17 sources and link OpenCV, with vcpkg supplying the dependency through its toolchain. The shared Ninja preset defines the Windows build configuration, while each developer supplies their local vcpkg path. Source discovery and asset copying reduce the setup changes needed as teammates add code.',
    takeaway: 'I gained experience preparing a C++ project for group development: managing build configuration and dependencies while dividing implementation work into tasks. The team’s algorithm comparison provides a practical setting for examining runtime and image-quality trade-offs.',
  },
  media: [
    { kind: 'Image', title: 'Energy map and seam overlays', brief: 'Arrange the original image, energy.png, greedy_seams.png, and graphcut_seams.png in a labeled grid. Explain that these are team outputs; highlight your build and integration contribution separately.' },
    { kind: 'Image', title: 'CMake and dependency setup', brief: 'Show concise excerpts from CMakeLists.txt, CMakePresets.json, and vcpkg.json. Annotate C++17, OpenCV linking, source discovery, and asset copying. Omit personal filesystem paths.' },
    { kind: 'Video', title: 'Build and comparison walkthrough', brief: 'Record configuring/building with the Windows preset, running seam_carving, and opening the resized outputs. Show the measured timing table with the input size, seam count, build configuration, and machine details. Use actual results rather than estimated performance claims.' },
  ],
};

export default project;

