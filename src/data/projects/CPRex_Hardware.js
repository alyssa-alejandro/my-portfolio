/** @type {import('./index').Project} */
const project = {
  id: 'cprex', category: 'HARDWARE / EMBEDDED PROTOTYPING', title: 'CPRex',
  description: 'A CPR monitoring and feedback practice device developed for a startup during the Entrepreneurship Immersion Programme.',
  role: 'Device Development & Prototyping', team: 'Entrepreneurship Immersion Programme / startup project', status: 'Prototype developed',
  technologies: 'Arduino UNO · C · Fusion 360 · Hardware Prototyping',
  cover: 'Add a clear photo of the assembled CPRex prototype in its practice setup, showing the device and where the user interacts with it.',
  overview: 'During the Entrepreneurship Immersion Programme at Republic Polytechnic, I developed CPRex, a CPR monitoring and feedback device for a startup. Designed for practice sessions, the prototype brought together embedded programming and physical product design to support individuals practising CPR. The project gave me an opportunity to apply engineering skills in an entrepreneurial setting while developing my communication, marketing, and project management experience.',
  contributions: [
    'Device development — Built a prototype intended to monitor CPR practice and provide feedback to the person practising.',
    'Embedded programming — Applied Arduino UNO and C programming to develop the device’s embedded functionality.',
    'Physical product design — Used Fusion 360 as part of the design and prototyping process for the device.',
    'Entrepreneurial collaboration — Developed leadership, communication, marketing, and project management skills while working on a startup-focused engineering project.',
  ],
  spotlight: {
    title: 'Bringing embedded programming into a physical practice device',
    approach: 'CPRex connected my interests in programming, product design, and practical problem-solving. I worked with Arduino UNO and C for the embedded prototype and used Fusion 360 during physical design. Developing a device for a startup also required me to communicate its purpose and consider how the physical product would be used during a practice session.',
    takeaway: 'The project strengthened my ability to work across software and physical design while communicating an engineering idea in a business context. It helped shape my interest in building interactive systems with a clear purpose.',
  },
  media: [
    { kind: 'Video', title: 'CPR practice demonstration', brief: 'Record 20–40 seconds of the prototype being used in a practice setup. Show the actual monitoring output and feedback response, and label what is measured. Describe it as a practice prototype; include only behaviour the device demonstrates.' },
    { kind: 'Image', title: 'Embedded system breakdown', brief: 'Photograph the Arduino and connected components. Add labels for the actual inputs, processing, and feedback outputs. Confirm the sensor types and measurements before writing technical captions.' },
    { kind: 'Image', title: 'Fusion 360 design and prototype', brief: 'Place a Fusion 360 model beside the corresponding physical prototype. Explain which parts you designed and any documented design changes; use startup-approved material.' },
  ],
};

export default project;
