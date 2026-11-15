/** @type {import('./index').Project} */
const project = {
  id: 'gam300', category: 'GAM300 / SIMULATION & VISUALISATION', title: 'EV Fleet Simulator',
  description: 'An ongoing EV fleet simulation project with ST Engineering, translating simulation state into 2D and 3D visualisations.',
  role: 'Simulation & Visualisation Programmer', team: 'The Fellas', status: 'Ongoing',
  period: 'September 2026 – April 2027',
  technologies: 'JavaScript · React · React Three Fiber · Three.js · Leaflet · Vite',
  cover: 'Capture the fleet map with vehicle locations and site markers, using shareable or mock data.',
  overview: 'Developed as part of GAM300 with ST Engineering, the application visualises electric vehicle fleet operations. My focus is the visualisation layer: turning structured simulation data into representations of vehicles and sites, with a Leaflet map and a separate React Three Fiber preview.',
  contributions: [
    'Visualisation pipeline — Developed rendering and visual-mapping components to translate simulation state into object positions, colours, and sizes.',
    '3D preview — Built a React Three Fiber preview, converted latitude and longitude into scene positions, and represented vehicles as spheres and sites as cylinders.',
    'Mock-state development — Created mock simulation data and an interface scaffold so visualisation work could proceed independently of the simulation engine.',
    '2D fleet map — Added a vehicle visualisation layer while preserving the existing Leaflet network map and site markers.',
    'Simulation inspection, in development — Worked on playback, timeline scrubbing, snapshot restoration, and run-comparison tooling. Integration and completion of these features are still being verified.',
  ],
  spotlight: {
    title: 'From simulation state to a visual scene',
    approach: 'The visualisation needed to be developed before the final simulation engine was available. I connected mock state to a rendering layer, mapped geographic coordinates into 3D positions, and used distinct geometry and visual properties for vehicles and sites. This let me develop the preview independently while preparing for engine integration.',
    takeaway: 'The project is developing my experience with modular visualisation components and the interface between simulation data, geographic mapping, and rendering. Full engine integration remains ongoing.',
  },
  media: [
    { kind: 'Video', title: 'Visualisation walkthrough', brief: 'Record 20–40 seconds moving between the fleet map and 3D preview. Label mock data explicitly and show functionality that currently works. Use material approved for public sharing.' },
    { kind: 'Image', title: '3D preview and entity mapping', brief: 'Capture vehicle spheres and site cylinders together. Annotate how entity type, coordinates, colour, and size become visual objects.' },
    { kind: 'Image', title: 'Visualisation pipeline diagram', brief: 'Show: mock simulation state → coordinate conversion and visual mapping → Leaflet map / React Three Fiber preview. Label future engine integration as ongoing.' },
  ],
};

export default project;
