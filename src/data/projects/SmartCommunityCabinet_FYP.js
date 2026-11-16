/** @type {import('./types').Project} */
const project = {
  leadership: true,
  id: 'community-cabinet', category: 'HARDWARE / IOT FINAL YEAR PROJECT', title: 'Smart Community Cabinet',
  description: 'An IoT food-sharing cabinet prototype connecting barcode-based item entry, cloud records, and electronic cabinet access.',
  role: 'Team Lead · Database & Hardware Contributor', team: 'Republic Polytechnic FYP / five-member team', status: 'Prototype completed',
  technologies: 'Raspberry Pi · ThingSpeak · Barcode Scanner · Relay · Solenoid Lock',
  cover: 'Low-fidelity Smart Dry Cabinet concept prototype from the E261 presentation, preceding the IoT build.',
  coverImage: '/images/works/community-cabinet/physical%20prototype.png',
  coverAlt: 'Presentation showing front, side, and bottom views of the team’s low-fidelity Smart Dry Cabinet prototype.',
  overview: 'For my final year project at Republic Polytechnic, I led a five-member team developing a Smart Community Cabinet for sharing non-perishable food. The prototype combined a Raspberry Pi, barcode scanner, local interface, ThingSpeak cloud records, a mobile app, and a relay-controlled solenoid lock. Our aim was to make it easier for community members to donate and collect food while exploring how IoT could support item tracking and cabinet access.',
  contributions: [
    'Team leadership — Led the group through the final year project, bringing together work across the cabinet hardware, database, and user-facing components.',
    'Shared database work — Co-developed the database component with a teammate, using ThingSpeak to support the project’s food-item records.',
    'Hardware collaboration — Contributed to the cabinet hardware as part of the team’s shared implementation work.',
    'Electronic locking — Shared responsibility for the relay and solenoid-lock work that connected the physical cabinet to the access workflow.',
  ],
  spotlight: {
    title: 'Connecting a physical cabinet to item records and access',
    approach: 'The prototype required separate components to work together: scanning a product, recording its information, presenting it to users, and operating the cabinet lock. My work focused on shared database and hardware responsibilities while leading the group. The team used ThingSpeak for cloud records and a Raspberry Pi-based cabinet system, with the relay and solenoid providing physical locking.',
    takeaway: 'The project taught me how much IoT development depends on integration, communication, and realistic scope. Our report identified limitations in inventory representation, expiry handling, and app validation, giving us concrete directions for improving the prototype.',
  },
  media: [
    { kind: 'Image', title: 'Physical concept prototype', src: '/images/works/community-cabinet/physical%20prototype.png', alt: 'Smart Dry Cabinet concept prototype shown from the front, right, and bottom.', brief: 'The team’s low-fidelity cabinet model from E261. This illustrates the physical design concept rather than a completed IoT system. I contributed to the folding table and shared shelf prototyping.' },
    { kind: 'Image', title: 'Digital prototype and assembly', src: '/images/works/community-cabinet/digital%20prototype.png', alt: 'Fusion 360 cabinet model and dimensioned assembly drawing with a folding side table.', brief: 'The team’s Fusion 360 model and assembly drawing. My documented CAD contributions were the folding table and table hinges; other cabinet components were shared team work.' },
    { kind: 'Image', title: 'Cabinet workflow from the report', brief: 'Use cropped report photos and interface screenshots to show barcode entry, item records, and cabinet locking. Caption your shared database/hardware work separately from the team’s GUI and mobile app. No video is needed.' },
    { kind: 'Image', title: 'System architecture', brief: 'Diagram the Raspberry Pi, scanner, local interface, ThingSpeak, mobile app, and relay/solenoid connections according to the report. Highlight your shared database and hardware responsibilities.' },
    { kind: 'Image', title: 'Lock and data integration', brief: 'Pair a close-up of the relay/solenoid assembly with an example of the corresponding item records. Report figures 5.1.1 and section 4.1.1 can guide selection. Remove API keys and personal account information from screenshots.' },
  ],
};

export default project;
