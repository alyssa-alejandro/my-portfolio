/** @type {import('./types').Project} */
const project = {
  id: 'gam300', category: 'GAM300 / AUTHENTICATION & MAP VISUALISATION', title: 'EV Fleet Simulator',
  description: 'An ongoing EV fleet simulator with ST Engineering, featuring database-backed login and an interactive scenario map.',
  role: 'Simulation & Visualisation Programmer', team: 'The Fellas', status: 'Ongoing',
  period: 'September 2026 – April 2027',
  technologies: 'JavaScript · React · Leaflet · React Leaflet · Node.js · PostgreSQL · Vite',
  cover: 'The EV Fleet Simulator map with depot markers, scenario controls, and simulation telemetry.',
  coverImage: '/images/works/gam300/mapscreen.png',
  coverAlt: 'EV Fleet Simulator Singapore map with depot markers, energy scenario controls, timeline, and telemetry panels.',
  overview: 'Developed as part of GAM300 with ST Engineering, the application helps users configure and inspect electric vehicle fleet simulations. The map-based interface brings together fleet activity, charging sites, and scenario settings. My contributions include the database-backed login and the map scenario layer.',
  contributions: [
    'Database-backed login — Implemented the login functionality connecting the React interface to the authentication API and PostgreSQL-backed user accounts.',
    'Authentication flow — Worked on the account access experience, including input validation, session handling, and feedback for unsuccessful sign-in attempts.',
    'Map scenario layer — Developed the map-based scenario layer to represent fleet vehicles and sites in the context of the selected simulation scenario.',
    'Scenario interaction — Worked on connecting the map interface with scenario state so users can configure a scenario and inspect its simulation view.',
  ],
  spotlight: {
    title: 'Connecting account access and scenario state to the interface',
    approach: 'My work spans database-backed account access and map-based simulation interaction. The login connects the React form to a Node.js authentication API and PostgreSQL user records; the authentication implementation uses bcrypt password hashing and cookie-based sessions. On the map, scenario state and simulation frames supply the information needed to display vehicles and sites. The interface separates Blueprint setup from Live simulation inspection.',
    takeaway: 'This project is developing my experience connecting frontend interfaces to backend services and shared application state, from a database-backed sign-in flow to a map that reflects the selected scenario.',
  },
  media: [
    { kind: 'Video', title: 'Map scenario walkthrough', brief: 'Record 20–40 seconds showing the scenario map, fleet and site markers, and a change to a scenario setting. If available, show the transition from Blueprint setup to Live simulation. Caption the map scenario layer you developed.' },
    { kind: 'Image', title: 'Database-backed login', brief: 'Capture the sign-in interface and an example of validation feedback using a demonstration account. Add a small diagram: React login form → authentication API → PostgreSQL user records → session. Keep passwords, session tokens, and real account data out of the image.' },
    { kind: 'Image', title: 'Scenario map breakdown', brief: 'Capture the map with scenario controls and vehicle/site markers visible. Annotate how the selected scenario supplies data to the map layer, and clearly identify your contribution. Use approved project material or demonstration data.' },
  ],
};

export default project;
